import { getTechfestData } from "@/helpers/get-techfest-data"
import HeroSection from "./_components/hero-section"
import { TechfestLabel } from "@/data/techfest"
import Error404 from "@/components/blocks/404"
import MarqueeWithHeader from "@/components/globals/marquee-with-header"

const Page = (
  { params: { techfestVersion } }: {
    params: { techfestVersion: string }
  }) => {
  const techfestData = getTechfestData(techfestVersion as TechfestLabel)
  if (!techfestData) return <Error404 className="h-[90vh]" />

  return (
    <div className="container my-16 sm:mt-20 xl:mt-24 flex flex-col gap-12">
      <HeroSection
        desc={techfestData.landingPage.desc}
        title={techfestData.landingPage.header}
        techfestVersion={techfestVersion}
      />
      <MarqueeWithHeader
        data={techfestData.mediaPartners}
        title="Media Partners"
        id="media-partners"
      />
    </div>
  )
}
export default Page