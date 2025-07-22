// components/FuturisticHeading.tsx

type Props = {
  children: string;
  rtl?: boolean;
  center?: boolean;
};

export default function FuturisticHeading({ children, rtl = false, center = true }: Props) {
  return (
    <h1
      dir={rtl ? 'rtl' : 'ltr'}
      className={`
        text-3xl font-black tracking-wide xxxs:mt-6
        ${center ? 'text-center' : 'text-start'}
        ${rtl ? "xxxs:text-4xl sm:text-5xl lg:text-6xl" : "xxxs:text-2xl xxs:text-3xl md:text-4xl xl:text-4xl"}
        px-2 sm:px-4 py-4 break-words
        bg-gradient-to-r from-cyan-900 via-fuchsia-900 to-sky-900
        bg-clip-text text-transparent
        animate-glow
        drop-shadow-[0_0_100px_#0ff]
        dark:drop-shadow-[0_0_10px_#0ff]
      `}
    >
      {children}
    </h1>
  );
}
