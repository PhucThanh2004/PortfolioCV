import { CountUp, Reveal, Tilt } from "@/components/fx";
import { Badge } from "@/components/ui/badge";
import { profile, stackHighlights, stats } from "@/data/portfolio";

export function About() {
  return (
    <section id="about" className="bg-denim-500 py-16 text-sand-100 md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 sm:px-6 md:grid-cols-12 lg:gap-12 lg:px-8">
        <div className="space-y-6 md:col-span-7">
          <Reveal><h2 className="font-condensed text-4xl font-bold tracking-tight text-sand-50 sm:text-5xl lg:text-6xl">Xin chào, mình là {profile.shortName}</h2></Reveal>
          <Reveal delay={0.1}><p className="max-w-xl text-sm leading-relaxed text-sand-100/90 sm:text-base">{profile.about}</p></Reveal>
          <Reveal delay={0.2}>
            <p className="max-w-xl text-sm font-medium text-sand-200 sm:text-base">Mình tin phần mềm tốt là phần mềm chạy ổn định, dễ bảo trì.</p>
          </Reveal>
          <Reveal delay={0.25} className="grid grid-cols-3 gap-4 border-t border-sand-200/20 pt-4">
            {stats.map((s) => (
              <div key={s.label}>
                <span className="block font-condensed text-3xl font-bold text-sand-50 sm:text-4xl lg:text-5xl"><CountUp to={s.to} decimals={s.decimals} suffix={s.suffix} /></span>
                <span className="block font-condensed text-[10px] leading-tight tracking-wider text-sand-200 sm:text-xs">{s.label}</span>
              </div>
            ))}
          </Reveal>
          <Reveal delay={0.3} className="pt-4">
            <span className="mb-3 block font-condensed text-[10px] font-semibold tracking-widest text-sand-300">CÔNG NGHỆ CHÍNH</span>
            <div className="flex flex-wrap gap-2 rounded-xl border border-sand-200/10 bg-denim-600/60 p-4">
              {stackHighlights.map((t) => <Badge key={t} className="bg-sand-200/90">{t}</Badge>)}
            </div>
          </Reveal>
        </div>
        <Reveal x={40} y={0} className="flex justify-center md:col-span-5">
          <Tilt className="w-full max-w-sm">
            <div className="rounded-2xl border border-sand-200/20 bg-denim-600/50 p-2 shadow-[0_10px_25px_-5px_rgba(25,35,49,0.35)]">
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
                <img src={profile.avatar} alt={profile.name} className="h-full w-full object-cover object-top" />
                <span className="absolute bottom-4 right-4 -rotate-6 font-script text-3xl text-sand-100 drop-shadow-md sm:text-4xl">nice to meet you ~</span>
              </div>
            </div>
          </Tilt>
        </Reveal>
      </div>
    </section>
  );
}
