import { useState } from 'react';
import './FeedbackForm.css';

function FeedbackForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your feedback!');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section className="feedback-form" id="contact">
      <div className="section-container">
        <h2 className="section-title">
          We Value <span className="highlight">Your Feedback</span>
        </h2>
        <p className="section-subtitle">
          Have a question or suggestion? Drop us a line.
        </p>

        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-input"
              placeholder="John Doe"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-input"
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone" className="form-label">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="form-input"
              placeholder="+1 (555) 123-4567"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="form-textarea"
              placeholder="Your message..."
              rows="5"
              required
            ></textarea>
          </div>

          <button type="submit" className="form-submit">
            Submit Feedback
          </button>
        </form>
      </div>
    </section>
  );
}

export default FeedbackForm;
