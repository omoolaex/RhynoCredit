import PageHero from "@/components/global/pageHero";
import CTA from "@/components/Home/cta";
import OurProcess from "@/components/Home/process";
import WhyChooseUs from "@/components/Home/WhyChooseUs";
import ServicesListing from "@/components/Services/servicelistings";


export default function Services() {
  return (
    <>
        <PageHero title="Services" />
        <ServicesListing />
        <WhyChooseUs />
        <OurProcess />
        <CTA bgcolor="bg-[#052D1B]"/>
    </>
  );
}