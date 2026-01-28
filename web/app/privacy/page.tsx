export default function PrivacyPage() {
  return (
    <main style={{
      maxWidth: 720,
      margin: "0 auto",
      padding: 16,
      fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
      lineHeight: 1.6
    }}>
      <h1 style={{ fontSize: 24, marginBottom: 24 }}>Privacy Policy</h1>

      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 18, marginBottom: 12 }}>Your Privacy Matters</h2>
        <p style={{ marginBottom: 12 }}>
          We respect your privacy and are committed to protecting your personal information 
          shared during conversations with Karen.
        </p>
      </section>

      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 18, marginBottom: 12 }}>Information We Collect</h2>
        <p style={{ marginBottom: 12 }}>
          • Chat messages sent to Karen for the purpose of providing responses
          <br />
          • Basic technical information needed to operate the service
          <br />
          • No personal identifying information is required to use Karen
        </p>
      </section>

      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 18, marginBottom: 12 }}>How We Use Information</h2>
        <p style={{ marginBottom: 12 }}>
          • To provide AI-powered chat responses through our service providers
          <br />
          • To improve the quality of Karen's responses
          <br />
          • We do not sell or share personal information with third parties for marketing
        </p>
      </section>

      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 18, marginBottom: 12 }}>Data Security</h2>
        <p style={{ marginBottom: 12 }}>
          We use industry-standard security measures to protect your conversations. 
          However, no internet transmission is 100% secure. Please avoid sharing 
          sensitive personal information like full names, addresses, or financial details.
        </p>
      </section>

      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 18, marginBottom: 12 }}>Third-Party Services</h2>
        <p style={{ marginBottom: 12 }}>
          Karen uses external AI services to generate responses. Your messages may be 
          processed by these services according to their privacy policies.
        </p>
      </section>

      <p style={{ fontSize: 12, color: "#6b7280", textAlign: "center", marginTop: 32 }}>
        <a href="/" style={{ textDecoration: "none", color: "#6b7280" }}>← Back to Karen</a>
      </p>
    </main>
  );
}
