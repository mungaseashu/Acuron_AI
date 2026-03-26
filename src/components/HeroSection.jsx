import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = ({ onOpenContact }) => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden bg-black">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover -translate-x-1/2 -translate-y-1/2"
        >
          <source src="/AI_Showcase_Video_Generation_Request.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Clear Dark Overlay for Text Contrast */}
      <div className="absolute inset-0 bg-black/40 dark:bg-black/50" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80" />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase bg-primary/15 text-primary border border-primary/20 mb-8">
            Enterprise AI Solutions
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-4xl sm:text-5xl md:text-7xl font-heading font-bold leading-tight mb-6 text-white drop-shadow-xl"
        >
          AI Systems That Run Your
          <br />
          <span className="text-gradient">Business Operations</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-10 drop-shadow-lg"
        >
          We build AI-powered systems that understand requests, make decisions
          and execute workflows, helping businesses grow without increasing headcount.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button variant="hero" size="lg" className="text-base" onClick={onOpenContact}>
            Get in Touch <ArrowRight size={18} />
          </Button>
          <Button
            variant="outline-hero"
            size="lg"
            className="text-base border-[hsl(210,15%,30%)] text-[hsl(210,15%,80%)] hover:bg-primary/10 hover:text-primary hover:border-primary"
            asChild
          >
            <a href="#services">Explore Services</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
