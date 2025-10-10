import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export const Hero = () => {
  const scrollToRegistration = () => {
    document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' });
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

        <h1 className="text-6xl md:text-8xl font-bold mb-6 text-gradient leading-tight">
          HACKATHON 2025
        </h1>

        <p className="text-xl md:text-2xl mb-4 text-muted-foreground max-w-3xl mx-auto">
          Code the Future. Build the Impossible.
        </p>

        <p className="text-lg mb-12 text-muted-foreground/80 max-w-2xl mx-auto">
          Join the ultimate 48-hour coding challenge where innovation meets technology.
          Compete, collaborate, and create groundbreaking solutions!
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
          >
            View Themes
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-primary/20">
            <div className="text-4xl font-bold text-gradient mb-2">48</div>
            <div className="text-sm text-muted-foreground">Hours</div>
          </div>
          <div className="p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-secondary/20">
            <div className="text-4xl font-bold text-gradient mb-2">₹50K</div>
            <div className="text-sm text-muted-foreground">Prize Pool</div>
          </div>
          <div className="p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-accent/20">
            <div className="text-4xl font-bold text-gradient mb-2">500+</div>
            <div className="text-sm text-muted-foreground">Participants</div>
          </div>
        </div>
      </div>
    </section>
  );
};
