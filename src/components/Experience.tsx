import React from 'react';

export default function Experience() {
  const experiences = [
    {
      role: 'Software Developer',
      company: 'Muva Software Kenya',
      period: 'March 2024 - Present',
      highlights: [
        'Developed ERP systems using React and Node.js',
        'Implemented CI/CD pipelines with Jenkins, reducing release cycles',
        'Containerized applications with Docker for 20% faster deployment',
        'Built school management and POS systems'
      ]
    },
    {
      role: 'Junior Software Developer',
      company: 'Krom Systems Kenya',
      period: 'August 2022 - April 2024',
      highlights: [
        'Developed web applications using Java and Spring Framework',
        'Designed and implemented RESTful APIs',
        'Built responsive frontends with React and TypeScript',
        'Performed unit testing and bug fixes'
      ]
    },
    {
      role: 'Software Developer Intern',
      company: 'Digital Solutions Ltd Kenya',
      period: 'May 2020 - August 2020',
      highlights: [
        'Contributed to web and mobile application development',
        'Collaborated using Git/GitHub for version control',
        'Participated in Agile/Scrum practices',
        'Gained hands-on API development experience'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-4xl font-bold text-black mb-12">Experience</h3>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-blue-950" style={{ boxShadow: '0 10px 25px rgba(30, 58, 138, 0.15)' }}>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="text-2xl font-bold text-black">{exp.role}</h4>
                  <p className="text-gray-600">{exp.company}</p>
                </div>
                <span className="text-sm text-gray-500 bg-blue-100 px-3 py-1 rounded">{exp.period}</span>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                {exp.highlights.map((highlight, i) => (
                  <li key={i}>{highlight}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}