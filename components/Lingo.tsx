"use client";

import { motion } from "motion/react";
import Wiggly from "./Wiggly";

const TERMS = [
  {
    term: "Darty",
    say: "/dar·tee/",
    def: "Day + party. Same fun, but with sunscreen. Features cornhole, music, and actual conversations you can hear.",
    color: "bg-cardinal text-ivory",
  },
  {
    term: "The Haus",
    say: "/hows/",
    def: "The Phi Psi chapter house. Where your kid “lives” and where Thursday's cookout goes down.",
    color: "bg-hunter text-ivory",
  },
  {
    term: "Pumptown",
    say: "/pump·town/",
    def: "A small party house with an outsized legacy. Known for playing the throwback pop anthems everyone pretends not to know every word to.",
    color: "bg-tan text-ink",
  },
  {
    term: "Pole One",
    say: "/pohl won/",
    def: "The house by the river. Prime territory for BBQ, chilling, and pretending you might jump in the water (you won't).",
    color: "bg-sky text-ink",
  },
  {
    term: "Cookout",
    say: "/kook·out/",
    def: "Lunch, outside, off a grill. Burgers, BBQ, and someone's dad quietly taking over tongs duty within 20 minutes.",
    color: "bg-ink text-ivory",
  },
  {
    term: "Mashup Bar",
    say: "/mash·up bar/",
    def: "The Saturday finale where songs — and generations — get blended together. Parents welcome on the dance floor. Encouraged, even.",
    color: "bg-cardinal text-ivory",
  },
];

export default function Lingo() {
  return (
    <section className="border-y-3 border-ink bg-ivory-deep py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <div className="text-center">
          <Wiggly text="a glossary for parents" className="font-script text-4xl text-cardinal md:text-5xl" />
          <h2 className="mt-2 font-display uppercase leading-none text-[clamp(2.6rem,7vw,5.5rem)]">
            <Wiggly text="Learn The Lingo" />
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, type: "spring", stiffness: 110, damping: 14 }}
            className="mx-auto mt-4 max-w-md text-lg font-medium text-ink/70"
          >
            Study up now so you can nod knowingly all weekend.
          </motion.p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TERMS.map((t, i) => (
            <motion.div
              key={t.term}
              initial={{ opacity: 0, y: 40, rotate: i % 2 === 0 ? -4 : 4 }}
              whileInView={{ opacity: 1, y: 0, rotate: i % 2 === 0 ? -1 : 1 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{
                type: "spring",
                stiffness: 180,
                damping: 13,
                delay: (i % 3) * 0.12,
              }}
              whileHover={{ rotate: 0, scale: 1.03 }}
              className="rounded-2xl border-3 border-ink bg-ivory p-6 shadow-[6px_6px_0_#221d18]"
            >
              <div className="flex items-baseline justify-between gap-2">
                <span
                  className={`rounded-lg px-3 py-1 font-display text-xl uppercase tracking-wide ${t.color}`}
                >
                  {t.term}
                </span>
                <span className="font-script text-xl text-ink/50">{t.say}</span>
              </div>
              <p className="mt-4 text-base leading-relaxed font-medium text-ink/75">
                {t.def}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
