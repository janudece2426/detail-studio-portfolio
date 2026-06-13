import { processSteps } from "@/data/process";
import { FadeUp } from "./Motion";
import { SectionHeading } from "./SectionHeading";

export function ProcessSection() {
  return (
    <section id="process" className="bg-charcoal px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Process"
          title="Process"
          description="자료 확인부터 최종 납품까지, 명확한 흐름으로 진행합니다."
          align="center"
        />
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step, index) => (
            <FadeUp key={step} delay={index * 0.05}>
              <div className="relative min-h-36 overflow-hidden rounded-lg border border-white/10 bg-white/[0.05] p-7 backdrop-blur-xl">
                <div className="absolute right-5 top-4 text-6xl font-semibold text-white/[0.035]">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <p className="text-sm font-semibold text-gold">STEP {index + 1}</p>
                <h3 className="mt-5 text-xl font-semibold text-ivory">{step}</h3>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
