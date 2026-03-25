import { useTheme } from "@/hooks/use-theme";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ContactDrawer from "./ContactDrawer";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Why Us", href: "#why" },
];

const Navbar = () => {
  const { isDark, toggle } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <ContactDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white dark:bg-background/80 border-b border-border/50">
        <div className="container mx-auto flex items-center justify-between h-16 px-4">
          <a href="#home" className="flex items-center gap-2 pl-20">
            <img
              src="/logo.svg"
              alt="Acuron AI Logo"
              className="w-8 h-8 object-contain"
              onError={(e) => {
                e.currentTarget.src = "/favicon.ico";
              }}
            />
            <span className="font-heading font-bold text-xl text-foreground">
              Acuron <span className="text-foreground">AI</span>
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8 pr-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => setDrawerOpen(true)}
              className="text-sm font-medium text-primary border border-primary/50 px-4 py-2 rounded-md hover:bg-primary/10 transition-colors"
            >
              Contact Us
            </button>
            <button
              onClick={toggle}
              className="p-2 rounded-full bg-secondary hover:bg-muted transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun size={18} className="text-foreground" />
              ) : (
                <Moon size={18} className="text-foreground" />
              )}
            </button>
          </div>

          {/* Mobile toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggle}
              className="p-2 rounded-full bg-secondary"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun size={18} className="text-foreground" />
              ) : (
                <Moon size={18} className="text-foreground" />
              )}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-foreground"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden bg-background border-b border-border"
            >
              <div className="flex flex-col px-4 py-4 gap-3">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2"
                  >
                    {link.label}
                  </a>
                ))}
                <button
                  onClick={() => {
                    setMobileOpen(false);
                    setDrawerOpen(true);
                  }}
                  className="text-sm font-medium text-left text-primary hover:text-primary/80 transition-colors py-2 w-full"
                >
                  Contact Us
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
