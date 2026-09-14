import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Smart India Hackathon (SIH 2026) — National Innovation Without Limits",
  description: "Official portal for Smart India Hackathon. Mobilizing 1.8M+ student engineers across 9,400+ institutions to solve frontline challenges for ISRO, DRDO, and 60+ Central Ministries.",
  keywords: [
    "Smart India Hackathon",
    "SIH 2026",
    "AICTE",
    "Ministry of Education",
    "Innovation Cell",
    "ISRO",
    "DRDO",
    "Software Edition",
    "Hardware Edition"
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (saved === 'dark' || (!saved && prefersDark)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="min-h-screen bg-[#FBFBF9] text-[#111215] font-sans antialiased selection:bg-[#111215] selection:text-white dark:bg-[#0C0D10] dark:text-[#F4F4F6]"
      >
        {children}
      </body>
    </html>
  );
}
