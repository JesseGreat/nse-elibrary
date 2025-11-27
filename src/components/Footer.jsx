import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">
          © 2024 Nigerian Society of Engineering. All rights reserved.
        </p>
        <div className="social-links">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 10C20 4.477 15.523 0 10 0S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" fill="currentColor"/>
            </svg>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" fill="currentColor"/>
            </svg>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.521 0H1.476C.66 0 0 .645 0 1.441v17.118C0 19.355.66 20 1.476 20h17.045c.815 0 1.479-.645 1.479-1.441V1.441C20 .645 19.336 0 18.521 0zM5.934 17.042H2.967V7.5h2.97v9.542h-.003zM4.451 6.193c-.951 0-1.72-.773-1.72-1.726 0-.951.769-1.723 1.72-1.723.949 0 1.719.772 1.719 1.723 0 .953-.77 1.726-1.72 1.726h.001zM17.042 17.042h-2.963v-4.64c0-1.107-.023-2.531-1.544-2.531-1.544 0-1.78 1.204-1.78 2.449v4.722H7.793V7.5h2.844v1.305h.039c.397-.75 1.363-1.541 2.808-1.541 3.001 0 3.556 1.974 3.556 4.545v5.233h.002z" fill="currentColor"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
