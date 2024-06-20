import Encryption from "@/app/components/main/Encryption";
import Hero from "@/app/components/main/Hero";
import Projects from "@/app/components/main/Projects";
import Skills from "@/app/components/main/Skills";
import StickyIcon from "@/app/components/main/SticykIcon";
import Page from "./about/sub-about/page";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <StickyIcon />
        <Hero />
        <Page />
        <Skills />
        <Projects />
        <Encryption />
      </div>
    </main>
  );
}
