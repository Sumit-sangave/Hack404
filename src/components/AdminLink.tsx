import { Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

export const AdminLink = () => {
  return (
    <div className="fixed bottom-8 right-8 z-50">
      <Button
        variant="neon"
        size="lg"
        className="shadow-2xl"
        onClick={() => window.location.href = '/admin'}
      >
        <Shield className="w-5 h-5" />
        Admin Dashboard
      </Button>
    </div>
  );
};
