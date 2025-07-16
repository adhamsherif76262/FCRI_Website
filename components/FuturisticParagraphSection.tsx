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
      className="w-full px-4 sm:px-6 lg:px-12 py-12 bg-gradient-to-br from-gray-900 to-gray-950 text-white rounded-3xl shadow-2xl border border-cyan-700/40 xl:min-width mx-auto"
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-cyan-400 mb-6 tracking-wider text-center">
        {title}
      </h2>

      <div className="space-y-6 text-gray-300 text-sm xxxs:text-lg xxs:text-xl  xs:text-2xl lg:text-3xl leading-loose text-justify">
        {paragraphs.map((p, i) => (
          <p key={i} className="hover:text-cyan-200 transition-colors duration-200 font-black xs:Line-Height xxxs:leading-10">
            {p}
          </p>
        ))}
      </div>
    </section>
  );
}
