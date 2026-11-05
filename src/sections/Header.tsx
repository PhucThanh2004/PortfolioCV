import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { profile } from "@/data/portfolio";
import { ScrollProgress, ease } from "@/components/fx";

const nav = [
  ["#about", "Giới thiệu"],
  ["#process", "Quy trình"],
  ["#skills", "Kỹ năng"],
  ["#projects", "Dự án"],
  ["#contact", "Liên hệ"],
];

export function Header() {
  return (
    <motion.header
      initial={{ y: -70 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease }}
      className="sticky top-0 z-50 border-b border-denim-600/10 bg-sand-200/90 backdrop-blur-md"
    >
      <ScrollProgress />
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#"
          className="font-condensed text-3xl font-bold tracking-wider text-denim-700 hover:text-denim-900"
        >
          {profile.shortName}{" "}
          <span className="font-sans text-sm font-bold normal-case tracking-wide opacity-70">
            DEV
          </span>
        </a>
        <nav className="hidden items-center gap-8 font-condensed text-sm font-semibold tracking-widest text-denim-700 md:flex">
          {nav.map(([h, l]) => (
            <a
              key={h}
              href={h}
              className="relative after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-denim-700 after:transition-transform hover:after:scale-x-100"
            >
              {l}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4 text-denim-700">
          {profile.github && (
            <a
              aria-label="GitHub"
              href={profile.github}
              className="transition-transform hover:scale-110"
            >
              <Github className="h-5 w-5" />
            </a>
          )}
          {profile.linkedin && (
            <a
              aria-label="LinkedIn"
              href={profile.linkedin}
              className="transition-transform hover:scale-110"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          )}
          <a
            aria-label="Email"
            href={"mailto:" + profile.email}
            className="transition-transform hover:scale-110"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </motion.header>
  );
}
