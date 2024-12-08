import { Exo_2, Play } from "next/font/google";
import "./globals.css";

const play = Play({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-play",
});

const exo2 = Exo_2({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-exo2",
});

export const metadata = {
  title: "LWS Xstream - Video Streaming",
  description: "This is an video streaming platform where you can watch videos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${play.variable} ${exo2.variable} antialiased bg-color-bg text-white font-exo`}
      >
        <div className="container mx-auto px-4 py-4">{children}</div>
      </body>
    </html>
  );
}
