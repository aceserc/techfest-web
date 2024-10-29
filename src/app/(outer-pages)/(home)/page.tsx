import AllTechfestSection from "./_components/all-techfests-section";
import HeroSection from "./_components/hero-section";
import HighlightSection from "./_components/highlight-section";
import PastSponsors from "./_components/past-sponsors";
import WelcomeMessageSection from "./_components/welcome-message-section";


const Page = () => {
  return (
    <div className="space-y-12">
      <HeroSection />
      <PastSponsors />
      <AllTechfestSection />
      <HighlightSection />
      <WelcomeMessageSection />
    </div>
  );
};

export default Page;
