import clsx from "clsx";

// components/FuturisticParagraphSection.tsx
type Props = {
  title: string;
  paragraphs: string[];
  rtl?: boolean;
};

export default function FuturisticParagraphSection({ title, paragraphs, rtl = false }: Props) {
  return (
    <section
      dir={rtl ? 'rtl' : 'ltr'}
      className="w-full px-4 sm:px-6 lg:px-12 py-12 bg_Beige text-white rounded-3xl shadow-2xl border border-cyan-700/40 xl:min-width mx-auto"
    >
      <h2 className={clsx(
        "font-black text-cyan-400 bg_Green mb-6 tracking-wider text-center",
        rtl ? "xxxs:text-2xl xs:text-3xl sm:text-4xl" : "xxxs:text-xl xxs:text-2xl md:text-2xl lg:text-3xl"
      )}>
        {title}
      </h2>

      <div className={clsx(
        "space-y-6 text-gray-300 text-sm text-center",
        rtl ? "xxxs:text-xl xs:text-2xl sm:text-3xl md:text-2xl lg:text-3xl font-black" : "xxxs:text-lg xxs:text-xl lg:text-2xl"
      )}>
        {paragraphs.map((p, i) => (
          <p key={i} className={clsx(
            "hover:text-black transition-colors duration-200 font-black bg_Gray",
            rtl ? "leading-relaxed" : "leading-relaxed"
          )}>
            {p}
          </p>
        ))}
      </div>
    </section>
  );
}
