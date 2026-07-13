import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { ExperienceSection } from "@/sections/Experience";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import {ProjectsSection} from "@/sections/Projects"
import { TapeSection } from "@/sections/Tape";
import { ScrollProgress } from "@/components/ScrollProgress";

export default function Home() {
  return (
    <div >
      <ScrollProgress/>
      <Header/>
      <HeroSection/>
      <ProjectsSection/>
      <TapeSection/>
      <ExperienceSection/>
      <AboutSection/>
      <ContactSection/>
      <Footer/>
    </div>
  );
}
