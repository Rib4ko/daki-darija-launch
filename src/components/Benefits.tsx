import { ShieldCheck, Zap, Languages } from "lucide-react";
import { useScrollReveal } from "./useScrollReveal";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Slash Return Rates",
    desc: "Catch fake orders and confirm addresses before shipping. Stop losing money on returns.",
  },
  {
    icon: Zap,
    title: "Zero Human Bottlenecks",
    desc: "Handle thousands of calls simultaneously without a massive call center team.",
  },
  {
    icon: Languages,
    title: "Advanced NLP",
    desc: "Built specifically for the nuances of the Moroccan dialect — not just standard Arabic.",
  },
];

const Benefits = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="benefits" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <h2
          className={`font-display text-3xl md:text-4xl font-bold text-center mb-4 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Why <span className="gradient-text">Daki</span>?
        </h2>
        <p
          className={`text-muted-foreground text-center max-w-lg mx-auto mb-16 transition-all duration-700 delay-100 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Purpose-built for Moroccan e-commerce.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((b, i) => (
            <div
              key={b.title}
              className={`glass-card gradient-border p-8 text-center glow-purple transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${(i + 1) * 150}ms` }}
            >
              <div className="w-14 h-14 mx-auto mb-6 rounded-xl bg-secondary/10 flex items-center justify-center">
                <b.icon className="text-secondary" size={28} />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">{b.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
