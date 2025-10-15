import { Button } from "@/components/ui/button";
import { Rocket, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/logo.png";

export const Hero = () => {
  const navigate = useNavigate();

  const scrollToRegistration = () => {
    document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToThemes = () => {
    document.getElementById('themes')?.scrollIntoView({ behavior: 'smooth' });
  };

  const viewRegistrations = () => {
    navigate('/viewregistrations');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-secondary/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-1/4 w-24 h-24 bg-accent/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center animate-slide-in">
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-primary/30 bg-card/50 backdrop-blur-sm">
          <Rocket className="w-4 h-4 text-primary" />
          <span className="text-sm text-muted-foreground">Registration Open Now!</span>
        </div>

        {/* Main Content - Logo and Title Side by Side */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-8 mb-8">
          {/* Logo - Left Side */}
          <div className="flex justify-center lg:justify-end">
            <div className="bg-black rounded-full p-4 shadow-2xl border-2 border-primary/30 hover:border-primary/50 transition-all duration-300 hover:scale-105">
              <div className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center">
                <img 
                  src={logo} 
                  alt="Hack404 Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* Hack404 Title - Right Side */}
          <div className="flex justify-center lg:justify-start">
            <h1 className="text-6xl md:text-8xl font-bold text-gradient leading-tight">
              <span className="inline-block hacker-text" data-text="Hack404">
                Hack404
              </span>
            </h1>
          </div>
        </div>

        <p className="text-xl md:text-2xl mb-4 text-muted-foreground max-w-3xl mx-auto">
            The Ultimate Hackathon Battleground
        </p>

        <p className="text-lg mb-12 text-muted-foreground/80 max-w-2xl mx-auto">
        A platform for passionate developers, designers, and thinkers to solve real-world challenges. At Hack404, we believe every 404 isn’t a failure — it’s the start of something new.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            variant="hero" 
            size="lg" 
            className="text-lg px-8 py-6"
            onClick={scrollToRegistration}
          >
            Register Now
            <Rocket className="w-5 h-5" />
          </Button>
          
          <Button 
            variant="neon" 
            size="lg" 
            className="text-lg px-8 py-6"
            onClick={scrollToThemes}
          >
            View Themes
          </Button>

        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-primary/20">
            <div className="text-4xl font-bold text-gradient mb-2">12</div>
            <div className="text-sm text-muted-foreground">Hours</div>
          </div>
          <div className="p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-secondary/20">
            <div className="text-4xl font-bold text-gradient mb-2">4+</div>
            <div className="text-sm text-muted-foreground">Core Trakcs</div>
          </div>
          <div className="p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-accent/20">
            <div className="text-4xl font-bold text-gradient mb-2">40+</div>
            <div className="text-sm text-muted-foreground">Student Innovators</div>
          </div>
        </div>
      </div>
    </section>
  );
};
