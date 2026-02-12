import { motion } from "framer-motion";
import { Car, Battery, KeyRound, Fuel, Wrench, Truck } from "lucide-react";

const services = [
  {
    icon: Car,
    title: "Flat Tire Change",
    description: "Got a flat? We'll swap it with your spare or provide a temporary fix to get you moving again — fast and safe.",
    response: "~25 min",
  },
  {
    icon: Battery,
    title: "Battery Jump Start",
    description: "Dead battery? Our technicians carry professional-grade jump packs to get your engine running in minutes.",
    response: "~20 min",
  },
  {
    icon: KeyRound,
    title: "Vehicle Lockout",
    description: "Locked your keys inside? We use damage-free tools and techniques to get you back in your vehicle quickly.",
    response: "~30 min",
  },
  {
    icon: Fuel,
    title: "Fuel Delivery",
    description: "Run out of gas on the road? We'll deliver enough fuel to get you to the nearest station, day or night.",
    response: "~30 min",
  },
  {
    icon: Wrench,
    title: "Minor Repairs",
    description: "Belt snapped? Hose leak? We carry common parts and tools to perform quick roadside fixes on the spot.",
    response: "~35 min",
  },
  {
    icon: Truck,
    title: "Towing Service",
    description: "When a roadside fix isn't possible, we'll tow your vehicle safely to the nearest shop or your preferred mechanic.",
    response: "~30 min",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-gradient-steel">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-body text-xs font-bold uppercase tracking-[0.3em] text-primary mb-3">
            What We Do
          </p>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground mb-4 tracking-wide">
            OUR SERVICES
          </h2>
          <div className="divider-amber w-24 mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="group relative bg-card rounded-xl p-8 border border-border hover:border-primary/50 transition-all duration-500 hover:-translate-y-1 hover:shadow-elevated"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="font-body text-xs font-bold tracking-wider text-primary uppercase bg-primary/10 px-3 py-1 rounded-full">
                  {service.response}
                </span>
              </div>

              <h3 className="font-display text-2xl text-foreground mb-3 tracking-wide">
                {service.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">
                {service.description}
              </p>

              <a
                href="tel:7736802671"
                className="inline-flex items-center font-body text-xs font-bold uppercase tracking-widest text-primary hover:text-amber-light transition-colors"
              >
                Call for service →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
