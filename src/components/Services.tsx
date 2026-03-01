import { motion } from "framer-motion";
import { Atom, Code, Brain, Compass, Lightbulb, Microscope } from "lucide-react";

const services = [
  {
    icon: Atom,
    title: "Grade 10 Science Coaching",
    what: "Physics, Chemistry & Biology concepts aligned with Nepal's SEE curriculum.",
    why: "Strong foundation in Grade 10 Science is essential for +2 success.",
    outcome: "Confident exam performance and deep conceptual understanding.",
  },
  {
    icon: Microscope,
    title: "Grade 11 & 12 Science Support",
    what: "Advanced physics, chemistry, and biology topics with practical problem solving.",
    why: "+2 Science determines your competitive exam readiness and career trajectory.",
    outcome: "Higher grades and a solid prep base for entrance exams.",
  },
  {
    icon: Code,
    title: "Basic Programming (C & Python)",
    what: "Fundamentals of programming logic, variables, loops, functions, and data structures.",
    why: "Programming literacy is the #1 skill for future tech careers.",
    outcome: "Ability to write programs, solve problems, and build small projects.",
  },
  {
    icon: Brain,
    title: "Introduction to AI",
    what: "What AI is, how it works, NLP basics, image processing concepts, and real-world applications.",
    why: "AI is reshaping every industry — early exposure gives you a massive edge.",
    outcome: "Understanding of AI concepts and ability to explore advanced topics independently.",
  },
  {
    icon: Compass,
    title: "Career Counseling for +2",
    what: "Personalized guidance on stream selection, university prep, and scholarship hunting.",
    why: "The right decision at +2 sets the direction for your entire career.",
    outcome: "A clear roadmap aligned with your interests and goals.",
  },
  {
    icon: Lightbulb,
    title: "STEM Motivation & Research",
    what: "Exposure to research methodology, science competitions, and innovation thinking.",
    why: "Going beyond textbooks builds the mindset needed for real breakthroughs.",
    outcome: "Confidence to participate in science fairs, competitions, and research projects.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
            What I <span className="text-gradient-accent">Teach</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Practical, hands-on learning designed for Nepal's Grade 10–12 students.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group p-6 rounded-xl bg-gradient-card border border-border hover:border-primary/40 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:glow-primary transition-shadow">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-3 text-foreground">
                {service.title}
              </h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div>
                  <span className="text-primary font-medium">Learn: </span>
                  {service.what}
                </div>
                <div>
                  <span className="text-accent font-medium">Why: </span>
                  {service.why}
                </div>
                <div>
                  <span className="text-foreground font-medium">Outcome: </span>
                  {service.outcome}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
