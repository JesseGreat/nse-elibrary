import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <h1 className="hero-title animate-entrance">
          Welcome to the <span className="highlight">NSE</span> Digital Library
        </h1>
        <p className="hero-subtitle animate-entrance" style={{ animationDelay: '0.2s' }}>
          Your central hub for advancing engineering knowledge through access to premier
          journals, publications, and digital resources.
        </p>

        <div className="search-container animate-entrance" style={{ animationDelay: '0.4s' }}>
          <div className="search-input-wrapper">
            <svg className="search-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z" stroke="#B8B8B8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M19 19L14.65 14.65" stroke="#B8B8B8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <input
              type="text"
              className="search-input"
              placeholder="Search Journals, Publications, and more..."
            />
          </div>
          <button className="search-button">Search</button>
        </div>

        <div className="cta-buttons animate-entrance" style={{ animationDelay: '0.6s' }}>
          <button className="cta-primary">
            Explore Catalog
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 3L11 8L6 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="cta-secondary">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="2"/>
              <circle cx="10" cy="10" r="3" fill="currentColor"/>
            </svg>
            Ask Our AI Assistant
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
