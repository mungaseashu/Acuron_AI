import { motion } from "framer-motion";
import {
  Building2,
  Cloud,
  Puzzle,
  MonitorCheck,
  Brain,
  Trophy,
  Landmark,
  Briefcase,
  Factory,
  Headset,
} from "lucide-react";

const reasons = [
  {
    icon: Building2,
    title: "Enterprise-Ready",
    desc: "AI solutions designed to scale in production with reliability and security.",
  },
  {
    icon: Cloud,
    title: "Deployment Flexibility",
    desc: "Choose local, cloud, or hybrid deployment as per your business needs.",
  },
  {
    icon: Puzzle,
    title: "System Integration",
    desc: "Seamless integration with legacy and modern enterprise systems.",
  },
  {
    icon: MonitorCheck,
    title: "24/7 AI Monitoring",
    desc: "Continuous monitoring for mission-critical AI systems.",
  },
  {
    icon: Brain,
    title: "Custom Models",
    desc: "Tailor-made AI models built to address your unique business challenges.",
  },
  {
    icon: Trophy,
    title: "Proven Success",
    desc: "Trusted by enterprises for scalable, reliable, real-world AI solutions.",
  },
];

const impactAreas = [
  {
    icon: Landmark,
    title: "Banking & Insurance",
    items: ["Claims automation", "Policy issuance", "TPA workflows"],
  },
  {
    icon: Briefcase,
    title: "Enterprise Operations",
    items: ["Approval workflows", "Vendor onboarding", "Internal request automation"],
  },
  {
    icon: Factory,
    title: "Manufacturing",
    items: ["Safety monitoring (vision AI)", "Workforce tracking", "Incident automation"],
  },
  {
    icon: Headset,
    title: "Customer Operations",
    items: ["Email + voice support", "Complaint handling", "SLA workflows"],
  },
];

const WhySection = () => {
  return (
    <>
      <section id="why" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-widest">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mt-3 text-foreground">
            Why Acuron AI?
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            We don't just build AI. We deliver it — from local deployments
            on-premise to cloud-native, high-throughput models.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex gap-4 p-6 rounded-xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <reason.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-heading font-semibold mb-1 text-card-foreground">
                  {reason.title}
                </h4>
                <p className="text-sm text-muted-foreground">{reason.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

      {/* Impact Section */}
      <section id="impact" className="py-12 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-widest">
              Industries
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mt-3 text-foreground">
              Impact Areas
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
             AI systems tailored to high impact business processes across industries.
          </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactAreas.map((area, i) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 text-primary">
                  <area.icon className="w-6 h-6 shrink-0" />
                </div>
                <h4 className="text-xl font-heading font-semibold mb-4 text-card-foreground">
                  {area.title}
                </h4>
                <ul className="space-y-3">
                  {area.items.map((item, idx) => (
                    <li key={idx} className="flex items-start text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-1.5 mr-2.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WhySection;
// hello