import { motion } from "framer-motion";
import heroImage from "@/assets/hero-nails.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury nail art workspace"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/40 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="font-body text-xs font-semibold uppercase tracking-[0.3em] text-rose-gold-light mb-4"
          >
            Premium Nail Artistry
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-light text-cream leading-[0.95] mb-6"
          >
            Nails That
            <br />
            <span className="font-semibold italic">Speak</span>
            <br />
            Elegance
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="font-body text-sm md:text-base font-light text-champagne/80 leading-relaxed max-w-md mb-10"
          >
            Award-winning nail technician specializing in bespoke designs, 
            luxury manicures, and transformative nail art experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#services"
              className="rounded-full bg-primary px-8 py-3.5 font-body text-xs font-semibold uppercase tracking-widest text-primary-foreground transition-all duration-300 hover:shadow-glow hover:scale-105"
            >
              Explore Services
            </a>
            <a
              href="#gallery"
              className="rounded-full border border-champagne/30 px-8 py-3.5 font-body text-xs font-semibold uppercase tracking-widest text-cream transition-all duration-300 hover:bg-cream/10"
            >
              View Portfolio
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-5 h-8 rounded-full border border-cream/30 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-cream/60" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
