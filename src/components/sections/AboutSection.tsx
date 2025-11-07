import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Award, 
  Users, 
  BookOpen, 
  Briefcase, 
  Globe,
  Target,
  TrendingUp,
  GraduationCap
} from "lucide-react";

export const AboutSection = () => {
  const highlights = [
    {
      icon: Award,
      title: "NAAC A+ Accredited",
      description: "Recognized for academic excellence and quality education",
      color: "bg-success"
    },
    {
      icon: Globe,
      title: "Global Immersion Program",
      description: "International exposure with UK, European, Malaysian universities",
      color: "bg-info"
    },
    {
      icon: Briefcase,
      title: "100% Placement Assistance",
      description: "Dedicated placement cell with top industry partnerships",
      color: "bg-accent"
    },
    {
      icon: Users,
      title: "Innovation Incubation Centre",
      description: "Fostering entrepreneurship and startup culture",
      color: "bg-warning"
    }
  ];

  const statistics = [
    { number: "32+", label: "MoU", sublabel: "Industry Partnerships" },
    { number: "₹4.5 Lakh", label: "P.A. average package", sublabel: "Highest Package" },
    { number: "227", label: "Students Internship", sublabel: "at IIT Mumbai" },
    { number: "₹64 Lakh", label: "P.A.", sublabel: "Highest package" }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary">About Our Institution</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-primary">
            40 Years of Excellence in
            <span className="block text-accent">Technical Education</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            D.Y. Patil College of Engineering & Technology, Kasaba Bawada, Kolhapur has been 
            a beacon of educational excellence, nurturing engineers who shape tomorrow's world.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full ${highlight.color} flex items-center justify-center`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-primary">{highlight.title}</h3>
                  <p className="text-muted-foreground text-sm">{highlight.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Statistics Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-primary mb-2">Our Impact in Numbers</h3>
            <p className="text-muted-foreground">Measurable excellence across all dimensions</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="font-semibold text-foreground">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="border-0 shadow-lg bg-gradient-to-br from-primary to-primary-dark text-white">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-8 h-8 text-accent" />
                <h3 className="text-2xl font-bold">Our Vision</h3>
              </div>
              <p className="text-white/90 leading-relaxed">
                To be a globally recognized center of excellence in engineering education, 
                research, and innovation, producing competent engineers who contribute to 
                the sustainable development of society.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-br from-accent to-warning text-white">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="w-8 h-8 text-white" />
                <h3 className="text-2xl font-bold">Our Mission</h3>
              </div>
              <p className="text-white/90 leading-relaxed">
                To provide quality technical education through innovative teaching methodologies, 
                industry partnerships, and research initiatives that develop ethical, competent, 
                and globally competitive engineers.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Button size="lg" className="bg-primary hover:bg-primary-dark text-lg px-8 py-3">
            <GraduationCap className="mr-2" />
            Learn More About Us
          </Button>
        </div>
      </div>
    </section>
  );
};