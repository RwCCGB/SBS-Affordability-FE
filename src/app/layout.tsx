import type { Metadata } from "next";
import "@picocss/pico"
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
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
         <body>
        {children}
      </body>
    </html>
  );
}
