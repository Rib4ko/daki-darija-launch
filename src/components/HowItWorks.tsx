import { Link2, Bot, BarChart3 } from "lucide-react";
import { useScrollReveal } from "./useScrollReveal";

const steps = [
  {
    icon: Link2,
    title: "Connect",
    desc: "Seamlessly integrate with your store — Shopify, WooCommerce, and more.",
    step: "01",
  },
  {
    icon: Bot,
    title: "Automate",
    desc: "Daki instantly calls customers in natural Moroccan Darija to confirm their orders.",
    step: "02",
  },
  {
    icon: BarChart3,
    title: "Scale",
    desc: "View real-time dashboard updates of confirmed, delayed, or canceled deliveries.",
    step: "03",
  },
];

const HowItWorks = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="how-it-works" className="py-24 relative">
      <div className="container mx-auto px-6" ref={ref}>
        <h2
          className={`font-display text-3xl md:text-4xl font-bold text-center mb-4 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          How It <span className="gradient-text">Works</span>
        </h2>
        <p
          className={`text-muted-foreground text-center max-w-lg mx-auto mb-16 transition-all duration-700 delay-100 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Three simple steps to transform your COD operations.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <div
              key={s.step}
              className={`glass-card gradient-border p-8 text-center glow-blue transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${(i + 1) * 150}ms` }}
            >
              <span className="text-xs font-mono text-primary/60 tracking-widest">{s.step}</span>
              <div className="w-14 h-14 mx-auto mt-4 mb-6 rounded-xl bg-primary/10 flex items-center justify-center">
                <s.icon className="text-primary" size={28} />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
