import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BookOpen,
  GraduationCap,
  Calendar,
  Users,
  Microscope,
  Mail,
  Phone,
} from "lucide-react";

const Academics = () => {
  const departments = [
    {
      name: "Computer Engineering",
      hod: "Dr. A. Sharma",
      email: "compdept@coek.edu.in",
      phone: "9876543210",
      description:
        "Focused on software development, AI/ML, cloud computing, and modern computing technologies.",
    },
    {
      name: "Information Technology",
      hod: "Prof. M. Kulkarni",
      email: "itdept@coek.edu.in",
      phone: "9876543211",
      description:
        "Specialized in IT infrastructure, networking, cybersecurity, and data science.",
    },
    {
      name: "Electronics & Telecommunication",
      hod: "Dr. P. Patil",
      email: "etdept@coek.edu.in",
      phone: "9876543212",
      description:
        "Expertise in communication systems, VLSI, embedded systems, and IoT applications.",
    },
    {
      name: "Mechanical Engineering",
      hod: "Prof. R. Joshi",
      email: "mechdept@coek.edu.in",
      phone: "9876543213",
      description:
        "Covers design, manufacturing, robotics, thermal, and automobile engineering.",
    },
    {
      name: "Civil Engineering",
      hod: "Dr. S. Deshmukh",
      email: "civdept@coek.edu.in",
      phone: "9876543214",
      description:
        "Focused on structural engineering, construction management, and sustainable development.",
    },
    {
      name: "Electrical Engineering",
      hod: "Prof. V. More",
      email: "eledept@coek.edu.in",
      phone: "9876543215",
      description:
        "Specialization in power systems, renewable energy, smart grids, and automation.",
    },
  ];

  const academicCalendar = [
    { event: "Semester I Commencement", date: "August 1, 2025" },
    { event: "Mid-Semester Exams", date: "October 10, 2025" },
    { event: "Semester I End", date: "December 20, 2025" },
    { event: "Semester II Commencement", date: "January 5, 2026" },
    { event: "Cultural & Technical Fest", date: "March 15, 2026" },
    { event: "Semester II End", date: "May 30, 2026" },
  ];

  const researchAreas = [
    "Artificial Intelligence & Machine Learning",
    "Robotics & Automation",
    "Renewable Energy & Smart Grids",
    "Cybersecurity & Data Privacy",
    "Sustainable Infrastructure Development",
    "Internet of Things (IoT) Applications",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-primary-dark text-white">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <Badge className="mb-4 bg-accent text-accent-foreground">
              Academics
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Academic Excellence
              <span className="block text-accent">Programs & Research</span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Explore our wide range of academic programs, departments, and
              cutting-edge research initiatives designed to shape future
              innovators.
            </p>
          </div>
        </section>

        {/* Tabs Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="departments" className="w-full">
              <TabsList className="grid w-full grid-cols-3 lg:grid-cols-4 mb-12">
                <TabsTrigger value="departments">Departments</TabsTrigger>
                <TabsTrigger value="calendar">Academic Calendar</TabsTrigger>
                <TabsTrigger value="research">Research</TabsTrigger>
                <TabsTrigger value="faculty">Faculty</TabsTrigger>
              </TabsList>

              {/* Departments */}
              <TabsContent value="departments">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {departments.map((dept, index) => (
                    <Card
                      key={index}
                      className="border-0 shadow-lg hover:shadow-xl transition-shadow"
                    >
                      <CardHeader className="text-center pb-4">
                        <GraduationCap className="w-12 h-12 mx-auto mb-4 text-primary" />
                        <CardTitle className="text-xl text-primary">
                          {dept.name}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4 text-sm">
                          {dept.description}
                        </p>
                        <div className="text-sm space-y-1">
                          <p>
                            <strong>HOD:</strong> {dept.hod}
                          </p>
                          <p>
                            <Mail className="inline w-4 h-4 mr-1 text-primary" />
                            {dept.email}
                          </p>
                          <p>
                            <Phone className="inline w-4 h-4 mr-1 text-primary" />
                            {dept.phone}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Academic Calendar */}
              <TabsContent value="calendar">
                <Card className="border-0 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-primary flex items-center gap-2">
                      <Calendar className="w-6 h-6" />
                      Academic Calendar 2025-26
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {academicCalendar.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-4 bg-secondary/20 rounded-lg"
                      >
                        <span className="font-medium">{item.event}</span>
                        <span className="text-muted-foreground">
                          {item.date}
                        </span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Research Section */}
              <TabsContent value="research">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {researchAreas.map((area, index) => (
                    <Card
                      key={index}
                      className="border-0 shadow-lg hover:shadow-xl transition-shadow"
                    >
                      <CardContent className="p-6 flex flex-col items-center text-center">
                        <Microscope className="w-10 h-10 text-primary mb-4" />
                        <h3 className="text-lg font-semibold text-primary">
                          {area}
                        </h3>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Faculty Section */}
              <TabsContent value="faculty">
                <Card className="border-0 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-primary flex items-center gap-2">
                      <Users className="w-6 h-6" />
                      Faculty Support
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6">
                      Our experienced faculty members are committed to academic
                      excellence, mentorship, and guiding students towards
                      successful careers.
                    </p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {departments.map((dept, index) => (
                        <div
                          key={index}
                          className="p-4 bg-secondary/20 rounded-lg"
                        >
                          <h4 className="font-semibold text-primary">
                            {dept.hod}
                          </h4>
                          <p className="text-sm text-muted-foreground mb-1">
                            HOD, {dept.name}
                          </p>
                          <p className="text-sm">
                            <Mail className="inline w-4 h-4 mr-1 text-primary" />
                            {dept.email}
                          </p>
                          <p className="text-sm">
                            <Phone className="inline w-4 h-4 mr-1 text-primary" />
                            {dept.phone}
                          </p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Academics;
