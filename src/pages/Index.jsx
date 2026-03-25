import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PartnersMarquee from "@/components/PartnersMarquee";
import ServicesSection from "@/components/ServicesSection";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import WhySection from "@/components/WhySection";
import Footer from "@/components/Footer";
import ContactDrawer from "@/components/ContactDrawer";

const Index = () => {
  const [contactOpen, setContactOpen] = useState(false);
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection onOpenContact={() => setContactOpen(true)} />
      <ContactDrawer open={contactOpen} onClose={() => setContactOpen(false)} />
      <PartnersMarquee />
      <ServicesSection />
      <CapabilitiesSection />
      <WhySection />
      <Footer onOpenContact={() => setContactOpen(true)} />
    </div>
  );
};

export default Index;
