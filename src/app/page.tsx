import { HeroSection } from "@/components/home/hero-section";
import { InvestmentModels } from "@/components/home/investment-models";
import { FeaturedProperties } from "@/components/home/featured-properties";
import { WhyDenada } from "@/components/home/why-denada";
import { ChairmanVideo } from "@/components/home/chairman-video";
import { HowItWorks } from "@/components/home/how-it-works";
import { Testimonials } from "@/components/home/testimonials";
import { TrustBar } from "@/components/shared/trust-bar";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <InvestmentModels />
      <FeaturedProperties />
      <WhyDenada />
      <ChairmanVideo />
      <HowItWorks />
      <Testimonials />
    </>
  );
}
