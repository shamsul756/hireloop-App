import HeroBanner from "@/components/Banner";
import PricingSection from "@/components/CardSection";
import ExtraSection from "@/components/Extrasection";
import FeaturesSection from "@/components/FeatureCard";
import Stats from "@/components/Stats";

import Image from "next/image";

export default function Home() {
  return (
    <div>
<HeroBanner/>
<Stats/>
<FeaturesSection/>
<PricingSection/>
<ExtraSection/>
    </div>
   
  );
}
