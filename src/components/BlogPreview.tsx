import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";

const posts = [
  {
    title: "How AI is Changing Education in Nepal",
    excerpt: "Exploring the role of artificial intelligence in transforming how Nepali students learn and grow.",
    date: "Coming Soon",
    tag: "AI",
  },
  {
    title: "5 Tips to Ace Your SEE Science Exam",
    excerpt: "Practical strategies that go beyond last-minute cramming for Grade 10 students.",
    date: "Coming Soon",
    tag: "Exams",
  },
  {
    title: "Why Every Student Should Learn to Code",
    excerpt: "Programming isn't just for engineers — it's the literacy of the future.",
    date: "Coming Soon",
    tag: "Career",
  },
];

const BlogPreview = () => {
  return (
    <section id="blog" className="py-24">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
            From the <span className="text-gradient-accent">Blog</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Insights on AI, space, exams, and career tips — coming soon.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {posts.map((post, i) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-6 rounded-xl bg-gradient-card border border-border hover:border-primary/40 transition-colors cursor-pointer"
            >
              <span className="inline-block px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20 mb-4">
                {post.tag}
              </span>
              <h3 className="font-heading font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">{post.excerpt}</p>
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {post.date}
                </span>
                <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
