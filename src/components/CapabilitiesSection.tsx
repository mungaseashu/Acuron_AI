import { motion } from "framer-motion";
import { ScanFace, ShieldCheck, Radar, Activity, Fence, Flame, Car, FileText, Headphones, Languages } from "lucide-react";

const capabilities = [
  { icon: ScanFace, title: "Long-Range Facial Recognition", desc: "Identify individuals from a distance with high precision — ideal for surveillance and crowd management." },
  { icon: ShieldCheck, title: "Smart Access Control", desc: "AI-based authentication using facial, voice, or biometric recognition to secure critical infrastructure." },
  { icon: Radar, title: "Object & Person Tracking", desc: "Track movements in real-time across multiple camera feeds for enhanced situational awareness." },
  { icon: Activity, title: "Activity Detection", desc: "Detect human actions like walking, falling, or loitering using AI to trigger real-time alerts." },
  { icon: Fence, title: "Perimeter Monitoring", desc: "Monitor restricted zones with AI vision — instantly alerting for intrusions or suspicious activity." },
  { icon: Flame, title: "AI Fire & Smoke Detection", desc: "Detect early signs of fire or smoke using computer vision, enabling rapid emergency response." },
  { icon: Car, title: "Traffic Analytics", desc: "Analyze vehicle movement and detect violations for smarter traffic control and law enforcement." },
  { icon: FileText, title: "Document Digitization with OCR", desc: "Convert scanned documents into editable, searchable digital files using AI-powered OCR." },
  { icon: Headphones, title: "AI Audiobook Creation", desc: "Turn books and documents into human-like audio using multilingual AI voices." },
  { icon: Languages, title: "Dubbing with Lip-Sync", desc: "Dub videos in multiple languages with perfectly matched lip movements." },
];

const CapabilitiesSection = () => {
  return (
    <section id="capabilities" className="py-24 bg-section-alt">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-widest">What We Can Do</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mt-3 text-foreground">AI Capabilities</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Discover how AcuronAi delivers real-world intelligence — from smart surveillance to secure automation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              whileHover={{ scale: 1.04 }}
              className="group p-5 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300"
            >
              <cap.icon className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
              <h4 className="font-heading font-semibold text-sm mb-2 text-card-foreground">{cap.title}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">{cap.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
