import { strengths } from "@/data/services";
import { FadeUp } from "./Motion";
import { SectionHeading } from "./SectionHeading";

export function ServicesSection() {
  return (
    <section id="services" className="bg-charcoal px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Services"
          title="기획부터 디자인까지, 구매를 설계합니다."
        />
        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {strengths.map((item, index) => {
            const Icon = item.icon;
            return (
              <FadeUp key={item.title} delay={index * 0.08}>
                <div className="group relative h-full overflow-hidden rounded-lg border border-white/10 bg-white/[0.055] p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-gold/30">
                  <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent opacity-0 transition group-hover:opacity-100" />
                  <div className="grid size-12 place-items-center rounded-lg border border-white/10 bg-ink text-gold">
                    <Icon size={22} />
                  </div>
                  <p className="mt-10 text-xs font-semibold uppercase tracking-[0.3em] text-mint/80">
                    0{index + 1}
                  </p>
                  <h3 className="mt-4 text-2xl font-semibold text-ivory">{item.title}</h3>
                  <p className="mt-4 leading-7 text-muted">{item.description}</p>
                </div>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}
