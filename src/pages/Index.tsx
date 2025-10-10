import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Themes } from "@/components/Themes";
import { Registration } from "@/components/Registration";
import { Team } from "@/components/Team";
import { Footer } from "@/components/Footer";
import { AdminLink } from "@/components/AdminLink";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <About />
      <Themes />
      <Registration />
      <Team />
      <Footer />
      <AdminLink />
    </div>
  );
};

export default Index;
