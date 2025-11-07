import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  GraduationCap,
  ExternalLink
} from "lucide-react";
import collegeLogo from "@/assets/college-logo.png";

export const Footer = () => {
  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Admissions", href: "/admissions" },
    { name: "Academics", href: "/academics" },
    { name: "Placement", href: "/placement" },
    { name: "Student Life", href: "/student-life" },
    { name: "Contact", href: "/contact" }
  ];

  const departments = [
    "Computer Engineering",
    "Information Technology", 
    "Electronics & Telecommunication",
    "Mechanical Engineering",
    "Civil Engineering",
    "Electrical Engineering"
  ];

  const importantLinks = [
    { name: "AICTE", href: "#" },
    { name: "NBA", href: "#" },
    { name: "NAAC", href: "#" },
    { name: "Grievance Redressal", href: "#" },
    { name: "NIRF", href: "#" },
    { name: "Anti Ragging", href: "#" }
  ];

  return (
    <footer className="bg-gradient-to-b from-primary-dark to-primary text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 gap-8 mb-8">
          {/* College Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5JfynUEzsE9mwRhLztklElEjDRCZNwfiZSg&s" alt="College Logo" className="h-12 w-12" />
              <div>
                <h3 className="text-xl font-bold">D.Y. PATIL</h3>
                <p className="text-sm text-white/80">College of Engineering & Technology</p>
              </div>
            </div>
            
            <p className="text-white/90 mb-6 leading-relaxed">
              An Autonomous Institute committed to excellence in engineering education, 
              research, and innovation for over 40 years.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <div className="text-sm">
                  <p>D.Y. Patil College of Engineering and Technology,</p>
                  <p>Kasaba Bawada, Kolhapur - 416006</p>
                  <p>Maharashtra, India</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent" />
                <div className="text-sm">
                  <p>+91-9158615999 | +91-9860518701</p>
                  <p>+91-9800290004</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent" />
                <p className="text-sm">coek@dypgroup.edu.in</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              <Button size="icon" variant="ghost" className="text-white hover:bg-white/10 hover:text-accent">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-white hover:bg-white/10 hover:text-accent">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-white hover:bg-white/10 hover:text-accent">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-white hover:bg-white/10 hover:text-accent">
                <Instagram className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block text-white/90 hover:text-accent transition-colors text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Departments */}
          <div>
            <h4 className="text-lg font-bold mb-6">Departments</h4>
            <div className="space-y-3">
              {departments.map((dept, index) => (
                <a
                  key={index}
                  href="#"
                  className="block text-white/90 hover:text-accent transition-colors text-sm"
                >
                  {dept}
                </a>
              ))}
            </div>
          </div>

          {/* Important Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Important Links</h4>
            <div className="space-y-3 mb-6">
              {importantLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="flex items-center gap-2 text-white/90 hover:text-accent transition-colors text-sm"
                >
                  {link.name}
                  <ExternalLink className="w-3 h-3" />
                </a>
              ))}
            </div>

            {/* Quick Apply */}
            <div className="bg-white/10 rounded-lg p-4">
              <h5 className="font-semibold mb-2 text-accent">Ready to Apply?</h5>
              <p className="text-sm text-white/90 mb-3">Start your engineering journey with us</p>
              <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                <GraduationCap className="mr-2 w-4 h-4" />
                Apply Now
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-white/20" />

        {/* Bottom Footer */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-4 text-sm text-white/80">
          <div>
            <p>&copy; 2025 D.Y. Patil College of Engineering & Technology. All rights reserved.</p>
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-accent transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};