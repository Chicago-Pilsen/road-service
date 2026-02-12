import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Marcus Johnson",
    role: "Stranded on I-94",
    text: "Blew a tire on the highway at 2 AM. Called Emergency Roadside and they were there in under 25 minutes. Professional, fast, and incredibly kind. These guys are lifesavers — literally.",
    rating: 5,
  },
  {
    name: "Sarah Williams",
    role: "Dead Battery in Winter",
    text: "My car wouldn't start in -10° weather. They came out, jumped my battery, and even checked my alternator to make sure I'd be okay. Honest, helpful, and affordable. Can't recommend enough!",
    rating: 5,
  },
  {
    name: "David Chen",
    role: "Locked Out at Work",
    text: "Left my keys in the car at 6 PM on a Friday. They arrived in 20 minutes and got me in without a scratch on my car. No ridiculous upcharge for after-hours either. These are the real deal.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-body text-xs font-bold uppercase tracking-[0.3em] text-primary mb-3">
            Real Reviews
          </p>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground mb-4 tracking-wide">
            WHAT DRIVERS SAY
          </h2>
          <div className="divider-amber w-24 mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="relative bg-card rounded-xl p-8 border border-border"
            >
              <Quote className="w-8 h-8 text-primary/30 mb-4" />
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">
                "{t.text}"
              </p>
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star key={idx} className="w-3.5 h-3.5 fill-primary text-primary" />
                ))}
              </div>
              <div>
                <p className="font-display text-xl text-foreground tracking-wide">{t.name}</p>
                <p className="font-body text-xs text-muted-foreground tracking-wide">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
