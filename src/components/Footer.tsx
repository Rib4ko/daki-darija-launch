import { Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border/50 py-10">
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <span className="font-display text-lg font-bold gradient-text">Daki</span>
      <p className="text-muted-foreground text-sm">© 2026 Daki AI. All rights reserved.</p>
      <div className="flex gap-4">
        <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Twitter">
          <Twitter size={18} />
        </a>
        <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="LinkedIn">
          <Linkedin size={18} />
        </a>
        <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Instagram">
          <Instagram size={18} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
