import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Magnetic, ease } from "@/components/fx";
import { profile } from "@/data/portfolio";

function Letters({ text }: { text: string }) {
  return (
    <span className="inline-flex overflow-hidden px-2 py-3" aria-label={text}>
      {text.split("").map((c, i) => (
        <motion.span
          key={i}
          aria-hidden
          className="inline-block"
          initial={{ y: "115%" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 + i * 0.07, ease }}
        >
          {c}
        </motion.span>
      ))}
    </span>
  );
}

export function Hero() {
  const { scrollY } = useScroll();
  const textScale = useTransform(scrollY, [0, 600], [1, 1.08]);
  const textY = useTransform(scrollY, [0, 600], [0, 60]);
  const personY = useTransform(scrollY, [0, 600], [0, -40]);

  return (
    <section className="relative overflow-hidden border-b border-denim-600/10">
      <div className="relative mx-auto flex h-[540px] max-w-[1600px] items-center justify-center sm:h-[640px] lg:h-[min(80svh,780px)]">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="absolute left-4 top-6 font-condensed text-base font-bold tracking-wider text-denim-600 sm:left-8 md:text-2xl"
        >
          {profile.role}
        </motion.span>

        <motion.h1
          style={{ scale: textScale, y: textY }}
          className="select-none whitespace-nowrap font-condensed text-[length:min(21vw,19rem)] font-bold leading-[0.85] tracking-tighter text-denim-600"
        >
          <Letters text="PORTFOLIO" />
        </motion.h1>

        {/* Người cắt nền, đứng giữa và đè lên chữ */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 flex h-[94%] justify-center sm:h-[96%]">
          <motion.div style={{ y: personY }} className="relative h-full">
            <div className="absolute -bottom-1 left-1/2 h-5 w-[70%] -translate-x-1/2 rounded-[50%] bg-denim-900/30 blur-md" />
            <motion.img
              src="/avatar-cutout.jpg"
              alt={profile.name}
              initial={{ clipPath: "inset(100% 0 0 0)", y: 60 }}
              animate={{ clipPath: "inset(0% 0 0 0)", y: 0 }}
              transition={{ duration: 1.4, delay: 0.55, ease }}
              className="relative h-full w-auto max-w-none object-contain drop-shadow-[0_18px_24px_rgba(25,35,49,0.28)]"
            />
          </motion.div>
        </div>
      </div>

      {/* Thông tin bên dưới, cân đối hai bên */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3, duration: 0.8, ease }}
        className="mx-auto grid max-w-6xl items-center gap-6 px-4 pb-14 pt-8 text-center sm:px-6 md:grid-cols-2 md:pb-16 md:text-left lg:px-8"
      >
        <p className="max-w-md text-sm font-semibold leading-relaxed text-denim-700 md:text-base md:justify-self-start">
          {profile.tagline}
        </p>
        <div className="flex flex-col items-center gap-4 md:items-end">
          <span className="inline-flex items-center rounded-full border border-denim-600/20 bg-sand-200/60 px-3 py-1 text-xs font-semibold text-denim-600">
            <span className="mr-2 h-2 w-2 animate-pulse rounded-full bg-emerald-600" />
            Đang tìm vị trí Fresher Backend Developer/Intern Developer
          </span>
          <div className="flex gap-3">
            <Magnetic>
              <Button asChild>
                <a href="#projects">XEM DỰ ÁN</a>
              </Button>
            </Magnetic>
            <Magnetic>
              <Button asChild variant="outline">
                <a href="#contact">LIÊN HỆ</a>
              </Button>
            </Magnetic>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
