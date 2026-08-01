"use client";

import { Minus, Plus, RotateCcw } from "lucide-react";
import { useState } from "react";

type ImageTile = {
  height: number;
  src: string;
  top: number;
};

type OriginalImageViewerProps = {
  detailImage?: string;
  imageMaxWidth: number;
  imageTiles: ImageTile[];
  title: string;
};

const MIN_ZOOM = 50;
const MAX_ZOOM = 125;
const ZOOM_STEP = 25;
const DEFAULT_ZOOM = 75;
const ORIGINAL_ZOOM = 100;

export function OriginalImageViewer({
  detailImage,
  imageMaxWidth,
  imageTiles,
  title,
}: OriginalImageViewerProps) {
  const [zoom, setZoom] = useState(DEFAULT_ZOOM);
  const renderedMaxWidth = Math.round((imageMaxWidth * zoom) / 100);
  const canZoomOut = zoom > MIN_ZOOM;
  const canZoomIn = zoom < MAX_ZOOM;

  const zoomOut = () => setZoom((current) => Math.max(MIN_ZOOM, current - ZOOM_STEP));
  const zoomIn = () => setZoom((current) => Math.min(MAX_ZOOM, current + ZOOM_STEP));
  const resetZoom = () => setZoom(ORIGINAL_ZOOM);

  return (
    <div>
      {detailImage ? (
        <div className="sticky top-3 z-20 mb-4 flex justify-end">
          <div
            className="inline-flex items-center gap-1 rounded-lg border border-white/15 bg-charcoal/95 p-1.5 shadow-xl backdrop-blur-xl"
            role="group"
            aria-label="상세페이지 이미지 크기 조절"
          >
            <button
              type="button"
              onClick={zoomOut}
              disabled={!canZoomOut}
              aria-label="화면 축소"
              title="화면 축소"
              className="inline-flex h-9 items-center justify-center gap-2 rounded-md px-2.5 text-ivory transition hover:bg-white/10 active:scale-[0.98] disabled:cursor-not-allowed disabled:text-white/25"
            >
              <Minus size={17} strokeWidth={2} />
              <span className="hidden text-sm font-semibold sm:inline">축소</span>
            </button>

            <output
              className="min-w-14 text-center text-sm font-semibold tabular-nums text-ivory"
              aria-live="polite"
            >
              {zoom}%
            </output>

            <button
              type="button"
              onClick={zoomIn}
              disabled={!canZoomIn}
              aria-label="화면 확대"
              title="화면 확대"
              className="inline-flex h-9 items-center justify-center gap-2 rounded-md px-2.5 text-ivory transition hover:bg-white/10 active:scale-[0.98] disabled:cursor-not-allowed disabled:text-white/25"
            >
              <Plus size={17} strokeWidth={2} />
              <span className="hidden text-sm font-semibold sm:inline">확대</span>
            </button>

            <span className="mx-1 h-5 w-px bg-white/15" aria-hidden="true" />

            <button
              type="button"
              onClick={resetZoom}
              aria-label="원본 크기 100%로 보기"
              title="원본 크기 100%로 보기"
              className="inline-flex h-9 items-center gap-2 whitespace-nowrap rounded-md px-3 text-sm font-semibold text-gold transition hover:bg-white/10 active:scale-[0.98]"
            >
              <RotateCcw size={15} strokeWidth={2} />
              원본 크기
            </button>
          </div>
        </div>
      ) : null}

      <section
        className="mx-auto w-full overflow-hidden rounded-lg border border-white/10 bg-white p-0 shadow-2xl"
        style={{ maxWidth: renderedMaxWidth }}
      >
        {imageTiles.length ? (
          imageTiles.map((tile) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={tile.top}
              src={tile.src}
              alt={`${title} 원본 상세페이지`}
              className="block w-full"
              loading="lazy"
            />
          ))
        ) : detailImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={detailImage} alt={`${title} 원본 상세페이지`} className="block w-full" />
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
  );
}
