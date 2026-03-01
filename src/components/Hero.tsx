import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-background/70" />

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-primary/40 animate-twinkle"
          style={{
            top: `${15 + i * 14}%`,
            left: `${10 + i * 15}%`,
            animationDelay: `${i * 0.7}s`,
          }}
        />
      ))}

      <div className="container relative z-10 px-4 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm mb-8"
          >
            <Sparkles className="w-4 h-4" />
            Empowering Nepal's Future Innovators
          </motion.div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6">
            Learn Science, Code &{" "}
            <span className="text-gradient-primary">AI</span> with a{" "}
            <span className="text-gradient-accent">Real Builder</span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Grade 10–12 tutoring in Science, Programming, and AI fundamentals.
            Guided by someone who built satellites, led AI communities, and
            mentored 2,500+ students across Nepal.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="px-8 py-3.5 rounded-lg bg-accent text-accent-foreground font-heading font-semibold text-base glow-accent hover:opacity-90 transition-opacity flex items-center gap-2"
            >
              Book a Free Demo Class
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#services"
              className="px-8 py-3.5 rounded-lg border border-primary/40 text-primary font-heading font-medium text-base hover:bg-primary/10 transition-colors"
            >
              Explore Services
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
