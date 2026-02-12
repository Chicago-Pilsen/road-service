import { motion } from "framer-motion";
import { Award, Clock, Heart, Users } from "lucide-react";
import aboutPortrait from "@/assets/about-portrait.jpg";

const stats = [
  { icon: Clock, value: "10+", label: "Years Experience" },
  { icon: Users, value: "5,000+", label: "Happy Clients" },
  { icon: Award, value: "15+", label: "Awards Won" },
  { icon: Heart, value: "100%", label: "Passion Driven" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-gradient-rose">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={aboutPortrait}
                alt="Her, nail technician"
                className="w-full h-[500px] lg:h-[600px] object-cover"
                loading="lazy"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-2xl border-2 border-rose-gold/30 -z-10" />
            <div className="absolute -top-4 -left-4 w-24 h-24 rounded-2xl bg-blush -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-body text-xs font-semibold uppercase tracking-[0.3em] text-primary mb-3">
              About Me
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-6">
              Meet <span className="italic font-semibold">Her</span>
            </h2>
            <div className="divider-rose w-16 mb-8" />

            <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
              With over a decade of experience in the nail industry, I've transformed 
              nail artistry into an elevated form of self-expression. My journey began 
              in a small salon and has grown into a renowned practice known for 
              pushing creative boundaries.
            </p>
            <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
              Certified by the International Nail Technicians Association and trained 
              in Japan's precision nail art techniques, I bring a global perspective 
              to every design. From minimalist elegance to extravagant showpieces, 
              each nail tells a story.
            </p>
            <p className="font-body text-sm text-muted-foreground leading-relaxed mb-8">
              I use only premium, cruelty-free products and maintain the highest 
              standards of hygiene. Your comfort, safety, and satisfaction are 
              always my top priorities.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blush flex items-center justify-center flex-shrink-0">
                    <stat.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-display text-2xl font-bold text-foreground">{stat.value}</p>
                    <p className="font-body text-xs text-muted-foreground tracking-wide">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
