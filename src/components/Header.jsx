import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <div className="logo-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" fill="white"/>
              <path d="M12 6L14 10L18 11L15 14L16 18L12 16L8 18L9 14L6 11L10 10L12 6Z" fill="#FF3B4A"/>
            </svg>
          </div>
          <span className="logo-text">NSE Digital Library</span>
        </div>
        <nav className="nav">
          <a href="#resources" className="nav-link">Resources</a>
          <a href="#services" className="nav-link">Services</a>
          <a href="#catalog" className="nav-link">Catalog</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
