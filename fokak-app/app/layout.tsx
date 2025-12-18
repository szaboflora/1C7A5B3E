export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hu">
      <body style={{ margin: 0, fontFamily: "system-ui, sans-serif" }}>
        <header style={{ padding: "12px 16px", borderBottom: "1px solid #e5e5e5" }}>
          <a href="/" style={{ marginRight: 12 }}>Főoldal</a>
          <a href="/species" style={{ marginRight: 12 }}>Fajok</a>
          <a href="/facts">Érdekességek</a>
        </header>
        <main style={{ maxWidth: 800, margin: "0 auto", padding: "24px" }}>
          {children}
        </main>
        <footer style={{ padding: "12px 16px", borderTop: "1px solid #e5e5e5", textAlign: "center" }}>
          © {new Date().getFullYear()} PinkLady bemutató
        </footer>
      </body>
    </html>
  );
}