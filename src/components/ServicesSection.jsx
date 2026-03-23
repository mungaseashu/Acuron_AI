import { motion } from "framer-motion";
import { Eye, Cog, Mic, BarChart3 } from "lucide-react";

const services = [
  {
    image: "/AI1.png",
    title: "Computer Vision Systems",
    description:
      "AI for smart surveillance, document intelligence, face and object analytics — designed for edge, on-premise, and cloud environments.",
  },
  {
    image: "/AI2.png",
    title: "Automation & Integrations",
    description:
      "End-to-end AI pipelines for real-time decision making, business automation, and integration across legacy and modern platforms.",
  },
  {
    image: "/AI3.png",
    title: "Voice, NLP & Multimodal AI",
    description:
      "Custom models for speech, language, image, and video — fused into actionable, human-like intelligence that scales.",
  },
  {
    image: "/AI4.png",
    title: "Predictive Analytics",
    description:
      "Utilize AI-driven predictions to guide strategic actions across logistics, retail, finance, and more with data-informed insights.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
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
          <span className="text-primary font-medium text-sm uppercase tracking-widest">
            What We Do
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mt-3 text-foreground">
            Our Services
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 group/cards">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative h-[320px] sm:h-[380px] w-full rounded-2xl overflow-hidden cursor-pointer group/card group-hover/cards:blur-[4px] group-hover/cards:scale-[0.98] group-hover/cards:opacity-60 hover:!blur-none hover:!scale-[1.02] hover:!opacity-100 hover:z-10 transition-all duration-500 border border-border/20 shadow-lg"
            >
              <img 
                src={service.image} 
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110" 
              />
              
              {/* Gradient Overlay for Title visibility in both Light/Dark modes */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover/card:opacity-90 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />

              {/* Content Container */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="font-heading font-bold text-xl text-white transform transition-transform duration-500 group-hover/card:-translate-y-4">
                  {service.title}
                </h3>
                <div className="grid grid-rows-[0fr] group-hover/card:grid-rows-[1fr] transition-[grid-template-rows] duration-500">
                  <div className="overflow-hidden">
                    <p className="text-sm text-gray-200 opacity-0 transform translate-y-4 group-hover/card:opacity-100 group-hover/card:translate-y-0 transition-all duration-500 delay-100">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
