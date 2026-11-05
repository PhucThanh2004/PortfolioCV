import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Container,
  Database,
  GitBranch,
  Coffee,
  LayoutTemplate,
  type LucideIcon,
} from "lucide-react";
import { CountUp, Reveal, ease } from "@/components/fx";
import { Badge } from "@/components/ui/badge";
import { skillGroups, skillNotes } from "@/data/portfolio";

const icons: Record<string, LucideIcon> = {
  Java: Coffee,
  "Front-end": LayoutTemplate,
  Database,
  "Version Control": GitBranch,
  DevOps: Container,
};
const total = new Set(skillGroups.flatMap((g) => g.items)).size;

export function Skills() {
  const [active, setActive] = useState(0);
  const g = skillGroups[active];
  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-10 text-center md:text-left">
          <h2 className="font-condensed text-5xl font-bold tracking-tight text-denim-700 sm:text-6xl md:text-7xl">
            KỸ NĂNG
          </h2>
        </Reveal>
        <div className="grid items-start gap-8 md:grid-cols-12">
          <div className="space-y-3 md:col-span-4" role="tablist">
            {skillGroups.map((s, i) => {
              const Icon = icons[s.title];
              return (
                <button
                  key={s.title}
                  role="tab"
                  aria-selected={i === active}
                  onClick={() => setActive(i)}
                  className="relative flex w-full items-center gap-3 rounded-lg px-5 py-3 text-left font-condensed text-lg font-semibold tracking-wide text-sand-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-denim-800"
                >
                  <span className="absolute inset-0 rounded-lg bg-denim-500/70" />
                  {i === active && (
                    <motion.span
                      layoutId="skill-pill"
                      className="absolute inset-0 rounded-lg bg-denim-700 shadow-lg"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 32,
                      }}
                    />
                  )}
                  <Icon className="relative h-5 w-5 opacity-80" />
                  <span className="relative">{s.title}</span>
                </button>
              );
            })}
          </div>
          <div className="min-h-[18rem] md:col-span-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={g.title}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4, ease }}
                className="rounded-2xl border-4 border-sand-100 bg-denim-500 p-6 text-sand-50 shadow-xl"
              >
                <h3 className="font-condensed text-3xl font-bold tracking-wide">
                  {g.title}
                </h3>
                <p className="mt-2 text-sm text-sand-200">
                  {skillNotes[g.title]}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {g.items.map((t, i) => (
                    <motion.span
                      key={t}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        delay: 0.15 + i * 0.06,
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                    >
                      <Badge className="bg-sand-200 px-3 py-1.5 text-sm">
                        {t}
                      </Badge>
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          <Reveal delay={0.15} className="space-y-4 md:col-span-4">
            <h3 className="font-condensed text-2xl font-bold leading-tight text-denim-700 sm:text-3xl">
              Nền tảng vững, học nhanh, làm đúng hạn.
            </h3>
            <p className="font-script text-2xl leading-snug text-denim-600">
              Clean code, clear APIs, and a habit of finishing what I start.
            </p>
            <p className="text-xs leading-relaxed text-denim-700/80 sm:text-sm">
              Mình làm việc từ thiết kế cơ sở dữ liệu, xây dựng API đến dựng
              giao diện, nên hiểu cách các phần ghép lại với nhau.
            </p>
          </Reveal>
        </div>
        <Reveal className="mt-12 grid grid-cols-1 divide-y divide-sand-200/20 rounded-xl bg-denim-500 p-4 text-center text-sand-50 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:p-6">
          {[
            { to: 2, l: "Dự án hoàn thành" },
            { to: total, l: "Công nghệ sử dụng" },
            { to: 2022, l: "Năm bắt đầu học Công nghệ Thông tin" },
          ].map((m) => (
            <div key={m.l} className="py-2 sm:py-0">
              <span className="block font-condensed text-2xl font-bold sm:text-3xl">
                <CountUp to={m.to} />
              </span>
              <span className="text-[11px] uppercase tracking-wider text-sand-200">
                {m.l}
              </span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
