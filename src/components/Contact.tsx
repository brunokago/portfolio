import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:brunokago@gmail.com?subject=Message from ${formData.name}&body=${formData.message}`;
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-4xl font-bold text-black text-center mb-12">Get In Touch</h3>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h4 className="text-2xl font-bold text-black mb-6">Contact Information</h4>
            <div className="space-y-6">
              <div>
                <p className="text-gray-600 font-semibold">Phone</p>
                <a href="tel:+254721379361" className="text-blue-600 text-lg hover:underline">+254721379361</a>
              </div>
              <div>
                <p className="text-gray-600 font-semibold">Email</p>
                <a href="mailto:brunokago@gmail.com" className="text-blue-600 text-lg hover:underline">brunokago@gmail.com</a>
              </div>
              <div>
                <p className="text-gray-600 font-semibold">Social Links</p>
                <div className="flex gap-4 mt-2">
                  <a href="https://github.com/brunokago" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-bold">GitHub</a>
                </div>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
            <div className="mb-6">
              <label className="block text-gray-700 font-bold mb-2">Name</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600" />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 font-bold mb-2">Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600" />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 font-bold mb-2">Message</label>
              <textarea name="message" value={formData.message} onChange={handleChange} required rows={5} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}