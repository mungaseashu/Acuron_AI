import { motion } from "framer-motion";
import { Eye, Cog, Mic, BarChart3 } from "lucide-react";

const services = [
  {
    icon: Eye,
    title: "Computer Vision Systems",
    description:
      "AI for smart surveillance, document intelligence, face and object analytics — designed for edge, on-premise, and cloud environments.",
    image: "/AI1.png",
  },
  {
    icon: Cog,
    title: "Automation & Integrations",
    description:
      "End-to-end AI pipelines for real-time decision making, business automation, and integration across legacy and modern platforms.",
    image: "/AI2.png",
  },
  {
    icon: Mic,
    title: "Voice, NLP & Multimodal AI",
    description:
      "Custom models for speech, language, image, and video — fused into actionable, human-like intelligence that scales.",
    image: "/AI3.png",
  },
  {
    icon: BarChart3,
    title: "Predictive Analytics",
    description:
      "Utilize AI-driven predictions to guide strategic actions across logistics, retail, finance, and more with data-informed insights.",
    image: "/AI4.png",
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

        {/* group/list scope allows us to blur all non-hovered cards when one is active */}
        <div className="group/list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="group/card relative h-[380px] rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ease-out hover:!blur-none hover:scale-[1.02] hover:z-10 group-hover/list:blur-[6px] group-hover/list:scale-95 group-hover/list:opacity-75"
            >
              {/* Background Image */}
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
              />

              {/* Base dark gradient: guarantees text legibility at the bottom in both light & dark modes */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent transition-all duration-500 group-hover/card:via-black/80" />

              {/* Content overlay */}
              <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end">
                {/* Always visible title */}
                <h3 className="font-heading font-semibold text-xl text-white mb-2 translate-y-8 group-hover/card:translate-y-0 transition-transform duration-500 ease-out">
                  {service.title}
                </h3>
                
                {/* Description and icon reveal on hover */}
                <div className="opacity-0 translate-y-6 group-hover/card:opacity-100 group-hover/card:translate-y-0 transition-all duration-500 delay-100 ease-out flex flex-col gap-4">
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="w-10 h-10 rounded-full bg-primary/20 backdrop-blur-md flex items-center justify-center border border-primary/30">
                    <service.icon className="w-5 h-5 text-primary" />
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
