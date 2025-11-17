import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-4xl font-bold text-black mb-8">About Me</h3>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-gray-700 text-lg mb-4">
              I'm a passionate full-stack software developer based in Kenya with expertise in building modern web applications using React, Node.js, and various backend frameworks.
            </p>
            <p className="text-gray-700 text-lg mb-4">
              With 3+ years of professional experience, I've worked on ERP systems, school management platforms, POS systems, and various web applications for diverse clients.
            </p>
            <p className="text-gray-700 text-lg">
              I'm committed to writing clean, maintainable code and delivering high-performance solutions that enhance user experience and meet business goals.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h4 className="text-2xl font-bold text-black mb-4">Quick Facts</h4>
            <ul className="space-y-3 text-gray-700">
              <li><strong>Location:</strong> Kenya</li>
              <li><strong>Education:</strong> B.Sc. Informatics & Computer Science (Strathmore University)</li>
              <li><strong>Phone:</strong> +254721379361</li>
              <li><strong>Email:</strong> brunokago@gmail.com</li>
              <li><strong>Languages:</strong> Swahili, English, French (beginner)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}