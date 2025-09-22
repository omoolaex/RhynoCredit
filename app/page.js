import WhoWeAre from "@/components/Home/about";
import CTA from "@/components/Home/cta";
import Hero from "@/components/Home/Hero";
import Services from "@/components/Home/OurServices";
import OurProcess from "@/components/Home/process";
import Testimonials from "@/components/Home/testimonial";
import WhyChooseUs from "@/components/Home/WhyChooseUs";

export default function Home () {
  return (
    <>
      <Hero />
      <Services />
      <WhoWeAre />
      <WhyChooseUs />
      <OurProcess />
      <Testimonials />
      <CTA />
    </>
  )
}