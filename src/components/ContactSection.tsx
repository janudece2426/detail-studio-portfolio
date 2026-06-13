import { ArrowUpRight, Mail } from "lucide-react";
import { contactLinks } from "@/data/contact";
import { SectionHeading } from "./SectionHeading";

export function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden bg-charcoal px-5 py-24 sm:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(216,183,106,0.18),transparent_36%)]" />
      <div className="relative mx-auto max-w-5xl rounded-lg border border-white/10 bg-white/[0.055] p-8 text-center backdrop-blur-xl sm:p-14">
        <div className="mx-auto mb-8 grid size-14 place-items-center rounded-lg border border-gold/30 bg-gold/10 text-gold">
          <Mail size={24} />
        </div>
        <SectionHeading
          title="Contact"
          description="상품을 더 잘 보이게 만들고 싶다면, 지금 포트폴리오와 함께 문의해주세요."
          align="center"
        />
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-charcoal/60 px-4 py-4 text-sm font-semibold text-ivory transition hover:-translate-y-0.5 hover:border-gold/40 hover:bg-gold/10"
            >
              {link.label}
              <ArrowUpRight size={16} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
