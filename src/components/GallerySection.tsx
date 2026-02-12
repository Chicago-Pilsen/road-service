import { motion } from "framer-motion";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const images = [
  { src: gallery1, alt: "Rose gold nail tools flat lay", label: "Tools & Craft" },
  { src: gallery2, alt: "Curated nail polish collection", label: "Color Palette" },
  { src: gallery3, alt: "3D crystal nail art design", label: "Crystal Art" },
  { src: gallery4, alt: "Luxury nail salon interior", label: "The Studio" },
  { src: gallery5, alt: "Marble rose gold nail design", label: "Marble Design" },
  { src: gallery6, alt: "Nail art gems and decorations", label: "Embellishments" },
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
          <p className="font-body text-xs font-semibold uppercase tracking-[0.3em] text-primary mb-3">
            My Work
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-4">
            Portfolio <span className="italic font-semibold">Gallery</span>
          </h2>
          <div className="divider-rose w-24 mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={img.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl aspect-square cursor-pointer"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-all duration-500 flex items-end justify-start p-6">
                <motion.span
                  className="font-display text-xl font-semibold text-cream opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0"
                >
                  {img.label}
                </motion.span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
