import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Swift 완벽 가이드 | 프로그래밍 언어 배우기",
  description: "Swift 프로그래밍 언어의 모든 것을 배우세요. 기초부터 고급까지 완벽한 가이드입니다.",
  keywords: "Swift, iOS, macOS, Apple, 프로그래밍",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full scroll-smooth">
      <body className={`${inter.className} h-full bg-gradient-to-br from-slate-50 via-white to-slate-50`}>
        {children}
      </body>
    </html>
  );
}
