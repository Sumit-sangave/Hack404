import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

// Import sponsor logos
import dipakFootwearLogo from "@/assets/sponcors/dipakfootwear.jpg";
import ganeshLogo from "@/assets/sponcors/ganesh.jpg";
import sarthakLogo from "@/assets/sponcors/sarthak.jpg";
import subhaPetroleumLogo from "@/assets/sponcors/subhaPetroleum.jpg";

const sponsors = [
  { 
    name: "Dipak Footwear", 
    logo: dipakFootwearLogo,
    description: "Dipak Footwear Javala A/P.Javala tal.Sangola Dist.Solapur",
    contact: "+91 8446690401",
    isWide: true
  },
  { 
    name: "Shree Ganesh Krushi Kendra", 
    logo: ganeshLogo,
    description: "Shree Ganesh Krushi Kendra, A/P.Tavashi tal.Pandharpur Dist.Solapur",
    contact: "+91 7387034881",
    isWide: true
  },
  { 
    name: "Sarthak Krushi Kendra", 
    logo: sarthakLogo,
    description: "Sarthak Krushi Kendra, A/P.Tavashi tal.Pandharpur Dist.Solapur",
    contact: "+91 7387904319",
    isWide: false
  },
  { 
    name: "Subha Petroleum", 
    logo: subhaPetroleumLogo,
    description: "Petroleum products and fuel distribution services",
    contact: "+91 98765 44444",
    isWide: false
  }
];

export const Footer = () => {
  const navigate = useNavigate();

  const viewRegistrations = () => {
    navigate('/viewregistrations');
  };

  return (
    <footer className="relative mt-8">
      {/* Sponsors Section */}
      <div className="py-12 px-4 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-slide-in">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 text-gradient">
              Our Sponsors
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Proudly supported by our amazing partners
            </p>
          </div>
          
          {/* First Row - 2 Wider Sponsors */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 max-w-5xl mx-auto">
            {sponsors.filter(sponsor => sponsor.isWide).map((sponsor, index) => (
              <div
                key={index}
                className="flex flex-col rounded-xl bg-card/80 backdrop-blur-sm border-2 border-border overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-primary/50 group"
              >
                {/* Top Area - Logo */}
                <div className="h-48 bg-gradient-to-br from-card to-muted/30 overflow-hidden flex items-center justify-center p-4">
                  <img 
                    src={sponsor.logo} 
                    alt={`${sponsor.name} logo`}
                    className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                {/* Middle Area - Description */}
                <div className="flex-1 px-6 py-4 text-center">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {sponsor.description}
                  </p>
                </div>
                
                {/* Bottom Area - Name & Contact */}
                <div className="px-6 py-4 bg-muted/30 border-t border-border/50">
                  <h4 className="text-lg font-bold text-foreground mb-1 group-hover:text-gradient transition-all">
                    {sponsor.name}
                  </h4>
                  <p className="text-sm text-primary font-medium">
                    {sponsor.contact}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Second Row - 2 Regular Sponsors */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {sponsors.filter(sponsor => !sponsor.isWide).map((sponsor, index) => (
              <div
                key={index}
                className="flex flex-col rounded-xl bg-card/80 backdrop-blur-sm border-2 border-border overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-primary/50 group"
              >
                {/* Top Area - Logo */}
                <div className="h-40 bg-gradient-to-br from-card to-muted/30 overflow-hidden flex items-center justify-center p-4">
                  <img 
                    src={sponsor.logo} 
                    alt={`${sponsor.name} logo`}
                    className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                {/* Middle Area - Description */}
                <div className="flex-1 px-6 py-4 text-center">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {sponsor.description}
                  </p>
                </div>
                
                {/* Bottom Area - Name & Contact */}
                <div className="px-6 py-4 bg-muted/30 border-t border-border/50">
                  <h4 className="text-lg font-bold text-foreground mb-1 group-hover:text-gradient transition-all">
                    {sponsor.name}
                  </h4>
                  <p className="text-sm text-primary font-medium">
                    {sponsor.contact}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-12 px-4 bg-card/30 backdrop-blur-sm">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-12 mb-8">
            {/* Contact Info */}
            <div>
              <h4 className="text-xl font-bold mb-4 text-gradient">Contact Us</h4>
              <div className="space-y-3 text-muted-foreground">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>hackbreakers7@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <span>+91 8087320580</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>SKNSCOE, Pandharpur</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-bold mb-4 text-gradient">Quick Links</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#about" className="hover:text-primary transition-colors">About Hackathon</a>
                </li>
                <li>
                  <a href="#themes" className="hover:text-primary transition-colors">Themes</a>
                </li>
                <li>
                  <a href="#registration" className="hover:text-primary transition-colors">Register</a>
                </li>

              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-xl font-bold mb-4 text-gradient">Follow Us</h4>
              <p className="text-muted-foreground mb-4">
                Stay updated with the latest news and announcements<span 
                  className="cursor-pointer hover:text-primary transition-colors ml-2"
                  onClick={viewRegistrations}
                >.
                </span>
              </p>
              <div className="flex gap-3">
                <a
                  href="https://www.linkedin.com/company/hackbreakers/?viewAsMember=true"
                  className="w-10 h-10 rounded-lg bg-muted hover:bg-primary/20 flex items-center justify-center transition-all hover:scale-110 group"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-lg bg-muted hover:bg-secondary/20 flex items-center justify-center transition-all hover:scale-110 group"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5 text-muted-foreground group-hover:text-secondary transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 text-center">
            <p className="text-muted-foreground text-lg">
              Made with love HackBreakers💜
            </p>
          </div>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-secondary/30 rounded-full blur-3xl"></div>
      </div>
    </footer>
  );
};
