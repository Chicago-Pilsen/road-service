import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", service: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! We'll get back to you within 1 hour.");
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-gradient-steel">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-body text-xs font-bold uppercase tracking-[0.3em] text-primary mb-3">
            Get Help Now
          </p>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground mb-4 tracking-wide">
            CONTACT US
          </h2>
          <div className="divider-amber w-24 mx-auto mt-6" />
        </motion.div>

        {/* Emergency banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-primary/10 border-2 border-primary rounded-xl p-6 md:p-8 text-center mb-12"
        >
          <p className="font-display text-3xl md:text-4xl text-foreground tracking-wide mb-2">
            NEED HELP RIGHT NOW?
          </p>
          <a
            href="tel:7736802671"
            className="inline-flex items-center gap-3 font-display text-4xl md:text-5xl text-primary hover:text-amber-light transition-colors tracking-wide"
          >
            <Phone className="w-8 h-8" />
            (773) 680-2671
          </a>
          <p className="font-body text-sm text-muted-foreground mt-2">Available 24/7 — Average response time: 30 minutes</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-display text-3xl text-foreground mb-8 tracking-wide">
              REACH OUT ANYTIME
            </h3>

            <div className="space-y-6 mb-10">
              {[
                { icon: MapPin, label: "Service Area", value: "Greater Chicago Metropolitan Area\nCook, DuPage, Lake & Will Counties" },
                { icon: Phone, label: "Emergency Line", value: "(773) 680-2671" },
                { icon: Mail, label: "Email", value: "help@emergencyroadside.com" },
                { icon: Clock, label: "Hours", value: "24 Hours a Day\n7 Days a Week — 365 Days a Year" },
              ].map((item) => (
                <div key={item.label} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-body text-xs font-bold uppercase tracking-wider text-foreground mb-1">
                      {item.label}
                    </p>
                    <p className="font-body text-sm text-muted-foreground whitespace-pre-line">
                      {item.value}
                    </p>
                  </div>
                </div>
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
            className="bg-card rounded-xl p-8 border border-border space-y-5"
          >
            <p className="font-body text-sm text-muted-foreground mb-2">For non-emergency inquiries, fill out the form below:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full rounded-lg border border-border bg-background px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/30 transition-all"
              />
              <input
                type="email"
                placeholder="Email Address"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full rounded-lg border border-border bg-background px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/30 transition-all"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <input
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full rounded-lg border border-border bg-background px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/30 transition-all"
              />
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full rounded-lg border border-border bg-background px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring/30 transition-all"
              >
                <option value="">Select Service</option>
                <option value="tire">Flat Tire Change</option>
                <option value="battery">Battery Jump Start</option>
                <option value="lockout">Vehicle Lockout</option>
                <option value="fuel">Fuel Delivery</option>
                <option value="towing">Towing Service</option>
                <option value="repair">Minor Repair</option>
                <option value="other">Other</option>
              </select>
            </div>
            <textarea
              placeholder="Describe your situation..."
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full rounded-lg border border-border bg-background px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/30 transition-all resize-none"
            />
            <button
              type="submit"
              className="w-full rounded-lg bg-primary px-8 py-3.5 font-body text-sm font-bold uppercase tracking-widest text-primary-foreground transition-all duration-300 hover:shadow-glow hover:scale-[1.02]"
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
