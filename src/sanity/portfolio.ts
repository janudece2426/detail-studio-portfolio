import { portfolioItems, type PortfolioItem } from "@/data/portfolio";
import { hasSanityConfig, sanityClient } from "./client";

type SanityPortfolio = {
  title?: string;
  slug?: { current?: string };
  category?: PortfolioItem["category"];
  scope?: string[];
  point?: string;
  summary?: string;
  thumbnail?: { asset?: { url?: string } };
  detailImage?: {
    asset?: {
      url?: string;
      metadata?: { dimensions?: { width?: number; height?: number } };
    };
  };
  originalUrl?: string;
  accent?: PortfolioItem["accent"];
};

const portfolioFields = `
  title,
  slug,
  category,
  scope,
  point,
  summary,
  thumbnail{asset->{url}},
  detailImage{asset->{url, metadata{dimensions{width, height}}}},
  originalUrl,
  accent
`;

function toPortfolioItem(item: SanityPortfolio): PortfolioItem | null {
  if (!item.title || !item.slug?.current || !item.category || !item.point) {
    return null;
  }

  const thumbnailUrl = item.thumbnail?.asset?.url;
  const detailImageUrl = item.detailImage?.asset?.url || thumbnailUrl;

  return {
    slug: item.slug.current,
    title: item.title,
    category: item.category,
    scope: item.scope?.length ? item.scope : ["기획", "카피", "디자인"],
    point: item.point,
    accent: item.accent || "gold",
    image: thumbnailUrl,
    detailImage: detailImageUrl,
    detailImageWidth: item.detailImage?.asset?.metadata?.dimensions?.width,
    detailImageHeight: item.detailImage?.asset?.metadata?.dimensions?.height,
    originalUrl: item.originalUrl || detailImageUrl || "#",
    summary: item.summary || item.point,
    detailSections: [],
  };
}

export async function getPortfolioItems(): Promise<PortfolioItem[]> {
  if (!hasSanityConfig) {
    return portfolioItems;
  }

  try {
    const items = await sanityClient.fetch<SanityPortfolio[]>(
      `*[_type == "portfolio"] | order(order asc, _createdAt desc) {${portfolioFields}}`,
      {},
      { next: { revalidate: 60 } },
    );
    const mappedItems = items.map(toPortfolioItem).filter(Boolean) as PortfolioItem[];
    return mappedItems.length ? mappedItems : portfolioItems;
  } catch {
    return portfolioItems;
  }
}

export async function getPortfolioItemBySlug(slug: string): Promise<PortfolioItem | undefined> {
  const decodedSlug = decodeURIComponent(slug);

  if (!hasSanityConfig) {
    return portfolioItems.find((item) => item.slug === decodedSlug || item.slug === slug);
  }

  try {
    const item = await sanityClient.fetch<SanityPortfolio | null>(
      `*[_type == "portfolio" && slug.current == $slug][0] {${portfolioFields}}`,
      { slug: decodedSlug },
      { next: { revalidate: 60 } },
    );
    const mappedItem = item ? toPortfolioItem(item) : null;
    return (
      mappedItem ||
      portfolioItems.find((fallbackItem) => fallbackItem.slug === decodedSlug || fallbackItem.slug === slug)
    );
  } catch {
    return portfolioItems.find((item) => item.slug === decodedSlug || item.slug === slug);
  }
}
