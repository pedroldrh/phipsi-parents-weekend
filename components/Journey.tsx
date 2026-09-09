"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import Wiggly from "./Wiggly";
import {
  GrillDad,
  CornholeKid,
  DancingPair,
  PancakeStack,
  Burger,
  SunhatMom,
} from "./Characters";

type Stop = {
  n: string;
  day: string;
  when: string;
  title: string;
  place: string;
  placeNote: string;
  desc: string;
  tbd?: boolean;
  accent: string;
  art: React.ReactNode;
  connector?: string;
};

const STOPS: Stop[] = [
  {
    n: "01",
    day: "Thu · Oct 1",
    when: "Lunchtime",
    title: "The Cookout",
    place: "The Haus",
    placeNote: "a.k.a. the Phi Psi house",
    desc: "We open the weekend with burgers and BBQ on the lawn at the house. Come hungry — it's the best chance to meet the brothers and the other families.",
    accent: "text-hunter",
    art: (
      <div className="relative">
        <GrillDad className="bob w-44 md:w-64" />
        <Burger
          className="bob absolute -right-10 bottom-2 w-24 md:w-32"
          style={{ animationDelay: "0.8s" }}
        />
      </div>
    ),
    connector: "day one, done →",
  },
  {
    n: "02",
    day: "Fri · Oct 2",
    when: "Daytime",
    title: "The Darty",
    place: "Pumptown",
    placeNote: "a small party house",
    desc: "A party in the daylight: cornhole boards out, music on, drinks in the cooler. Outdoors, low-key, and easy to enjoy — parents are very welcome on the boards. Still pencilled in, hence the question mark.",
    tbd: true,
    accent: "text-cardinal",
    art: <CornholeKid className="bob w-44 md:w-64" />,
    connector: "one more day →",
  },
  {
    n: "03",
    day: "Sat · Oct 3",
    when: "Morning",
    title: "Parents Breakfast",
    place: "TBD",
    placeNote: "time & place coming soon",
    desc: "A sit-down breakfast with the parents before the last day kicks off. Still being confirmed — hence the question mark.",
    tbd: true,
    accent: "text-tan",
    art: <PancakeStack className="bob w-40 md:w-56" />,
    connector: "then back to the Haus →",
  },
  {
    n: "04",
    day: "Sat · Oct 3",
    when: "Afternoon → Night",
    title: "The Mashup Bar",
    place: "The Haus",
    placeNote: "back where the weekend started",
    desc: "The finale: everyone back together at the house. BBQ, music, and parents and students on the same dance floor to close out the weekend.",
    accent: "text-sky",
    art: (
      <div className="relative">
        <DancingPair className="bob w-56 md:w-80" />
        <SunhatMom
          className="bob absolute -left-16 bottom-0 hidden w-32 md:block"
          style={{ animationDelay: "1.1s" }}
        />
      </div>
    ),
  },
];

function StopScene({ stop, i }: { stop: Stop; i: number }) {
  const flip = i % 2 === 1;
  return (
    <div className="relative">
      {/* stop marker on the line */}
      <div className="absolute left-8 top-10 z-10 -translate-x-1/2 md:left-1/2">
        <motion.div
          initial={{ scale: 0, rotate: -120 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true, margin: "-20% 0px" }}
          transition={{ type: "spring", stiffness: 260, damping: 12 }}
          className="flex h-16 w-16 items-center justify-center rounded-full border-3 border-ink bg-cardinal font-display text-ivory shadow-[4px_4px_0_#221d18]"
        >
          {stop.n}
        </motion.div>
      </div>

      <section className="mx-auto grid min-h-[90svh] max-w-6xl grid-cols-1 items-center gap-8 px-6 py-24 pl-16 md:grid-cols-2 md:gap-0 md:px-12 md:pl-12">
        {/* text block */}
        <div className={`${flip ? "md:order-2 md:pl-20" : "md:pr-20"}`}>
          <motion.div
            initial={{ opacity: 0, x: flip ? 30 : -30, rotate: flip ? 2 : -2 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ type: "spring", stiffness: 150, damping: 15 }}
            className="mb-4 inline-flex items-center gap-3"
          >
            <span className="rounded-full border-2 border-ink bg-ink px-4 py-1 font-display text-sm uppercase tracking-widest text-ivory">
              {stop.day}
            </span>
            <span className="font-script text-2xl text-cardinal">{stop.when}</span>
          </motion.div>

          <h3 className="font-display uppercase leading-[0.95] text-[clamp(1.9rem,7.5vw,5rem)]">
            <Wiggly text={stop.title} className={stop.accent} />
            {stop.tbd && (
              <motion.span
                initial={{ opacity: 0, scale: 0, rotate: 40 }}
                whileInView={{ opacity: 1, scale: 1.4, rotate: 12 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, type: "spring", stiffness: 300, damping: 9 }}
                className="ml-3 inline-block text-cardinal"
              >
                ?
              </motion.span>
            )}
          </h3>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ delay: 0.25, type: "spring", stiffness: 120, damping: 14 }}
          >
            <p className="mt-3 font-display text-xl">
              📍 {stop.place}
              <span className="ml-2 font-body text-base font-medium text-ink/60 normal-case">
                — {stop.placeNote}
              </span>
            </p>
            <p className="mt-5 max-w-md text-lg leading-relaxed font-medium text-ink/75">
              {stop.desc}
            </p>
          </motion.div>
        </div>

        {/* art block */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7, rotate: flip ? -8 : 8 }}
          whileInView={{ opacity: 1, scale: 1, rotate: flip ? -2 : 2 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ type: "spring", stiffness: 120, damping: 12, delay: 0.15 }}
          className={`flex justify-center ${flip ? "md:order-1" : ""}`}
        >
          <div className="rounded-3xl border-3 border-ink bg-ivory-deep p-10 shadow-[8px_8px_0_#221d18] md:p-14">
            {stop.art}
          </div>
        </motion.div>
      </section>

      {stop.connector && (
        <motion.p
          initial={{ opacity: 0, rotate: 0 }}
          whileInView={{ opacity: 1, rotate: -3 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 150, damping: 14 }}
          className="relative z-10 mx-auto w-fit max-w-[80vw] rounded-lg border-2 border-dashed border-ink/40 bg-ivory px-5 py-2 font-script text-2xl text-ink/60"
        >
          {stop.connector}
        </motion.p>
      )}
    </div>
  );
}

export default function Journey() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end end"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 80, damping: 20 });

  return (
    <div id="plan" ref={ref} className="relative">
      {/* section intro */}
      <div className="mx-auto max-w-4xl px-6 pt-28 pb-10 text-center">
        <Wiggly text="the plan" className="font-script text-4xl text-cardinal md:text-5xl" unit="word" />
        <h2 className="mt-2 font-display uppercase leading-none text-[clamp(2.1rem,8.5vw,6.5rem)]">
          <Wiggly text="Three Days." />
          <br />
          <Wiggly text="Four Stops." className="text-hunter" delay={0.3} />
        </h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, type: "spring", stiffness: 100, damping: 14 }}
          className="mx-auto mt-6 max-w-md text-lg font-medium text-ink/70"
        >
          Scroll through the weekend, stop by stop.
        </motion.p>
      </div>

      {/* the route line */}
      <div className="pointer-events-none absolute top-[31rem] bottom-24 left-8 -translate-x-1/2 md:left-1/2">
        <div className="h-full w-1 rounded bg-ink/15 [background-image:repeating-linear-gradient(to_bottom,transparent,transparent_10px,#f6f0df_10px,#f6f0df_20px)]" />
        <motion.div
          style={{ scaleY: progress }}
          className="absolute inset-0 w-1 origin-top rounded bg-cardinal"
        />
      </div>

      {STOPS.map((stop, i) => (
        <StopScene key={stop.n} stop={stop} i={i} />
      ))}

      {/* finish line */}
      <div className="relative z-10 mx-auto w-fit px-6 pb-28 pt-10 text-center">
        <motion.div
          initial={{ scale: 0, rotate: 30 }}
          whileInView={{ scale: 1, rotate: -3 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
          className="rounded-2xl border-3 border-ink bg-hunter px-8 py-5 font-display text-2xl uppercase tracking-wide text-ivory shadow-[6px_6px_0_#221d18]"
        >
          That&rsquo;s the weekend.
        </motion.div>
      </div>
    </div>
  );
}
