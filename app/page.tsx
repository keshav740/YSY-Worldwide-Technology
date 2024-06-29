import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import StickyIcon from "@/components/main/SticykIcon";
import Page from "./about/sub-about/page";
import OurTeam from "./our-team/page";
import Comp from "@/components/main/Comp";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <StickyIcon />
        <Hero />
        <Page />
        <Skills />
        <Projects />
        <Comp />
        <OurTeam />
        <Encryption />
      </div>
    </main>
  );
}
