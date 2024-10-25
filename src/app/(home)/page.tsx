import AllTechfestSection from "./_components/all-techfests-section";
import { HeroSection } from "./_components/hero-section";


const Page = () => {
  return (
    <div className="space-y-12">
      <HeroSection />
      <AllTechfestSection />
    </div>
  );
};

export default Page;
