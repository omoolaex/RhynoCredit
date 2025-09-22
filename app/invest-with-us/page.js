import PageHero from "@/components/global/pageHero";
import ClosingCTA from "@/components/invest/ClosingCTA";
import HowItWorks from "@/components/invest/HowItWorks";
import ImpactTrust from "@/components/invest/ImpactTrust";
import InvestmentPlans from "@/components/invest/InvestmentPlan";
import InvestHero from "@/components/invest/PageHero";
import WhyInvest from "@/components/invest/whyinvest";

export default function Services() {
  return (
    <>
        <PageHero title="Invest With Us" />
        <InvestHero />
        <WhyInvest />
        <InvestmentPlans />
        <HowItWorks />
        <ImpactTrust />
        <ClosingCTA />
    </>
); 
}