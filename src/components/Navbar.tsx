import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-blue-950 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Bruno Kago</h1>
        <ul className="flex gap-8">
          <li><a href="#about" className="text-white hover:text-gray-300">About</a></li>
          <li><a href="#skills" className="text-white hover:text-gray-300">Skills</a></li>
          <li><a href="#experience" className="text-white hover:text-gray-300">Experience</a></li>
          <li><a href="#projects" className="text-white hover:text-gray-300">Projects</a></li>
          <li><a href="#contact" className="text-white hover:text-gray-300">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}