import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './LibraryShowcase.css';

function LibraryShowcase() {
  const [sectionRef, sectionVisible] = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="library-showcase" ref={sectionRef}>
      <div className="showcase-container">
        <div className={`showcase-content ${sectionVisible ? 'fade-in-left' : ''}`}>
          <h2 className="showcase-title">
            Your Gateway to <span className="highlight">Engineering Excellence</span>
          </h2>
          <p className="showcase-description">
            Explore our extensive collection of academic resources, research papers, and digital archives.
            The NSE Digital Library provides engineers and researchers with instant access to cutting-edge
            knowledge and industry insights.
          </p>
          <div className="showcase-stats">
            <div className="stat-item">
              <h3 className="stat-number">10,000+</h3>
              <p className="stat-label">Digital Resources</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">500+</h3>
              <p className="stat-label">Research Journals</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">24/7</h3>
              <p className="stat-label">Access Available</p>
            </div>
          </div>

          <div className="opening-hours-card">
            <h3 className="hours-card-title">Opening Hours</h3>
            <div className="hours-card-content">
              <div className="hours-group">
                <div className="hours-row">
                  <span className="hours-day">Monday – Friday</span>
                  <span className="hours-time">9:30am – 6:00pm</span>
                </div>
                <div className="hours-row">
                  <span className="hours-day">Saturdays</span>
                  <span className="hours-time">9:00am – 2:00pm</span>
                </div>
              </div>
              <div className="hours-divider-line"></div>
              <div className="hours-group">
                <div className="hours-subtitle">Vacation</div>
                <div className="hours-row">
                  <span className="hours-day">Monday – Friday</span>
                  <span className="hours-time">9:30am – 4:00pm</span>
                </div>
              </div>
              <div className="hours-divider-line"></div>
              <div className="hours-row closed-row">
                <span className="hours-day">Sundays/Public holidays</span>
                <span className="hours-time">Library closed</span>
              </div>
            </div>
          </div>
        </div>
        <div className={`showcase-image-container ${sectionVisible ? 'fade-in-right' : ''}`}>
          <div className="image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&q=80"
              alt="Modern Library"
              className="showcase-image"
            />
            <div className="image-overlay"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LibraryShowcase;
