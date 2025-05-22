'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const validate = () => {
    let isValid = true;
    const newErrors = { name: '', email: '', subject: '', message: '' };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required.';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format.';
      isValid = false;
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required.';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' })); // clear error on typing
  };

  const handleSubmit = (e) => {
    if (!validate()) {
      e.preventDefault(); // prevent Formspree if validation fails
    }
  };

  return (
    <section className="">
        <div className="w-full text-[#C7C7C7]">
        <form action="https://formspree.io/f/yourFormID" // replace with actual ID
          method="POST"
          className="space-y-6"
          onSubmit={handleSubmit}
          noValidate>
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium">Name</label>
            <input type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`mt-1 w-full px-4 py-2 border ${ errors.name ? 'border-red-500' : 'border-gray-300' } rounded-lg focus:ring-2 focus:ring-[#2acfcf] focus:outline-none`}
              placeholder="Your Name"/>
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium">Email</label>
            <input type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`mt-1 w-full px-4 py-2 border ${ errors.email ? 'border-red-500' : 'border-gray-300' } rounded-lg focus:ring-2 focus:ring-[#2acfcf] focus:outline-none`}
              placeholder="you@example.com"/>
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          {/* Subject */}
          <div>
            <label htmlFor="subject" className="block text-sm font-medium">Subject</label>
            <input type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className={`mt-1 w-full px-4 py-2 border ${ errors.subject ? 'border-red-500' : 'border-gray-300' } rounded-lg focus:ring-2 focus:ring-[#2acfcf] focus:outline-none`}
              placeholder="Subject of your message"/>
            {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium">Message</label>
            <textarea id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className={`mt-1 w-full px-4 py-2 border ${ errors.message ? 'border-red-500' : 'border-gray-300' } rounded-lg focus:ring-2 focus:ring-[#2acfcf] focus:outline-none`}
              placeholder="Type your message here..."/>
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>

          {/* Submit Button */}
          <button type="submit"
            className="bg-[#D3E97A] text-[#0A0A0A] text-sm px-4 py-2 rounded-3xl hover:opacity-80 transition">Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
