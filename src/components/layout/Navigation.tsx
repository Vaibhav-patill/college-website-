import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone, Mail, User, GraduationCap } from "lucide-react";
import collegeLogo from "@/assets/college-logo.png";
import { useNavigate } from "react-router-dom";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate=useNavigate();

  

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Academics", href: "/academics" },
    { name: "Admissions", href: "/admissions" },
    { name: "Student Life", href: "/student-life" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Header Bar */}
      <div className="bg-primary py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm text-primary-foreground">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>+91-9158615999</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>info@college.edu.in</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-dark">
                <User size={16} className="mr-1" />
                Student Login
              </Button>
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-dark">
                Staff Login
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div onClick={()=>navigate("/")} className="flex items-center gap-4">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5JfynUEzsE9mwRhLztklElEjDRCZNwfiZSg&s" alt="College Logo" className="h-12 w-12" />
            <div>
              <h1 className="text-2xl font-bold text-primary">D.Y. PATIL</h1>
              <p className="text-sm text-muted-foreground">College of Engineering & Technology</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary-light">
              <GraduationCap size={16} className="mr-2" />
              Apply Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col gap-6 mt-6">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <Button className="mt-4 bg-primary hover:bg-primary-dark">
                  <GraduationCap size={16} className="mr-2" />
                  Apply Now
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};