import { Link } from "react-router-dom";
import { Instagram, Facebook, Mail } from "lucide-react";
import fullLogo from "@/assets/smmaf-full-logo.png";

const Footer = () => (
  <footer className="bg-accent text-accent-foreground">
    <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <div className="mb-4">
            <img src={fullLogo} alt="SMMAF" className="h-12 w-auto object-contain" />
          </div>
          <p className="font-body text-accent-foreground/60 text-sm leading-relaxed">
            The Swiss Mixed Martial Arts Federation — developing elite fighters and promoting the sport across Switzerland.
          </p>
        </div>

        <div className="order-3 md:order-2">
          <h4 className="font-heading text-lg mb-4 tracking-wider">Quick Links</h4>
          <div className="space-y-2">
            {["About", "Board", "Fighters", "Events", "Contact"].map((l) => (
              <Link
                key={l}
                to={`/${l.toLowerCase()}`}
                className="block font-body text-sm text-accent-foreground/60 hover:text-primary transition-colors"
              >
                {l}
              </Link>
            ))}
          </div>
        </div>

        <div className="order-2 md:order-3">
          <h4 className="font-heading text-lg mb-4 tracking-wider">Follow Us</h4>
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/smmafed/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 border border-accent-foreground/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://www.facebook.com/smmafed/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 border border-accent-foreground/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300"
            >
              <Facebook size={18} />
            </a>
            <a
              href="mailto:Info@mmasf.org"
              className="w-10 h-10 border border-accent-foreground/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-accent-foreground/10 mt-12 pt-8 text-center space-y-2">
        <p className="font-body text-xs text-accent-foreground/40">
          © {new Date().getFullYear()} Swiss MMA Federation. All rights reserved.
        </p>
        <p className="font-body text-xs text-accent-foreground/30">
          Website created by{" "}
          <a
            href="https://boldlinesmm.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            Boldline
          </a>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
