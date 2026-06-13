export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-charcoal px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 text-sm text-muted md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold tracking-[0.25em] text-ivory">Detail Studio</p>
          <p className="mt-2">매출을 위한 기획 상세페이지</p>
        </div>
        <p>Copyright 2026 Detail Studio. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="https://example.com/instagram" className="transition hover:text-ivory">
            Instagram
          </a>
          <a href="mailto:hello@detailstudio.kr" className="transition hover:text-ivory">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
