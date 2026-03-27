import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  ScanFace,
  Radar,
  Flame,
  Car,
  FileText,
  Headphones,
  Activity,
  X
} from "lucide-react";
import { CardSpotlight } from "./CardSpotlight";

const capabilities = [
  {
    id: "c1",
    icon: ScanFace,
    title: "AI Surveillance & Recognition",
    details: "Empower your security infrastructure with state-of-the-art AI. This module features long-range facial recognition to identify individuals from a distance, smart access control utilizing robust biometrics, and continuous perimeter monitoring to instantly flag unauthorized intrusions.",
    image: "/ai-monitoring.jpg"
  },
  {
    id: "c2",
    icon: Radar,
    title: "Real-Time Tracking & Activity Intelligence",
    details: "Enhance situational awareness with intelligent tracking. Our AI seamlessly monitors multi-camera feeds for precise object and person tracking. It also features advanced activity detection that automatically flags unusual human actions like running, falling, or loitering.",
    image: "/obj&perTracking.png"
  },
  {
    id: "c3",
    icon: Flame,
    title: "AI Safety & Threat Detection",
    details: "Ensure a safer environment with rapid threat identification. Our computer vision algorithms are trained for highly accurate AI fire and smoke detection, allowing for immediate automated alerts and rapid deployment of emergency response teams before incidents escalate.",
    image: "/C3.png"
  },
  {
    id: "c4",
    icon: Car,
    title: "Smart Traffic & Mobility Analytics",
    details: "Optimize urban flow and safety with comprehensive traffic analytics. Analyze vehicle movement patterns, detect traffic violations in real-time, and gain actionable insights for smarter city planning, parking management, and efficient law enforcement.",
    image: "/smart-traffic.jpg"
  },
  {
    id: "c5",
    icon: FileText,
    title: "Document Intelligence & Automation",
    details: "Streamline your workflows by transforming physical data into actionable insights. Employing robust AI-powered OCR, this system provides accurate document digitization, seamlessly converting scanned files, invoices, and records into fully searchable and editable digital formats.",
    image: "/DigiDoc1.png"
  },
  {
    id: "c6",
    icon: Headphones,
    title: "AI Media & Content Generation",
    details: "Revolutionize your content creation process with advanced generative AI. This includes creating high-quality AI audiobooks with incredibly natural, human-like voice synthesis, as well as providing multilingual dubbing with perfect lip-sync capabilities for global outreach.",
    image: "/C6.png"
  },
  {
    id: "c7",
    icon: Activity,
    title: "Biomedical AI Agents",
    details: "AI agents that analyze biological data in real time, detecting patterns and anomalies in medical imagery to enable faster, more accurate diagnostics.",
    image: "/RBC1.png"
  },
];

const CapabilityCard = ({ cap, onOpen, index }) => (
  <motion.div
    layoutId={`card-${cap.id}`}
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.06, duration: 0.4 }}
    className="h-full cursor-pointer flex flex-col"
    onClick={onOpen}
  >
    <CardSpotlight className="h-full flex flex-col">
      <motion.div layoutId={`image-${cap.id}`} className="relative aspect-[4/3] rounded-lg overflow-hidden mb-4 group/img">
        <img
          src={cap.image}
          alt={cap.title}
          className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <cap.icon className="absolute bottom-3 left-3 w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
      </motion.div>
      <motion.h4 layoutId={`title-${cap.id}`} className="font-heading font-semibold text-[17px] mb-2 text-card-foreground leading-tight">
        {cap.title}
      </motion.h4>
      <div className="mt-auto pt-4">
         <span className="text-primary text-sm font-medium hover:underline inline-flex items-center">
           See details 
           <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
         </span>
      </div>
    </CardSpotlight>
  </motion.div>
);

const CapabilitiesSection = () => {
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setActiveCard(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (activeCard) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [activeCard]);

  const ActiveIcon = activeCard?.icon;

  return (
    <section id="capabilities" className="py-24 bg-section-alt relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-widest">
            What We Can Do
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mt-3 text-foreground">
            AI Capabilities
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Discover how AcuronAi delivers real-world intelligence — from smart
            surveillance to secure automation.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6 w-full max-w-7xl mx-auto">
          {capabilities.map((cap, i) => (
            <div 
              key={cap.id} 
              className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]"
            >
              <CapabilityCard cap={cap} onOpen={() => setActiveCard(cap)} index={i} />
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeCard && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveCard(null)}
              className="fixed inset-0 bg-black/60 z-40 backdrop-blur-sm"
            />
            <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none p-4 sm:p-6">
              <motion.div
                layoutId={`card-${activeCard.id}`}
                className="bg-card w-full max-w-3xl rounded-2xl overflow-hidden shadow-2xl pointer-events-auto flex flex-col sm:flex-row relative z-50 border border-border/50"
              >
                <button
                  onClick={() => setActiveCard(null)}
                  className="absolute top-3 right-3 z-10 p-2 rounded-full bg-black/40 text-white hover:bg-black/70 transition-colors"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
                
                <motion.div layoutId={`image-${activeCard.id}`} className="w-full sm:w-[45%] aspect-video sm:aspect-auto relative group">
                  <img
                    src={activeCard.image}
                    alt={activeCard.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  {ActiveIcon && <ActiveIcon className="absolute bottom-4 left-4 w-8 h-8 text-primary shadow-sm" />}
                </motion.div>
                
                <div className="p-6 sm:p-8 sm:w-[55%] flex flex-col justify-center bg-card">
                  <motion.h4 layoutId={`title-${activeCard.id}`} className="font-heading font-bold text-2xl mb-4 text-card-foreground">
                    {activeCard.title}
                  </motion.h4>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ delay: 0.1, duration: 0.3 }}
                  >
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {activeCard.details}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CapabilitiesSection;
