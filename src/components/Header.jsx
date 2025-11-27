import logo from '../assets/nse-logo.jpeg';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <div className="logo-icon">
            <img
              src={logo}
              alt="NSE Logo"
              className="logo-image"
            />
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
