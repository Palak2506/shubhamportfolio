import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const EducationSection = () => {
  const education = [
    {
      institution: "UCD Michael Smurfit Graduate Business School",
      location: "Dublin, Ireland",
      degree: "Masters in Biotechnology and Business",
      grade: "2:1 Grade",
      duration: "Sep 2023 – Aug 2024",
      coursework: [
        "Business Strategy",
        "Corporate Finance", 
        "Marketing",
        "Biotech Teams",
        "Feasibility Planning"
      ],
      type: "masters"
    },
    {
      institution: "KIT's College of Engineering (Autonomous)",
      location: "Kolhapur, India",
      degree: "BTech in Biotechnology Engineering",
      duration: "Aug 2018 – July 2022",
      type: "bachelors"
    }
  ];

  return (
    <section id="education" className="py-20 bg-section-bg">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Education
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <Card key={index} className="border-border/50 bg-card/50 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl font-bold text-primary mb-2">
                        {edu.degree}
                      </CardTitle>
                      <div className="text-lg font-semibold text-card-foreground mb-1">
                        {edu.institution}
                      </div>
                      <div className="text-sm text-muted-foreground flex items-center space-x-4">
                        <span>{edu.duration}</span>
                        <span>•</span>
                        <span>{edu.location}</span>
                        {edu.grade && (
                          <>
                            <span>•</span>
                            <span className="font-medium text-primary">{edu.grade}</span>
                          </>
                        )}
                      </div>
                    </div>
                    <div className="mt-4 lg:mt-0">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                        edu.type === 'masters' 
                          ? 'bg-primary/10 text-primary' 
                          : 'bg-secondary/10 text-secondary-foreground'
                      }`}>
                        {edu.type === 'masters' ? 'Master\'s Degree' : 'Bachelor\'s Degree'}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                
                {edu.coursework && (
                  <CardContent>
                    <h4 className="text-base font-semibold text-card-foreground mb-4">
                      Key Coursework:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course, courseIndex) => (
                        <span 
                          key={courseIndex}
                          className="inline-flex items-center px-3 py-1 rounded-md text-sm bg-primary/5 text-primary border border-primary/20"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>

          {/* Additional Qualifications */}
          <Card className="mt-8 border-border/50 bg-card/50 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-primary">
                Professional Development
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-primary/5 rounded-lg">
                  <div className="text-lg font-semibold text-primary mb-2">CRM Expertise</div>
                  <div className="text-sm text-muted-foreground">Salesforce, HubSpot, Zoho</div>
                </div>
                <div className="text-center p-4 bg-primary/5 rounded-lg">
                  <div className="text-lg font-semibold text-primary mb-2">Sales Methodology</div>
                  <div className="text-sm text-muted-foreground">BANT, ABM, Lead Qualification</div>
                </div>
                <div className="text-center p-4 bg-primary/5 rounded-lg">
                  <div className="text-lg font-semibold text-primary mb-2">Analytics & Reporting</div>
                  <div className="text-sm text-muted-foreground">Excel, Data Analysis, Forecasting</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;