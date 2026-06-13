import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { getPortfolioItem, portfolioItems } from "@/data/portfolio";

type PortfolioDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return portfolioItems.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({
  params,
}: PortfolioDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = getPortfolioItem(slug);

  if (!item) {
    return {};
  }

  return {
    title: `${item.title} | Detail Studio`,
    description: item.summary,
  };
}

export default async function PortfolioDetailPage({ params }: PortfolioDetailPageProps) {
  const { slug } = await params;
  const item = getPortfolioItem(slug);

  if (!item) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="bg-charcoal px-5 pb-24 pt-32 text-ivory sm:px-8">
        <section className="mx-auto max-w-7xl">
          <Link
            href="/#portfolio"
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted transition hover:text-ivory"
          >
            <ArrowLeft size={16} />
            Portfolio
          </Link>

          <div className="mt-10 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <aside className="lg:sticky lg:top-28">
              <p className="text-sm font-semibold text-gold">{item.category}</p>
              <h1 className="mt-4 text-balance text-4xl font-semibold leading-tight sm:text-6xl">
                {item.title}
              </h1>
              <p className="mt-6 text-lg leading-8 text-ivory/78">{item.summary}</p>
              <div className="mt-8 flex flex-wrap gap-2">
                {item.scope.map((scope) => (
                  <span
                    key={scope}
                    className="rounded-full border border-gold/25 bg-white/[0.045] px-4 py-2 text-sm font-semibold text-gold/90"
                  >
                    {scope}
                  </span>
                ))}
              </div>
              <p className="mt-8 border-t border-white/10 pt-6 text-sm leading-7 text-muted">
                핵심 포인트: {item.point}
              </p>
            </aside>

            <section className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.045] p-4 backdrop-blur-xl">
              <DetailPreview item={item} />
            </section>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function DetailPreview({ item }: { item: NonNullable<ReturnType<typeof getPortfolioItem>> }) {
  const accent = {
    gold: "from-gold/80 to-gold/15",
    mint: "from-mint/70 to-mint/15",
    ivory: "from-ivory/70 to-ivory/15",
  }[item.accent];

  return (
    <div className="space-y-4">
      <div className="rounded-lg border border-white/10 bg-charcoal p-3">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-gold/80">
          Thumbnail
        </p>
        <div className="relative aspect-[16/9] overflow-hidden rounded-lg bg-white/[0.04]">
          {item.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={item.image} alt={`${item.title} 썸네일`} className="h-full w-full object-cover" />
          ) : (
            <div className={`flex h-full items-end bg-gradient-to-br ${accent} p-6`}>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-charcoal/60">
                  Portfolio Thumbnail
                </p>
                <h2 className="mt-4 max-w-xl text-3xl font-semibold leading-tight text-charcoal sm:text-5xl">
                  {item.title}
                </h2>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="rounded-lg border border-white/10 bg-charcoal p-3">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-gold/80">
          Detail Page Original
        </p>
        {item.detailImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={item.detailImage}
            alt={`${item.title} 긴 상세페이지 원본`}
            className="w-full rounded-lg object-cover"
          />
        ) : (
          <div className="min-h-[1500px] rounded-lg border border-dashed border-white/15 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.025)_22%,rgba(216,183,106,0.08)_48%,rgba(134,242,211,0.05)_74%,rgba(255,255,255,0.04))] p-6">
            <div className="sticky top-24 rounded-lg border border-white/10 bg-charcoal/80 p-6 backdrop-blur-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
                Long Detail Image
              </p>
              <p className="mt-3 text-xl font-semibold text-ivory">{item.title}</p>
              <p className="mt-3 text-sm leading-7 text-muted">
                관리자에서 긴 상세페이지 원본 이미지를 첨부하면 이 영역에 세로로 길게 표시됩니다.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
