import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award, Users, TrendingUp, Star } from "lucide-react";
import heroCampus from "@/assets/hero-campus.jpg";

export const HeroSection = () => {
  const achievements = [
    { number: "40+", text: "Years of Excellence", icon: Award },
    { number: "5000+", text: "Successful Alumni", icon: GraduationCap },
    { number: "98%", text: "Placement Rate", icon: TrendingUp },
    { number: "100+", text: "Industry Partners", icon: Users },
  ];

  return (
    <section className="relative min-h-[700px] bg-gradient-to-r from-primary to-primary-dark overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroCampus}
          alt="Campus View"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-dark/90" />
      </div>

      <div className="relative container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="text-white">
            <div className="flex items-center gap-2 mb-4">
              <Badge className="bg-accent text-accent-foreground font-semibold">
                <Star className="w-4 h-4 mr-1" />
                NAAC A+ Accredited
              </Badge>
              <Badge className="bg-white/10 text-white border-white/30">
                Autonomous Institute
              </Badge>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Shape Your
              <span className="block text-accent">Engineering</span>
              Future
            </h1>

            <p className="text-xl mb-8 text-white/90 leading-relaxed">
              Join D.Y. Patil College of Engineering & Technology - Where innovation meets excellence. 
              Empowering students with cutting-edge education and industry-ready skills for over 40 years.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-3 text-lg"
              >
                <GraduationCap className="mr-2" />
                Admissions Open 2025-26
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary px-8 py-3 text-lg"
              >
                Explore Campus
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <div key={index} className="text-center">
                    <Icon className="w-8 h-8 mb-2 mx-auto text-accent" />
                    <div className="text-2xl font-bold">{achievement.number}</div>
                    <div className="text-sm text-white/80">{achievement.text}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Admission Highlight Card */}
          <div className="flex justify-center">
            <Card className="w-full max-w-md bg-white/95 backdrop-blur-sm shadow-2xl">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-primary mb-2">Admission Enquiry</h3>
                  <p className="text-muted-foreground">Get detailed information about courses and admission process</p>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="font-medium">Contact for Admission:</span>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-1">9158615999</div>
                    <div className="text-lg font-semibold text-primary">9158615999</div>
                  </div>
                </div>

                <Button className="w-full bg-primary hover:bg-primary-dark text-lg font-semibold py-3">
                  Admission Enquiry Click Here
                </Button>

                <div className="text-center mt-4 text-sm text-muted-foreground">
                  <p>📧 coek.dypgroup.edu.in</p>
                  <p>📱 Pypsst_official</p>
                  <p>📧 coek.dypsgroup.edu.in</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};