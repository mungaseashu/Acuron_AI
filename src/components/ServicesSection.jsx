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
    title: "AI Voice & AI Agents",
    description:
      "Custom models for speech, language, image, and video — fused into actionable, human-like intelligence that scales.",
    image: "/AI3.png",
  },
  {
    icon: BarChart3,
    title: "Email Automation",
    description:
      "Automatically convert emails and requests into structured workflows—validated, routed, and executed without manual effort.",
    image: "/E1.png",
  },
];

const workflowSteps = [
  { title: "Capture", desc: "Emails, documents, video, voice" },
  { title: "Understand", desc: "AI reads context & intent" },
  { title: "Validate", desc: "Missing data / rule checks" },
  { title: "Decide", desc: "Business logic + AI reasoning" },
  { title: "Route", desc: "Assign to right team/system" },
  { title: "Execute", desc: "Trigger actions" },
  { title: "Respond", desc: "Structured output" },
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
    <>
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
            Our Systems
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            We automate entrire business processes - not just tasks.
          </p>
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
                {/* Icon reveal on hover (above title) */}
                <div className="grid grid-rows-[0fr] group-hover/card:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out">
                  <div className="overflow-hidden flex flex-col justify-end">
                    <div className="w-10 h-10 rounded-full bg-primary/20 backdrop-blur-md flex items-center justify-center border border-primary/30 opacity-0 group-hover/card:opacity-100 transition-all duration-500 delay-100 mb-3 transform translate-y-4 group-hover/card:translate-y-0">
                      <service.icon className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                </div>

                {/* Always visible title */}
                <h3 className="font-heading font-semibold text-xl text-white mb-0 group-hover/card:mb-2 transition-all duration-500 ease-out">
                  {service.title}
                </h3>

                {/* Description reveal on hover (below title) */}
                <div className="grid grid-rows-[0fr] group-hover/card:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out">
                  <div className="overflow-hidden">
                    <p className="text-sm text-gray-300 leading-relaxed opacity-0 group-hover/card:opacity-100 transition-all duration-500 delay-100 transform translate-y-4 group-hover/card:translate-y-0">
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

      {/* Workflow Section */}
      <section id="workflow" className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-widest">
              How It Works
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mt-3 text-foreground">
              Our Workflow
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              From data capture to structured response, our end-to-end intelligent automation pipeline.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl p-6 lg:p-8 border border-border max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-stretch gap-8 lg:gap-12"
          >
            {/* Left side: Image */}
            <div className="w-full lg:w-1/2 flex justify-center items-center">
              <div className="relative w-full overflow-hidden flex items-center justify-center group">
                 <img 
                   src="/Workflow.png" 
                   alt="Workflow Diagram" 
                   className="w-full max-w-sm lg:max-w-md h-auto object-contain transition-transform duration-700 group-hover:scale-105"
                 />
              </div>
            </div>

            {/* Right side: Content */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              <div className="space-y-0">
                {workflowSteps.map((step, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex items-start gap-4 group/step cursor-default"
                  >
                    <div className="flex flex-col items-center mt-1">
                      <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs border border-primary/20 group-hover/step:bg-primary group-hover/step:text-primary-foreground group-hover/step:scale-110 transition-all duration-300">
                        {index + 1}
                      </div>
                      {index !== workflowSteps.length - 1 && (
                        <div className="w-px h-6 lg:h-8 bg-gradient-to-b from-primary/30 to-border/50 my-1.5 group-hover/step:from-primary/60 transition-colors duration-300"></div>
                      )}
                    </div>
                    <div className="pt-1 pb-2">
                      <h4 className="text-base font-semibold text-foreground group-hover/step:text-primary transition-colors duration-300">
                        {step.title}
                      </h4>
                      <p className="text-sm text-muted-foreground mt-0.5">
                        {step.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ServicesSection;
