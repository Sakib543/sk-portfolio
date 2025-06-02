import AboutMain from "./components/aboutMeSection/AboutMain";
import ContactMain from "./components/contactmesection/ContactMain";
import ExperienceMain from "./components/experienceSection/ExperienceMain";
import FooterMain from "./components/footerSection/FooterMain";
import HeroGradient from "./components/heroSection/HeroGradient";
import HeroMain from "./components/heroSection/HeroMain";
import SubHeroSection from "./components/heroSection/SubHeroSection";
import NavbarMain from "./components/navbar/NavbarMain";
import ProjectMain from "./components/projectSection/ProjectMain";
import SkillMain from "./components/skillSection/SkillMain";
import SubSkill from "./components/skillSection/SubSkill";

function App() {
  return (
    <main className="font-body text-white relative overflow-hidden">
      <NavbarMain />
      <HeroMain />
      <HeroGradient />
      <SubHeroSection />
      <AboutMain />
      <SkillMain />
      <SubSkill />
      <ExperienceMain />
      <ProjectMain />
      <ContactMain />
      <FooterMain />

    </main>
  );
}

export default App;
