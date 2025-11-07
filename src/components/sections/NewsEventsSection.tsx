import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Calendar, 
  Clock, 
  MapPin, 
  ArrowRight,
  Trophy,
  Users,
  BookOpen,
  Briefcase
} from "lucide-react";

export const NewsEventsSection = () => {
  const latestNews = [
    {
      title: "Free vaccination for 18-44 years age group starting from 21 June 2021",
      date: "June 21, 2021",
      category: "Health",
      type: "FOR ALL",
      icon: Users,
      color: "bg-success"
    },
    {
      title: "Alumni Meet 2025 - Reconnecting with our Engineering Family",
      date: "January 15, 2025",
      category: "Alumni",
      type: "EVENT",
      icon: Users,
      color: "bg-primary"
    },
    {
      title: "CISCO Internship Program - Applications Open",
      date: "December 10, 2024",
      category: "Internship",
      type: "OPPORTUNITY",
      icon: Briefcase,
      color: "bg-accent"
    },
    {
      title: "Vision Waves - Annual Technical Festival 2025",
      date: "February 20, 2025",
      category: "Technical",
      type: "FESTIVAL",
      icon: Trophy,
      color: "bg-warning"
    },
    {
      title: "Hackathon Winners Announced - Innovation at its Best",
      date: "November 30, 2024",
      category: "Competition",
      type: "RESULTS",
      icon: Trophy,
      color: "bg-info"
    }
  ];

  const notices = [
    {
      title: "Internal Notice For Student Click Here",
      date: "Today",
      urgent: true,
      category: "Students"
    },
    {
      title: "Staff Meeting - Academic Planning Session",
      date: "Tomorrow",
      urgent: false,
      category: "Staff"
    },
    {
      title: "Examination Schedule - Mid Semester Tests",
      date: "Jan 25, 2025",
      urgent: true,
      category: "Students"
    },
    {
      title: "Industrial Visit Registration Open",
      date: "Jan 20, 2025",
      urgent: false,
      category: "Students"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-secondary/20 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary">Stay Updated</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-primary">
            Latest News & Events
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay connected with campus life, achievements, and opportunities
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Latest News */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-primary">Latest News & Events</h3>
              <Button variant="outline" className="text-primary border-primary hover:bg-primary-light">
                View All
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>

            <div className="space-y-6">
              {latestNews.map((news, index) => {
                const Icon = news.icon;
                return (
                  <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-full ${news.color} flex items-center justify-center flex-shrink-0`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="outline" className="text-xs">
                              {news.type}
                            </Badge>
                            <span className="text-xs text-muted-foreground">
                              {news.category}
                            </span>
                          </div>
                          
                          <h4 className="text-lg font-semibold text-foreground mb-2 hover:text-primary cursor-pointer transition-colors">
                            {news.title}
                          </h4>
                          
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {news.date}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Notice Board */}
          <div>
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-primary mb-4">Notice Board</h3>
              
              <Tabs defaultValue="students" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="students">Students</TabsTrigger>
                  <TabsTrigger value="staff">Staff</TabsTrigger>
                </TabsList>
                
                <TabsContent value="students" className="space-y-4 mt-4">
                  {notices.filter(notice => notice.category === "Students").map((notice, index) => (
                    <Card key={index} className={`border-0 shadow-sm hover:shadow-md transition-shadow cursor-pointer ${notice.urgent ? 'border-l-4 border-l-destructive' : ''}`}>
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <h5 className="font-medium text-foreground mb-1 text-sm leading-relaxed">
                              {notice.title}
                            </h5>
                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                              <Clock className="w-3 h-3" />
                              {notice.date}
                              {notice.urgent && (
                                <Badge variant="destructive" className="text-xs px-2 py-0">
                                  Urgent
                                </Badge>
                              )}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>
                
                <TabsContent value="staff" className="space-y-4 mt-4">
                  {notices.filter(notice => notice.category === "Staff").map((notice, index) => (
                    <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <h5 className="font-medium text-foreground mb-1 text-sm leading-relaxed">
                              {notice.title}
                            </h5>
                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                              <Clock className="w-3 h-3" />
                              {notice.date}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>
              </Tabs>
            </div>

            {/* Quick Links */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-primary to-primary-dark text-white">
              <CardHeader>
                <CardTitle className="text-xl">Quick Access</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button 
                  variant="ghost" 
                  className="w-full justify-start text-white hover:bg-white/10 hover:text-white"
                >
                  <BookOpen className="mr-2 w-4 h-4" />
                  Academic Calendar
                </Button>
                <Button 
                  variant="ghost" 
                  className="w-full justify-start text-white hover:bg-white/10 hover:text-white"
                >
                  <Users className="mr-2 w-4 h-4" />
                  Student Portal
                </Button>
                <Button 
                  variant="ghost" 
                  className="w-full justify-start text-white hover:bg-white/10 hover:text-white"
                >
                  <Briefcase className="mr-2 w-4 h-4" />
                  Placement Cell
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};