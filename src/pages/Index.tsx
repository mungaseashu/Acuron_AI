import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PartnersMarquee from "@/components/PartnersMarquee";
import ServicesSection from "@/components/ServicesSection";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import WhySection from "@/components/WhySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <PartnersMarquee />
      <ServicesSection />
      <CapabilitiesSection />
      <WhySection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
