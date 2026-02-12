import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Bride",
    text: "John created the most stunning bridal nails I could have ever imagined. Every detail was perfect — from the delicate lace patterns to the crystal accents. My nails were the talk of the wedding!",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Regular Client",
    text: "I've been coming to John for over three years now and I'm consistently blown away by his artistry. He listens, he creates, and the results are always beyond expectations. True professional.",
    rating: 5,
  },
  {
    name: "Ava Chen",
    role: "Fashion Influencer",
    text: "As someone who's always in front of the camera, my nails need to be on point. John's attention to detail and creative vision make him the only nail tech I trust. His chrome work is unmatched.",
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
          <p className="font-body text-xs font-semibold uppercase tracking-[0.3em] text-primary mb-3">
            Client Love
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-4">
            Kind <span className="italic font-semibold">Words</span>
          </h2>
          <div className="divider-rose w-24 mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="relative bg-card rounded-2xl p-8 shadow-soft"
            >
              <Quote className="w-8 h-8 text-rose-gold-light mb-4" />
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6 italic">
                "{t.text}"
              </p>
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star key={idx} className="w-3.5 h-3.5 fill-primary text-primary" />
                ))}
              </div>
              <div>
                <p className="font-display text-lg font-semibold text-foreground">{t.name}</p>
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
