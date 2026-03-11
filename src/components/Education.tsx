const Education = () => {
  const education = [
    {
      institution: "University of Galway",
      location: "Ireland",
      degree: "Master’s in International Management",
      duration: "Sep 2024 – Sep 2025",
      type: "masters",
    },
    {
      institution: "MIT World Peace University, Pune",
      location: "Pune, India",
      degree: "Bachelor of Technology – Mechanical",
      duration: "Jun 2017 – Jun 2021",
      type: "bachelors",
    },
  ];

  return (
    <section id="education" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Education
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="bg-gray-700/50 backdrop-blur-sm rounded-lg p-8 border border-gray-600/30 hover:border-blue-400/50 transition-colors">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-blue-400 mb-2">
                    {edu.degree}
                  </h3>
                  <div className="text-lg font-semibold text-white mb-1">
                    {edu.institution}
                  </div>
                  <div className="text-sm text-gray-400 flex items-center space-x-4">
                    <span>{edu.duration}</span>
                    <span>•</span>
                    <span>{edu.location}</span>
                    {edu.grade && (
                      <>
                        <span>•</span>
                        <span className="font-medium text-blue-400">{edu.grade}</span>
                      </>
                    )}
                  </div>
                </div>
                <div className="mt-4 lg:mt-0">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                    edu.type === 'masters' 
                      ? 'bg-blue-600/20 text-blue-400' 
                      : 'bg-gray-600/20 text-gray-400'
                  }`}>
                    {edu.type === 'masters' ? 'Master\'s Degree' : 'Bachelor\'s Degree'}
                  </span>
                </div>
              </div>
              
              {edu.coursework && (
                <div className="mt-6">
                  <h4 className="text-base font-semibold text-white mb-4">
                    Key Coursework:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course, courseIndex) => (
                      <span 
                        key={courseIndex}
                        className="inline-flex items-center px-3 py-1 rounded-md text-sm bg-blue-600/10 text-blue-400 border border-blue-500/20"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;