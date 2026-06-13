"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = ["Home", "Services", "Portfolio", "Process", "Contact"];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-white/10 bg-charcoal/82 shadow-glow backdrop-blur-xl"
          : "border-white/5 bg-charcoal/45 backdrop-blur-md"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#home" className="text-sm font-semibold tracking-[0.28em] text-ivory">
          Detail Studio
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm text-muted transition hover:text-ivory"
            >
              {item}
            </a>
          ))}
        </div>
        <button
          type="button"
          aria-label="메뉴 열기"
          onClick={() => setIsOpen((value) => !value)}
          className="grid size-10 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-ivory md:hidden"
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>
      {isOpen ? (
        <div className="border-t border-white/10 bg-charcoal/95 px-5 py-4 backdrop-blur-xl md:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-3 py-3 text-sm text-muted transition hover:bg-white/[0.05] hover:text-ivory"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
