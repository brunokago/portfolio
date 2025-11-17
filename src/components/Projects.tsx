import React from 'react';

export default function Projects() {
  const projects = [
    {
      name: 'Offline Phone Finder',
      description: 'Application to track phones via SMS and control volume settings',
      link: 'https://github.com/brunokago/offlinephonefinder',
      tech: ['Android', 'Java']
    },
    {
      name: 'Resume Generator',
      description: 'Web application for generating professional resumes',
      link: 'https://github.com/brunokago/Resume-generator',
      tech: ['React', 'JavaScript']
    },
    {
      name: 'Movie Recommendation',
      description: 'Machine learning project recommending movies based on user interests',
      link: 'https://github.com/brunokago/Movie',
      tech: ['Python', 'Machine Learning']
    },
    {
      name: 'Employee Management System',
      description: 'Full-stack system for managing employee data and operations',
      link: 'https://github.com/brunokago/Employee-management-sytem.git',
      tech: ['React', 'Spring Boot', 'MySQL']
    },
    {
      name: 'Chuck Norris Jokes API',
      description: 'Simple project fetching and displaying Chuck Norris jokes from API',
      link: 'https://github.com/brunokago/Chuck-Norris-Api',
      tech: ['JavaScript', 'API']
    },
    {
      name: 'Java CRUD with MySQL',
      description: 'Simple CRUD operations project using Java and MySQL',
      link: 'https://github.com/brunokago/Simple-project-java-mysql',
      tech: ['Java', 'MySQL']
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-4xl font-bold text-black mb-12">Featured Projects</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white border border-blue-200 rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-2"></div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-black mb-2">{project.name}</h4>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="bg-blue-950 text-white px-2 py-1 rounded text-xs font-semibold">
                      {tech}
                    </span>
                  ))}
                </div>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-black font-bold hover:text-gray-700">
                  View on GitHub →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}