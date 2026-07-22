import "./globals.css";
import type { Metadata } from "next";
import ThemeProvider from "@/components/providers/ThemeProvider";

export const metadata: Metadata = {
  title: "DevNex AI",
  description: "Professional AI Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
  {children}
</body>
    </html>
  );
}