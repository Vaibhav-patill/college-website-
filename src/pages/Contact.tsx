import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-primary-dark text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
              Have questions, feedback, or need assistance? We’re here to help!
            </p>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8 text-center">
            <Card className="shadow-lg border-0">
              <CardContent className="p-8">
                <Phone className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Call Us</h3>
                <p className="text-muted-foreground">+91 98765 43210</p>
                <p className="text-muted-foreground">+91 91234 56789</p>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0">
              <CardContent className="p-8">
                <Mail className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Email</h3>
                <p className="text-muted-foreground">info@studentslife.com</p>
                <p className="text-muted-foreground">support@studentslife.com</p>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0">
              <CardContent className="p-8">
                <MapPin className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Location</h3>
                <p className="text-muted-foreground">
                  D.Y Patil College of Engineering & Technology, Kolhapur
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0">
              <CardContent className="p-8">
                <Clock className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Office Hours</h3>
                <p className="text-muted-foreground">Mon–Fri: 9:00 AM – 5:00 PM</p>
                <p className="text-muted-foreground">Sat: 9:00 AM – 2:00 PM</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20 bg-secondary/20">
          <div className="container mx-auto px-4 max-w-3xl">
            <Card className="shadow-xl border-0">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-primary mb-6 text-center">
                  Send Us a Message
                </h2>

                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="Enter your name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Enter your email" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="Enter subject" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" rows={5} placeholder="Write your message..." />
                  </div>

                  <Button className="w-full py-3 text-lg flex items-center justify-center gap-2">
                    <Send className="w-5 h-5" /> Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <iframe
                title="Students Life Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3820.895000114607!2d74.23795497473199!3d16.732090084047602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1008d2532b153%3A0xa154d05f5c9250ae!2sD.%20Y.%20Patil%20College%20Of%20Engineering%20%26%20Technology!5e0!3m2!1sen!2sin!4v1758611092075!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
