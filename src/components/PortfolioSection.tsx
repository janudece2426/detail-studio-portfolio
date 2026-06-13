"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useMemo, useState } from "react";
import { categories, portfolioItems, type PortfolioCategory, type PortfolioItem } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function PortfolioSection() {
  const [active, setActive] = useState<PortfolioCategory>("전체");
  const filtered = useMemo(
    () => portfolioItems.filter((item) => active === "전체" || item.category === active),
    [active],
  );

  return (
    <section id="portfolio" className="bg-ink px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Portfolio"
            title="Portfolio"
            description="상품의 매력을 구조화하고, 구매로 이어지는 흐름을 디자인합니다."
          />
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                type="button"
                key={category}
                onClick={() => setActive(category)}
                className={`rounded-full border px-4 py-2 text-sm transition ${
                  active === category
                    ? "border-gold/60 bg-gold/15 text-ivory"
                    : "border-white/10 bg-white/[0.035] text-muted hover:border-white/25 hover:text-ivory"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <PortfolioCard key={item.title} item={item} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

function PortfolioCard({ item }: { item: PortfolioItem }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 18 }}
      transition={{ duration: 0.35 }}
      className="group overflow-hidden rounded-lg border border-white/10 bg-white/[0.055] p-4 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-gold/30"
    >
      <PortfolioMockup item={item} />
      <div className="p-3 pt-6">
        <div className="mb-4 flex items-center justify-between gap-4">
          <p className="text-sm text-gold">{item.category}</p>
          <span className="grid size-9 place-items-center rounded-full border border-white/10 text-muted transition group-hover:border-gold/40 group-hover:text-gold">
            <ArrowUpRight size={17} />
          </span>
        </div>
        <h3 className="text-2xl font-semibold text-ivory">{item.title}</h3>
        <p className="mt-4 text-sm leading-7 text-muted">
          작업 범위: {item.scope.join(" / ")}
        </p>
        <p className="mt-3 border-t border-white/10 pt-4 text-sm leading-7 text-muted">
          핵심 포인트: {item.point}
        </p>
      </div>
    </motion.article>
  );
}

function PortfolioMockup({ item }: { item: PortfolioItem }) {
  const color = {
    gold: "bg-gold/75",
    mint: "bg-mint/75",
    ivory: "bg-ivory/75",
  }[item.accent];

  return (
    <div className="relative h-72 overflow-hidden rounded-lg border border-white/10 bg-charcoal">
      {item.image ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
      ) : (
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(216,183,106,0.22),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(134,242,211,0.16),transparent_30%),linear-gradient(145deg,#171613,#080808)]" />
      )}
      <div className="absolute left-6 top-6 w-36 rounded-lg border border-white/10 bg-white/10 p-3 backdrop-blur">
        <div className={`h-16 rounded-lg ${color}`} />
        <div className="mt-3 h-2 w-10/12 rounded-full bg-ivory/45" />
        <div className="mt-2 h-2 w-7/12 rounded-full bg-ivory/20" />
      </div>
      <div className="absolute bottom-5 right-5 w-44 rounded-lg border border-white/10 bg-charcoal/80 p-4 backdrop-blur">
        <div className="mb-4 flex gap-2">
          <span className={`size-2 rounded-full ${color}`} />
          <span className="size-2 rounded-full bg-white/25" />
          <span className="size-2 rounded-full bg-white/25" />
        </div>
        <div className="space-y-2">
          <div className="h-2 rounded-full bg-ivory/40" />
          <div className="h-2 w-9/12 rounded-full bg-ivory/20" />
          <div className="h-2 w-11/12 rounded-full bg-ivory/25" />
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-charcoal to-transparent" />
    </div>
  );
}
