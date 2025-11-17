import React from 'react';

export default function Hero() {
  return (
    <section className="bg-blue-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold mb-4 text-white">Bruno Kago</h2>
        <p className="text-xl mb-6 text-white">Full-Stack Software Developer</p>
        <p className="text-lg max-w-2xl mx-auto mb-8 text-white">
          Results-driven software developer with 3+ years of experience building responsive and scalable web applications.
        </p>
        <div className="flex gap-4 justify-center">
          <a href="#contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-200">
            Get In Touch
          </a>
          <a href="https://github.com/brunokago" target="_blank" rel="noopener noreferrer" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-200">
            View GitHub
          </a>
        </div>
      </div>
    </section>
  );
}