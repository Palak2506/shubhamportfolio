const About = () => {
  const skills = [
    'B2B Sales Outreach', 'Cold Calling & Demo Scheduling', 'Lead Qualification (BANT)',
    'Pipeline Management', 'Salesforce, Hubspot, Zoho CRM', 'KPI Execution',
    'Objection Handling', 'Excel & Data Accuracy', 'Sales Forecasting',
    'Client Engagement & Management', 'Research & Market Analysis', 'Negotiation Skills',
    'Sales Metrics Analysis', 'Revenue Growth Contribution', 'Multichannel Outreach'
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

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Professional Summary
            </h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              Result Driven Business Development Representative with 2+ years' success in B2B sales, 
              lead conversion, and revenue generation. Orchestrated €750K+ new business through strategic, 
              multichannel prospecting and stakeholder engagement across multiple industries.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg">
              Expert in pipeline management, CRM (Salesforce, HubSpot, Zoho), and sales forecasting. 
              Collaborative team player, KPI-focused, and committed to continuous skill development.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg">
              A strategic leader adept at managing cross-functional teams, stakeholder communications, 
              and technology evaluation to deliver measurable business improvements and operational excellence.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">
              Areas of Expertise
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-gray-700/50 backdrop-blur-sm rounded-lg p-3 border border-gray-600/30 hover:border-blue-400/50 transition-colors"
                >
                  <span className="text-gray-300 text-sm font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Key Achievements */}
        <div className="mt-16">
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