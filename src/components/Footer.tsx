const Footer = () => {
  return (
    <footer className="bg-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="font-display text-xl font-semibold text-cream">
            Her
          </p>
          <p className="font-body text-xs text-champagne/50 tracking-wide">
            © 2026 Her Nail Artistry. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Instagram", "TikTok", "Pinterest"].map((s) => (
              <a
                key={s}
                href="#"
                className="font-body text-xs text-champagne/50 hover:text-rose-gold transition-colors tracking-wider uppercase"
              >
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
