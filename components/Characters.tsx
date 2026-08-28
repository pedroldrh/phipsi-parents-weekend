/* Flat illustrated characters — big shapes, flat palette, tiny faces.
   Palette pulled from the shirt print: cardinal, hunter, tan, sky, ivory. */

const INK = "#221d18";
const CARDINAL = "#bf1e2e";
const HUNTER = "#3d6b4f";
const TAN = "#d9a566";
const SKY = "#a8cfe4";
const IVORY = "#f6f0df";
const SKIN_A = "#e8b98a";
const SKIN_B = "#8a5a3b";

type CharProps = { className?: string; style?: React.CSSProperties };

/** Dad at the grill: green polo, khakis, spatula raised. */
export function GrillDad({ className, style }: CharProps) {
  return (
    <svg viewBox="0 0 220 320" className={className} style={style} aria-hidden>
      {/* spatula arm up */}
      <rect x="150" y="60" width="14" height="90" rx="7" fill={HUNTER} transform="rotate(24 157 105)" />
      <rect x="178" y="34" width="10" height="34" rx="5" fill={INK} transform="rotate(24 183 51)" />
      <rect x="170" y="16" width="26" height="24" rx="5" fill={TAN} transform="rotate(24 183 28)" />
      {/* legs */}
      <rect x="78" y="200" width="26" height="92" rx="13" fill={TAN} />
      <rect x="116" y="200" width="26" height="92" rx="13" fill={TAN} />
      <rect x="70" y="284" width="42" height="18" rx="9" fill={INK} />
      <rect x="110" y="284" width="42" height="18" rx="9" fill={INK} />
      {/* polo body */}
      <path d="M70 130 q40 -26 80 0 l8 84 q-48 14 -96 0 Z" fill={HUNTER} />
      {/* left arm on hip */}
      <rect x="52" y="132" width="14" height="72" rx="7" fill={HUNTER} transform="rotate(14 59 168)" />
      <circle cx="52" cy="204" r="9" fill={SKIN_A} />
      {/* collar */}
      <path d="M96 122 l14 16 14 -16 z" fill={IVORY} />
      {/* head */}
      <circle cx="110" cy="94" r="30" fill={SKIN_A} />
      {/* cap */}
      <path d="M80 88 a30 30 0 0 1 60 0 z" fill={CARDINAL} />
      <rect x="104" y="80" width="44" height="10" rx="5" fill={CARDINAL} />
      {/* face */}
      <circle cx="102" cy="98" r="2.6" fill={INK} />
      <circle cx="122" cy="98" r="2.6" fill={INK} />
      <path d="M106 110 q6 5 12 0" stroke={INK} strokeWidth="2.5" fill="none" strokeLinecap="round" />
      {/* mustache */}
      <path d="M103 106 q9 -5 18 0" stroke={SKIN_B} strokeWidth="4" fill="none" strokeLinecap="round" />
    </svg>
  );
}

/** Mom with sun hat and a lemonade. */
export function SunhatMom({ className, style }: CharProps) {
  return (
    <svg viewBox="0 0 220 320" className={className} style={style} aria-hidden>
      {/* dress */}
      <path d="M110 128 l-44 150 q44 18 88 0 Z" fill={CARDINAL} />
      {/* legs */}
      <rect x="88" y="270" width="16" height="34" rx="8" fill={SKIN_B} />
      <rect x="116" y="270" width="16" height="34" rx="8" fill={SKIN_B} />
      <ellipse cx="94" cy="308" rx="16" ry="7" fill={TAN} />
      <ellipse cx="126" cy="308" rx="16" ry="7" fill={TAN} />
      {/* cup arm */}
      <rect x="138" y="150" width="13" height="62" rx="6.5" fill={SKIN_B} transform="rotate(-38 144 181)" />
      <rect x="164" y="118" width="26" height="34" rx="4" fill={SKY} />
      <rect x="172" y="100" width="4" height="24" rx="2" fill={CARDINAL} transform="rotate(14 174 112)" />
      {/* other arm */}
      <rect x="70" y="146" width="13" height="60" rx="6.5" fill={SKIN_B} transform="rotate(20 76 176)" />
      {/* head */}
      <circle cx="110" cy="96" r="28" fill={SKIN_B} />
      {/* hair */}
      <path d="M84 100 q-6 26 8 34 l4 -18 z" fill={INK} />
      <path d="M136 100 q6 26 -8 34 l-4 -18 z" fill={INK} />
      {/* sun hat */}
      <ellipse cx="110" cy="74" rx="46" ry="12" fill={TAN} />
      <path d="M84 72 a26 22 0 0 1 52 0 z" fill={TAN} />
      <rect x="84" y="64" width="52" height="8" fill={HUNTER} />
      {/* face */}
      <circle cx="102" cy="98" r="2.6" fill={INK} />
      <circle cx="120" cy="98" r="2.6" fill={INK} />
      <path d="M105 110 q6 6 13 0" stroke={INK} strokeWidth="2.5" fill="none" strokeLinecap="round" />
    </svg>
  );
}

/** Student mid cornhole throw, striped tee straight off the shirt print. */
export function CornholeKid({ className, style }: CharProps) {
  return (
    <svg viewBox="0 0 220 320" className={className} style={style} aria-hidden>
      {/* flying bag */}
      <rect x="176" y="28" width="26" height="26" rx="6" fill={HUNTER} transform="rotate(18 189 41)" />
      {/* throwing arm up */}
      <rect x="146" y="52" width="14" height="84" rx="7" fill={SKIN_A} transform="rotate(30 153 94)" />
      {/* legs */}
      <rect x="80" y="196" width="24" height="80" rx="12" fill={SKIN_A} />
      <rect x="116" y="196" width="24" height="80" rx="12" fill={SKIN_A} />
      {/* shorts */}
      <path d="M72 186 h76 l6 44 h-32 l-12 -22 -12 22 h-32 z" fill={TAN} />
      {/* sneakers */}
      <rect x="70" y="270" width="44" height="18" rx="9" fill={IVORY} stroke={INK} strokeWidth="2" />
      <rect x="108" y="270" width="44" height="18" rx="9" fill={IVORY} stroke={INK} strokeWidth="2" />
      {/* striped tee */}
      <path d="M72 126 q38 -24 76 0 l6 70 q-44 12 -88 0 Z" fill={IVORY} />
      <path d="M71 140 h80 M69 158 h84 M68 176 h86" stroke={CARDINAL} strokeWidth="11" fill="none" />
      <path d="M72 126 q38 -24 76 0 l6 70 q-44 12 -88 0 Z" fill="none" stroke={IVORY} strokeWidth="0" />
      {/* back arm */}
      <rect x="58" y="130" width="14" height="66" rx="7" fill={SKIN_A} transform="rotate(-18 65 163)" />
      {/* head */}
      <circle cx="110" cy="92" r="28" fill={SKIN_A} />
      {/* backwards cap */}
      <path d="M82 84 a28 28 0 0 1 56 0 z" fill={SKY} />
      <rect x="66" y="76" width="24" height="9" rx="4.5" fill={SKY} />
      {/* face */}
      <circle cx="104" cy="96" r="2.6" fill={INK} />
      <circle cx="122" cy="96" r="2.6" fill={INK} />
      <path d="M106 106 q7 7 15 -1" stroke={INK} strokeWidth="2.5" fill="none" strokeLinecap="round" />
    </svg>
  );
}

/** Two people with arms up — mashup bar energy. */
export function DancingPair({ className, style }: CharProps) {
  return (
    <svg viewBox="0 0 300 320" className={className} style={style} aria-hidden>
      {/* figure 1 */}
      <g>
        <rect x="42" y="70" width="13" height="70" rx="6.5" fill={SKIN_B} transform="rotate(-34 48 105)" />
        <rect x="118" y="66" width="13" height="70" rx="6.5" fill={SKIN_B} transform="rotate(30 124 101)" />
        <rect x="66" y="196" width="22" height="86" rx="11" fill={INK} />
        <rect x="98" y="196" width="22" height="86" rx="11" fill={INK} />
        <rect x="58" y="274" width="40" height="16" rx="8" fill={CARDINAL} />
        <rect x="94" y="274" width="40" height="16" rx="8" fill={CARDINAL} />
        <path d="M62 128 q30 -20 62 0 l6 74 q-38 12 -74 0 Z" fill={SKY} />
        <circle cx="93" cy="98" r="26" fill={SKIN_B} />
        <path d="M67 96 a26 26 0 0 1 52 0 q-26 -14 -52 0" fill={INK} />
        <circle cx="86" cy="102" r="2.4" fill={INK} />
        <circle cx="102" cy="102" r="2.4" fill={INK} />
        <path d="M88 112 q6 6 12 0" stroke={INK} strokeWidth="2.4" fill="none" strokeLinecap="round" />
      </g>
      {/* figure 2 */}
      <g>
        <rect x="168" y="76" width="13" height="70" rx="6.5" fill={SKIN_A} transform="rotate(-30 174 111)" />
        <rect x="248" y="72" width="13" height="70" rx="6.5" fill={SKIN_A} transform="rotate(34 254 107)" />
        <rect x="192" y="200" width="22" height="82" rx="11" fill={TAN} />
        <rect x="224" y="200" width="22" height="82" rx="11" fill={TAN} />
        <rect x="184" y="274" width="40" height="16" rx="8" fill={IVORY} stroke={INK} strokeWidth="2" />
        <rect x="220" y="274" width="40" height="16" rx="8" fill={IVORY} stroke={INK} strokeWidth="2" />
        <path d="M188 134 q30 -20 62 0 l6 72 q-38 12 -74 0 Z" fill={CARDINAL} />
        <circle cx="219" cy="104" r="26" fill={SKIN_A} />
        <path d="M193 102 a26 26 0 0 1 52 0 l-8 -4 q-18 -12 -36 0 z" fill={TAN} />
        <circle cx="212" cy="108" r="2.4" fill={INK} />
        <circle cx="228" cy="108" r="2.4" fill={INK} />
        <path d="M213 118 q7 7 15 0" stroke={INK} strokeWidth="2.4" fill="none" strokeLinecap="round" />
      </g>
      {/* music notes */}
      <g fill={INK}>
        <circle cx="150" cy="48" r="5" />
        <rect x="153" y="22" width="3.5" height="27" rx="1.75" />
        <circle cx="286" cy="150" r="4" />
        <rect x="288.5" y="128" width="3" height="23" rx="1.5" />
        <circle cx="18" cy="160" r="4" />
        <rect x="20.5" y="138" width="3" height="23" rx="1.5" />
      </g>
    </svg>
  );
}

/** Pancake stack for the maybe-breakfast. */
export function PancakeStack({ className, style }: CharProps) {
  return (
    <svg viewBox="0 0 220 220" className={className} style={style} aria-hidden>
      <ellipse cx="110" cy="176" rx="86" ry="18" fill={IVORY} stroke={INK} strokeWidth="3" />
      <g>
        <ellipse cx="110" cy="152" rx="64" ry="16" fill={TAN} />
        <ellipse cx="110" cy="134" rx="60" ry="15" fill="#c98f4f" />
        <ellipse cx="110" cy="117" rx="62" ry="15" fill={TAN} />
        <ellipse cx="110" cy="100" rx="56" ry="14" fill="#c98f4f" />
        <path d="M60 96 q10 18 22 6 q8 16 24 8 q14 12 26 0 q14 8 22 -8 q6 -8 6 -6 l0 -8 a56 14 0 0 0 -100 0 z" fill={CARDINAL} opacity="0.9" />
        <ellipse cx="110" cy="86" rx="56" ry="13" fill="#8f3b1f" />
      </g>
      {/* butter */}
      <rect x="94" y="70" width="32" height="16" rx="3" fill="#f3d36b" stroke="#c98f4f" strokeWidth="2" />
      {/* steam */}
      <path d="M84 52 q6 -10 0 -20 M110 46 q6 -10 0 -20 M136 52 q6 -10 0 -20" stroke={INK} strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}

/** Little burger for the cookout stop. */
export function Burger({ className, style }: CharProps) {
  return (
    <svg viewBox="0 0 220 200" className={className} style={style} aria-hidden>
      <path d="M40 92 a70 44 0 0 1 140 0 z" fill={TAN} />
      <circle cx="86" cy="62" r="3" fill={IVORY} />
      <circle cx="112" cy="52" r="3" fill={IVORY} />
      <circle cx="138" cy="64" r="3" fill={IVORY} />
      <rect x="36" y="94" width="148" height="14" rx="7" fill={HUNTER} />
      <path d="M40 108 h140 l-8 16 h-124 z" fill="#8f3b1f" />
      <rect x="44" y="124" width="132" height="12" rx="6" fill={CARDINAL} />
      <path d="M42 136 a70 30 0 0 0 136 0 z" fill={TAN} />
    </svg>
  );
}

/** The red + green Phi Psi flag from the shirt print. */
export function PhiPsiFlag({ className, style }: CharProps) {
  return (
    <svg viewBox="0 0 240 300" className={className} style={style} aria-hidden>
      <rect x="18" y="10" width="8" height="280" rx="4" fill={INK} />
      <circle cx="22" cy="10" r="7" fill={TAN} />
      <path d="M26 22 q90 -18 180 8 q-14 30 0 62 q-90 -24 -180 -8 z" fill={CARDINAL} />
      <path d="M78 15.5 q40 -3 76 3 l4.5 71 q-38 -7 -77 -4 z" fill={HUNTER} />
    </svg>
  );
}
