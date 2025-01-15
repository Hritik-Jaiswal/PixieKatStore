"use client";

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-federal">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-federal focus:outline-none focus:ring-1 focus:ring-federal"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-federal">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-federal focus:outline-none focus:ring-1 focus:ring-federal"
          placeholder="your.email@example.com"
        />
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-federal">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-federal focus:outline-none focus:ring-1 focus:ring-federal"
          placeholder="What is this about?"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-federal">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-federal focus:outline-none focus:ring-1 focus:ring-federal"
          placeholder="Your message here..."
        />
      </div>

      <button
        type="submit"
        className="w-full bg-federal hover:bg-federal/90 text-white py-2 px-4 rounded-md transition-colors"
      >
        Send Message
      </button>
    </form>
  );
}
