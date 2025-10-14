import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle2, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const themes = [
  "Education & Learning",
  "DevTools & Automation",
  "Healthcare & BioTech",
  "Agriculture & Sustainability",
  "Social Impact",
  "Emerging Tech",
  "Other"
];

export const Registration = () => {
  const [formData, setFormData] = useState({
    teamName: "",
    leaderName: "",
    email: "",
    phone: "",
    member2: "",
    member3: "",
    member4: "",
    theme: "",
    description: ""
  });

  const [completedFields, setCompletedFields] = useState<Set<string>>(new Set());
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    if (value.trim()) {
      setCompletedFields(prev => new Set(prev).add(field));
    } else {
      setCompletedFields(prev => {
        const newSet = new Set(prev);
        newSet.delete(field);
        return newSet;
      });
    }
  };

  const requiredFields = ["teamName", "leaderName", "email", "phone", "theme", "description"];
  const progress = (completedFields.size / requiredFields.length) * 100;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.from('registrations').insert([
        {
          team_name: formData.teamName,
          leader_name: formData.leaderName,
          email: formData.email,
          phone: formData.phone,
          member2: formData.member2 || null,
          member3: formData.member3 || null,
          member4: formData.member4 || null,
          theme: formData.theme,
          description: formData.description
        }
      ]);

      if (error) throw error;

      toast.success("Registration successful! 🎉", {
        description: "Your team has been registered for the hackathon."
      });

      // Reset form
      setFormData({
        teamName: "",
        leaderName: "",
        email: "",
        phone: "",
        member2: "",
        member3: "",
        member4: "",
        theme: "",
        description: ""
      });
      setCompletedFields(new Set());
    } catch (error: any) {
      console.error('Registration error:', error);
      toast.error("Registration failed", {
        description: error.message || "Please try again later."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="registration" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 animate-slide-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-gradient">
            Register Your Team
          </h2>
          <p className="text-xl text-muted-foreground">
            Fill in the details to secure your spot in the hackathon
          </p>
        </div>

        {/* Progress Bar */}
        <Card className="p-6 mb-8 bg-card/80 backdrop-blur-sm border-2 border-primary/30">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-muted-foreground">Registration Progress</span>
            <span className="text-sm font-bold text-primary">{Math.round(progress)}%</span>
          </div>
          <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-primary via-accent to-secondary transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </Card>

        <Card className="p-8 md:p-12 bg-card/80 backdrop-blur-sm border-2 border-border">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Team Name */}
            <div className="space-y-2 relative">
              <Label htmlFor="teamName" className="text-foreground">Team Name *</Label>
              <div className="relative">
                <Input
                  id="teamName"
                  value={formData.teamName}
                  onChange={(e) => handleInputChange("teamName", e.target.value)}
                  required
                  className="pr-10 bg-input border-border focus:border-primary transition-all"
                  placeholder="Enter your team name"
                />
                {completedFields.has("teamName") && (
                  <CheckCircle2 className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-primary animate-scale-in" />
                )}
              </div>
            </div>

            {/* Leader Details */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2 relative">
                <Label htmlFor="leaderName" className="text-foreground">Team Leader Name *</Label>
                <div className="relative">
                  <Input
                    id="leaderName"
                    value={formData.leaderName}
                    onChange={(e) => handleInputChange("leaderName", e.target.value)}
                    required
                    className="pr-10 bg-input border-border focus:border-primary transition-all"
                    placeholder="Full name"
                  />
                  {completedFields.has("leaderName") && (
                    <CheckCircle2 className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-primary animate-scale-in" />
                  )}
                </div>
              </div>

              <div className="space-y-2 relative">
                <Label htmlFor="email" className="text-foreground">Email *</Label>
                <div className="relative">
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                    className="pr-10 bg-input border-border focus:border-primary transition-all"
                    placeholder="email@example.com"
                  />
                  {completedFields.has("email") && (
                    <CheckCircle2 className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-primary animate-scale-in" />
                  )}
                </div>
              </div>
            </div>

            <div className="space-y-2 relative">
              <Label htmlFor="phone" className="text-foreground">Phone Number *</Label>
              <div className="relative">
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  required
                  className="pr-10 bg-input border-border focus:border-primary transition-all"
                  placeholder="+91 XXXXX XXXXX"
                />
                {completedFields.has("phone") && (
                  <CheckCircle2 className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-primary animate-scale-in" />
                )}
              </div>
            </div>

            {/* Team Members */}
            <div className="space-y-4">
              <Label className="text-foreground">Team Members (Optional, Max 3 additional members)</Label>
              <Input
                value={formData.member2}
                onChange={(e) => handleInputChange("member2", e.target.value)}
                placeholder="Member 2 Name"
                className="bg-input border-border focus:border-secondary transition-all"
              />
              <Input
                value={formData.member3}
                onChange={(e) => handleInputChange("member3", e.target.value)}
                placeholder="Member 3 Name"
                className="bg-input border-border focus:border-secondary transition-all"
              />
              <Input
                value={formData.member4}
                onChange={(e) => handleInputChange("member4", e.target.value)}
                placeholder="Member 4 Name"
                className="bg-input border-border focus:border-secondary transition-all"
              />
            </div>

            {/* Theme Selection */}
            <div className="space-y-2">
              <Label htmlFor="theme" className="text-foreground">Select Theme *</Label>
              <Select value={formData.theme} onValueChange={(value) => handleInputChange("theme", value)} required>
                <SelectTrigger className="bg-input border-border focus:border-primary">
                  <SelectValue placeholder="Choose your hackathon theme" />
                </SelectTrigger>
                <SelectContent className="bg-popover border-border">
                  {themes.map((theme) => (
                    <SelectItem key={theme} value={theme}>
                      {theme}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Idea Description */}
            <div className="space-y-2 relative">
              <Label htmlFor="description" className="text-foreground">Project Idea Description *</Label>
              <div className="relative">
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => handleInputChange("description", e.target.value)}
                  required
                  className="min-h-32 bg-input border-border focus:border-primary transition-all resize-none"
                  placeholder="Describe your project idea in detail..."
                />
                {completedFields.has("description") && (
                  <CheckCircle2 className="absolute right-3 top-3 w-5 h-5 text-primary animate-scale-in" />
                )}
              </div>
            </div>

            {/* Submit Button */}
            <Button 
              type="submit" 
              variant="hero" 
              size="lg" 
              className="w-full text-lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  Submit Registration
                  <CheckCircle2 className="w-5 h-5" />
                </>
              )}
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
};
