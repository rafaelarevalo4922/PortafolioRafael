"use client";

import { motion } from "framer-motion";
import { User, Code, Server, Users } from "lucide-react";

export const About = () => {
    const softSkills = [
        { icon: <Users className="w-5 h-5 text-accent" />, name: "Trabajo en equipo" },
        { icon: <Check className="w-5 h-5 text-accent" />, name: "Comunicación efectiva" },
        { icon: <Check className="w-5 h-5 text-accent" />, name: "Liderazgo" },
        { icon: <Check className="w-5 h-5 text-accent" />, name: "Adaptabilidad" },
        { icon: <Check className="w-5 h-5 text-accent" />, name: "Resolución de problemas" },
        { icon: <Check className="w-5 h-5 text-accent" />, name: "Pensamiento Analítico" },
    ];

    return (
        <section id="about" className="py-24 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex items-center gap-4 mb-12">
                        <h2 className="text-3xl md:text-5xl font-bold">Sobre Mí</h2>
                        <div className="h-px bg-white/10 flex-grow" />
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        <div className="space-y-6 text-foreground/80 leading-relaxed text-lg">
                            <p>
                                Soy un desarrollador Full Stack con experiencia en la construcción de
                                aplicaciones web modernas, APIs escalables y soluciones basadas en
                                arquitecturas limpias como DDD y Hexagonal.
                            </p>
                            <p>
                                Me adapto rápidamente a proyectos en marcha y a código legado,
                                aportando orden, claridad y mejoras técnicas. He trabajado con tecnologías
                                como React, Angular, Node.js, C#, Python y bases de datos SQL/NoSQL.
                            </p>
                            <p>
                                He participado en proyectos de empresas que manejan procesos críticos como
                                contratos inteligentes, sistemas de ventas y análisis de datos a gran escala.
                                Me caracterizo por la entrega puntual, la solución de problemas y la capacidad
                                de aprender nuevas tecnologías con rapidez.
                            </p>
                        </div>

                        <div className="glass-panel rounded-2xl p-8 h-fit">
                            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                                <User className="w-5 h-5 text-accent" /> Habilidades Blandas
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {softSkills.map((skill, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <div className="p-2 rounded-lg bg-white/5">
                                            {skill.icon}
                                        </div>
                                        <span className="font-medium text-foreground/90">{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

// Simple helper icon
const Check = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
);
