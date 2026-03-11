const Experience = () => {
  const experiences = [
    {
      title: "Operations & Quality Engineer",
      company: "Track Components LTD",
      duration: "Jun 2023 – Feb 2024",
      location: "Manufacturing Environment",
      tag: "Operations & Quality",
      responsibilities: [
        "Led shop-floor quality operations for a 14-person team, removing bottlenecks and improving line performance by 20%.",
        "Ran daily KPI huddles with operations across key metrics, prioritising downtime actions and improving adherence by 7%.",
        "Shared weekly performance trends with management, cutting corrective-action time and reducing rework costs by 6.3%.",
        "Directed end-to-end projects and root-cause investigations, closing 3–4 NCRs monthly and reducing repeat non-conformance by 12% within 6 weeks.",
        "Authored and managed 100+ quality documents for service deployments, ensuring 100% audit compliance and traceability.",
      ],
    },
    {
      title: "Operations Graduate",
      company: "Unitech Corporation PVT LTD",
      duration: "Nov 2022 – May 2023",
      location: "Thermal Boiler Assembly",
      tag: "Operations",
      responsibilities: [
        "Synchronized the production plan into daily priorities for project operators, tracking progress through the shift and improving on-time delivery by 8%.",
        "Stabilized thermal-boiler assembly lines by enforcing standard work protocols and resolving critical line issues, contributing to an 8% improvement in line performance.",
        "Maintained accurate build records and production reports to strengthen traceability, cutting audit and investigation time by 8 hours and saving 4% in labour cost.",
        "Automated defect tracking for stakeholders using dashboards, aligning the team on the new process and reducing manual reporting time by 10 hours per week.",
      ],
    },
    {
      title: "Product Development Intern",
      company: "Magson Industries",
      duration: "Jul 2021 – Dec 2021",
      location: "Product Development",
      tag: "Internship",
      responsibilities: [
        "Created the Bill of Materials and build plan for a pipe inspection robot, sourced components, and assembled the prototype.",
        "Completed functional testing and documented results, issues, and fixes to improve repeatability and ensure handover-ready documentation.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Experience
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 border border-gray-700/30"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {exp.title}
                  </h3>
                  <h4 className="text-xl text-blue-400 mb-2">{exp.company}</h4>
                  <p className="text-gray-400">
                    {exp.duration} | {exp.location}
                  </p>
                </div>
                <div className="mt-4 md:mt-0">
                  <span className="inline-block bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm font-medium">
                    {exp.tag}
                  </span>
                </div>
              </div>

              <h4 className="text-lg font-semibold text-white mb-6">
                Key Responsibilities &amp; Achievements:
              </h4>

              <div className="space-y-4">
                {exp.responsibilities.map((responsibility, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300 leading-relaxed">
                      {responsibility}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;