import { useEffect, useRef, type ReactNode } from "react";
import { animate, motion, useInView, useMotionValue, useScroll, useSpring } from "framer-motion";

export const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

/** Hiện dần + trượt lên + hết mờ khi cuộn tới. */
export function Reveal({ children, delay = 0, y = 32, x = 0, className }: { children: ReactNode; delay?: number; y?: number; x?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, x, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, x: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

/** Đếm số từ 0 tới giá trị khi xuất hiện trong khung nhìn. */
export function CountUp({ to, decimals = 0, suffix = "" }: { to: number; decimals?: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView) return;
    const c = animate(0, to, {
      duration: 1.8,
      ease,
      onUpdate: (v) => { if (ref.current) ref.current.textContent = v.toFixed(decimals) + suffix; },
    });
    return () => c.stop();
  }, [inView, to, decimals, suffix]);
  return <span ref={ref}>{(0).toFixed(decimals) + suffix}</span>;
}

/** Nút "hút" theo con trỏ chuột. */
export function Magnetic({ children }: { children: ReactNode }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 16 });
  const sy = useSpring(y, { stiffness: 220, damping: 16 });
  return (
    <motion.div
      className="inline-block"
      style={{ x: sx, y: sy }}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - r.left - r.width / 2) * 0.3);
        y.set((e.clientY - r.top - r.height / 2) * 0.3);
      }}
      onMouseLeave={() => { x.set(0); y.set(0); }}
    >
      {children}
    </motion.div>
  );
}

/** Nghiêng 3D nhẹ theo vị trí chuột. */
export function Tilt({ children, className }: { children: ReactNode; className?: string }) {
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 150, damping: 15 });
  const sry = useSpring(ry, { stiffness: 150, damping: 15 });
  return (
    <motion.div
      className={className}
      style={{ rotateX: srx, rotateY: sry, transformPerspective: 900 }}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        ry.set(((e.clientX - r.left) / r.width - 0.5) * 8);
        rx.set(-((e.clientY - r.top) / r.height - 0.5) * 8);
      }}
      onMouseLeave={() => { rx.set(0); ry.set(0); }}
    >
      {children}
    </motion.div>
  );
}

/** Dải chữ chạy ngang vô tận. */
export function Marquee({ items }: { items: string[] }) {
  const list = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-denim-600/10 bg-denim-600 py-4 text-sand-100" aria-hidden>
      <motion.div className="flex w-max gap-10" animate={{ x: ["0%", "-50%"] }} transition={{ duration: 28, ease: "linear", repeat: Infinity }}>
        {list.map((t, i) => (
          <span key={i} className="flex items-center gap-10 font-condensed text-3xl font-bold tracking-wider">
            {t} <span className="text-sand-300">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

/** Thanh tiến trình cuộn trang. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  return <motion.div style={{ scaleX }} className="absolute inset-x-0 top-0 h-[3px] origin-left bg-denim-500" />;
}
