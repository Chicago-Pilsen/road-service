import { motion } from "framer-motion";
import { Award, Clock, Shield, Truck } from "lucide-react";
import aboutImage from "@/assets/about-mechanic.jpg";

const stats = [
  { icon: Clock, value: "15+", label: "Years Experience" },
  { icon: Truck, value: "50,000+", label: "Roadside Rescues" },
  { icon: Award, value: "4.9★", label: "Customer Rating" },
  { icon: Shield, value: "100%", label: "Licensed & Insured" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-gradient-steel">
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
            <div className="relative rounded-xl overflow-hidden shadow-elevated border border-border">
              <img
                src={aboutImage}
                alt="Professional roadside mechanic"
                className="w-full h-[500px] lg:h-[600px] object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-xl border-2 border-primary/30 -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-body text-xs font-bold uppercase tracking-[0.3em] text-primary mb-3">
              About Us
            </p>
            <h2 className="font-display text-5xl md:text-6xl text-foreground mb-6 tracking-wide">
              WHY CHOOSE US
            </h2>
            <div className="divider-amber w-16 mb-8" />

            <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
              With over 15 years serving the Chicagoland area, Emergency Roadside Repairs 
              is the name drivers trust when they're stuck. We've built our reputation on 
              fast response times, honest pricing, and getting the job done right — every time.
            </p>
            <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
              Our team of ASE-certified technicians arrives fully equipped with professional-grade 
              tools, jump packs, air compressors, and common replacement parts. We handle everything 
              from flat tires and dead batteries to lockouts and emergency towing.
            </p>
            <p className="font-body text-sm text-muted-foreground leading-relaxed mb-8">
              Available 24 hours a day, 7 days a week, 365 days a year — because breakdowns 
              don't wait for business hours. Call us anytime at <a href="tel:7736802671" className="text-primary font-semibold hover:underline">(773) 680-2671</a>.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <stat.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-display text-3xl text-foreground">{stat.value}</p>
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
