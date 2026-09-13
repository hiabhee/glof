import type { Metadata } from "next";
import "./styles.css";

export const metadata: Metadata = {
  title: "GlacierLens | Himalayan glacier and GLOF evidence explorer",
  description: "Research visualisation for glacier retreat, glacial-lake change, and GLOF context."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
