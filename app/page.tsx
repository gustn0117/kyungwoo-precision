import Hero from "@/components/Hero";
import StrengthCards from "@/components/StrengthCards";
import CompanyOverview from "@/components/CompanyOverview";
import FeaturedProducts from "@/components/FeaturedProducts";
import ProcessFlow from "@/components/ProcessFlow";
import EquipmentPreview from "@/components/EquipmentPreview";
import QualitySection from "@/components/QualitySection";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <StrengthCards />
      <CompanyOverview />
      <FeaturedProducts />
      <ProcessFlow />
      <EquipmentPreview />
      <QualitySection />
      <CTASection />
    </>
  );
}
