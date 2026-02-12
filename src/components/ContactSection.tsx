import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Instagram, Send } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", service: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // placeholder
    alert("Thank you for your message! I'll get back to you within 24 hours.");
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-gradient-rose">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-body text-xs font-semibold uppercase tracking-[0.3em] text-primary mb-3">
            Get In Touch
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-4">
            Book Your <span className="italic font-semibold">Appointment</span>
          </h2>
          <div className="divider-rose w-24 mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-display text-2xl font-semibold text-foreground mb-8">
              Let's Create Something Beautiful
            </h3>

            <div className="space-y-6 mb-10">
              {[
                { icon: MapPin, label: "Studio Location", value: "123 Elegance Avenue, Suite 200\nLos Angeles, CA 90012" },
                { icon: Phone, label: "Phone", value: "(555) 123-4567" },
                { icon: Mail, label: "Email", value: "hello@johndoenails.com" },
                { icon: Clock, label: "Hours", value: "Mon–Sat: 9AM – 7PM\nSun: By Appointment Only" },
              ].map((item) => (
                <div key={item.label} className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-blush flex items-center justify-center flex-shrink-0 mt-0.5">
                    <item.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-body text-xs font-semibold uppercase tracking-wider text-foreground mb-1">
                      {item.label}
                    </p>
                    <p className="font-body text-sm text-muted-foreground whitespace-pre-line">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social */}
            <div className="flex gap-3">
              {[Instagram, Send].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-card shadow-soft flex items-center justify-center text-muted-foreground hover:text-primary hover:shadow-elevated transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="bg-card rounded-2xl p-8 shadow-soft space-y-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full rounded-xl border border-border bg-background px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/20 transition-all"
              />
              <input
                type="email"
                placeholder="Email Address"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full rounded-xl border border-border bg-background px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/20 transition-all"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <input
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full rounded-xl border border-border bg-background px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/20 transition-all"
              />
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full rounded-xl border border-border bg-background px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring/20 transition-all"
              >
                <option value="">Select Service</option>
                <option value="classic">Classic Manicure</option>
                <option value="gel">Gel Extensions</option>
                <option value="art">Nail Art Design</option>
                <option value="luxury">Luxury Spa Package</option>
                <option value="bridal">Bridal Collection</option>
                <option value="chrome">Chrome & Ombré</option>
              </select>
            </div>
            <textarea
              placeholder="Tell me about your dream nails..."
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full rounded-xl border border-border bg-background px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/20 transition-all resize-none"
            />
            <button
              type="submit"
              className="w-full rounded-full bg-primary px-8 py-3.5 font-body text-xs font-semibold uppercase tracking-widest text-primary-foreground transition-all duration-300 hover:shadow-glow hover:scale-[1.02]"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
