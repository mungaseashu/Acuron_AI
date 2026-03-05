import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-section-alt">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-widest">Get In Touch</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mt-3 text-foreground">Let's Connect</h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Whether you're launching new AI initiatives or scaling enterprise-grade systems, AcuronAI is ready to partner and deliver impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {[
            { icon: Mail, label: "Email", value: "contact@acuronai.com", href: "mailto:contact@acuronai.com" },
            { icon: Phone, label: "Phone", value: "+91 9552033662", href: "tel:+919552033662" },
            { icon: MapPin, label: "Location", value: "India", href: "#" },
          ].map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="flex flex-col items-center p-8 rounded-xl bg-card border border-border/50 hover:border-primary/40 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-heading font-semibold mb-1 text-card-foreground">{item.label}</h4>
              <p className="text-sm text-muted-foreground">{item.value}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
