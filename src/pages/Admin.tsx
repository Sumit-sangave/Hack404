import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Users, Mail, Phone, Calendar, FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

interface Registration {
  id: string;
  team_name: string;
  leader_name: string;
  email: string;
  phone: string;
  member2: string | null;
  member3: string | null;
  member4: string | null;
  theme: string;
  description: string;
  created_at: string;
}

const Admin = () => {
  const navigate = useNavigate();
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRegistrations();
  }, []);

  const fetchRegistrations = async () => {
    try {
      const { data, error } = await supabase
        .from('registrations')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      
      setRegistrations(data || []);
    } catch (error: any) {
      console.error('Error fetching registrations:', error);
      toast.error('Failed to load registrations');
    } finally {
      setLoading(false);
    }
  };

  const getTeamMembers = (reg: Registration) => {
    const members = [reg.leader_name];
    if (reg.member2) members.push(reg.member2);
    if (reg.member3) members.push(reg.member3);
    if (reg.member4) members.push(reg.member4);
    return members;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading registrations...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                Admin Dashboard
              </h1>
              <p className="text-xl text-muted-foreground">
                Hackathon Registrations
              </p>
            </div>
            <Card className="p-4 bg-card/80 backdrop-blur-sm border-2 border-primary/30">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">{registrations.length}</div>
                <div className="text-sm text-muted-foreground">Total Teams</div>
              </div>
            </Card>
          </div>
        </div>

        {/* Registrations List */}
        {registrations.length === 0 ? (
          <Card className="p-12 text-center bg-card/80 backdrop-blur-sm border-2 border-border">
            <Users className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">No Registrations Yet</h2>
            <p className="text-muted-foreground">
              Registered teams will appear here.
            </p>
          </Card>
        ) : (
          <div className="grid gap-6">
            {registrations.map((reg) => (
              <Card
                key={reg.id}
                className="p-6 bg-card/80 backdrop-blur-sm border-2 border-border hover:border-primary/50 transition-all"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Left Column */}
                  <div>
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gradient mb-1">
                          {reg.team_name}
                        </h3>
                        <Badge className="bg-primary/20 text-primary border-primary/30">
                          {reg.theme}
                        </Badge>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Users className="w-4 h-4 text-primary" />
                        <span className="font-medium">Team Leader:</span>
                        <span>{reg.leader_name}</span>
                      </div>

                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Mail className="w-4 h-4 text-primary" />
                        <a href={`mailto:${reg.email}`} className="hover:text-primary transition-colors">
                          {reg.email}
                        </a>
                      </div>

                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Phone className="w-4 h-4 text-primary" />
                        <a href={`tel:${reg.phone}`} className="hover:text-primary transition-colors">
                          {reg.phone}
                        </a>
                      </div>

                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span>
                          {new Date(reg.created_at).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                        </span>
                      </div>
                    </div>

                    <div className="mt-4">
                      <div className="text-sm font-medium text-foreground mb-2">
                        Team Members ({getTeamMembers(reg).length}):
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {getTeamMembers(reg).map((member, idx) => (
                          <Badge
                            key={idx}
                            variant="outline"
                            className="bg-muted/50"
                          >
                            {member}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <FileText className="w-4 h-4 text-primary" />
                      <span className="font-medium text-foreground">Project Idea:</span>
                    </div>
                    <Card className="p-4 bg-muted/30 border-border/50">
                      <p className="text-muted-foreground whitespace-pre-wrap">
                        {reg.description}
                      </p>
                    </Card>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
