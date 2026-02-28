import { Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="border-t border-white/10 bg-background py-8 mt-20">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-center">
                <p className="text-foreground/60 text-sm mb-4 md:mb-0">
                    &copy; {new Date().getFullYear()} Rafael Arevalo. Transformando ideas en código.
                </p>
                <div className="flex space-x-6">
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/80 hover:text-accent transition-colors"
                        title="GitHub"
                    >
                        <Github className="w-5 h-5" />
                    </a>
                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/80 hover:text-accent transition-colors"
                        title="LinkedIn"
                    >
                        <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                        href="mailto:contact@example.com"
                        className="text-foreground/80 hover:text-accent transition-colors"
                        title="Email"
                    >
                        <Mail className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </footer>
    );
};
