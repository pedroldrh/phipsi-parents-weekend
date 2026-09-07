"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "motion/react";
import Wiggly from "./Wiggly";

const Shirt = dynamic(() => import("./Shirt"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full items-center justify-center font-script text-3xl text-ink/40">
      loading the tee…
    </div>
  ),
});

export default function ShirtSection() {
  const [side, setSide] = useState<"front" | "back">("back");

  return (
    <section id="shirt" className="relative overflow-hidden py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2 md:px-12">
        {/* copy */}
        <div>
          <Wiggly text="the merch" className="font-script text-4xl text-cardinal md:text-5xl" />
          <h2 className="mt-2 font-display uppercase leading-[0.95] text-[clamp(2.2rem,7vw,5.2rem)]">
            <Wiggly text="The Weekend" />
            <br />
            <Wiggly text="Tee" className="text-hunter" delay={0.35} />
          </h2>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ delay: 0.5, type: "spring", stiffness: 120, damping: 14 }}
          >
            <p className="mt-6 max-w-md text-lg leading-relaxed font-medium text-ink/75">
              The official Parents Weekend shirt: ΦΚΨ on the pocket, and the
              full scene — the house, cornhole, and the parents themselves —
              printed across the back. Drag to spin it and see both sides.
            </p>
            <ul className="mt-6 space-y-2 text-base font-semibold">
              <li className="flex items-center gap-3">
                <span className="h-3 w-3 rounded-full border-2 border-ink bg-white" />
                Comfort Colors heavyweight pocket tee — White
              </li>
              <li className="flex items-center gap-3">
                <span className="h-3 w-3 rounded-full border-2 border-ink bg-cardinal" />
                Front: ΦΚΨ Parent&rsquo;s Weekend on the pocket
              </li>
              <li className="flex items-center gap-3">
                <span className="h-3 w-3 rounded-full border-2 border-ink bg-hunter" />
                Back: Parent&rsquo;s Weekend scene, Phi Psi 2026
              </li>
            </ul>
            <a
              href="https://group-orders.freshprints.com/store?id=189691"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block -rotate-2 rounded-xl border-3 border-ink bg-tan px-6 py-3 font-display uppercase tracking-wide shadow-[5px_5px_0_#221d18] transition hover:bg-cardinal hover:text-ivory"
            >
              Order the tee →
            </a>
            <p className="mt-4 text-sm font-semibold text-ink/60">
              Orders go through Fresh Prints. Also available at Thursday&rsquo;s cookout.
            </p>
          </motion.div>
        </div>

        {/* 3D viewer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, rotate: 3 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ type: "spring", stiffness: 100, damping: 14 }}
          className="relative"
        >
          <div className="relative h-[480px] rounded-3xl border-3 border-ink bg-gradient-to-b from-sky/60 to-ivory-deep shadow-[8px_8px_0_#221d18] md:h-[560px]">
            <Shirt side={side} />
            <span className="pointer-events-none absolute top-4 left-1/2 -translate-x-1/2 rounded-full bg-ink/80 px-4 py-1 text-xs font-bold tracking-widest text-ivory uppercase">
              drag to spin
            </span>
          </div>
          {/* front / back toggle */}
          <div className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 overflow-hidden rounded-full border-3 border-ink bg-ivory shadow-[4px_4px_0_#221d18]">
            {(["front", "back"] as const).map((s) => (
              <button
                key={s}
                onClick={() => setSide(s)}
                className={`px-7 py-2.5 font-display text-sm uppercase tracking-widest transition-colors ${
                  side === s ? "bg-cardinal text-ivory" : "hover:bg-ivory-deep"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
