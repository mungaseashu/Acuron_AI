import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
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
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover -translate-x-1/2 -translate-y-1/2 opacity-40 dark:opacity-50"
        >
          <source src="/AI_Showcase_Video_Generation_Request.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--hero-gradient-start))/0.8] to-[hsl(var(--hero-gradient-end))/0.9]" />

      {/* Animated orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-3xl animate-float" />
      <div
        className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-accent/10 blur-3xl animate-float"
        style={{ animationDelay: "1.5s" }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

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
          className="text-4xl sm:text-5xl md:text-7xl font-heading font-bold leading-tight mb-6 text-[hsl(210,20%,95%)]"
        >
          Enterprise-Grade AI
          <br />
          <span className="text-gradient">That Performs</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-xl text-[hsl(210,15%,70%)] max-w-2xl mx-auto mb-10"
        >
          We build AI solutions that work — locally, in the cloud, and
          everywhere in between.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button variant="hero" size="lg" className="text-base" asChild>
            <a href="#contact">
              Get in Touch <ArrowRight size={18} />
            </a>
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
