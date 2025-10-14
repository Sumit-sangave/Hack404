import { Card } from "@/components/ui/card";
import { Linkedin, Mail, Github } from "lucide-react";

// Import your team photos
import vaibhavPhoto from "@/assets/team/vaibhav.jpg";
import mayuriPhoto from "@/assets/team/mayuri.jpg";
import sumitPhoto from "@/assets/team/sumit.jpg";
import yashPhoto from "@/assets/team/yash.jpg";
import ranjitPhoto from "@/assets/team/ranjit.jpg";
import shitalPhoto from "@/assets/team/shital.jpg";
import pritiPhoto from "@/assets/team/priti.jpg";
import anhishekPhoto from "@/assets/team/abhishek.jpg";



const teamMembers = [
  {
    name: "Vaibhav Survase",
    role: "President",
    image: vaibhavPhoto,
    bio: "Leading tech innovation and organizing impactful events",
    social: {
      github: "https://github.com/vsgmk",
      linkedin: "https://www.linkedin.com/in/vaibhav-survase-1ba7142a3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      email: "vaibhavsurvase674@gmail.com"
    }
  },
  {
    name: "Mayuri Kulkarni",
    role: "Vice President",
    image: mayuriPhoto,
    bio: "Coordinating operations and mentor relationships",
    social: {
      github: "https://github.com/myukulkarni",
      linkedin: "https://www.linkedin.com/in/mayuri-kulkarni-b72862302/",
      email: "mayuri@hackathon.com"
    }
  },
  {
    name: "Shital Chavan",
    role: "Member",
    image: shitalPhoto,
    bio: "Planning logistics and participant experience",
    social: {
      github: "https://github.com/shital-chavan-11",
      linkedin: "https://www.linkedin.com/in/shital-chavan-00a23b334",
      email: "chavanshital3108@gmail.com"
    } 
  },
  {
    name: "Priti Chaugule",
    role: "Member",
    image: pritiPhoto,
    bio: "Creating stunning visuals and user experiences",
    social: {
      github: " https://github.com/pritichaugule12",
      linkedin: "https://www.linkedin.com/in/priti-chaugule-2966872a4/",
      email: "pritichaugule44@gmail.com"
    }
  },
  {
    name: "Ranjit Chavan",
    role: "Member",
    image: ranjitPhoto,
    bio: "Securing partnerships and funding opportunities",
    social: {
      github: "https://github.com/RanjitChavan1818",
      linkedin: "https://www.linkedin.com/in/ranjit-chavan-9746872a4/ ",
      email: "ranjitchavan1050@gmail.com"
    }
  },
  {
    name: "Sumit Sangave",
    role: "Member",
    image: sumitPhoto,
    bio: "Managing technical infrastructure and workshops",
    social: {
      github: "https://github.com/Sumit-sangave",
      linkedin: "https://www.linkedin.com/in/sumit-sangave-8667142a3/",
      email: "sumitsangave2631@gmail.com"
    }
  },
  {
    name: "Yash Munurreddy",
    role: "Member",
    image: yashPhoto,
    bio: "Building community and promoting events",
    social: {
      github: " https://github.com/YashReddy1963",
      linkedin: "https://www.linkedin.com/in/yash-m-81371624a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      email: "member4@hackathon.com"
    }
  },
  {
    name: "Abhishek Savalgi",
    role: "Member",
    image: anhishekPhoto,
    bio: "Building connections and fostering community engagement",
    social: {
      github: "github.com/Abhishek591549",
      linkedin: "https://www.linkedin.com/in/abhishek-savalgi-1406b82a4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      email: "abhisheksavalgi601@gmail.com"
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-12 gap-y-24 pt-12">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="group relative bg-card/80 backdrop-blur-sm border-2 border-border transition-all duration-300 hover:scale-105 hover:shadow-2xl pt-24 pb-6 px-6"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Circular Image - Overlapping top */}
              <div className="absolute -top-20 left-1/2 -translate-x-1/2">
                <div className="relative w-40 h-40 rounded-full border-4 border-card overflow-hidden shadow-xl transition-all">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="text-center mt-2">
                {/* Name */}
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-gradient transition-all">
                  {member.name}
                </h3>
                
                {/* Role Badge */}
                <div className="inline-block mb-4">
                  <span className="px-3 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary font-medium text-xs">
                    {member.role}
                  </span>
                </div>

                {/* Social Links */}
                <div className="flex gap-3 justify-center">
                  <a
                    href={member.social.linkedin}
                    className="w-12 h-12 rounded-full bg-muted hover:bg-primary/20 flex items-center justify-center transition-all hover:scale-110 group/social"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5 text-muted-foreground group-hover/social:text-primary transition-colors" />
                  </a>
                  <a
                    href={member.social.github}
                    className="w-12 h-12 rounded-full bg-muted hover:bg-secondary/20 flex items-center justify-center transition-all hover:scale-110 group/social"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5 text-muted-foreground group-hover/social:text-secondary transition-colors" />
                  </a>
                  <a
                    href={`mailto:${member.social.email}`}
                    className="w-12 h-12 rounded-full bg-muted hover:bg-primary/20 flex items-center justify-center transition-all hover:scale-110 group/social"
                    aria-label="Email"
                  >
                    <Mail className="w-5 h-5 text-muted-foreground group-hover/social:text-primary transition-colors" />
                  </a>
                </div>
              </div>

            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
