// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="border-t bg-gray-100 dark:bg-zinc-900 text-center text-sm text-gray-500 dark:text-gray-400 py-6">
      &copy; {new Date().getFullYear()} Field Crops Research Institute. All rights reserved.
    </footer>
  );
}
