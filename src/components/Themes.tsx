import { Card } from "@/components/ui/card";
import { Brain, Cpu, Leaf, Smartphone, Globe, Zap } from "lucide-react";

const themes = [
  {
    icon: Brain,
    title: "Artificial Intelligence",
    description: "Develop intelligent solutions using ML, NLP, and computer vision to solve real-world problems",
    color: "text-primary",
    borderColor: "border-primary/30",
    bgGlow: "bg-primary/5"
  },
  {
    icon: Cpu,
    title: "Robotics & Automation",
    description: "Create autonomous systems and robotic solutions that enhance efficiency and productivity",
    color: "text-secondary",
    borderColor: "border-secondary/30",
    bgGlow: "bg-secondary/5"
  },
  {
    icon: Smartphone,
    title: "Internet of Things",
    description: "Build connected smart devices and IoT ecosystems for homes, cities, and industries",
    color: "text-accent",
    borderColor: "border-accent/30",
    bgGlow: "bg-accent/5"
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description: "Design eco-friendly tech solutions addressing climate change and environmental challenges",
    color: "text-primary",
    borderColor: "border-primary/30",
    bgGlow: "bg-primary/5"
  },
  {
    icon: Globe,
    title: "Social Impact",
    description: "Develop applications that improve education, healthcare, and community wellbeing",
    color: "text-secondary",
    borderColor: "border-secondary/30",
    bgGlow: "bg-secondary/5"
  },
  {
    icon: Zap,
    title: "Emerging Tech",
    description: "Explore blockchain, AR/VR, quantum computing, and other cutting-edge technologies",
    color: "text-accent",
    borderColor: "border-accent/30",
    bgGlow: "bg-accent/5"
  }
];

export const Themes = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-slide-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-gradient">
            Hackathon Themes
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose your challenge domain and build something extraordinary
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {themes.map((theme, index) => (
            <Card
              key={index}
              className={`group p-8 bg-card/80 backdrop-blur-sm border-2 ${theme.borderColor} card-hover ${theme.bgGlow} relative overflow-hidden`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Glow effect on hover */}
              <div className={`absolute inset-0 ${theme.bgGlow} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                <div className={`w-16 h-16 rounded-lg ${theme.bgGlow} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <theme.icon className={`w-8 h-8 ${theme.color}`} />
                </div>
                
                <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-gradient transition-all duration-300">
                  {theme.title}
                </h3>
                
                <p className="text-muted-foreground">
                  {theme.description}
                </p>
              </div>

              {/* Border glow effect */}
              <div className={`absolute inset-0 rounded-lg ${theme.borderColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
                   style={{ boxShadow: `0 0 30px hsl(var(--${theme.color.replace('text-', '')}))` }}></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
