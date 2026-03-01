import { motion } from "framer-motion";
import { Satellite, Users, Lightbulb, Heart, Rocket } from "lucide-react";

const reasons = [
  {
    icon: Satellite,
    title: "Real Satellite Builder",
    desc: "Built a CanSat satellite under NASO — I teach from real experience, not just theory.",
  },
  {
    icon: Users,
    title: "AI Community Leader",
    desc: "Founded and grew an AI community of 2,000+ members across Nepal, India, and the USA.",
  },
  {
    icon: Heart,
    title: "Mentored Thousands",
    desc: "Counseled 2,500+ students on academics, careers, and personal growth.",
  },
  {
    icon: Lightbulb,
    title: "Youth-Friendly Style",
    desc: "I'm a student too — I understand your challenges and speak your language.",
  },
  {
    icon: Rocket,
    title: "Practical, Not Rote",
    desc: "Focus on understanding concepts through real-world projects, not memorization.",
  },
];

const WhyChooseMe = () => {
  return (
    <section id="why-me" className="py-24 bg-cosmic">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
            Why Learn With <span className="text-gradient-primary">Me</span>?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Not just a tutor — a fellow learner who's been in the trenches.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`flex gap-4 p-6 rounded-xl bg-gradient-card border border-border ${i === 4 ? "sm:col-span-2 lg:col-span-1" : ""}`}
            >
              <div className="shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <r.icon className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-foreground mb-1">{r.title}</h3>
                <p className="text-sm text-muted-foreground">{r.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMe;
