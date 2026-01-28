export default function TermsPage() {
  return (
    <main style={{
      maxWidth: 720,
      margin: "0 auto",
      padding: 16,
      fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
      lineHeight: 1.6
    }}>
      <h1 style={{ fontSize: 24, marginBottom: 24 }}>Terms of Service</h1>

      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 18, marginBottom: 12 }}>Important Disclaimer</h2>
        <p style={{ marginBottom: 12 }}>
          <strong>Karen is an AI chat companion for informational and support purposes only.</strong> 
          Karen is not a licensed mental health professional, therapist, counselor, or healthcare provider.
        </p>
        <p style={{ marginBottom: 12 }}>
          <strong>Crisis Warning:</strong> If you are experiencing a mental health emergency, thoughts of 
          self-harm, or suicidal ideation, please contact emergency services immediately:
        </p>
        <ul style={{ marginLeft: 20, marginBottom: 12 }}>
          <li>Emergency: 911</li>
          <li>National Suicide Prevention Lifeline: 988</li>
          <li>Crisis Text Line: Text HOME to 741741</li>
        </ul>
      </section>

      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 18, marginBottom: 12 }}>Professional Care</h2>
        <p style={{ marginBottom: 12 }}>
          For mental health concerns, please consult with licensed mental health professionals. 
          Karen cannot replace professional therapy, psychiatric treatment, or medical advice.
        </p>
      </section>

      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 18, marginBottom: 12 }}>Use of Service</h2>
        <p style={{ marginBottom: 12 }}>
          By using Karen, you agree that you understand this is an AI service and not professional 
          mental health treatment. Use at your own discretion and risk.
        </p>
      </section>

      <p style={{ fontSize: 12, color: "#6b7280", textAlign: "center", marginTop: 32 }}>
        <a href="/" style={{ textDecoration: "none", color: "#6b7280" }}>← Back to Karen</a>
      </p>
    </main>
  );
}
