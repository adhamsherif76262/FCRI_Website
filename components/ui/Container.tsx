// components/ui/Container.tsx
import { ReactNode } from 'react';

export default function Container({ children }: { children: ReactNode }) {
  return <div className="mx-auto px-0 py-0">{children}</div>;
}
