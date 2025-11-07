import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  Music,
  BookOpen,
  Trophy,
  Heart,
  Home,
  Calendar,
  Coffee,
  Gamepad2,
  GraduationCap,
  Star,
} from "lucide-react";

const StudentLife = () => {
  const clubs = [
    {
      name: "Coding Club",
      icon: BookOpen,
      description:
        "Workshops, hackathons, and coding competitions to sharpen programming skills.",
    },
    {
      name: "Cultural Club",
      icon: Music,
      description:
        "Dance, music, drama, and art activities to explore creativity and talent.",
    },
    {
      name: "Sports Club",
      icon: Trophy,
      description:
        "Encourages participation in cricket, football, basketball, athletics, and more.",
    },
    {
      name: "Social Service Club",
      icon: Heart,
      description:
        "NSS, blood donation camps, and community service for social responsibility.",
    },
  ];

  const facilities = [
    {
      name: "Library & Digital Lab",
      icon: GraduationCap,
      description:
        "24x7 access to books, journals, and online research resources.",
    },
    {
      name: "Cafeteria",
      icon: Coffee,
      description:
        "Healthy and affordable food with a wide variety of cuisines.",
    },
    {
      name: "Gaming & Recreation",
      icon: Gamepad2,
      description:
        "Indoor games, gym, and recreational spaces for relaxation.",
    },
    {
      name: "Hostel",
      icon: Home,
      description:
        "Safe and comfortable living spaces with Wi-Fi and study rooms.",
    },
  ];

  const events = [
    {
      title: "TechFest",
      date: "February 2026",
      description:
        "Annual national-level technical fest with hackathons, robotics, and paper presentations.",
    },
    {
      title: "Cultural Fest",
      date: "March 2026",
      description:
        "Dance, music, drama, fashion show, and cultural performances.",
    },
    {
      title: "Sports Week",
      date: "January 2026",
      description:
        "Inter-college sports tournaments promoting sportsmanship and fitness.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-primary-dark text-white">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <Badge className="mb-4 bg-accent text-accent-foreground">
              Student Life
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Beyond Academics
              <span className="block text-accent">Life at DYPCET</span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Experience a vibrant student life filled with culture, sports,
              innovation, and unforgettable memories.
            </p>
          </div>
        </section>

        {/* Clubs & Societies */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-6">
                Clubs & Societies
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Join a variety of clubs to enhance your skills, creativity, and
                leadership qualities.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {clubs.map((club, index) => {
                const Icon = club.icon;
                return (
                  <Card
                    key={index}
                    className="border-0 shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <CardContent className="p-6 text-center">
                      <Icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                      <h3 className="text-xl font-semibold text-primary mb-2">
                        {club.name}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {club.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Campus Facilities */}
        <section className="py-20 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-6">
                Campus Facilities
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                World-class facilities designed to support learning, growth, and
                overall well-being.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {facilities.map((facility, index) => {
                const Icon = facility.icon;
                return (
                  <Card
                    key={index}
                    className="border-0 shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <CardContent className="p-6 text-center">
                      <Icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                      <h3 className="text-lg font-semibold text-primary mb-2">
                        {facility.name}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {facility.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Events & Festivals */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-6">
                Events & Festivals
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Celebrate innovation, culture, and sports with exciting annual
                events.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {events.map((event, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <CardContent className="p-6 text-center">
                    <Calendar className="w-10 h-10 mx-auto mb-4 text-primary" />
                    <h3 className="text-xl font-semibold text-primary mb-2">
                      {event.title}
                    </h3>
                    <p className="text-muted-foreground mb-2">{event.date}</p>
                    <p className="text-sm text-muted-foreground">
                      {event.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Hostel Life */}
        <section className="py-20 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-6">
                Hostel Life
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                A home away from home – experience comfort, safety, and
                friendships.
              </p>
            </div>

            <Card className="border-0 shadow-xl max-w-4xl mx-auto">
              <CardContent className="p-8 text-center">
                <Home className="w-12 h-12 mx-auto mb-4 text-primary" />
                <p className="text-muted-foreground text-lg">
                  Our hostels are equipped with modern amenities including Wi-Fi,
                  study halls, common rooms, mess facilities, and 24/7 security.
                  Hostel life at COEK ensures students build lifelong
                  friendships and learn to live independently.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Student Support */}
        <section className="py-20 bg-gradient-to-r from-primary to-primary-dark text-white">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <Star className="w-12 h-12 mx-auto mb-6 text-accent" />
            <h2 className="text-4xl font-bold mb-6">Student Support</h2>
            <p className="text-lg text-white/90 mb-8">
              Our dedicated support system ensures holistic development with
              counseling, mentorship, career guidance, and health services.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-white/10 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-2">Career Guidance</h3>
                <p className="text-white/80 text-sm">
                  Placement training, internships, and industry connect programs.
                </p>
              </div>
              <div className="p-6 bg-white/10 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-2">Counseling</h3>
                <p className="text-white/80 text-sm">
                  Mental health support and personal mentorship for every
                  student.
                </p>
              </div>
              <div className="p-6 bg-white/10 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-2">Health Services</h3>
                <p className="text-white/80 text-sm">
                  On-campus medical care, emergency support, and wellness
                  programs.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default StudentLife;
