"use client";

import { ArrowRight, Eye } from "lucide-react";
import { motion } from "framer-motion";
import { GraphBackground } from "./GraphBackground";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-studio-radial px-5 pb-24 pt-32 sm:px-8 lg:min-h-screen lg:pt-40"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      <div className="absolute -right-24 top-28 size-80 rounded-full bg-mint/10 blur-3xl" />
      <div className="absolute -left-32 bottom-8 size-96 rounded-full bg-gold/10 blur-3xl" />
      <div className="hero-grain pointer-events-none absolute inset-0 -z-10 opacity-[0.08]" />
      <GraphBackground />
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full opacity-60"
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
      >
        <path
          d="M-120 610 C 220 470, 390 760, 720 580 S 1160 350, 1560 510"
          fill="none"
          stroke="url(#heroLineGold)"
          strokeWidth="1.2"
          strokeLinecap="round"
          filter="url(#softLine)"
        />
        <path
          d="M-90 230 C 260 330, 430 80, 740 210 S 1120 410, 1530 250"
          fill="none"
          stroke="url(#heroLineMint)"
          strokeWidth="1"
          strokeLinecap="round"
          filter="url(#softLine)"
        />
        <path
          d="M560 960 C 700 710, 1030 690, 1190 470 S 1310 180, 1510 120"
          fill="none"
          stroke="url(#heroLineGoldSoft)"
          strokeWidth="0.9"
          strokeLinecap="round"
          filter="url(#softLine)"
        />
        <defs>
          <linearGradient id="heroLineGold" x1="0" y1="0" x2="1440" y2="0">
            <stop stopColor="#D8B76A" stopOpacity="0" />
            <stop offset="0.42" stopColor="#D8B76A" stopOpacity="0.2" />
            <stop offset="1" stopColor="#D8B76A" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="heroLineMint" x1="0" y1="0" x2="1440" y2="0">
            <stop stopColor="#86F2D3" stopOpacity="0" />
            <stop offset="0.58" stopColor="#86F2D3" stopOpacity="0.14" />
            <stop offset="1" stopColor="#86F2D3" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="heroLineGoldSoft" x1="0" y1="900" x2="1440" y2="0">
            <stop stopColor="#D8B76A" stopOpacity="0" />
            <stop offset="0.5" stopColor="#D8B76A" stopOpacity="0.12" />
            <stop offset="1" stopColor="#86F2D3" stopOpacity="0" />
          </linearGradient>
          <filter id="softLine">
            <feGaussianBlur stdDeviation="1.4" />
          </filter>
        </defs>
      </svg>
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.34em] text-gold/90 sm:text-[15px]">
              DETAIL PAGE STUDIO
            </p>
            <h1 className="text-balance text-5xl font-semibold leading-[1.12] text-ivory sm:text-7xl sm:leading-[1.1] lg:text-8xl lg:leading-[1.08]">
              매출을 설계하는
              <br />
              기획 상세페이지
            </h1>
          </div>
          <div className="mt-10 sm:mt-12">
            <div className="flex flex-wrap gap-2.5">
              {["기획", "카피", "디자인"].map((keyword) => (
                <span
                  key={keyword}
                  className="inline-flex rounded-full border border-gold/25 bg-white/[0.045] px-4 py-2 text-sm font-semibold text-gold/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-md sm:px-5"
                >
                  {keyword}
                </span>
              ))}
            </div>
            <p className="mt-5 max-w-[560px] text-lg leading-8 text-ivory/82 sm:text-xl sm:leading-9">
              상품의 가치를 전달하고 구매로 이어지는 상세페이지를 만듭니다.
            </p>
          </div>
          <div className="mt-11 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-ivory px-6 py-4 text-sm font-semibold text-charcoal transition hover:-translate-y-0.5 hover:bg-white"
            >
              <Eye size={17} />
              포트폴리오 보기
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-6 py-4 text-sm font-semibold text-ivory backdrop-blur transition hover:-translate-y-0.5 hover:border-gold/40 hover:bg-gold/10"
            >
              제작 문의하기
              <ArrowRight size={17} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, x: 24 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto h-[520px] w-full max-w-[520px]"
        >
          <MockupCard className="left-0 top-8 rotate-[-7deg]" accent="gold" title="USP Flow" />
          <MockupCard className="right-0 top-0 rotate-[5deg]" accent="mint" title="Hook Intro" />
          <MockupCard className="bottom-2 left-16 rotate-[2deg]" accent="ivory" title="Conversion" />
          <div className="absolute left-10 top-20 -z-10 h-80 w-80 rounded-full border border-gold/20 bg-gold/10 blur-2xl" />
        </motion.div>
      </div>
    </section>
  );
}

function MockupCard({
  className,
  accent,
  title,
}: {
  className: string;
  accent: "gold" | "mint" | "ivory";
  title: string;
}) {
  const accentClass = {
    gold: "from-gold/90 to-gold/14",
    mint: "from-mint/80 to-mint/14",
    ivory: "from-ivory/82 to-ivory/14",
  }[accent];

  return (
    <div
      className={`absolute h-[385px] w-[255px] rounded-[28px] border border-white/20 bg-white/[0.085] p-4 shadow-2xl backdrop-blur-2xl ${className}`}
    >
      <div className={`h-28 rounded-2xl bg-gradient-to-br ${accentClass}`} />
      <div className="mt-4 flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-muted/90">Detail Page</p>
          <p className="mt-1 text-lg font-semibold text-ivory">{title}</p>
        </div>
        <div className="size-9 rounded-full border border-white/15 bg-white/15" />
      </div>
      <div className="mt-6 space-y-3">
        <div className="h-3 w-11/12 rounded-full bg-ivory/55" />
        <div className="h-3 w-8/12 rounded-full bg-ivory/28" />
        <div className="h-3 w-10/12 rounded-full bg-ivory/32" />
      </div>
      <div className="mt-8 grid grid-cols-2 gap-3">
        <div className="h-24 rounded-2xl bg-white/[0.11]" />
        <div className="h-24 rounded-2xl bg-white/[0.11]" />
      </div>
      <div className="mt-4 h-12 rounded-2xl border border-white/15 bg-charcoal/72" />
    </div>
  );
}
