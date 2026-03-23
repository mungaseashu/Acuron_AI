import { ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-card border-t border-border/50">
      {/* Glow line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/logo.svg"
                alt="Acuron AI Logo"
                className="w-8 h-8 object-contain"
                onError={(e) => {
                  e.currentTarget.src = "/favicon.ico";
                }}
              />
              <span className="font-heading font-bold text-xl text-foreground">
                Acuron <span className="text-primary">AI</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Enterprise-grade AI solutions deployed where it matters most.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider text-foreground mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {["Home", "Services", "Capabilities", "Why Us", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(" ", "-").replace("why-us", "why")}`}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 group"
                    >
                      {link}
                      <ArrowUpRight
                        size={12}
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider text-foreground mb-4">
              Services
            </h4>
            <ul className="space-y-2.5">
              {[
                "Computer Vision",
                "Automation",
                "Voice & NLP",
                "Predictive Analytics",
              ].map((s) => (
                <li key={s}>
                  <span className="text-sm text-muted-foreground">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider text-foreground mb-4">
              Contact
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="mailto:contact@acuronai.com"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  contact@acuronai.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+919552033662"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  +91 9552033662
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Acuron AI. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms of Service"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs text-muted-foreground hover:text-primary transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
