import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPortfolioItemBySlug, getPortfolioItems } from "@/sanity/portfolio";

type OriginalPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamic = "force-dynamic";

const DETAIL_IMAGE_TILE_HEIGHT = 8000;

function getImageTileUrl(imageUrl: string, width: number, top: number, height: number) {
  const separator = imageUrl.includes("?") ? "&" : "?";

  return `${imageUrl}${separator}rect=0,${top},${width},${height}&w=${width}&fit=crop&q=100`;
}

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

  const imageMaxWidth = Math.min(item.detailImageWidth || 800, 800);
  const shouldTileImage =
    item.detailImage &&
    item.detailImage.includes("cdn.sanity.io/images/") &&
    item.detailImageWidth &&
    item.detailImageHeight &&
    item.detailImageHeight > DETAIL_IMAGE_TILE_HEIGHT;

  const imageTiles = shouldTileImage
    ? Array.from({ length: Math.ceil(item.detailImageHeight! / DETAIL_IMAGE_TILE_HEIGHT) }, (_, index) => {
        const top = index * DETAIL_IMAGE_TILE_HEIGHT;
        const height = Math.min(DETAIL_IMAGE_TILE_HEIGHT, item.detailImageHeight! - top);

        return {
          height,
          src: getImageTileUrl(item.detailImage!, item.detailImageWidth!, top, height),
          top,
        };
      })
    : [];

  return (
    <main className="min-h-screen bg-charcoal px-4 py-6 text-ivory sm:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-6 border-b border-white/10 pb-6">
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
        </div>

        <section
          className="mx-auto overflow-hidden rounded-lg border border-white/10 bg-white p-0 shadow-2xl"
          style={{ maxWidth: imageMaxWidth }}
        >
          {imageTiles.length ? (
            imageTiles.map((tile) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={tile.top}
                src={tile.src}
                alt={`${item.title} 원본 상세페이지`}
                className="block w-full"
                loading="lazy"
              />
            ))
          ) : item.detailImage ? (
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
