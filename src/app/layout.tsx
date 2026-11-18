import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-cairo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "شركة وائل رشيدي لخدمات الإعاشة والتموين (تموين الديار) | Wael Rasheedi Catering",
  description: "شركة وائل رشيدي لخدمات الإعاشة والتموين - ريادة إطعام ضيوف الرحمن منذ 2007م، تشغيل مطابخ وبوفيهات مفتوحة للحجاج والمعتمرين بمكة والمشاعر المقدسة. معتمدة بشهادات ISO 45001 و HACCP.",
  icons: { icon: "/logo.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable} ${cairo.className} scroll-smooth`}>
      <body className="bg-white text-brand-950 antialiased">{children}</body>
    </html>
  );
}
