import React from 'react';

export default function Skills() {
  const skills = {
    'Frontend': ['React', 'React Native', 'Angular', 'Vue.js', 'HTML/CSS', 'TypeScript'],
    'Backend': ['Node.js', 'Express', 'Spring/Spring Boot', 'Laravel', 'ASP.NET', 'Python'],
    'Languages': ['JavaScript', 'Java', 'Python', 'Go', 'PHP', 'C++'],
    'Databases': ['MySQL', 'MongoDB'],
    'Tools & Cloud': ['AWS', 'Docker', 'Jenkins', 'Git', 'CI/CD Pipelines'],
    'Other': ['RESTful APIs', 'Agile/Scrum', 'Linux/Windows', 'Networking']
  };

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-4xl font-bold text-black mb-12">Technical Skills</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="bg-blue-950 text-white p-6 rounded-xl shadow-md">
              <h4 className="text-xl font-bold text-white mb-4">{category}</h4>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span key={skill} className="bg-gray-200 text-blue-950 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}