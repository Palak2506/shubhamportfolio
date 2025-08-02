const About = () => {
  const expertiseCategories = [
    {
      title: "Sales & Business Development",
      skills: [
        'B2B Sales Outreach',
        'Cold Calling & Demo Scheduling', 
        'Lead Qualification (BANT)',
        'Pipeline Management',
        'Objection Handling',
        'Negotiation Skills',
        'Revenue Growth Contribution',
        'Multichannel Outreach'
      ]
    },
    {
      title: "CRM & Technology",
      skills: [
        'Salesforce CRM',
        'HubSpot CRM', 
        'Zoho CRM',
        'Excel & Data Accuracy',
        'KPI Execution'
      ]
    },
    {
      title: "Analytics & Strategy",
      skills: [
        'Sales Forecasting',
        'Sales Metrics Analysis',
        'Research & Market Analysis',
        'Client Engagement & Management'
      ]
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-8"></div>
        </div>

        {/* Areas of Expertise by Category */}
        <div className="max-w-6xl mx-auto mb-16">
          <h3 className="text-2xl font-semibold text-white mb-8 text-center">
            Areas of Expertise
          </h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {expertiseCategories.map((category, index) => (
              <div key={index} className="bg-gray-700/50 backdrop-blur-sm rounded-lg p-6 border border-gray-600/30 hover:border-blue-400/50 transition-colors">
                <h4 className="text-lg font-semibold text-blue-400 mb-4 text-center">
                  {category.title}
                </h4>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="bg-gray-600/30 rounded-md p-3 border border-gray-500/20 hover:bg-gray-600/50 transition-colors"
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
            Key Achievements
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-700/50 backdrop-blur-sm rounded-lg p-6 text-center border border-gray-600/30 hover:border-blue-400/50 transition-colors">
              <div className="text-3xl font-bold text-blue-400 mb-2">€750K+</div>
              <div className="text-sm font-medium text-white mb-2">New Business Revenue</div>
              <div className="text-xs text-gray-400">Generated through BANT-qualified prospecting</div>
            </div>
            
            <div className="bg-gray-700/50 backdrop-blur-sm rounded-lg p-6 text-center border border-gray-600/30 hover:border-blue-400/50 transition-colors">
              <div className="text-3xl font-bold text-blue-400 mb-2">30%</div>
              <div className="text-sm font-medium text-white mb-2">Lead-to-Meeting Rate</div>
              <div className="text-xs text-gray-400">First BDR to achieve this milestone</div>
            </div>
            
            <div className="bg-gray-700/50 backdrop-blur-sm rounded-lg p-6 text-center border border-gray-600/30 hover:border-blue-400/50 transition-colors">
              <div className="text-3xl font-bold text-blue-400 mb-2">22%</div>
              <div className="text-sm font-medium text-white mb-2">YoY Sales Growth</div>
              <div className="text-xs text-gray-400">Contributing to company expansion</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;