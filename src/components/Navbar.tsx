import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import swissFlag from "@/assets/swiss-flag.png";

const navLinks: { to: string; label: string; isHash?: boolean }[] = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/board", label: "Board" },
  { to: "/fighters", label: "Fighters" },
  { to: "/events", label: "Events" },
  { to: "/#membership", label: "Membership", isHash: true },
  { to: "/register", label: "Register" },
  { to: "/sponsor", label: "Sponsor" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleMembershipClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsOpen(false);
    if (location.pathname === "/") {
      document.getElementById("membership")?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate({ pathname: "/", hash: "#membership" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-accent/95 backdrop-blur-md border-b border-primary/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center gap-3">
            <img src={swissFlag} alt="Swiss flag" className="w-7 h-7 object-contain" />
            <span className="font-heading text-primary-foreground text-xl tracking-wider">
              SMMAF
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) =>
              link.isHash ? (
                <a
                  key={link.to}
                  href={link.to}
                  onClick={handleMembershipClick}
                  className="font-body text-sm font-medium tracking-wider uppercase transition-colors duration-200 text-primary-foreground/70 hover:text-primary-foreground"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`font-body text-sm font-medium tracking-wider uppercase transition-colors duration-200 ${
                    location.pathname === link.to
                      ? "text-primary"
                      : "text-primary-foreground/70 hover:text-primary-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-primary-foreground"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-accent border-t border-primary/20"
          >
            <div className="px-6 py-4 space-y-3">
              {navLinks.map((link) =>
                link.isHash ? (
                  <a
                    key={link.to}
                    href={link.to}
                    onClick={handleMembershipClick}
                    className="block font-body text-sm font-medium tracking-wider uppercase py-2 text-primary-foreground/70"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setIsOpen(false)}
                    className={`block font-body text-sm font-medium tracking-wider uppercase py-2 ${
                      location.pathname === link.to
                        ? "text-primary"
                        : "text-primary-foreground/70"
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
