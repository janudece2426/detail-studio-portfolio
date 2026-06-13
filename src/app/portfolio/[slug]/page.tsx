import { ArrowLeft, ExternalLink } from "lucide-react";
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
              <a
                href={item.originalUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-ivory px-6 py-4 text-sm font-semibold text-charcoal transition hover:-translate-y-0.5 hover:bg-white"
              >
                원본 보기
                <ExternalLink size={16} />
              </a>
            </aside>

            <section className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.045] p-4 backdrop-blur-xl">
              {item.detailImage ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={item.detailImage}
                  alt={`${item.title} 상세페이지`}
                  className="w-full rounded-lg object-cover"
                />
              ) : (
                <DetailMockup item={item} />
              )}
            </section>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function DetailMockup({ item }: { item: NonNullable<ReturnType<typeof getPortfolioItem>> }) {
  const accent = {
    gold: "from-gold/80 to-gold/15",
    mint: "from-mint/70 to-mint/15",
    ivory: "from-ivory/70 to-ivory/15",
  }[item.accent];

  return (
    <div className="min-h-[1200px] rounded-lg bg-charcoal">
      <div className={`rounded-lg bg-gradient-to-br ${accent} p-8 sm:p-12`}>
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-charcoal/70">
          Detail Page Preview
        </p>
        <h2 className="mt-8 max-w-xl text-4xl font-semibold leading-tight text-charcoal sm:text-6xl">
          {item.title}
        </h2>
        <p className="mt-6 max-w-2xl text-base leading-8 text-charcoal/75">{item.summary}</p>
      </div>

      <div className="space-y-5 p-4 sm:p-6">
        {item.detailSections.map((section, index) => (
          <article
            key={section.title}
            className="grid gap-5 rounded-lg border border-white/10 bg-white/[0.055] p-6 sm:grid-cols-[180px_1fr]"
          >
            <div>
              <p className="text-sm font-semibold text-gold">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-ivory">{section.title}</h3>
            </div>
            <div>
              <p className="text-base leading-8 text-muted">{section.description}</p>
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                <div className="h-28 rounded-lg bg-white/[0.08]" />
                <div className="h-28 rounded-lg bg-white/[0.08]" />
                <div className="h-28 rounded-lg bg-white/[0.08]" />
              </div>
            </div>
          </article>
        ))}

        <div className="rounded-lg border border-gold/20 bg-gold/[0.07] p-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-gold">
            Purchase Flow
          </p>
          <p className="mx-auto mt-4 max-w-xl text-xl font-semibold leading-8 text-ivory">
            상품 가치가 읽히고, 장점이 설득되고, 마지막에는 구매 이유가 남도록 구성합니다.
          </p>
        </div>
      </div>
    </div>
  );
}
