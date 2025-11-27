import './LibraryServices.css';

function LibraryServices() {
  const services = [
    {
      id: 1,
      title: 'Reference Support',
      description: 'Get expert assistance from our librarians for your research needs.',
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="16" r="6" stroke="#FF3B4A" strokeWidth="2"/>
          <path d="M24 24C18 24 14 28 14 32V36H34V32C34 28 30 24 24 24Z" stroke="#FF3B4A" strokeWidth="2"/>
          <path d="M16 38H32" stroke="#FF3B4A" strokeWidth="2" strokeLinecap="round"/>
          <path d="M20 32L22 30L24 32L26 30L28 32" stroke="#FF3B4A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      id: 2,
      title: 'Training & Workshops',
      description: 'Enhance your skills with our specialized training sessions.',
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="24" r="14" stroke="#FF3B4A" strokeWidth="2"/>
          <circle cx="24" cy="24" r="8" stroke="#FF3B4A" strokeWidth="2"/>
          <circle cx="24" cy="24" r="2" fill="#FF3B4A"/>
          <line x1="24" y1="10" x2="24" y2="14" stroke="#FF3B4A" strokeWidth="2" strokeLinecap="round"/>
          <line x1="24" y1="34" x2="24" y2="38" stroke="#FF3B4A" strokeWidth="2" strokeLinecap="round"/>
          <line x1="38" y1="24" x2="34" y2="24" stroke="#FF3B4A" strokeWidth="2" strokeLinecap="round"/>
          <line x1="14" y1="24" x2="10" y2="24" stroke="#FF3B4A" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      id: 3,
      title: 'Membership Access',
      description: 'Unlock exclusive resources and benefits with your NSE membership.',
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="14" width="28" height="20" rx="2" stroke="#FF3B4A" strokeWidth="2"/>
          <rect x="14" y="20" width="8" height="6" rx="1" fill="#FF3B4A"/>
          <line x1="26" y1="22" x2="34" y2="22" stroke="#FF3B4A" strokeWidth="2" strokeLinecap="round"/>
          <line x1="26" y1="26" x2="34" y2="26" stroke="#FF3B4A" strokeWidth="2" strokeLinecap="round"/>
          <line x1="14" y1="30" x2="34" y2="30" stroke="#FF3B4A" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    }
  ];

  return (
    <section className="library-services" id="services">
      <div className="section-container">
        <h2 className="section-title">
          Discover Our <span className="highlight">Library Services</span>
        </h2>
        <p className="section-subtitle">
          Dedicated support to enhance your research experience.
        </p>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LibraryServices;
