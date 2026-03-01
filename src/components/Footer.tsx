import { Rocket } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 font-heading font-semibold text-sm text-muted-foreground">
          <Rocket className="w-4 h-4 text-primary" />
          © 2025 Ujjwal Subedi. All rights reserved.
        </div>
        <div className="flex gap-4 text-xs text-muted-foreground">
          <a href="mailto:ujjwalsubedi603@gmail.com" className="hover:text-primary transition-colors">Email</a>
          <a href="https://wa.me/9779866291315" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">WhatsApp</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
