import './App.css'

function App() {
  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <nav className="nav">
          <div className="nav-brand">
            <h2>SkyIQ</h2>
          </div>
          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <button className="cta-button">Get Started</button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Intelligent Cloud Solutions for Modern Business</h1>
          <p className="hero-subtitle">
            Transform your business with our cutting-edge cloud platform. 
            Scale effortlessly, secure your data, and accelerate innovation.
          </p>
          <div className="hero-buttons">
            <button className="primary-button">Start Free Trial</button>
            <button className="secondary-button">Watch Demo</button>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-placeholder">
            <div className="cloud-icon">☁️</div>
            <p>Cloud Platform Visualization</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="container">
          <h2>Why Choose SkyIQ?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h3>Lightning Fast</h3>
              <p>Deploy and scale your applications in seconds with our optimized infrastructure.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>Enterprise Security</h3>
              <p>Bank-level security with end-to-end encryption and compliance certifications.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Advanced Analytics</h3>
              <p>Real-time insights and monitoring to optimize your cloud performance.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌍</div>
              <h3>Global Scale</h3>
              <p>Deploy across multiple regions with 99.9% uptime guarantee.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Transform Your Business?</h2>
          <p>Join thousands of companies already using SkyIQ to power their success.</p>
          <button className="primary-button large">Get Started Today</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <h3>SkyIQ</h3>
              <p>Intelligent cloud solutions for the modern world.</p>
            </div>
            <div className="footer-links">
              <div className="footer-column">
                <h4>Product</h4>
                <a href="#">Features</a>
                <a href="#">Pricing</a>
                <a href="#">Documentation</a>
              </div>
              <div className="footer-column">
                <h4>Company</h4>
                <a href="#">About</a>
                <a href="#">Careers</a>
                <a href="#">Contact</a>
              </div>
              <div className="footer-column">
                <h4>Support</h4>
                <a href="#">Help Center</a>
                <a href="#">Community</a>
                <a href="#">Status</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 SkyIQ. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App