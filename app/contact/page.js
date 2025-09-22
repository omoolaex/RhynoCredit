import PageHero from "@/components/global/pageHero";
import ContactOptions from "@/components/Contact/ContactOptions";
import ContactForm from "@/components/Contact/ContactForm";
import OfficeLocation from "@/components/Contact/OfficeLocation";
import ContactClosingCTA from "@/components/Contact/ContactClosingCTA";

export default function ContactPage() {
    return (
        <>
            <PageHero title="Contact Us" />
            <ContactOptions />
            <ContactForm />
            <OfficeLocation />
            <ContactClosingCTA />
        </>
    );
}