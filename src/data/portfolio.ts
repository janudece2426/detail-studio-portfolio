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
  slug: string;
  title: string;
  category: Exclude<PortfolioCategory, "전체">;
  scope: string[];
  point: string;
  accent: "gold" | "mint" | "ivory";
  image?: string;
  detailImage?: string;
  originalUrl: string;
  summary: string;
  detailSections: {
    title: string;
    description: string;
  }[];
};

export const portfolioItems: PortfolioItem[] = [
  {
    slug: "folding-bike",
    title: "폴딩 자전거 상세페이지",
    category: "생활용품",
    scope: ["기획", "카피", "디자인"],
    point: "이동성과 접이식 구조를 강조한 구매 설계",
    accent: "mint",
    originalUrl: "https://example.com/original/folding-bike",
    summary:
      "이동성, 보관성, 접이식 구조를 중심으로 고객이 빠르게 구매 이유를 이해하도록 구성한 상세페이지입니다.",
    detailSections: [
      {
        title: "Hook Intro",
        description: "좁은 공간에서도 부담 없이 보관할 수 있는 접이식 구조를 첫 화면에서 강조했습니다.",
      },
      {
        title: "USP Flow",
        description: "이동, 접이, 보관 흐름을 순서대로 보여주며 제품 장점을 자연스럽게 설득합니다.",
      },
      {
        title: "Conversion Point",
        description: "사용 상황별 구매 이유를 정리해 상세페이지 후반부의 전환 흐름을 강화했습니다.",
      },
    ],
  },
  {
    slug: "fermenter",
    title: "발효기 상세페이지",
    category: "가전/주방",
    scope: ["기획", "카피", "디자인"],
    point: "제품 스펙과 사용 장점을 직관적으로 정리",
    accent: "gold",
    originalUrl: "https://example.com/original/fermenter",
    summary:
      "제품 스펙과 사용 편의성을 직관적으로 정리해 처음 보는 고객도 장점을 빠르게 이해할 수 있게 구성했습니다.",
    detailSections: [
      {
        title: "Spec Summary",
        description: "복잡한 제품 정보를 한눈에 읽히는 구조로 정리했습니다.",
      },
      {
        title: "Use Case",
        description: "일상에서 바로 떠올릴 수 있는 사용 장면 중심으로 구매 필요성을 높였습니다.",
      },
      {
        title: "Trust Build",
        description: "기능과 관리 포인트를 안정감 있게 배치해 신뢰도를 보강했습니다.",
      },
    ],
  },
  {
    slug: "safe-nightstand",
    title: "금고형 협탁 상세페이지",
    category: "가구/인테리어",
    scope: ["기획", "카피", "디자인"],
    point: "디자인과 보안 기능을 함께 강조한 구성",
    accent: "ivory",
    originalUrl: "https://example.com/original/safe-nightstand",
    summary:
      "인테리어 가구의 무드와 보안 기능을 함께 보여주어 기능성 제품도 고급스럽게 느껴지도록 설계했습니다.",
    detailSections: [
      {
        title: "Mood Setting",
        description: "공간에 자연스럽게 어울리는 협탁 이미지를 중심으로 첫인상을 만들었습니다.",
      },
      {
        title: "Function Balance",
        description: "보안 기능을 과하게 기술적으로 보이지 않게 생활형 장점으로 풀었습니다.",
      },
      {
        title: "Premium Detail",
        description: "소재, 수납, 사용 흐름을 묶어 고급형 제품의 설득 포인트를 구성했습니다.",
      },
    ],
  },
  {
    slug: "sensor-trash-bin",
    title: "센서 휴지통 상세페이지",
    category: "생활용품",
    scope: ["기획", "카피", "디자인"],
    point: "좁은 공간 사용성과 위생 포인트 강조",
    accent: "gold",
    originalUrl: "https://example.com/original/sensor-trash-bin",
    summary:
      "위생, 공간 활용, 자동 센서 기능을 중심으로 생활 속 불편함을 해결하는 흐름으로 구성했습니다.",
    detailSections: [
      {
        title: "Problem Hook",
        description: "손대지 않아도 되는 위생 포인트를 생활 문제 해결 관점으로 제시했습니다.",
      },
      {
        title: "Space Fit",
        description: "좁은 공간에서도 사용하기 좋은 사이즈와 배치 장점을 강조했습니다.",
      },
      {
        title: "Easy Choice",
        description: "사용성과 관리 편의성을 연결해 구매 결정을 쉽게 만들었습니다.",
      },
    ],
  },
  {
    slug: "hotel-cart-banner",
    title: "호텔 카트 배너 디자인",
    category: "가구/인테리어",
    scope: ["기획", "카피", "디자인"],
    point: "호텔 브랜드 무드를 살린 고급 배너 구성",
    accent: "mint",
    originalUrl: "https://example.com/original/hotel-cart-banner",
    summary:
      "호텔 공간의 프리미엄 무드를 살리면서 배너 정보가 깔끔하게 전달되도록 구성한 디자인입니다.",
    detailSections: [
      {
        title: "Brand Mood",
        description: "호텔 특유의 정돈된 분위기와 고급감을 시각 톤에 반영했습니다.",
      },
      {
        title: "Message Focus",
        description: "배너에서 가장 먼저 읽혀야 할 정보를 선명하게 정리했습니다.",
      },
      {
        title: "Visual Balance",
        description: "제품, 문구, 여백의 균형을 맞춰 과하지 않은 고급감을 만들었습니다.",
      },
    ],
  },
  {
    slug: "cafe-menu-banner",
    title: "카페 메뉴/배너 디자인",
    category: "식품/카페",
    scope: ["기획", "카피", "디자인"],
    point: "메뉴 가독성과 브랜드 분위기를 고려한 디자인",
    accent: "ivory",
    originalUrl: "https://example.com/original/cafe-menu-banner",
    summary:
      "메뉴 가독성과 카페 브랜드 무드를 함께 고려해 고객이 빠르게 선택할 수 있도록 구성했습니다.",
    detailSections: [
      {
        title: "Menu Readability",
        description: "메뉴명과 가격 정보가 빠르게 읽히도록 정보 위계를 정리했습니다.",
      },
      {
        title: "Cafe Mood",
        description: "브랜드 컬러와 공간 분위기에 맞는 시각 톤을 구성했습니다.",
      },
      {
        title: "Order Flow",
        description: "고객이 메뉴를 고르는 흐름을 고려해 배너 레이아웃을 설계했습니다.",
      },
    ],
  },
];

export function getPortfolioItem(slug: string) {
  return portfolioItems.find((item) => item.slug === slug);
}
