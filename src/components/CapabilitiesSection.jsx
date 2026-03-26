import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  ScanFace,
  Radar,
  Flame,
  Car,
  FileText,
  Headphones,
  X
} from "lucide-react";
import { CardSpotlight } from "./CardSpotlight";

const capabilities = [
  {
    id: "c1",
    icon: ScanFace,
    title: "AI Surveillance & Recognition",
    info: "Long-Range Facial Recognition, Smart Access Control, Perimeter Monitoring",
    image: "/C1.png"
  },
  {
    id: "c2",
    icon: Radar,
    title: "Real-Time Tracking & Activity Intelligence",
    info: "Object & Person Tracking, Activity Detection",
    image: "/C2.png"
  },
  {
    id: "c3",
    icon: Flame,
    title: "AI Safety & Threat Detection",
    info: "AI Fire & Smoke Detection",
    image: "/C3.png"
  },
  {
    id: "c4",
    icon: Car,
    title: "Smart Traffic & Mobility Analytics",
    info: "Traffic Analytics",
    image: "/C4.png"
  },
  {
    id: "c5",
    icon: FileText,
    title: "Document Intelligence & Automation",
    info: "Document Digitization with OCR",
    image: "/C5.png"
  },
  {
    id: "c6",
    icon: Headphones,
    title: "AI Media & Content Generation",
    info: "AI Audiobook Creation, Dubbing with Lip-Sync",
    image: "/C6.png"
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

        <div className="flex flex-col items-center gap-6">
          {/* First Row: 4 Items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl">
            {capabilities.slice(0, 4).map((cap, i) => (
              <CapabilityCard key={cap.id} cap={cap} onOpen={() => setActiveCard(cap)} index={i} />
            ))}
          </div>
          {/* Second Row: 2 Items centered */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-3xl">
            {capabilities.slice(4, 6).map((cap, i) => (
              <CapabilityCard key={cap.id} cap={cap} onOpen={() => setActiveCard(cap)} index={i + 4} />
            ))}
          </div>
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
                    <h5 className="font-semibold text-primary mb-3 text-sm uppercase tracking-wider">Included Capabilities:</h5>
                    <ul className="space-y-3 text-muted-foreground">
                      {activeCard.info.split(',').map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="mr-3 mt-1.5 text-primary text-[10px]">●</span>
                          <span className="leading-relaxed">{item.trim()}</span>
                        </li>
                      ))}
                    </ul>
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
