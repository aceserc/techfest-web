import MarqueeWithHeader from "@/components/globals/marquee-with-header";
import { PAST_SPONSORS } from "@/data/past-sponsors";
import React from "react";

const PastSponsors = async () => {

  return (
    <MarqueeWithHeader
      data={PAST_SPONSORS}
      title="Former Sponsors"
      id="past-sponsors"

    />

  );
};

export default PastSponsors;
