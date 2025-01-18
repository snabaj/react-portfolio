import React, { useState } from 'react';

// Project Component
const Project = ({ title, appLink, repoLink }) => (
    <div className="project">
      <h3>{title}</h3>
      <a href={appLink} target="_blank" rel="noopener noreferrer">
        <img src="https://via.placeholder.com/150" alt={`${title} Placeholder`} />
      </a>
      <a href={repoLink} target="_blank" rel="noopener noreferrer">GitHub Repository</a>
    </div>
  );
  
  // Portfolio Section
  const Portfolio = () => (
    <section>
      <h2>Portfolio</h2>
      <div className="portfolio-grid">
        {[1, 2, 3, 4, 5, 6].map((num) => (
          <Project
            key={num}
            title={`Project ${num}`}
            appLink={`#deployed-app-${num}`}
            repoLink={`#github-repo-${num}`}
          />
        ))}
      </div>
    </section>
  );
  
  // Contact Section
  const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({});
  
    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  
    const handleBlur = (field) => {
      if (!formData[field]) {
        setErrors((prev) => ({ ...prev, [field]: `${field} is required` }));
      } else if (field === 'email' && !validateEmail(formData.email)) {
        setErrors((prev) => ({ ...prev, email: 'Invalid email address' }));
      } else {
        setErrors((prev) => ({ ...prev, [field]: '' }));
      }
    };
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    };
  
    return (
      <section>
        <h2>Contact</h2>
        <form>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onBlur={() => handleBlur('name')}
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={() => handleBlur('email')}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </label>
          <label>
            Message:
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              onBlur={() => handleBlur('message')}
            />
            {errors.message && <span className="error">{errors.message}</span>}
          </label>
          <button type="submit">Submit</button>
        </form>
      </section>
    );
  };
  
  // Resume Section
  const Resume = () => (
    <section>
      <h2>Resume</h2>
      <a href="#" download>Download My Resume</a>
      <h3>Proficiencies</h3>
      <ul>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>CSS</li>
        <li>HTML</li>
      </ul>
    </section>
  );

export default Project;