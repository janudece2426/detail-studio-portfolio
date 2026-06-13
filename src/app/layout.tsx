import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Detail Studio | 매출을 위한 기획 상세페이지",
  description:
    "상품의 가치를 정리하고 구매로 이어지는 기획 상세페이지를 제작하는 프리미엄 포트폴리오 스튜디오입니다.",
  keywords: [
    "상세페이지 제작",
    "상세페이지 디자인",
    "기획 상세페이지",
    "제품 상세페이지",
    "포트폴리오",
  ],
  openGraph: {
    title: "Detail Studio | 매출을 위한 기획 상세페이지",
    description:
      "기획, 카피, 디자인을 바탕으로 상품의 구매 흐름을 설계합니다.",
    type: "website",
    locale: "ko_KR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
