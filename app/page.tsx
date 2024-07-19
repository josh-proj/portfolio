import AboutSection from "@/components/AboutSection"
import HeroSection from "@/components/HeroSection"
import Practicum from "@/components/Practicum"
import ProjectsSection from "@/components/ProjectsSection"
import Capstone from "@/components/Capstone"
import Academics from "@/components/Academics"
export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <Practicum />
      <Capstone />
      <Academics />
    </main>
  )
}
