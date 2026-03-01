import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Anisha Gurung",
    grade: "Grade 12 Student",
    text: "Ujjwal dai's way of teaching AI basics was mind-blowing. I never thought I could understand neural networks as a +2 student!",
  },
  {
    name: "Rohan Thapa",
    grade: "Grade 10 Student",
    text: "Science finally makes sense! The real-world examples and satellite stories made physics my favorite subject.",
  },
  {
    name: "Priya Sharma",
    grade: "Grade 11 Student",
    text: "The career counseling session helped me choose the right stream. I feel so much more confident about my future now.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-cosmic">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
            Student <span className="text-gradient-primary">Voices</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            What students say about the learning experience.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-xl bg-gradient-card border border-border"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground mb-6 italic">"{t.text}"</p>
              <div>
                <div className="font-heading font-semibold text-foreground text-sm">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.grade}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
