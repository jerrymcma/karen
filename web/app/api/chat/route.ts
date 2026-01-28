export const runtime = "edge";

const DEFAULT_MODEL = process.env.GROQ_MODEL || "llama-3.3-70b-versatile";
const DEFAULT_BASE_URL = process.env.GROQ_BASE_URL || "https://api.groq.com/openai/v1";

function empatheticFallback(userInput: string) {
  const prompt = (userInput || "").slice(0, 240);
  return (
    `I hear you. It sounds like "${prompt}" is weighing on you. ` +
    "Could you share a bit more about how this is affecting you right now?"
  );
}

export async function POST(request: Request) {
  let userInput = "";
  try {
    const body = await request.json();
    userInput = (body?.message ?? "").toString();

    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) {
      // No key: provide a gentle fallback instead of failing
      return new Response(
        JSON.stringify({ reply: empatheticFallback(userInput) }),
        { headers: { "content-type": "application/json" }, status: 200 }
      );
    }

    const baseUrl = DEFAULT_BASE_URL;
    const model = DEFAULT_MODEL;

    const systemPrompt =
      "You are Karen, an AI chat therapy companion. You respond with empathy, reflective listening, " +
      "and supportive, non-judgmental language. Keep responses concise but caring, ask gentle " +
      "follow-up questions, and avoid clinical diagnoses. If someone mentions immediate harm, " +
      "encourage them to seek professional or local emergency help.";

    const groqRes = await fetch(`${baseUrl}/chat/completions`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model,
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userInput },
        ],
        temperature: 0.6,
        max_tokens: 512,
      }),
    });

    if (!groqRes.ok) {
      // Fallback on error, but include minimal context
      return new Response(
        JSON.stringify({ reply: empatheticFallback(userInput) }),
        { headers: { "content-type": "application/json" }, status: 200 }
      );
    }

    const data = await groqRes.json();
    const reply =
      data?.choices?.[0]?.message?.content ||
      empatheticFallback(userInput);

    return new Response(JSON.stringify({ reply }), {
      headers: { "content-type": "application/json" },
      status: 200,
    });
  } catch {
    return new Response(
      JSON.stringify({ reply: empatheticFallback(userInput) }),
      { headers: { "content-type": "application/json" }, status: 200 }
    );
  }
}
