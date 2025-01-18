import React, { useState } from 'react';

function Contact() {
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

  export default Contact;