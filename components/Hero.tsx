"use client";

import { motion } from "motion/react";
import Wiggly from "./Wiggly";
import { PhiPsiFlag, GrillDad, SunhatMom } from "./Characters";

export default function Hero() {
  return (
    <header className="relative flex min-h-svh flex-col overflow-hidden">
      {/* top bar */}
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 16, delay: 0.2 }}
        className="flex items-center justify-between px-6 py-5 md:px-12"
      >
        <span className="font-display text-xl tracking-wide">ΦΚΨ</span>
        <span className="hidden font-semibold tracking-widest uppercase md:block text-sm">
          Washington &amp; Lee University
        </span>
        <a
          href="#shirt"
          className="rounded-full border-2 border-ink bg-tan px-4 py-1.5 text-sm font-bold tracking-wide uppercase transition hover:bg-cardinal hover:text-ivory"
        >
          Get the tee
        </a>
      </motion.nav>

      {/* headline */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 text-center">
        <Wiggly
          text="Phi Kappa Psi"
          className="font-script text-cardinal text-4xl md:text-6xl"
          delay={0.3}
          stagger={0.05}
        />
        <h1 className="mt-2 font-display uppercase leading-[0.92] text-[clamp(3.2rem,13vw,11rem)]">
          <Wiggly text="Parents" delay={0.55} stagger={0.045} />
          <br />
          <span className="relative inline-block">
            <Wiggly text="Weekend" delay={0.9} stagger={0.045} className="text-hunter" />
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, type: "spring", stiffness: 100, damping: 14 }}
          className="mt-6 max-w-md text-lg font-medium text-ink/70"
        >
          October 1&ndash;3 in Lexington, Virginia with the brothers of Phi Kappa Psi
          — a cookout, a darty, and a night at the mashup bar.
        </motion.p>

        <motion.a
          href="#plan"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.85, type: "spring", stiffness: 200, damping: 12 }}
          className="mt-8 rounded-full border-3 border-ink bg-ink px-8 py-3 font-display text-ivory uppercase tracking-wider transition hover:bg-cardinal"
        >
          See the plan ↓
        </motion.a>
      </div>

      {/* characters flanking the headline */}
      <motion.div
        initial={{ opacity: 0, x: -80, rotate: -10 }}
        animate={{ opacity: 1, x: 0, rotate: -4 }}
        transition={{ delay: 1.3, type: "spring", stiffness: 90, damping: 13 }}
        className="pointer-events-none absolute bottom-14 -left-4 w-36 md:left-[6%] md:w-56"
        style={{ "--bob-rot": "-4deg" } as React.CSSProperties}
      >
        <GrillDad className="bob w-full" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 80, rotate: 10 }}
        animate={{ opacity: 1, x: 0, rotate: 3 }}
        transition={{ delay: 1.45, type: "spring", stiffness: 90, damping: 13 }}
        className="pointer-events-none absolute bottom-14 -right-4 w-36 md:right-[6%] md:w-56"
        style={{ "--bob-rot": "3deg", animationDelay: "0.6s" } as React.CSSProperties}
      >
        <SunhatMom className="bob w-full" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, type: "spring", stiffness: 80, damping: 12 }}
        className="pointer-events-none absolute top-16 right-[12%] hidden w-28 lg:block"
      >
        <PhiPsiFlag className="bob w-full" />
      </motion.div>
    </header>
  );
}
