import Hero from "@/components/Hero";
import StrengthCards from "@/components/StrengthCards";
import CompanyOverview from "@/components/CompanyOverview";
import FeaturedProducts from "@/components/FeaturedProducts";
import ProcessFlow from "@/components/ProcessFlow";
import EquipmentPreview from "@/components/EquipmentPreview";
import QualitySection from "@/components/QualitySection";
import CTASection from "@/components/CTASection";
import { getProductImagesBySection } from "@/lib/productImages";

export const dynamic = "force-dynamic";

export default async function Home() {
  const bySection = await getProductImagesBySection();
  const featuredImages: Record<string, string[]> = {};
  for (const [section, rows] of Object.entries(bySection)) {
    featuredImages[section] = rows.map((r) => r.url);
  }

  return (
    <>
      <Hero />
      <StrengthCards />
      <CompanyOverview />
      <FeaturedProducts images={featuredImages} />
      <ProcessFlow />
      <EquipmentPreview />
      <QualitySection />
      <CTASection />
    </>
  );
}
