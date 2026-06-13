export const categories = [
  "전체",
  "생활용품",
  "가전/주방",
  "가구/인테리어",
  "뷰티/헬스",
  "식품/카페",
] as const;

export type PortfolioCategory = (typeof categories)[number];

export type PortfolioItem = {
  title: string;
  category: Exclude<PortfolioCategory, "전체">;
  scope: string[];
  point: string;
  accent: "gold" | "mint" | "ivory";
  image?: string;
};

export const portfolioItems: PortfolioItem[] = [
  {
    title: "폴딩 자전거 상세페이지",
    category: "생활용품",
    scope: ["기획", "카피", "디자인"],
    point: "이동성과 접이식 구조를 강조한 구매 설계",
    accent: "mint",
  },
  {
    title: "발효기 상세페이지",
    category: "가전/주방",
    scope: ["기획", "카피", "디자인"],
    point: "제품 스펙과 사용 장점을 직관적으로 정리",
    accent: "gold",
  },
  {
    title: "금고형 협탁 상세페이지",
    category: "가구/인테리어",
    scope: ["기획", "카피", "디자인"],
    point: "디자인과 보안 기능을 함께 강조한 구성",
    accent: "ivory",
  },
  {
    title: "센서 휴지통 상세페이지",
    category: "생활용품",
    scope: ["기획", "카피", "디자인"],
    point: "좁은 공간 사용성과 위생 포인트 강조",
    accent: "gold",
  },
  {
    title: "호텔 카트 배너 디자인",
    category: "가구/인테리어",
    scope: ["기획", "카피", "디자인"],
    point: "호텔 브랜드 무드를 살린 고급 배너 구성",
    accent: "mint",
  },
  {
    title: "카페 메뉴/배너 디자인",
    category: "식품/카페",
    scope: ["기획", "카피", "디자인"],
    point: "메뉴 가독성과 브랜드 분위기를 고려한 디자인",
    accent: "ivory",
  },
];
