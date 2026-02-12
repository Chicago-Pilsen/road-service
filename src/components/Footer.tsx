import { Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="font-display text-xl tracking-wider text-foreground">EMERGENCY</span>
            <span className="font-display text-xl tracking-wider text-primary">ROADSIDE</span>
          </div>
          <a
            href="tel:7736802671"
            className="flex items-center gap-2 font-body text-sm font-bold text-primary hover:text-amber-light transition-colors"
          >
            <Phone className="w-4 h-4" />
            (773) 680-2671
          </a>
          <p className="font-body text-xs text-muted-foreground tracking-wide">
            © 2026 Emergency Roadside Repairs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
