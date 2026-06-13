import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { PackageSection } from "@/components/PackageSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { ProcessSection } from "@/components/ProcessSection";
import { ServicesSection } from "@/components/ServicesSection";
import { getPortfolioItems } from "@/sanity/portfolio";

export default async function Home() {
  const portfolioItems = await getPortfolioItems();

  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <PortfolioSection items={portfolioItems} />
        <ProcessSection />
        <PackageSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
