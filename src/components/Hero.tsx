"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Image from "next/image";

export const Hero = () => {
    return (
        <section id="hero" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
            {/* Background glow effects */}
            <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[128px] -z-10" />
            <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[128px] -z-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6"
                >
                    <div className="inline-block py-1 px-3 rounded-full glass-panel text-accent font-medium text-sm">
                        Full Stack Developer
                    </div>
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
                        Hola, soy <br />
                        <span className="text-gradient">Rafael Arevalo</span>
                    </h1>
                    <p className="text-lg md:text-xl text-foreground/70 max-w-lg leading-relaxed">
                        Transformando ideas complejas en soluciones digitales elegantes y escalables usando arquitectura limpia y diseño excepcional.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <a
                            href="#projects"
                            className="px-6 py-3 rounded-lg bg-accent hover:bg-accent-hover text-white font-medium transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                        >
                            Ver Proyectos <ArrowRight className="w-4 h-4" />
                        </a>
                        <a
                            href="#about"
                            className="px-6 py-3 rounded-lg glass-panel hover:bg-white/5 font-medium transition-all flex items-center gap-2"
                        >
                            Sobre mí
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative flex justify-center items-center"
                >
                    <div className="relative w-72 h-72 md:w-96 md:h-96">
                        {/* The user can replace /profile.jpg with their actual image provided in chat */}
                        <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-accent/30 shadow-[0_0_40px_rgba(59,130,246,0.2)]">
                            <Image
                                src="/profile.jpg"
                                alt="Rafael Arevalo"
                                fill
                                className="object-cover"
                                priority
                                sizes="(max-width: 768px) 18rem, 24rem"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
