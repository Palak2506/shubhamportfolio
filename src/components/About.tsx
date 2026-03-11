import { TrendingUp, Database, BarChart } from 'lucide-react';

const About = () => {
  const expertiseCategories = [
    {
      title: "Operations & Quality",
      icon: TrendingUp,
      skills: [
        "Manufacturing Operations",
        "Production Planning & Scheduling",
        "Quality Assurance & Control",
        "Good Manufacturing Practices (GMP)",
        "Root Cause Analysis & NCR Closure",
        "KPI Monitoring & Improvement",
        "Corrective & Preventive Actions (CAPA)",
      ],
    },
    {
      title: "Tools & Systems",
      icon: Database,
      skills: [
        "SAP MM (Procurement & Inventory)",
        "Excel & Reporting",
        "Documentation & Traceability",
        "Thermal Boiler Assembly Processes",
        "Defect Tracking Dashboards",
      ],
    },
    {
      title: "Professional Strengths",
      icon: BarChart,
      skills: [
        "Six Sigma Mindset",
        "Stakeholder Management",
        "Leadership & Team Collaboration",
        "Client-Centric Service Delivery",
        "Problem Solving & Decision Making",
        "Business Administration",
        "KPI–Customer Driven Approach",
      ],
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">

        {/* Areas of Expertise by Category */}
        <div className="max-w-6xl mx-auto mb-16">
          <h3 className="text-2xl font-semibold text-white mb-8 text-center">
            Areas of Expertise
          </h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {expertiseCategories.map((category, index) => (
              <div key={index} className="group bg-gradient-to-br from-gray-700/60 to-gray-800/40 backdrop-blur-sm rounded-xl p-6 border border-gray-600/30 hover:border-blue-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1">
                <div className="text-center mb-6">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-500/30 transition-colors">
                    <category.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h4 className="text-lg font-semibold text-blue-400 group-hover:text-blue-300 transition-colors">
                    {category.title}
                  </h4>
                </div>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="bg-gray-600/20 rounded-lg p-3 border border-gray-500/10 hover:bg-gray-600/30 hover:border-blue-400/30 transition-all duration-200 hover:scale-[1.02]"
                    >
                      <span className="text-gray-300 text-sm font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Achievements */}
        <div>
          <h3 className="text-2xl font-semibold text-white text-center mb-8">
            Key Achievements &amp; Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-700/50 backdrop-blur-sm rounded-lg p-6 text-center border border-gray-600/30 hover:border-blue-400/50 transition-colors">
              <div className="text-3xl font-bold text-blue-400 mb-2">20%</div>
              <div className="text-sm font-medium text-white mb-2">Line Performance Improvement</div>
              <div className="text-xs text-gray-400">
                Achieved by removing bottlenecks and driving shop-floor quality operations for a
                14-person team.
              </div>
            </div>
            
            <div className="bg-gray-700/50 backdrop-blur-sm rounded-lg p-6 text-center border border-gray-600/30 hover:border-blue-400/50 transition-colors">
              <div className="text-3xl font-bold text-blue-400 mb-2">12%</div>
              <div className="text-sm font-medium text-white mb-2">Reduction in Repeat NCRs</div>
              <div className="text-xs text-gray-400">
                Closed 3–4 NCRs monthly with updated work instructions and root-cause investigations.
              </div>
            </div>
            
            <div className="bg-gray-700/50 backdrop-blur-sm rounded-lg p-6 text-center border border-gray-600/30 hover:border-blue-400/50 transition-colors">
              <div className="text-3xl font-bold text-blue-400 mb-2">10h+</div>
              <div className="text-sm font-medium text-white mb-2">Weekly Time Saved</div>
              <div className="text-xs text-gray-400">
                Automated defect tracking and reporting dashboards, reducing manual reporting time.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;