import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  GraduationCap, 
  FileText, 
  Calendar,
  Phone,
  Mail,
  CheckCircle,
  AlertCircle,
  Clock,
  Users,
  BookOpen
} from "lucide-react";

const Admissions = () => {
  const courses = [
    {
      name: "Computer Engineering",
      duration: "4 Years",
      seats: 120,
      eligibility: "10+2 with PCM, JEE Main/MHT-CET"
    },
    {
      name: "Information Technology",
      duration: "4 Years", 
      seats: 60,
      eligibility: "10+2 with PCM, JEE Main/MHT-CET"
    },
    {
      name: "Electronics & Telecommunication",
      duration: "4 Years",
      seats: 60,
      eligibility: "10+2 with PCM, JEE Main/MHT-CET"
    },
    {
      name: "Mechanical Engineering",
      duration: "4 Years",
      seats: 60,
      eligibility: "10+2 with PCM, JEE Main/MHT-CET"
    },
    {
      name: "Civil Engineering", 
      duration: "4 Years",
      seats: 60,
      eligibility: "10+2 with PCM, JEE Main/MHT-CET"
    },
    {
      name: "Electrical Engineering",
      duration: "4 Years",
      seats: 60,
      eligibility: "10+2 with PCM, JEE Main/MHT-CET"
    }
  ];

  const admissionSteps = [
    {
      step: 1,
      title: "Online Application",
      description: "Fill out the online admission form with required details",
      icon: FileText
    },
    {
      step: 2,
      title: "Document Verification", 
      description: "Submit and verify all required documents",
      icon: CheckCircle
    },
    {
      step: 3,
      title: "Entrance Exam",
      description: "Appear for JEE Main/MHT-CET or college entrance test",
      icon: BookOpen
    },
    {
      step: 4,
      title: "Counseling & Admission",
      description: "Attend counseling session and complete admission process",
      icon: Users
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
              <Badge className="mb-4 bg-accent text-accent-foreground">Admissions Open</Badge>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                Admissions Open
                <span className="block text-accent">2025-26</span>
              </h1>
              <p className="text-xl text-white/90 leading-relaxed mb-8">
                Begin your engineering journey with us. Applications are now open for the academic year 2025-26.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mt-12">
                <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardContent className="p-6 text-center">
                    <Calendar className="w-12 h-12 mx-auto mb-4 text-accent" />
                    <h3 className="text-xl font-bold mb-2">Application Deadline</h3>
                    <p className="text-white/90">July 31, 2025</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardContent className="p-6 text-center">
                    <Phone className="w-12 h-12 mx-auto mb-4 text-accent" />
                    <h3 className="text-xl font-bold mb-2">Admission Helpline</h3>
                    <p className="text-white/90">9158615999</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardContent className="p-6 text-center">
                    <Mail className="w-12 h-12 mx-auto mb-4 text-accent" />
                    <h3 className="text-xl font-bold mb-2">Email Support</h3>
                    <p className="text-white/90">admissions@coek.edu.in</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Admission Process */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-6">Admission Process</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Simple and transparent admission process designed for your convenience
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {admissionSteps.map((step) => {
                const Icon = step.icon;
                return (
                  <Card key={step.step} className="border-0 shadow-lg text-center relative">
                    <CardContent className="p-8">
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                          {step.step}
                        </div>
                      </div>
                      <Icon className="w-12 h-12 mx-auto mb-4 text-primary mt-4" />
                      <h3 className="text-xl font-bold text-primary mb-3">{step.title}</h3>
                      <p className="text-muted-foreground text-sm">{step.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Courses Offered */}
        <section className="py-20 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-6">Courses Offered</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Choose from our comprehensive range of engineering programs
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map((course, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader className="text-center pb-4">
                    <GraduationCap className="w-12 h-12 mx-auto mb-4 text-primary" />
                    <CardTitle className="text-xl text-primary">{course.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Duration:</span>
                        <span className="font-semibold">{course.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Seats:</span>
                        <span className="font-semibold">{course.seats}</span>
                      </div>
                      <div className="pt-2">
                        <span className="text-sm text-muted-foreground">Eligibility:</span>
                        <p className="text-sm mt-1">{course.eligibility}</p>
                      </div>
                    </div>
                    <Button className="w-full mt-6 bg-primary hover:bg-primary-dark">
                      Apply Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-primary mb-6">Apply Online</h2>
                <p className="text-xl text-muted-foreground">
                  Fill out the application form to begin your admission process
                </p>
              </div>

              <Card className="border-0 shadow-xl">
                <CardContent className="p-8">
                  <Tabs defaultValue="application" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="application">Application Form</TabsTrigger>
                      <TabsTrigger value="documents">Required Documents</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="application" className="space-y-6 mt-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name *</Label>
                          <Input id="firstName" placeholder="Enter your first name" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name *</Label>
                          <Input id="lastName" placeholder="Enter your last name" />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="email">Email *</Label>
                          <Input id="email" type="email" placeholder="Enter your email" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number *</Label>
                          <Input id="phone" placeholder="Enter your phone number" />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="course">Preferred Course *</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a course" />
                            </SelectTrigger>
                            <SelectContent>
                              {courses.map((course, index) => (
                                <SelectItem key={index} value={course.name.toLowerCase().replace(/ /g, '-')}>
                                  {course.name}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="category">Category</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="general">General</SelectItem>
                              <SelectItem value="obc">OBC</SelectItem>
                              <SelectItem value="sc">SC</SelectItem>
                              <SelectItem value="st">ST</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="address">Address</Label>
                        <Textarea id="address" placeholder="Enter your complete address" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Additional Information</Label>
                        <Textarea id="message" placeholder="Any additional information or queries" />
                      </div>

                      <Button className="w-full bg-primary hover:bg-primary-dark text-lg py-3">
                        Submit Application
                      </Button>
                    </TabsContent>
                    
                    <TabsContent value="documents" className="mt-6">
                      <div className="space-y-4">
                        <h3 className="text-xl font-bold text-primary mb-4">Required Documents</h3>
                        
                        <div className="grid gap-4">
                          {[
                            "10th Standard Mark Sheet and Certificate",
                            "12th Standard Mark Sheet and Certificate", 
                            "JEE Main/MHT-CET Score Card",
                            "Transfer Certificate (TC) from Previous School",
                            "Migration Certificate (if applicable)",
                            "Caste Certificate (if applicable)",
                            "Income Certificate (if applicable)", 
                            "Domicile Certificate",
                            "Aadhar Card Copy",
                            "Passport Size Photographs (4 copies)"
                          ].map((doc, index) => (
                            <div key={index} className="flex items-center gap-3 p-4 bg-secondary/20 rounded-lg">
                              <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                              <span>{doc}</span>
                            </div>
                          ))}
                        </div>

                        <div className="mt-6 p-4 bg-accent/10 rounded-lg border border-accent/20">
                          <div className="flex items-start gap-3">
                            <AlertCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                            <div>
                              <h4 className="font-semibold text-accent">Important Note</h4>
                              <p className="text-sm text-muted-foreground mt-1">
                                All documents must be submitted in original along with photocopies at the time of admission. 
                                Incomplete applications will not be processed.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-primary-dark text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Need Help with Admissions?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Our admission counselors are here to help you with any queries
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <Phone className="w-12 h-12 mx-auto mb-4 text-accent" />
                <h3 className="text-xl font-bold mb-2">Call Us</h3>
                <p className="text-white/90">+91-9158615999</p>
                <p className="text-white/90">+91-9860518701</p>
              </div>
              
              <div className="text-center">
                <Mail className="w-12 h-12 mx-auto mb-4 text-accent" />
                <h3 className="text-xl font-bold mb-2">Email Us</h3>
                <p className="text-white/90">admissions@coek.edu.in</p>
              </div>
              
              <div className="text-center">
                <Clock className="w-12 h-12 mx-auto mb-4 text-accent" />
                <h3 className="text-xl font-bold mb-2">Office Hours</h3>
                <p className="text-white/90">Mon-Fri: 9:00 AM - 5:00 PM</p>
                <p className="text-white/90">Sat: 9:00 AM - 2:00 PM</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Admissions;