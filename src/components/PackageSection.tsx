import { Check } from "lucide-react";
import { packages } from "@/data/services";
import { FadeUp } from "./Motion";
import { SectionHeading } from "./SectionHeading";

export function PackageSection() {
  return (
    <section className="bg-ink px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Service" title="Service" align="center" />
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {packages.map((item, index) => (
            <FadeUp key={item.name} delay={index * 0.08}>
              <article
                className={`relative h-full rounded-lg border p-8 backdrop-blur-xl ${
                  item.recommended
                    ? "border-gold/45 bg-gold/[0.09] shadow-glow"
                    : "border-white/10 bg-white/[0.045]"
                }`}
              >
                {item.recommended ? (
                  <p className="absolute right-6 top-6 rounded-full bg-gold px-3 py-1 text-xs font-semibold text-charcoal">
                    추천
                  </p>
                ) : null}
                <p className="text-sm text-muted">{item.tag}</p>
                <h3 className="mt-4 text-3xl font-semibold text-ivory">{item.name}</h3>
                <p className="mt-6 text-xl font-semibold text-gold">{item.price}</p>
                <ul className="mt-8 space-y-4">
                  {item.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-sm leading-7 text-muted">
                      <Check className="mt-1 shrink-0 text-mint" size={17} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-8 border-t border-white/10 pt-5 text-sm font-semibold text-ivory/80">
                  {item.lengthLimit}
                </p>
              </article>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
