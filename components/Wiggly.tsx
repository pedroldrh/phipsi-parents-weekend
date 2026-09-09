"use client";

import { motion } from "motion/react";

type WigglyProps = {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  once?: boolean;
  /**
   * "letter" (default) animates each character. Use "word" for connected
   * script faces (Yellowtail) — splitting those per letter breaks the
   * joining strokes and makes the text illegible, especially on mobile.
   */
  unit?: "letter" | "word";
};

/**
 * Copula-style text reveal: each letter springs up with a slight
 * over-rotated wiggle as it scrolls into view. Words are kept
 * unbreakable so lines never wrap mid-word.
 */
export default function Wiggly({
  text,
  className,
  delay = 0,
  stagger = 0.032,
  once = true,
  unit = "letter",
}: WigglyProps) {
  const words = text.split(" ");
  let letterIndex = 0;
  const pieces = (word: string, isLast: boolean) => {
    const chunk = isLast ? word : word + " ";
    return unit === "word" ? [chunk] : Array.from(chunk);
  };
  return (
    <span className={className} aria-label={text} role="text">
      {words.map((word, w) => (
        <span key={w} aria-hidden className="inline-block whitespace-nowrap">
          {Array.from(w < words.length - 1 ? word + " " : word).map((ch) => {
            const i = letterIndex++;
            return (
              <motion.span
                key={i}
                className="inline-block whitespace-pre will-change-transform"
                initial={{
                  opacity: 0,
                  y: "0.7em",
                  rotate: i % 2 === 0 ? -14 : 12,
                  scale: 0.7,
                }}
                whileInView={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
                viewport={{ once, margin: "-12% 0px -12% 0px" }}
                transition={{
                  type: "spring",
                  stiffness: 320,
                  damping: 11,
                  mass: 0.7,
                  delay: delay + i * (unit === "word" ? stagger * 3 : stagger),
                }}
              >
                {ch}
              </motion.span>
            );
          })}
        </span>
      ))}
    </span>
  );
}
