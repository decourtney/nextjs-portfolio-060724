import { Metadata } from "next";
import AboutSection from "./components/About/AboutSection";
import ContactSection from "./components/Contact/ContactSection";
import DivierSection from "./components/Divider/dividerSection";
import HomeSection from "./components/Home/HomeSection";
import ProjectSection from "./components/Projects/ProjectSection";
import ToolsSection from "./components/Tools/ToolsSection";

const App = () => {
  return (
    <>
      <main className="overflow-clip">
        <HomeSection />
        <DivierSection />
        <AboutSection />
        <DivierSection />
        <ToolsSection />
        <DivierSection />
        <ProjectSection />
        <DivierSection />
        <ContactSection />
      </main>
    </>
  );
};

export const metadata: Metadata = {
  title: "Donovan's Portfolio",
  description: "Vertical scrolling portfolio website",
};

export default App;
