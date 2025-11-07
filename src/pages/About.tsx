import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Award, 
  BookOpen, 
  Globe, 
  Target,
  History,
  GraduationCap,
  Building
} from "lucide-react";

const About = () => {
  const milestones = [
    { year: "1983", event: "College Established", description: "Founded with a vision to provide quality technical education" },
    { year: "1995", event: "First Graduation Batch", description: "Proud moment as our first engineers graduated" },
    { year: "2005", event: "NBA Accreditation", description: "Achieved NBA accreditation for multiple programs" },
    { year: "2015", event: "Autonomous Status", description: "Granted autonomous status by University of Pune" },
    { year: "2020", event: "NAAC A+ Grade", description: "Achieved NAAC A+ grade for excellence in education" },
    { year: "2023", event: "40 Years Celebration", description: "Celebrating 40 years of educational excellence" }
  ];

  const leadership = [
    {
      name: "Dr. Padmaja Patil",
      position: "Chairman & Founder",
      description: "Visionary leader with 40+ years in educational excellence"
    },
    {
      name: "Dr. Somnath Patil", 
      position: "Principal",
      description: "Distinguished academician and research scholar"
    },
    {
      name: "Prof. Rajesh Sharma",
      position: "Vice Principal",
      description: "Expert in curriculum development and student affairs"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-primary-dark text-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <Badge className="mb-4 bg-accent text-accent-foreground">About Our Institution</Badge>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                40 Years of Educational
                <span className="block text-accent">Excellence</span>
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                D.Y. Patil College of Engineering & Technology has been shaping the future of engineering 
                education since 1983, committed to academic excellence and innovation.
              </p>
            </div>
          </div>
        </section>

        {/* History Timeline */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-6">Our Journey</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Four decades of milestones that shaped our institution's legacy
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex gap-6 items-start">
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                        {milestone.year}
                      </div>
                      {index !== milestones.length - 1 && (
                        <div className="w-1 h-16 bg-primary/20 mt-2"></div>
                      )}
                    </div>
                    <Card className="flex-1 border-0 shadow-md">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-primary mb-2">{milestone.event}</h3>
                        <p className="text-muted-foreground">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-20 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4 bg-primary/10 text-primary">Our Purpose</Badge>
                <h2 className="text-4xl font-bold text-primary mb-8">Vision & Mission</h2>
                
                <Card className="mb-8 border-0 shadow-lg bg-gradient-to-br from-primary to-primary-dark text-white">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <Target className="w-8 h-8 text-accent" />
                      <h3 className="text-2xl font-bold">Vision</h3>
                    </div>
                    <p className="text-white/90 leading-relaxed text-lg">
                      To be a globally recognized center of excellence in engineering education, 
                      research, and innovation, producing competent engineers who contribute to 
                      the sustainable development of society and are committed to lifelong learning.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg bg-gradient-to-br from-accent to-warning text-white">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <BookOpen className="w-8 h-8 text-white" />
                      <h3 className="text-2xl font-bold">Mission</h3>
                    </div>
                    <p className="text-white/90 leading-relaxed text-lg">
                      To provide quality technical education through innovative teaching methodologies, 
                      industry partnerships, and research initiatives that develop ethical, competent, 
                      and globally competitive engineers with strong technical skills and social responsibility.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <History className="w-12 h-12 mx-auto mb-4 text-primary" />
                    <h3 className="text-xl font-bold mb-2 text-primary">Established 1983</h3>
                    <p className="text-muted-foreground">40+ years of educational excellence</p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <Award className="w-12 h-12 mx-auto mb-4 text-success" />
                    <h3 className="text-xl font-bold mb-2 text-primary">NAAC A+ Grade</h3>
                    <p className="text-muted-foreground">Recognized for quality education</p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <Building className="w-12 h-12 mx-auto mb-4 text-info" />
                    <h3 className="text-xl font-bold mb-2 text-primary">Autonomous Status</h3>
                    <p className="text-muted-foreground">Academic freedom and flexibility</p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <Globe className="w-12 h-12 mx-auto mb-4 text-accent" />
                    <h3 className="text-xl font-bold mb-2 text-primary">Global Partnerships</h3>
                    <p className="text-muted-foreground">International collaboration programs</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-6">Leadership</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Guided by visionary leaders committed to educational excellence
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {leadership.map((leader, index) => (
                <Card key={index} className="border-0 shadow-lg text-center">
                  <CardContent className="p-8">
                    <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                      <Users className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-2">{leader.name}</h3>
                    <Badge className="mb-4 bg-accent/10 text-accent">{leader.position}</Badge>
                    <p className="text-muted-foreground">{leader.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-primary-dark text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Join Our Legacy</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Be part of our continuing story of excellence in engineering education
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <GraduationCap className="mr-2" />
                Apply for Admission
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                Visit Campus
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;