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
      <h2 className="xxxs:text-2xl xs:text-3xl md:text-4xl font-black text-cyan-400 bg_Green mb-6 tracking-wider text-center">
        {title}
      </h2>

      <div className="space-y-6 text-gray-300 text-sm xxxs:text-lg xxs:text-xl lg:text-3xl leading-loose text-center">
        {paragraphs.map((p, i) => (
          <p key={i} className="hover:text-black transition-colors duration-200 font-black xs:Line-Height xxxs:leading-10 bg_Gray">
            {p}
          </p>
        ))}
      </div>
    </section>
  );
}
