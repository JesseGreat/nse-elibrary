import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './LibraryResources.css';

function LibraryResources() {
  const [sectionRef, sectionVisible] = useScrollAnimation({ threshold: 0.1 });
  const resources = [
    {
      id: 1,
      title: 'E-Journals',
      description: 'Access a vast collection of peer-reviewed engineering journals.',
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="12" y="8" width="24" height="32" rx="2" stroke="#FF3B4A" strokeWidth="2"/>
          <line x1="16" y1="16" x2="32" y2="16" stroke="#FF3B4A" strokeWidth="2" strokeLinecap="round"/>
          <line x1="16" y1="22" x2="32" y2="22" stroke="#FF3B4A" strokeWidth="2" strokeLinecap="round"/>
          <line x1="16" y1="28" x2="26" y2="28" stroke="#FF3B4A" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      id: 2,
      title: 'Digital Archives',
      description: 'Explore historical documents and publications from the NSE.',
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="12" width="28" height="8" rx="1" stroke="#FF3B4A" strokeWidth="2"/>
          <rect x="10" y="22" width="28" height="8" rx="1" stroke="#FF3B4A" strokeWidth="2"/>
          <rect x="10" y="32" width="28" height="8" rx="1" stroke="#FF3B4A" strokeWidth="2"/>
          <circle cx="15" cy="16" r="1.5" fill="#FF3B4A"/>
          <circle cx="15" cy="26" r="1.5" fill="#FF3B4A"/>
          <circle cx="15" cy="36" r="1.5" fill="#FF3B4A"/>
        </svg>
      )
    },
    {
      id: 3,
      title: 'Theses & Dissertations',
      description: 'Discover groundbreaking research from top engineering scholars.',
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="20" r="8" stroke="#FF3B4A" strokeWidth="2"/>
          <path d="M24 28L24 38" stroke="#FF3B4A" strokeWidth="2" strokeLinecap="round"/>
          <rect x="18" y="36" width="12" height="4" rx="1" stroke="#FF3B4A" strokeWidth="2"/>
          <path d="M20 12L24 8L28 12" stroke="#FF3B4A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  return (
    <section className="library-resources" id="resources" ref={sectionRef}>
      <div className="section-container">
        <h2 className={`section-title ${sectionVisible ? 'fade-in' : ''}`}>
          Explore Our <span className="highlight">Library Resources</span>
        </h2>
        <p className={`section-subtitle ${sectionVisible ? 'fade-in' : ''}`} style={{ animationDelay: '0.2s' }}>
          A vast collection of knowledge at your fingertips.
        </p>

        <div className="resources-grid">
          {resources.map((resource, index) => (
            <div
              key={resource.id}
              className={`resource-card ${sectionVisible ? 'scale-in' : ''}`}
              style={{ animationDelay: `${0.3 + index * 0.15}s` }}
            >
              <div className="resource-icon">{resource.icon}</div>
              <h3 className="resource-title">{resource.title}</h3>
              <p className="resource-description">{resource.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LibraryResources;
