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
  TrendingUp,
  ShieldCheck,
  Zap,
  Clock,
  CheckCircle2,
  BarChart,
  Bot,
  FileText,
  Users,
  AlertTriangle,
  MessageSquare,
  Activity
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
    outcome: "Accelerate financial approvals",
    //metric: "3x Faster Processing",
    metricIcon: Zap,
    items: [
      { text: "Claims automation", icon: FileText },
      { text: "Policy issuance", icon: ShieldCheck },
      { text: "TPA workflows", icon: Building2 },
    ],
  },
  {
    icon: Briefcase,
    title: "Enterprise Operations",
    outcome: "Streamline core processes",
    //metric: "-40% Operational Costs",
    metricIcon: TrendingUp,
    items: [
      { text: "Approval workflows", icon: CheckCircle2 },
      { text: "Vendor onboarding", icon: Users },
      { text: "Internal request automation", icon: Bot },
    ],
  },
  {
    icon: Factory,
    title: "Manufacturing",
    outcome: "Enhance safety & productivity",
    //metric: "99.9% Incident Detection",
    metricIcon: Activity,
    items: [
      { text: "Safety monitoring (vision AI)", icon: MonitorCheck },
      { text: "Workforce tracking", icon: Users },
      { text: "Incident automation", icon: AlertTriangle },
    ],
  },
  {
    icon: Headset,
    title: "Customer Operations",
    outcome: "Deliver exceptional 24/7 support",
    //metric: "+50% CSAT Score",
    metricIcon: BarChart,
    items: [
      { text: "Email + voice support", icon: MessageSquare },
      { text: "Complaint handling", icon: ShieldCheck },
      { text: "SLA workflows", icon: Clock },
    ],
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
                className="relative p-7 rounded-2xl bg-card border border-border/50 hover:border-primary/40 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 group overflow-hidden flex flex-col h-full"
              >
                {/* Hover Gradient Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="mb-6 relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 text-primary shadow-sm space-x-0">
                    <area.icon className="w-7 h-7 shrink-0" />
                  </div>
                </div>

                <div className="relative z-10 flex-grow">
                  <h4 className="text-xl font-heading font-bold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                    {area.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {area.outcome}
                  </p>
                </div>
                
                <ul className="space-y-3.5 relative z-10 mt-auto pt-5 border-t border-border/50">
                  {area.items.map((item, idx) => (
                    <li key={idx} className="flex items-center text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      <div className="w-6 h-6 rounded-full bg-primary/5 flex items-center justify-center mr-3 group-hover:bg-primary/10 transition-colors">
                        <item.icon className="w-3.5 h-3.5 text-primary/70 group-hover:text-primary shrink-0 transition-colors" />
                      </div>
                      <span>{item.text}</span>
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