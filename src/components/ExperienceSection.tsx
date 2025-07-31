import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ExperienceSection = () => {
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
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Experience
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>

          <Card className="border-border/50 bg-card/50 shadow-lg">
            <CardHeader className="pb-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <CardTitle className="text-2xl font-bold text-primary mb-2">
                    Business Development Representative
                  </CardTitle>
                  <div className="text-lg font-semibold text-card-foreground mb-1">
                    Dilip Patil and Associates
                  </div>
                  <div className="text-sm text-muted-foreground">
                    July 2021 – Aug 2023 | Mumbai, India
                  </div>
                </div>
                <div className="mt-4 md:mt-0">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                    2+ Years Experience
                  </span>
                </div>
              </div>
            </CardHeader>
            
            <CardContent>
              <h4 className="text-lg font-semibold text-card-foreground mb-6">
                Key Responsibilities & Achievements:
              </h4>
              
              <div className="grid gap-4">
                {responsibilities.map((responsibility, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground leading-relaxed">
                      {responsibility}
                    </p>
                  </div>
                ))}
              </div>

              {/* Key Metrics Grid */}
              <div className="mt-8 pt-8 border-t border-border/50">
                <h4 className="text-lg font-semibold text-card-foreground mb-6">
                  Key Performance Metrics:
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-primary/5 rounded-lg">
                    <div className="text-2xl font-bold text-primary">100+</div>
                    <div className="text-sm text-muted-foreground">Qualified Leads</div>
                  </div>
                  <div className="text-center p-4 bg-primary/5 rounded-lg">
                    <div className="text-2xl font-bold text-primary">30%</div>
                    <div className="text-sm text-muted-foreground">Conversion Rate</div>
                  </div>
                  <div className="text-center p-4 bg-primary/5 rounded-lg">
                    <div className="text-2xl font-bold text-primary">€750K</div>
                    <div className="text-sm text-muted-foreground">New Revenue</div>
                  </div>
                  <div className="text-center p-4 bg-primary/5 rounded-lg">
                    <div className="text-2xl font-bold text-primary">45%</div>
                    <div className="text-sm text-muted-foreground">Response Rate</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;