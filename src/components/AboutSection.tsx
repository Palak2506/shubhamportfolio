import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const expertise = [
    "B2B Sales Outreach",
    "Cold Calling & Demo Scheduling", 
    "Lead Qualification (BANT)",
    "Pipeline Management",
    "Salesforce, Hubspot, Zoho CRM",
    "KPI Execution",
    "Objection Handling",
    "Excel & Data Accuracy",
    "Sales Forecasting",
    "Client Engagement & Management",
    "Research & Market Analysis",
    "Negotiation Skills",
    "Sales Metrics Analysis",
    "Revenue Growth Contribution",
    "Multichannel Outreach"
  ];

  return (
    <section id="about" className="py-20 bg-section-bg">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              About Me
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Professional Summary */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-primary">
                Professional Summary
              </h3>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Result Driven Business Development Representative with 2+ years' success in B2B sales, 
                  lead conversion, and revenue generation. Orchestrated €750K+ new business through strategic, 
                  multichannel prospecting and stakeholder engagement across multiple industries.
                </p>
                <p>
                  Expert in pipeline management, CRM (Salesforce, HubSpot, Zoho), and sales forecasting. 
                  Collaborative team player, KPI-focused, and committed to continuous skill development.
                </p>
                <p>
                  A strategic leader adept at managing cross-functional teams, stakeholder communications, 
                  and technology evaluation to deliver measurable business improvements and operational excellence.
                </p>
              </div>
            </div>

            {/* Areas of Expertise */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-primary">
                Areas of Expertise
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {expertise.map((skill, index) => (
                  <Card key={index} className="border-border/50 bg-card/50 hover:bg-card transition-colors">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-sm font-medium text-card-foreground">{skill}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Key Achievements */}
          <div className="mt-16">
            <h3 className="text-2xl font-semibold mb-8 text-primary text-center">
              Key Achievements
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="border-border/50 bg-card/50 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">€750K+</div>
                  <div className="text-sm font-medium text-card-foreground mb-2">New Business Revenue</div>
                  <div className="text-xs text-muted-foreground">Generated through BANT-qualified prospecting</div>
                </CardContent>
              </Card>
              
              <Card className="border-border/50 bg-card/50 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">30%</div>
                  <div className="text-sm font-medium text-card-foreground mb-2">Lead-to-Meeting Rate</div>
                  <div className="text-xs text-muted-foreground">First BDR to achieve this milestone</div>
                </CardContent>
              </Card>
              
              <Card className="border-border/50 bg-card/50 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">22%</div>
                  <div className="text-sm font-medium text-card-foreground mb-2">YoY Sales Growth</div>
                  <div className="text-xs text-muted-foreground">Contributing to company expansion</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;