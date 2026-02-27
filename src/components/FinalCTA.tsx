import WaitlistForm from "./WaitlistForm";
import { useScrollReveal } from "./useScrollReveal";

const FinalCTA = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/[0.05] to-transparent pointer-events-none" />
      <div className="container mx-auto px-6 text-center relative z-10" ref={ref}>
        <h2
          className={`font-display text-3xl md:text-4xl font-bold mb-4 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Ready to <span className="gradient-text">Transform</span> Your COD Business?
        </h2>
        <p
          className={`text-muted-foreground max-w-md mx-auto mb-10 transition-all duration-700 delay-100 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Join the waitlist and be among the first to experience Daki.
        </p>
        <div
          className={`transition-all duration-700 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <WaitlistForm />
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
