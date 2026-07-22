import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function AuthLayout({ children }: Props) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-6">
      {children}
    </main>
  );
}