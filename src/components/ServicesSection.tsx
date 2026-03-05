import { motion } from "framer-motion";
import { Eye, Cog, Mic, BarChart3 } from "lucide-react";

const services = [
  {
    icon: Eye,
    title: "Computer Vision Systems",
    description: "AI for smart surveillance, document intelligence, face and object analytics — designed for edge, on-premise, and cloud environments.",
  },
  {
    icon: Cog,
    title: "Automation & Integrations",
    description: "End-to-end AI pipelines for real-time decision making, business automation, and integration across legacy and modern platforms.",
  },
  {
    icon: Mic,
    title: "Voice, NLP & Multimodal AI",
    description: "Custom models for speech, language, image, and video — fused into actionable, human-like intelligence that scales.",
  },
  {
    icon: BarChart3,
    title: "Predictive Analytics",
    description: "Utilize AI-driven predictions to guide strategic actions across logistics, retail, finance, and more with data-informed insights.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" },
  }),
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-widest">What We Do</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mt-3 text-foreground">Our Services</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group relative p-6 rounded-xl bg-card border border-border/60 hover:border-primary/40 hover:shadow-xl hover:shadow-[hsl(var(--card-hover-shadow))] transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-3 text-card-foreground">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
