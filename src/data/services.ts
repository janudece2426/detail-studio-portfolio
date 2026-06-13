import { Gem, PenLine, Route } from "lucide-react";

export const strengths = [
  {
    title: "Planning",
    description:
      "상품의 강점과 구매 포인트를 정리해 상세페이지의 흐름을 설계합니다.",
    icon: Route,
  },
  {
    title: "Copywriting",
    description:
      "고객의 시선을 붙잡는 후킹 문구와 설득력 있는 카피를 구성합니다.",
    icon: PenLine,
  },
  {
    title: "Design",
    description:
      "브랜드와 상품의 가치를 고급스럽게 보여주는 상세페이지 디자인을 제작합니다.",
    icon: Gem,
  },
];

export const packages = [
  {
    name: "Standard",
    tag: "Design Focus",
    recommended: false,
    features: [
      "기존 자료 기반 깔끔한 상세페이지 제작",
      "간단한 구조 정리",
      "디자인 중심 제작",
    ],
    price: "문의 후 견적",
    lengthLimit: "세로길이 15000PX까지",
  },
  {
    name: "Deluxe",
    tag: "Most Requested",
    recommended: true,
    features: [
      "기획 + 카피 + 디자인 구성",
      "상품 강점 정리",
      "구매 흐름을 고려한 상세페이지 제작",
    ],
    price: "문의 후 견적",
    lengthLimit: "세로길이 20000PX까지",
  },
  {
    name: "Premium",
    tag: "Brand Detail",
    recommended: false,
    features: [
      "상세페이지 기획 + 카피라이팅 + 프리미엄 디자인 구성",
      "브랜드 톤 정리",
      "고급형 상세페이지 구성",
    ],
    price: "문의 후 견적",
    lengthLimit: "세로길이 30000PX까지",
  },
];
