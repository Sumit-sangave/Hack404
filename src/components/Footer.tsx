import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react";

const sponsors = [
  { 
    name: "TechCorp", 
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=400&h=200&fit=crop",
    description: "Leading technology solutions for innovative startups and enterprises",
    contact: "+91 98765 11111"
  },
  { 
    name: "InnoVentures", 
    logo: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=200&fit=crop",
    description: "Venture capital firm investing in cutting-edge tech innovations",
    contact: "+91 98765 22222"
  },
  { 
    name: "CodeBase", 
    logo: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=400&h=200&fit=crop",
    description: "Developer tools and platforms for modern software development",
    contact: "+91 98765 33333"
  },
  { 
    name: "FutureStack", 
    logo: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=200&fit=crop",
    description: "Cloud infrastructure and DevOps solutions for scalable applications",
    contact: "+91 98765 44444"
  }
];

export const Footer = () => {
  return (
    <footer className="relative mt-20 border-t border-border/50">
      {/* Sponsors Section */}
      <div className="py-12 px-4 bg-gradient-to-b from-background to-card/50">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-2xl font-bold text-center mb-8 text-gradient">
            Our Sponsors
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sponsors.map((sponsor, index) => (
              <div
                key={index}
                className="flex flex-col rounded-xl bg-card/80 backdrop-blur-sm border-2 border-border overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-primary/50 group"
              >
                {/* Top Area - Logo */}
                <div className="h-40 bg-gradient-to-br from-card to-muted/30 overflow-hidden">
                  <img 
                    src={sponsor.logo} 
                    alt={`${sponsor.name} logo`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
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
                  <span>info@hackathon2025.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>Tech Campus, Innovation Hub, Bangalore</span>
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
                <li>
                  <a href="#team" className="hover:text-primary transition-colors">Team</a>
                </li>
              <li>
                <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
              </li>
              <li>
                <a href="/admin" className="hover:text-primary transition-colors">Admin</a>
              </li>
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-xl font-bold mb-4 text-gradient">Follow Us</h4>
              <p className="text-muted-foreground mb-4">
                Stay updated with the latest news and announcements
              </p>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-10 h-10 rounded-lg bg-muted hover:bg-primary/20 flex items-center justify-center transition-all hover:scale-110 group"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-lg bg-muted hover:bg-secondary/20 flex items-center justify-center transition-all hover:scale-110 group"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5 text-muted-foreground group-hover:text-secondary transition-colors" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-lg bg-muted hover:bg-accent/20 flex items-center justify-center transition-all hover:scale-110 group"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                </a>
                <a
                  href="#"
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
          <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © 2025 Hackathon. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Code of Conduct</a>
            </div>
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
