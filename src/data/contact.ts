export const contactChannels = {
  email: "jdart2026@gmail.com",
  instagram: "https://www.instagram.com/jdart1018/",
} as const;

export const contactLinks = [
  {
    label: "이메일 문의",
    href: `https://mail.google.com/mail/?view=cm&fs=1&to=${contactChannels.email}`,
  },
  {
    label: "카카오톡 문의",
    href: "https://open.kakao.com/o/gDD1hwzi",
  },
  {
    label: "크몽 바로가기",
    href: "https://kmong.com/gig/676926",
  },
  {
    label: "인스타그램 링크",
    href: contactChannels.instagram,
  },
];
