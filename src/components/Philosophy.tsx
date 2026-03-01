import { motion } from "framer-motion";

const pillars = [
  {
    emoji: "🔬",
    title: "Concept Clarity",
    desc: "Understanding the 'why' behind every formula, not just the 'how'.",
  },
  {
    emoji: "🌍",
    title: "Real-World Examples",
    desc: "Connecting textbook concepts to satellites, apps, and real technology.",
  },
  {
    emoji: "❓",
    title: "Encouraging Curiosity",
    desc: "Every question is welcome — curiosity is the foundation of discovery.",
  },
  {
    emoji: "🚀",
    title: "Future-Ready Skills",
    desc: "Preparing students for tech careers, not just exams.",
  },
];

const Philosophy = () => {
  return (
    <section id="philosophy" className="py-24">
      <div className="container px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
            Teaching <span className="text-gradient-accent">Philosophy</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            I believe great teaching ignites curiosity and builds thinkers, not memorizers.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-xl bg-gradient-card border border-border"
            >
              <div className="text-3xl mb-3">{p.emoji}</div>
              <h3 className="font-heading font-semibold text-foreground mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
