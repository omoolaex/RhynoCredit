import CareerClosingCTA from "@/components/Careers/CareerClosingCTA";
import CareerHero from "@/components/Careers/CareerHero";
import LifeAtRhynoCredit from "@/components/Careers/LifeAtRhynoCredit";
import OpenRoles from "@/components/Careers/OpenRoles";
import WhyWorkWithUs from "@/components/Careers/WhyWorkWithUs";


export default function CareersPage() {
  return (
    <>
        <CareerHero />
        <WhyWorkWithUs />
        <OpenRoles />
        <LifeAtRhynoCredit />
        <CareerClosingCTA />
    </>
  );
}