import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Calendar, Mail, Phone, Lightbulb, Download } from "lucide-react";
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
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    total: 0,
    today: 0,
    themes: {} as Record<string, number>
  });

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
      calculateStats(data || []);
      setLoading(false);
    } catch (error: any) {
      console.error('Error fetching registrations:', error);
      toast.error("Failed to load registrations");
      setLoading(false);
    }
  };

  const calculateStats = (data: Registration[]) => {
    const today = new Date().toDateString();
    const todayCount = data.filter(r => 
      new Date(r.created_at).toDateString() === today
    ).length;

    const themes = data.reduce((acc, r) => {
      acc[r.theme] = (acc[r.theme] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    setStats({
      total: data.length,
      today: todayCount,
      themes
    });
  };

  const exportToCSV = () => {
    const headers = ['Team Name', 'Leader', 'Email', 'Phone', 'Member 2', 'Member 3', 'Member 4', 'Theme', 'Description', 'Registered At'];
    const csvData = registrations.map(r => [
      r.team_name,
      r.leader_name,
      r.email,
      r.phone,
      r.member2 || '',
      r.member3 || '',
      r.member4 || '',
      r.theme,
      r.description,
      new Date(r.created_at).toLocaleString()
    ]);

    const csv = [
      headers.join(','),
      ...csvData.map(row => row.map(cell => `"${cell}"`).join(','))
    ].join('\n');

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `hackathon-registrations-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    toast.success("Export successful!");
  };

  const getTeamSize = (reg: Registration) => {
    return [reg.leader_name, reg.member2, reg.member3, reg.member4].filter(Boolean).length;
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
        <div className="mb-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <div>
              <h1 className="text-5xl font-bold text-gradient mb-2">
                Admin Dashboard
              </h1>
              <p className="text-xl text-muted-foreground">
                Hackathon 2025 Registration Management
              </p>
            </div>
            <Button variant="hero" onClick={exportToCSV} disabled={registrations.length === 0}>
              <Download className="w-4 h-4" />
              Export to CSV
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="p-6 bg-card/80 backdrop-blur-sm border-2 border-primary/30">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-gradient">{stats.total}</div>
                  <div className="text-sm text-muted-foreground">Total Registrations</div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/80 backdrop-blur-sm border-2 border-secondary/30">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-gradient">{stats.today}</div>
                  <div className="text-sm text-muted-foreground">Registered Today</div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/80 backdrop-blur-sm border-2 border-accent/30">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-gradient">{Object.keys(stats.themes).length}</div>
                  <div className="text-sm text-muted-foreground">Active Themes</div>
                </div>
              </div>
            </Card>
          </div>

          {/* Theme Distribution */}
          {Object.keys(stats.themes).length > 0 && (
            <Card className="p-6 bg-card/80 backdrop-blur-sm border-2 border-border mb-8">
              <h3 className="text-xl font-bold mb-4 text-gradient">Theme Distribution</h3>
              <div className="flex flex-wrap gap-3">
                {Object.entries(stats.themes).map(([theme, count]) => (
                  <Badge key={theme} variant="secondary" className="text-sm px-4 py-2">
                    {theme}: {count}
                  </Badge>
                ))}
              </div>
            </Card>
          )}
        </div>

        {/* Registrations List */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gradient mb-6">
            All Registrations ({registrations.length})
          </h2>

          {registrations.length === 0 ? (
            <Card className="p-12 text-center bg-card/80 backdrop-blur-sm">
              <Users className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <p className="text-xl text-muted-foreground">No registrations yet</p>
            </Card>
          ) : (
            registrations.map((reg) => (
              <Card 
                key={reg.id}
                className="p-6 bg-card/80 backdrop-blur-sm border-2 border-border card-hover"
              >
                <div className="flex flex-col lg:flex-row justify-between gap-6">
                  <div className="flex-1 space-y-4">
                    {/* Team Header */}
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-2xl font-bold text-gradient mb-1">
                          {reg.team_name}
                        </h3>
                        <Badge variant="secondary" className="mb-2">
                          {reg.theme}
                        </Badge>
                      </div>
                      <Badge variant="outline" className="text-sm">
                        {getTeamSize(reg)} Members
                      </Badge>
                    </div>

                    {/* Leader Info */}
                    <div className="grid md:grid-cols-2 gap-4 p-4 rounded-lg bg-muted/50">
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-primary" />
                        <div>
                          <div className="text-xs text-muted-foreground">Leader Email</div>
                          <div className="font-medium">{reg.email}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-primary" />
                        <div>
                          <div className="text-xs text-muted-foreground">Phone</div>
                          <div className="font-medium">{reg.phone}</div>
                        </div>
                      </div>
                    </div>

                    {/* Team Members */}
                    <div>
                      <div className="text-sm font-medium text-muted-foreground mb-2">Team Members:</div>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="default">{reg.leader_name} (Leader)</Badge>
                        {reg.member2 && <Badge variant="outline">{reg.member2}</Badge>}
                        {reg.member3 && <Badge variant="outline">{reg.member3}</Badge>}
                        {reg.member4 && <Badge variant="outline">{reg.member4}</Badge>}
                      </div>
                    </div>

                    {/* Project Description */}
                    <div>
                      <div className="text-sm font-medium text-muted-foreground mb-2">Project Idea:</div>
                      <p className="text-foreground leading-relaxed">{reg.description}</p>
                    </div>
                  </div>

                  {/* Timestamp */}
                  <div className="lg:text-right">
                    <div className="text-xs text-muted-foreground mb-1">Registered</div>
                    <div className="text-sm font-medium">
                      {new Date(reg.created_at).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {new Date(reg.created_at).toLocaleTimeString('en-US', {
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </div>
                  </div>
                </div>
              </Card>
            ))
          )}
        </div>

        {/* Back to Home */}
        <div className="mt-12 text-center">
          <Button variant="neon" size="lg" onClick={() => window.location.href = '/'}>
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Admin;
