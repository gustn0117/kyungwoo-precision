import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

export const metadata: Metadata = {
  title: "경우정밀 KYUNGWOO PRECISION | 정밀가공 기술의 기준",
  description:
    "1993년 설립. CNC·MCT 가공부터 열처리, 연마, 도금, 3차원 측정까지 모든 공정을 One-Stop으로 제공하는 정밀가공 전문기업 경우정밀.",
  keywords: [
    "경우정밀", "KYUNGWOO PRECISION", "CNC 가공", "MCT 가공", "정밀가공",
    "자동차 지그", "차체 용접치구", "샤프트 가공", "다웰핀", "3차원 측정",
    "시화공단 정밀가공",
  ],
  openGraph: {
    title: "경우정밀 - 정밀가공 기술의 기준",
    description: "CNC·MCT부터 후처리·검사까지, 30년 노하우의 One-Stop 정밀가공 전문기업.",
    type: "website",
    locale: "ko_KR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-white text-ink antialiased">
        <Header />
        <main className="pt-[68px] lg:pt-[108px]">{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
