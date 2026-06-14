import { defineField, defineType } from "sanity";

export const portfolioType = defineType({
  name: "portfolio",
  title: "Portfolio",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "프로젝트명",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "주소",
      type: "slug",
      options: {
        source: "title",
        maxLength: 80,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "카테고리",
      type: "string",
      options: {
        list: [
          { title: "생활용품", value: "생활용품" },
          { title: "가전/주방", value: "가전/주방" },
          { title: "가구/인테리어", value: "가구/인테리어" },
          { title: "뷰티/헬스", value: "뷰티/헬스" },
          { title: "식품/카페", value: "식품/카페" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "scope",
      title: "작업 범위",
      type: "array",
      of: [{ type: "string" }],
      initialValue: ["기획", "카피", "디자인"],
    }),
    defineField({
      name: "point",
      title: "핵심 포인트",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "summary",
      title: "상세페이지 설명",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "thumbnail",
      title: "썸네일 이미지",
      description: "포트폴리오 목록 카드에 보이는 이미지입니다. 추천 1000 x 1000px 정사각형",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "detailImage",
      title: "긴 상세페이지 원본 이미지",
      description: "고객이 썸네일을 클릭했을 때 보이는 원본 이미지입니다. 쿠팡 상세페이지 기준 가로 780px, 세로는 작업물 길이 그대로",
      type: "image",
    }),
    defineField({
      name: "originalUrl",
      title: "원본 보기 링크",
      type: "url",
      description: "고객이 원본 보기 버튼을 눌렀을 때 열릴 주소",
    }),
    defineField({
      name: "accent",
      title: "포인트 컬러",
      type: "string",
      initialValue: "gold",
      options: {
        list: [
          { title: "Gold", value: "gold" },
          { title: "Mint", value: "mint" },
          { title: "Ivory", value: "ivory" },
        ],
      },
    }),
    defineField({
      name: "order",
      title: "정렬 순서",
      type: "number",
      initialValue: 100,
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "category",
      media: "thumbnail",
    },
  },
});
