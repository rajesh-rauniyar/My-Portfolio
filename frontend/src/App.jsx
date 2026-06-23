
import { useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import HeroSection from "./components/Hero.jsx";
import AboutSection from "./components/aboutme.jsx";
import SkillsSection from "./components/skills.jsx";
import ProjectsSection from "./components/projects.jsx";
import ContactSection from "./components/contactme.jsx";

function App() {
   useEffect(() => {
    window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      < ContactSection/>
    </div>
  );
}

export default App

