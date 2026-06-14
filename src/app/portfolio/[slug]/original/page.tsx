import { ArrowLeft, ExternalLink } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPortfolioItemBySlug, getPortfolioItems } from "@/sanity/portfolio";

type OriginalPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  const items = await getPortfolioItems();

  return items.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: OriginalPageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = await getPortfolioItemBySlug(slug);

  if (!item) {
    return {};
  }

  return {
    title: `${item.title} 원본 보기 | Detail Studio`,
    description: `${item.title} 긴 상세페이지 원본 보기`,
  };
}

export default async function OriginalPage({ params }: OriginalPageProps) {
  const { slug } = await params;
  const item = await getPortfolioItemBySlug(slug);

  if (!item) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-charcoal px-4 py-6 text-ivory sm:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-6 flex flex-col gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Link
              href="/#portfolio"
              className="inline-flex items-center gap-2 text-sm font-semibold text-muted transition hover:text-ivory"
            >
              <ArrowLeft size={16} />
              포트폴리오로 돌아가기
            </Link>
            <h1 className="mt-4 text-2xl font-semibold text-ivory sm:text-4xl">{item.title}</h1>
          </div>
          {item.originalUrl && item.originalUrl !== "#" ? (
            <a
              href={item.originalUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-fit items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-5 py-3 text-sm font-semibold text-ivory transition hover:border-gold/40 hover:bg-gold/10"
            >
              외부 링크 열기
              <ExternalLink size={15} />
            </a>
          ) : null}
        </div>

        <section className="mx-auto max-w-[800px] overflow-hidden rounded-lg border border-white/10 bg-white p-0 shadow-2xl">
          {item.detailImage ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={item.detailImage}
              alt={`${item.title} 원본 상세페이지`}
              className="block w-full"
            />
          ) : (
            <div className="bg-charcoal p-10 text-center">
              <p className="text-lg font-semibold text-ivory">원본 이미지가 아직 등록되지 않았습니다.</p>
              <p className="mt-3 text-sm leading-7 text-muted">
                관리자 페이지에서 긴 상세페이지 원본 이미지를 업로드하면 이곳에 전체 길이로 표시됩니다.
              </p>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
