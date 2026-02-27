import { useState, useEffect } from "react";

const TEXT = "Salam, m3ak Daki. Derti commande f'site lyoma, atwsl ghda!";

const TypingEffect = () => {
  const [displayed, setDisplayed] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const speed = deleting ? 30 : 60;
    const timeout = setTimeout(() => {
      if (!deleting) {
        if (charIndex < TEXT.length) {
          setDisplayed(TEXT.slice(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setDeleting(true), 2000);
        }
      } else {
        if (charIndex > 0) {
          setDisplayed(TEXT.slice(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setDeleting(false);
        }
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [charIndex, deleting]);

  return (
    <p className="text-muted-foreground text-lg md:text-xl font-mono min-h-[2em]">
      "{displayed}
      <span className="animate-pulse-glow text-primary">|</span>"
    </p>
  );
};

export default TypingEffect;
