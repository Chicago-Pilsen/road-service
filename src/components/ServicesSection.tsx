import { motion } from "framer-motion";
import { Sparkles, Gem, Palette, Crown, Flower2, Star } from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "Classic Manicure",
    description: "A timeless treatment including nail shaping, cuticle care, hand massage, and flawless polish application.",
    price: "From $45",
    duration: "45 min",
  },
  {
    icon: Gem,
    title: "Gel Extensions",
    description: "Customizable gel nail extensions with your choice of length, shape, and finish for a durable, salon-perfect look.",
    price: "From $85",
    duration: "90 min",
  },
  {
    icon: Palette,
    title: "Nail Art Design",
    description: "Hand-painted bespoke nail art from minimalist line work to intricate 3D masterpieces that express your personality.",
    price: "From $65",
    duration: "60 min",
  },
  {
    icon: Crown,
    title: "Luxury Spa Package",
    description: "The ultimate pampering experience with hot stone massage, paraffin treatment, exfoliation, and premium gel finish.",
    price: "From $120",
    duration: "120 min",
  },
  {
    icon: Flower2,
    title: "Bridal Collection",
    description: "Exquisite bridal nail designs with Swarovski crystals, gold foil, and delicate lace-inspired patterns for your special day.",
    price: "From $150",
    duration: "120 min",
  },
  {
    icon: Star,
    title: "Chrome & Ombré",
    description: "Trending chrome mirror finish or seamless ombré gradients using premium pigments for a show-stopping effect.",
    price: "From $75",
    duration: "75 min",
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
    <section id="services" className="py-24 md:py-32 bg-gradient-rose">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-body text-xs font-semibold uppercase tracking-[0.3em] text-primary mb-3">
            What I Offer
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-4">
            Services & <span className="italic font-semibold">Pricing</span>
          </h2>
          <div className="divider-rose w-24 mx-auto mt-6" />
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
              className="group relative bg-card rounded-2xl p-8 shadow-soft hover:shadow-elevated transition-all duration-500 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-full bg-blush flex items-center justify-center">
                  <service.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="font-body text-xs font-medium tracking-wider text-muted-foreground uppercase">
                  {service.duration}
                </span>
              </div>

              <h3 className="font-display text-2xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">
                {service.description}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-border">
                <span className="font-display text-xl font-semibold text-primary">
                  {service.price}
                </span>
                <a
                  href="#contact"
                  className="font-body text-xs font-semibold uppercase tracking-widest text-primary hover:text-deep-rose transition-colors"
                >
                  Book →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
