import type { Metadata } from "next";

import "./globals.css";


export const metadata: Metadata = {
  title: "HarmonicHash.io",
  description:
    "Interactive music theory application for exploring piano chords with visual keyboard representations. Build custom chord sequences, hear them played, and export as PDF for practice or education.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
