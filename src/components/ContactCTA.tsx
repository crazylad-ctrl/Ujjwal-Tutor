import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MessageCircle, Mail, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactCTA = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({ title: "Please fill in all fields", variant: "destructive" });
      return;
    }
    const mailtoUrl = `mailto:ujjwalsubedi603@gmail.com?subject=Tutoring Inquiry from ${encodeURIComponent(form.name)}&body=${encodeURIComponent(form.message)}%0A%0AFrom: ${encodeURIComponent(form.email)}`;
    window.open(mailtoUrl);
    toast({ title: "Opening your email client..." });
    setForm({ name: "", email: "", message: "" });
  };

  const whatsappUrl = `https://wa.me/9779866291315?text=${encodeURIComponent("Hi Ujjwal! I'm interested in your tutoring services.")}`;

  return (
    <section id="contact" className="py-24 bg-cosmic">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
            Ready to <span className="text-gradient-primary">Start Learning</span>?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Book a free demo class or join the future innovators community today.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Contact form */}
          <motion.form
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <input
              type="text"
              placeholder="Your Name"
              maxLength={100}
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
            />
            <input
              type="email"
              placeholder="Your Email"
              maxLength={255}
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
            />
            <textarea
              rows={4}
              placeholder="What do you need help with?"
              maxLength={1000}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm resize-none"
            />
            <button
              type="submit"
              className="w-full px-6 py-3 rounded-lg bg-accent text-accent-foreground font-heading font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              Send Message
            </button>
          </motion.form>

          {/* Quick contact */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="p-6 rounded-xl bg-gradient-card border border-border">
              <h3 className="font-heading font-semibold text-foreground mb-4">Quick Contact</h3>
              <div className="space-y-4">
                <a href="mailto:ujjwalsubedi603@gmail.com" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                  ujjwalsubedi603@gmail.com
                </a>
                <a href="tel:+9779866291315" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                  +977 9866291315
                </a>
              </div>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full px-6 py-4 rounded-xl bg-[hsl(142,70%,40%)] text-foreground font-heading font-semibold hover:opacity-90 transition-opacity"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </a>

            <div className="p-6 rounded-xl bg-gradient-card border border-primary/30 text-center">
              <div className="text-2xl mb-2">🚀</div>
              <h3 className="font-heading font-semibold text-foreground mb-1">Join the Community</h3>
              <p className="text-sm text-muted-foreground">
                Be part of 2,000+ future innovators learning AI, science, and tech together.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
