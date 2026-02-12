import { motion } from "framer-motion";
import galleryTire from "@/assets/gallery-tire.jpg";
import galleryJumpstart from "@/assets/gallery-jumpstart.jpg";
import galleryTowing from "@/assets/gallery-towing.jpg";
import galleryLockout from "@/assets/gallery-lockout.jpg";
import galleryFuel from "@/assets/gallery-fuel.jpg";
import galleryEngine from "@/assets/gallery-engine.jpg";

const images = [
  { src: galleryTire, alt: "Professional tire change service", label: "Tire Change" },
  { src: galleryJumpstart, alt: "Battery jump start service", label: "Jump Start" },
  { src: galleryTowing, alt: "Vehicle towing service", label: "Towing" },
  { src: galleryLockout, alt: "Car lockout assistance", label: "Lockout" },
  { src: galleryFuel, alt: "Emergency fuel delivery", label: "Fuel Delivery" },
  { src: galleryEngine, alt: "Roadside engine repair", label: "Engine Repair" },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-body text-xs font-bold uppercase tracking-[0.3em] text-primary mb-3">
            Our Work
          </p>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground mb-4 tracking-wide">
            IN ACTION
          </h2>
          <div className="divider-amber w-24 mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={img.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative overflow-hidden rounded-xl aspect-square cursor-pointer border border-border"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/60 transition-all duration-500 flex items-end justify-start p-6">
                <span className="font-display text-2xl text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-500 tracking-wide">
                  {img.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
