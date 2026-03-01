import { motion } from "framer-motion";
import { GraduationCap, Users, Award, Globe } from "lucide-react";

const stats = [
  { icon: Users, value: "2,500+", label: "Students Guided" },
  { icon: Globe, value: "2,000+", label: "AI Community Members" },
  { icon: GraduationCap, value: "3.9", label: "SLC GPA" },
  { icon: Award, value: "10+", label: "Awards & Wins" },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-cosmic">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-center mb-4">
            Meet <span className="text-gradient-primary">Ujjwal Subedi</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Kushma-08, Parbat, Nepal
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I am a passionate student focused on <span className="text-primary">astronomy</span>,{" "}
                <span className="text-primary">artificial intelligence</span>, and technology.
                I have hands-on experience building a <span className="text-accent">CanSat satellite</span>{" "}
                under NASO supervision, mentored by Dr. Avash Maske.
              </p>
              <p>
                I am deeply interested in helping students explore science and
                technology beyond textbooks — making learning practical,
                exciting, and future-ready.
              </p>

              <div className="pt-4">
                <h3 className="font-heading font-semibold text-foreground mb-3">Academic Background</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">▸</span>
                    GPA 3.75/4.00 – Secondary Education Examination (2023)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">▸</span>
                    GPA 3.91/4.00 – Grade 11 

                  </li>
                    <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">▸</span>
                    
                    GPA 3.9 /4.00 – Grade 12
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">▸</span>
                    • Gandaki Boarding School *SEE*
                    • Kathmandu Model Secondary School *SLC*
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-heading font-semibold text-foreground mb-3">Leadership & Experience</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {[
                  "Vice President, ICT & Innovation Club (2021–2023)",
                  "Built international AI community (2000+ members)",
                  "Organized hackathons & AI workshops (NLP & Image Processing)",
                  "Student Counselor — guided 2500+ students",
                  "Secretary, Junior Entrepreneurship Circle (JYES Regional)",
                  "Founder & Board Member – TeenForChange",
                  "Volunteer – Red Cross Society",
                  "Volunteer – TEDxBaneshwor (1st & 2nd Edition)",
                  "Scout Captain (1 year)",
                  "Won multiple web dev & astro-writing competitions",
          
                  "Runner UP,Cyber Olympaid Nationals)",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-accent mt-0.5">▸</span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="pt-4">
                <h3 className="font-heading font-semibold text-foreground mb-3">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {["Python", "C Programming", "HTML/CSS", "Leadership", "Proposal Drafting", "Nepali (Native)", "Hindi"].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs rounded-full border border-primary/30 bg-primary/10 text-primary"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6 rounded-xl bg-gradient-card border border-border"
              >
                <stat.icon className="w-6 h-6 text-primary mx-auto mb-3" />
                <div className="text-2xl font-heading font-bold text-foreground">{stat.value}</div>
                <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
