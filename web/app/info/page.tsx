export default function InfoPage() {
  return (
    <main style={{
      maxWidth: 720,
      margin: "0 auto",
      padding: 16,
      fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
      lineHeight: 1.6
    }}>
      <h1 style={{ fontSize: 24, marginBottom: 24, textAlign: "center" }}>Karen - Information</h1>

      {/* Terms Section */}
      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 20, marginBottom: 16 }}>Terms of Service</h2>

        <div style={{ marginBottom: 24 }}>
          <h3 style={{ fontSize: 16, marginBottom: 12 }}>Important Disclaimer</h3>
          <p style={{ marginBottom: 12 }}>
            <strong>Karen is an AI chat companion for informational and support purposes only.</strong>{" "}
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
        </div>

        <div style={{ marginBottom: 24 }}>
          <h3 style={{ fontSize: 16, marginBottom: 12 }}>Professional Care</h3>
          <p style={{ marginBottom: 12 }}>
            For mental health concerns, please consult with licensed mental health professionals. 
            Karen cannot replace professional therapy, psychiatric treatment, or medical advice.
          </p>
        </div>

        <div style={{ marginBottom: 24 }}>
          <h3 style={{ fontSize: 16, marginBottom: 12 }}>Use of Service</h3>
          <p style={{ marginBottom: 12 }}>
            By using Karen, you agree that you understand this is an AI service and not professional 
            mental health treatment. Use at your own discretion and risk.
          </p>
        </div>
      </section>

      {/* Privacy Section */}
      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 20, marginBottom: 16 }}>Privacy Policy</h2>

        <div style={{ marginBottom: 24 }}>
          <h3 style={{ fontSize: 16, marginBottom: 12 }}>Your Privacy Matters</h3>
          <p style={{ marginBottom: 12 }}>
            We respect your privacy and are committed to protecting your personal information 
            shared during conversations with Karen.
          </p>
        </div>

        <div style={{ marginBottom: 24 }}>
          <h3 style={{ fontSize: 16, marginBottom: 12 }}>Information We Collect</h3>
          <p style={{ marginBottom: 12 }}>
            • Chat messages sent to Karen for the purpose of providing responses
            <br />
            • Basic technical information needed to operate the service
            <br />
            • No personal identifying information is required to use Karen
          </p>
        </div>

        <div style={{ marginBottom: 24 }}>
          <h3 style={{ fontSize: 16, marginBottom: 12 }}>How We Use Information</h3>
          <p style={{ marginBottom: 12 }}>
            • To provide AI-powered chat responses through our service providers
            <br />
            • To improve the quality of Karen's responses
            <br />
            • We do not sell or share personal information with third parties for marketing
          </p>
        </div>

        <div style={{ marginBottom: 24 }}>
          <h3 style={{ fontSize: 16, marginBottom: 12 }}>Data Security</h3>
          <p style={{ marginBottom: 12 }}>
            We use industry-standard security measures to protect your conversations. 
            However, no internet transmission is 100% secure. Please avoid sharing 
            sensitive personal information like full names, addresses, or financial details.
          </p>
        </div>

        <div style={{ marginBottom: 24 }}>
          <h3 style={{ fontSize: 16, marginBottom: 12 }}>Third-Party Services</h3>
          <p style={{ marginBottom: 12 }}>
            Karen uses external AI services to generate responses. Your messages may be 
            processed by these services according to their privacy policies.
          </p>
        </div>
      </section>

      <p style={{ fontSize: 12, color: "#6b7280", textAlign: "center", marginTop: 32 }}>
        <a href="/" style={{ textDecoration: "none", color: "#6b7280" }}>← Back to Karen</a>
      </p>
    </main>
  );
}
