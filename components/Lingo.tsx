"use client";

import { motion } from "motion/react";
import Wiggly from "./Wiggly";

const TERMS = [
  {
    term: "Darty",
    say: "/dar·tee/",
    def: "Day + party. The same party, moved to the afternoon — cornhole, music, and sunshine.",
    color: "bg-cardinal text-ivory",
  },
  {
    term: "The Haus",
    say: "/hows/",
    def: "The Phi Psi chapter house — home base for the brothers, Thursday's cookout, and Saturday's Mashup Bar.",
    color: "bg-hunter text-ivory",
  },
  {
    term: "Pumptown",
    say: "/pump·town/",
    def: "A small party house with an outsized reputation, known for its sing-along pop playlists.",
    color: "bg-tan text-ink",
  },
  {
    term: "Pole One",
    say: "/pohl won/",
    def: "The house down by the river — the go-to spot for BBQ and taking it easy.",
    color: "bg-sky text-ink",
  },
  {
    term: "Cookout",
    say: "/kook·out/",
    def: "Lunch outdoors, off the grill: burgers, BBQ, and lawn chairs.",
    color: "bg-ink text-ivory",
  },
  {
    term: "Mashup Bar",
    say: "/mash·up bar/",
    def: "Saturday's closer — mashed-up music with parents and students on the same dance floor.",
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
            The terms you&rsquo;ll hear all weekend, translated.
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
