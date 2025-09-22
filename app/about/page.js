import AboutIntro from "@/components/About/AboutIntro";
import OurStory from "@/components/About/OurStory";
import WhatMakesUsDifferent from "@/components/About/ourview";
import PartnersSection from "@/components/About/partners";
import TeamSection from "@/components/About/team";
import PageHero from "@/components/global/pageHero";
import CTA from "@/components/Home/cta";

export default function AboutPage() {
  return (
    <>
     <PageHero title="About Us" />
     <AboutIntro />
     <OurStory />
     <TeamSection />
     <WhatMakesUsDifferent />
     <PartnersSection />
     <CTA />
    </>
   )
}