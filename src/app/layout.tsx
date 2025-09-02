import type { Metadata } from "next";

import '@picocss/pico';
import "./custom.css";

export const metadata: Metadata = {
  title: "Demo Affordabiluty Calculator",
  description: "Rebuilt using Node/Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
