import AudioWaveform from "./AudioWaveform";
import TypingEffect from "./TypingEffect";
import WaitlistForm from "./WaitlistForm";
import um6pLogo from "@/assets/um6p-logo.webp";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden">
    {/* Background glow */}
    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
    <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] rounded-full bg-secondary/10 blur-[100px] pointer-events-none" />

    <div className="container mx-auto px-6 text-center relative z-10">
      {/* Backed by badge */}
      <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8 animate-fade-up">
        <span className="text-sm uppercase tracking-widest text-muted-foreground font-medium">Backed by</span>
        <img src={um6pLogo} alt="UM6P logo" className="h-10 object-contain" />
      </div>

      <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-up">
        Scale Your E-commerce in Morocco
        <br />
        <span className="gradient-text">with Native Darija AI.</span>
      </h1>

      <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8 animate-fade-up animation-delay-200">
        Automate your COD confirmations, reduce return rates, and provide 24/7 customer support with AI agents that actually understand your customers.
      </p>

      <div className="animate-fade-up animation-delay-400">
        <AudioWaveform />
        <TypingEffect />
      </div>

      <div className="mt-10 animate-fade-up animation-delay-600" id="waitlist">
        <WaitlistForm />
      </div>
    </div>
  </section>
);

export default HeroSection;
