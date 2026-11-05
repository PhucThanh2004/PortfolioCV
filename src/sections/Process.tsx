import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Reveal } from "@/components/fx";
import { process } from "@/data/portfolio";

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 60%"],
  });

  // Tạo hiệu ứng lò xo cho đường line mượt mà hơn
  const springProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  // Ánh xạ tiến độ cuộn thành chiều dài đường path (từ 0 đến 1)
  const pathLength = useTransform(springProgress, [0, 1], [0, 1]);

  return (
    <section
      id="process"
      className="border-b border-denim-600/10 py-16 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <Reveal className="mb-14 text-center">
          <h2 className="font-condensed text-4xl font-bold tracking-tight text-denim-700 sm:text-5xl">
            QUY TRÌNH LÀM VIỆC
          </h2>
          <p className="mt-2 text-xs font-medium text-denim-600 sm:text-sm">
            Từ yêu cầu đến sản phẩm chạy được, theo từng bước rõ ràng.
          </p>
        </Reveal>

        <div className="grid items-center gap-8 md:grid-cols-12">
          {/* Vòng tròn END-TO-END */}
          <div className="flex justify-center md:col-span-5">
            <div className="relative flex h-64 w-64 items-center justify-center rounded-full bg-sand-100/40 sm:h-72 sm:w-72">
              <motion.div
                className="absolute inset-0 rounded-full border-4 border-dashed border-denim-500/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 40, ease: "linear", repeat: Infinity }}
              />
              <motion.div
                className="flex h-44 w-44 flex-col items-center justify-center rounded-full bg-denim-500 p-4 text-center text-sand-100 shadow-lg"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(59, 130, 246, 0.4)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <span className="font-condensed text-lg font-bold tracking-wider">
                  END-TO-END
                </span>
                <span className="text-[11px] text-sand-200">
                  Backend + Frontend
                </span>
              </motion.div>
            </div>
          </div>

          {/* Cột quy trình */}
          <div ref={ref} className="relative space-y-4 md:col-span-7">
            {/* Đường line nền (tĩnh) */}
            <div className="absolute bottom-6 left-[1.9rem] top-6 w-0.5 bg-denim-600/10" />

            {/* Đường line động (được "vẽ" theo scroll) - Sử dụng SVG path */}
            <svg
              className="absolute bottom-6 left-[1.9rem] top-6 w-0.5 overflow-visible"
              viewBox="0 0 2 100" // viewBox hẹp để path chỉ là một đường thẳng
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <motion.path
                d="M 1 0 L 1 100"
                stroke="var(--color-denim-500)" // Giả sử bạn có CSS variable, hoặc dùng mã màu trực tiếp
                strokeWidth="2"
                fill="none"
                style={{ pathLength }}
              />
            </svg>

            {/* Danh sách các bước */}
            <motion.ul
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.1 } },
              }}
              className="relative"
            >
              {process.map((s, i) => (
                <motion.li
                  key={s.title}
                  variants={{
                    hidden: { opacity: 0, x: 40 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: {
                        type: "spring",
                        stiffness: 100,
                        damping: 15,
                      },
                    },
                  }}
                  className="relative flex items-start rounded-xl border border-denim-600/10 bg-sand-100/70 p-4 shadow-sm transition-shadow hover:shadow-md"
                >
                  <motion.span
                    variants={{
                      hidden: { scale: 0 },
                      visible: {
                        scale: 1,
                        transition: {
                          type: "spring",
                          stiffness: 300,
                          damping: 20,
                        },
                      },
                    }}
                    className="mr-4 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-sand-200 font-condensed text-xl font-bold text-denim-500"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </motion.span>
                  <div>
                    <h3 className="font-condensed text-lg font-bold tracking-wide text-denim-700">
                      {s.title}
                    </h3>
                    <p className="mt-1 text-xs text-denim-700/80">{s.text}</p>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </div>
    </section>
  );
}
