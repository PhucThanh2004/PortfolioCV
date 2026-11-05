import { MotionConfig } from "framer-motion";
import { Marquee } from "@/components/fx";
import { skillGroups } from "@/data/portfolio";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Process } from "@/sections/Process";
import { Skills } from "@/sections/Skills";
import { Projects } from "@/sections/Projects";
import { Contact } from "@/sections/Contact";
import { profile } from "@/data/portfolio";

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Header />
      <main>
        <Hero />
        <Marquee items={skillGroups.flatMap((g) => g.items).slice(0, 12)} />
        <About />
        <Process />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-denim-600/10 bg-sand-200 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6 lg:px-8">
          <div className="text-center sm:text-left">
            <span className="font-condensed text-xl font-bold tracking-wider text-denim-700">{profile.name}</span>
            <p className="mt-0.5 text-xs text-denim-600">{profile.role} · {profile.location}</p>
          </div>
          <a href="#" className="font-condensed text-xs tracking-wider text-denim-600 hover:text-denim-900">LÊN ĐẦU TRANG ↑</a>
          <p className="text-[11px] text-denim-600/70">© {new Date().getFullYear()} {profile.name}</p>
        </div>
      </footer>
    </MotionConfig>
  );
}
