import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { OriginalImageViewer } from "@/components/OriginalImageViewer";
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

  return `${imageUrl}${separator}rect=0,${top},${width},${height}&w=${width}&q=100`;
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

        <OriginalImageViewer
          detailImage={item.detailImage}
          imageMaxWidth={imageMaxWidth}
          imageTiles={imageTiles}
          title={item.title}
        />
      </div>
    </main>
  );
}
