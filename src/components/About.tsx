import { Calendar, Clock, Trophy, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Calendar,
    title: "Event Date",
    description: "TBH",
    color: "text-primary",
    glow: "glow-cyan"
  },
  {
    icon: Clock,
    title: "Duration",
    description: "12 Hours",
    color: "text-secondary",
    glow: "glow-pink"
  },
  {
    icon: Trophy,
    title: "Prizes",
    description: "Exicting Prizes",
    color: "text-accent",
    glow: "glow-purple"
  },
  {
    icon: Users,
    title: "Team Size",
    description: "2-4 Members per Team",
    color: "text-primary",
    glow: "glow-cyan"
  }
];

export const About = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-slide-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-gradient">
            About the Hackathon
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join us for an unforgettable journey of innovation, collaboration, and breakthrough ideas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className={`p-6 bg-card/80 backdrop-blur-sm border-2 border-border card-hover ${feature.glow} transition-all duration-300`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <feature.icon className={`w-12 h-12 ${feature.color} mb-4`} />
              <h3 className="text-xl font-bold mb-2 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>

        <Card className="p-8 md:p-12 bg-gradient-to-br from-card/90 to-card/50 backdrop-blur-md border-2 border-primary/30">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-6 text-gradient">Hackathon Rules</h3>
            <ul className="space-y-4 text-lg text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-primary text-2xl">◾</span>
                <span>Each team can have up to 4 members.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary text-2xl">◾</span>
                <span>Only one form per team should be submitted.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent text-2xl">◾</span>
                <span>Team leader's contact will be used for communication.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-2xl">◾</span>
                <span>Ideas must be original and innovative — plagiarism leads to disqualification.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary text-2xl">◾</span>
                <span>Once registered, team details cannot be changed.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent text-2xl">◾</span>
                <span>Hackathon duration: 12 hours continuous coding challenge.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-2xl">◾</span>
                <span>Judges' decision is final.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-secondary text-2xl">◾</span>
                <span>Maintain teamwork, discipline, and enthusiasm throughout.</span>
              </li>
            </ul>
          </div>
        </Card>
      </div>
    </section>
  );
};
