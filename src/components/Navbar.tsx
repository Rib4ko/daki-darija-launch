import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-t-0 border-x-0 rounded-none">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-display text-2xl font-bold gradient-text">
          Daki
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            How It Works
          </a>
          <a href="#benefits" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Benefits
          </a>
          <a
            href="#waitlist"
            className="px-5 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Join the Waitlist
          </a>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-4">
          <a href="#how-it-works" className="text-sm text-muted-foreground" onClick={() => setMobileOpen(false)}>
            How It Works
          </a>
          <a href="#benefits" className="text-sm text-muted-foreground" onClick={() => setMobileOpen(false)}>
            Benefits
          </a>
          <a
            href="#waitlist"
            className="px-5 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold text-center"
            onClick={() => setMobileOpen(false)}
          >
            Join the Waitlist
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
