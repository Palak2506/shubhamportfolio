const Experience = () => {
  const responsibilities = [
    "Generated 100+ qualified B2B leads via cold calling, achieving a lead-to-meeting conversion rate of 30% and surpassing monthly pipeline KPIs by 20%.",
    "Executed multi-channel prospect identification through commercial real estate monitoring, construction permit databases, and targeted field reconnaissance at development sites to generate qualified valuation leads.",
    "Architected strategic partner ecosystem with financial intermediaries, legal practitioners, and municipal bodies, achieving 30-40% lead conversion through systematic cross-referral programs and retention strategies.",
    "Increased follow-up responsiveness to 90%, accelerating sales cycles and boosting deal closure rate by 25% in high-volume outreach environments.",
    "Implemented and optimized CRM processes in Salesforce, HubSpot, and Zoho, ensuring 100% data accuracy for sales tracking and enhancing forecast reliability by 30%.",
    "Orchestrated BANT-qualified prospecting across multiple channels, generating €750K in new business revenue and driving a 22% YoY increase in company sales within 12 months.",
    "Executed hyper-personalized outreach campaigns that utilize the relationship-first strategy and the multichannel approach, achieving a response rate 45% in the targeted segments.",
    "Optimized top-of-funnel activity using ABM (Account-Based Marketing) strategies, increasing high-intent prospect engagement by 40% and supporting €28K+ in new ARR."
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

        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 border border-gray-700/30">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Business Development Representative
                </h3>
                <h4 className="text-xl text-blue-400 mb-2">
                  Dilip Patil and Associates
                </h4>
                <p className="text-gray-400">
                  July 2021 – Aug 2023 | Mumbai, India
                </p>
              </div>
              <div className="mt-4 md:mt-0">
                <span className="inline-block bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm font-medium">
                  2+ Years Experience
                </span>
              </div>
            </div>

            <h4 className="text-lg font-semibold text-white mb-6">
              Key Responsibilities & Achievements:
            </h4>

            <div className="space-y-4 mb-8">
              {responsibilities.map((responsibility, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300 leading-relaxed">
                    {responsibility}
                  </p>
                </div>
              ))}
            </div>

            {/* Key Metrics Grid */}
            <div className="border-t border-gray-700/50 pt-8">
              <h4 className="text-lg font-semibold text-white mb-6 text-center">
                Key Performance Metrics:
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-blue-600/10 rounded-lg border border-blue-500/20">
                  <div className="text-2xl font-bold text-blue-400">100+</div>
                  <div className="text-sm text-gray-400">Qualified Leads</div>
                </div>
                <div className="text-center p-4 bg-blue-600/10 rounded-lg border border-blue-500/20">
                  <div className="text-2xl font-bold text-blue-400">30%</div>
                  <div className="text-sm text-gray-400">Conversion Rate</div>
                </div>
                <div className="text-center p-4 bg-blue-600/10 rounded-lg border border-blue-500/20">
                  <div className="text-2xl font-bold text-blue-400">€750K</div>
                  <div className="text-sm text-gray-400">New Revenue</div>
                </div>
                <div className="text-center p-4 bg-blue-600/10 rounded-lg border border-blue-500/20">
                  <div className="text-2xl font-bold text-blue-400">45%</div>
                  <div className="text-sm text-gray-400">Response Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;