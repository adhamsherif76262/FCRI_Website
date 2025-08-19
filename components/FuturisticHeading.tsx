// components/FuturisticHeading.tsx
type Props = {
  children: string;
  rtl?: boolean;
  center?: boolean;
};

export default function FuturisticHeading({ children, rtl = false, center = true }: Props) {
  return (
      <div className="bg-white rounded-3xl shadow-2xl h-28 mt-6">
            <h1
            dir={rtl ? 'rtl' : 'ltr'}
            className={`
              text-3xl font-black tracking-wide
              ${center ? 'text-center' : 'text-start'}
              ${rtl ? "xxxs:text-4xl sm:text-5xl lg:text-6xl" : "xxxs:text-2xl xxs:text-3xl md:text-4xl xl:text-4xl"}
              px-2 py-5 sm:px-4 break-words
              bg-gradient-to-r from-cyan-900 via-fuchsia-900 to-sky-900
              bg-clip-text text-transparent
              animate-glow
              drop-shadow-[0_0_100px_#0ff]
              dark:drop-shadow-[0_0_10px_#0ff]
            `}
          >
            {children}
          </h1>
      </div>
  );
}
