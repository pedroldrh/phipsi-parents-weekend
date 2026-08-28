const ITEMS = [
  "PARENTS WEEKEND",
  "ΦΚΨ",
  "WASHINGTON & LEE",
  "LEXINGTON, VA",
  "COOKOUT",
  "DARTY",
  "MASHUP BAR",
];

export default function Marquee({ flip = false }: { flip?: boolean }) {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div
      className={`overflow-hidden border-y-3 border-ink bg-cardinal py-3 ${
        flip ? "-rotate-1" : "rotate-1"
      } scale-x-105`}
    >
      <div className="marquee-track flex w-max items-center gap-8 pr-8">
        {[...row, ...row].map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-8 font-display text-lg tracking-widest whitespace-nowrap text-ivory"
          >
            {item}
            <span className="text-tan">✶</span>
          </span>
        ))}
      </div>
    </div>
  );
}
