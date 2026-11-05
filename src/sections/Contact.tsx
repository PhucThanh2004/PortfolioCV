import { motion } from "framer-motion";
import { Check, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { CountUp, Reveal, ease } from "@/components/fx";
import { education, profile, strengths } from "@/data/portfolio";

export function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-10 text-center">
          <h2 className="font-condensed text-5xl font-bold tracking-tight text-denim-700 sm:text-6xl">HỌC VẤN & LIÊN HỆ</h2>
        </Reveal>
        <div className="rounded-2xl bg-denim-500 p-6 text-sand-100 sm:p-10">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <Reveal className="rounded-xl border border-sand-200/10 bg-denim-600/50 p-6 lg:col-span-7">
              <div className="flex flex-col items-center gap-6 sm:flex-row">
                <div className="relative h-36 w-36 shrink-0">
                  <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90">
                    <circle cx="60" cy="60" r="52" fill="none" stroke="rgba(238,221,191,0.15)" strokeWidth="8" />
                    <motion.circle cx="60" cy="60" r="52" fill="none" stroke="#EEDDBF" strokeWidth="8" strokeLinecap="round" initial={{ pathLength: 0 }} whileInView={{ pathLength: 0.808 }} viewport={{ once: true }} transition={{ duration: 1.8, ease }} />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="font-condensed text-3xl font-bold text-sand-50"><CountUp to={8.08} decimals={2} /></span>
                    <span className="text-[10px] text-sand-300">GPA / 10</span>
                  </div>
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="font-condensed text-xl font-bold tracking-wide text-sand-50 sm:text-2xl">{education.school}</h3>
                  <p className="mt-1 text-sm text-sand-200">{education.major} · {education.period}</p>
                  <p className="text-sm text-sand-200">{education.details[1]}</p>
                </div>
              </div>
              <ul className="mt-6 space-y-2 border-t border-sand-200/10 pt-5 text-sm">
                {strengths.map((s) => <li key={s} className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-sand-300" />{s}</li>)}
              </ul>
            </Reveal>
            <Reveal delay={0.1} className="space-y-4 lg:col-span-5">
              {[
                { Icon: Mail, text: profile.email, href: "mailto:" + profile.email },
                { Icon: Phone, text: profile.phone, href: "tel:" + profile.phone },
                { Icon: MapPin, text: profile.location },
                ...(profile.github ? [{ Icon: Github, text: "GitHub", href: profile.github }] : []),
                ...(profile.linkedin ? [{ Icon: Linkedin, text: "LinkedIn", href: profile.linkedin }] : []),
              ].map(({ Icon, text, href }) => {
                const inner = (<><span className="flex h-10 w-10 items-center justify-center rounded-full bg-sand-100 text-denim-700"><Icon className="h-5 w-5" /></span><span className="text-sm">{text}</span></>);
                const cls = "flex items-center gap-4 rounded-xl border border-sand-200/10 bg-denim-600/60 p-4";
                return href ? <motion.a key={text} href={href} whileHover={{ x: 6 }} className={cls}>{inner}</motion.a> : <div key={text} className={cls}>{inner}</div>;
              })}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
