import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail } from "lucide-react";

const teamMembers = [
  {
    name: "Priya Sharma",
    role: "President",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
    bio: "Leading tech innovation and organizing impactful events",
    social: {
      github: "#",
      linkedin: "#",
      email: "priya@hackathon.com"
    }
  },
  {
    name: "Rahul Kumar",
    role: "Vice President",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    bio: "Coordinating operations and mentor relationships",
    social: {
      github: "#",
      linkedin: "#",
      email: "rahul@hackathon.com"
    }
  },
  {
    name: "Ananya Patel",
    role: "Technical Lead",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
    bio: "Managing technical infrastructure and workshops",
    social: {
      github: "#",
      linkedin: "#",
      email: "ananya@hackathon.com"
    }
  },
  {
    name: "Arjun Mehta",
    role: "Marketing Head",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    bio: "Building community and promoting events",
    social: {
      github: "#",
      linkedin: "#",
      email: "arjun@hackathon.com"
    }
  },
  {
    name: "Sneha Reddy",
    role: "Sponsorship Lead",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    bio: "Securing partnerships and funding opportunities",
    social: {
      github: "#",
      linkedin: "#",
      email: "sneha@hackathon.com"
    }
  },
  {
    name: "Vikram Singh",
    role: "Events Coordinator",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    bio: "Planning logistics and participant experience",
    social: {
      github: "#",
      linkedin: "#",
      email: "vikram@hackathon.com"
    }
  }
];

export const Team = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-slide-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-gradient">
            Organizing Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet the passionate individuals making this hackathon a reality
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden bg-card/80 backdrop-blur-sm border-2 border-border card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-1 text-foreground group-hover:text-gradient transition-all">
                  {member.name}
                </h3>
                <p className="text-primary font-medium mb-4">{member.role}</p>

                {/* Social Links */}
                <div className="flex gap-3">
                  <a
                    href={member.social.github}
                    className="w-10 h-10 rounded-lg bg-muted hover:bg-primary/20 flex items-center justify-center transition-all hover:scale-110 group/social"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5 text-muted-foreground group-hover/social:text-primary transition-colors" />
                  </a>
                  <a
                    href={member.social.linkedin}
                    className="w-10 h-10 rounded-lg bg-muted hover:bg-secondary/20 flex items-center justify-center transition-all hover:scale-110 group/social"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5 text-muted-foreground group-hover/social:text-secondary transition-colors" />
                  </a>
                  <a
                    href={`mailto:${member.social.email}`}
                    className="w-10 h-10 rounded-lg bg-muted hover:bg-accent/20 flex items-center justify-center transition-all hover:scale-110 group/social"
                    aria-label="Email"
                  >
                    <Mail className="w-5 h-5 text-muted-foreground group-hover/social:text-accent transition-colors" />
                  </a>
                </div>
              </div>

              {/* Border glow effect */}
              <div className="absolute inset-0 rounded-lg border-2 border-primary/0 group-hover:border-primary/50 transition-all duration-300 pointer-events-none"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
