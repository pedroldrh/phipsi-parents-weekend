"use client";

import Wiggly from "./Wiggly";
import { PhiPsiFlag } from "./Characters";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink py-24 text-ivory">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <PhiPsiFlag className="bob mx-auto w-24" />
        <h2 className="mt-6 font-display uppercase leading-none text-[clamp(2.4rem,7vw,5rem)]">
          <Wiggly text="See You There" />
        </h2>
        <p className="mt-4 font-script text-3xl text-tan">
          Thursday → Saturday · Lexington, Virginia
        </p>
        <p className="mx-auto mt-6 max-w-md text-base font-medium text-ivory/60">
          Questions or dietary notes? Reach out to your student, or ask any of
          the brothers at the cookout.
        </p>
        <div className="mt-10 flex items-center justify-center gap-6 font-display text-sm uppercase tracking-widest text-ivory/50">
          <span>ΦΚΨ</span>
          <span className="text-cardinal">✶</span>
          <span>Washington &amp; Lee</span>
          <span className="text-cardinal">✶</span>
          <span>Est. 1855</span>
        </div>
      </div>
    </footer>
  );
}
