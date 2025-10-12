import type { Metadata } from "next";
import "./globals.css";
import { Krona_One, Kulim_Park } from "next/font/google";

const kronaOne = Krona_One({ subsets: ["latin"], weight: "400" });

const kulimPark = Kulim_Park({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Charlie Portfolio",
  description: "Welcome to my portfolio!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${kronaOne.className} ${kulimPark.className}`}>
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
