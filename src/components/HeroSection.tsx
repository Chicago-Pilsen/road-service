import { motion } from "framer-motion";
import { Phone, Clock, Shield, Zap } from "lucide-react";
import heroImage from "@/assets/hero-roadside.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Emergency roadside tow truck at night"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/40" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full bg-primary/20 border border-primary/30 px-4 py-1.5 mb-6"
          >
            <Clock className="w-3.5 h-3.5 text-primary" />
            <span className="font-body text-xs font-bold uppercase tracking-widest text-primary">
              24/7 Emergency Service
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="font-display text-6xl md:text-8xl lg:text-9xl text-foreground leading-[0.9] mb-6 tracking-wide"
          >
            STRANDED?
            <br />
            <span className="text-gradient-amber">WE'RE ON</span>
            <br />
            OUR WAY.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="font-body text-base md:text-lg font-light text-muted-foreground leading-relaxed max-w-xl mb-10"
          >
            Fast, reliable emergency roadside assistance — flat tires, dead batteries, 
            lockouts, towing & more. We come to you, anywhere, anytime.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <a
              href="tel:7736802671"
              className="inline-flex items-center gap-3 rounded-lg bg-primary px-8 py-4 font-body text-base font-bold text-primary-foreground transition-all duration-300 hover:shadow-glow hover:scale-105 pulse-emergency"
            >
              <Phone className="w-5 h-5" />
              CALL NOW: (773) 680-2671
            </a>
            <a
              href="#services"
              className="inline-flex items-center rounded-lg border-2 border-foreground/20 px-8 py-4 font-body text-sm font-bold uppercase tracking-widest text-foreground transition-all duration-300 hover:border-primary hover:text-primary"
            >
              Our Services
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="flex flex-wrap gap-8"
          >
            {[
              { icon: Clock, text: "24/7 Available" },
              { icon: Zap, text: "30 Min Response" },
              { icon: Shield, text: "Licensed & Insured" },
            ].map((badge) => (
              <div key={badge.text} className="flex items-center gap-2">
                <badge.icon className="w-4 h-4 text-primary" />
                <span className="font-body text-xs font-semibold uppercase tracking-wider text-muted-foreground">{badge.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
