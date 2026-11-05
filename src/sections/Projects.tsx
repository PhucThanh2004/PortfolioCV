import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Magnetic, Reveal, Tilt, ease } from "@/components/fx";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { profile, projects } from "@/data/portfolio";
import { cn } from "@/lib/utils";

function Mock({ mobile }: { mobile: boolean }) {
  const widths = [100, 72, 88, 56];
  return (
    <div className="flex aspect-[16/10] items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-denim-400 to-denim-800 p-5">
      <div
        className={cn(
          "overflow-hidden rounded-lg bg-sand-100 shadow-xl",
          mobile ? "aspect-[9/16] h-full" : "w-full",
        )}
      >
        <div className="flex gap-1 bg-sand-200 p-2">
          {[0, 1, 2].map((i) => (
            <i key={i} className="h-2 w-2 rounded-full bg-denim-500/40" />
          ))}
        </div>
        <div className="space-y-2 p-3">
          {widths.map((w, i) => (
            <motion.div
              key={i}
              style={{ width: w + "%" }}
              className="h-2 origin-left rounded bg-denim-500/30"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2 + i * 0.12, ease }}
            />
          ))}
          <motion.div
            className="h-10 origin-left rounded bg-denim-500/60"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.8, ease }}
          />
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <section
      id="projects"
      className="bg-denim-500 py-16 text-sand-100 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="font-condensed text-4xl font-bold leading-none tracking-tight text-sand-50 sm:text-6xl">
            DỰ ÁN
          </h2>
          <span className="mt-1 block font-condensed text-2xl tracking-wide text-sand-200 sm:text-3xl">
            XÂY DỰNG TỪ ĐẦU ĐẾN CUỐI
          </span>
          <p className="mt-3 text-xs text-sand-200/80 sm:text-sm">
            Hai dự án học thuật có backend Spring Boot, cơ sở dữ liệu riêng và
            giao diện hoàn chỉnh.
          </p>
        </Reveal>
        <div className="grid gap-8 md:grid-cols-2 lg:gap-10">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.12}>
              <Tilt className="h-full">
                <Card className="h-full">
                  <CardHeader>
                    {p.image ? (
                      <img
                        src={p.image}
                        alt={p.name}
                        className="mb-4 aspect-[10/14] w-full rounded-xl object-cover"
                      />
                    ) : (
                      <div className="mb-4">
                        <Mock mobile={p.type.includes("Android")} />
                      </div>
                    )}
                    <div className="flex items-start justify-between gap-4 border-b border-sand-200/20 pb-4">
                      <div>
                        <CardTitle>{p.name}</CardTitle>
                        <span className="text-xs font-semibold text-sand-300">
                          {p.subtitle}
                        </span>
                      </div>
                      <div className="text-right text-[11px] text-sand-200">
                        <div>{p.type}</div>
                        <div>{p.period}</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4 flex flex-wrap gap-2">
                      {p.tech.map((t) => (
                        <Badge key={t}>{t}</Badge>
                      ))}
                    </div>
                    <ul className="space-y-2 text-sm">
                      {p.highlights.map((h) => (
                        <li key={h} className="flex gap-2">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-sand-300" />
                          {h}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-5 rounded-xl border border-sand-200/10 bg-denim-700/80 p-4 text-xs italic text-sand-100">
                      <span className="font-bold not-italic text-sand-300">
                        Học được:{" "}
                      </span>
                      {p.learned}
                    </p>
                  </CardContent>
                </Card>
              </Tilt>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-14 flex flex-col items-center justify-between gap-6 rounded-2xl bg-sand-100 p-6 text-denim-800 shadow-xl sm:p-8 md:flex-row">
          <div className="flex items-center gap-4">
            <motion.span
              className="font-condensed text-3xl text-denim-600"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            >
              ✦
            </motion.span>
            <div>
              <h3 className="font-condensed text-xl font-bold tracking-tight sm:text-2xl">
                SẴN SÀNG THỰC TẬP. SẴN SÀNG HỌC HỎI. SẴN SÀNG ĐÓNG GÓP.
              </h3>
              <p className="mt-1 text-xs text-denim-600">
                Liên lạc cho mình để trao đổi về cơ hội thực tập.
              </p>
            </div>
          </div>
          <Magnetic>
            <Button asChild className="shrink-0">
              <a href={"mailto:" + profile.email}>LIÊN HỆ NGAY →</a>
            </Button>
          </Magnetic>
        </Reveal>
      </div>
    </section>
  );
}
