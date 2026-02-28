"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

export const Experience = () => {
    const experiences = [
        {
            role: "Desarrollador Full Stack (Microservicio)",
            company: "Frog Solutions (FrogTech)",
            date: "Ago 2025 - Nov 2025",
            description: "Desarrollo backend en C# utilizando Arquitectura Hexagonal y Domain-Driven Design (DDD) para un microservicio del sistema de ventas. Implementación de módulos independientes y desarrollo frontend en TypeScript con React y Angular. Integración con el ecosistema de la empresa.",
            technologies: ["C# (.NET)", "Arquitectura Hexagonal", "DDD", "SQL Server", "TypeScript", "React", "Angular"]
        },
        {
            role: "Desarrollador de Software (Angular)",
            company: "Frog Solutions (FrogTech)",
            date: "Junio 2025 (Corto plazo)",
            description: "Plataforma orientada a la digitalización, gestión y validación de contratos inteligentes. Desarrollo y soporte en módulos Angular, refactorización para mejorar rendimiento y corrección de bugs críticos en flujos de firma. Adaptación rápida al código legado.",
            technologies: ["Angular", "TypeScript", "Git"]
        },
        {
            role: "Programador - APIs y Datos",
            company: "GoIT",
            date: "Jul 2024 - Dic 2024",
            description: "Desarrollo de APIs REST usando Node.js + Express. Construcción de interfaces dinámicas en React. Participación en análisis de datos a gran escala con Python, Pandas y NumPy. Scripts automatizados para dashboards e integración con PostgreSQL optimizando consultas.",
            technologies: ["Node.js", "Express", "React", "Python", "Pandas", "PostgreSQL"]
        },
        {
            role: "Backend Developer",
            company: "Proyecto Universitario",
            date: "2024",
            description: "Sistema para gestión de asistencia, calificaciones, horarios y reportes. Interfaz para profesores, estudiantes y administrativos. Demostración de soluciones académicas reales.",
            technologies: ["C#", "ASP.NET", "SQL Server"]
        },
        {
            role: "Fullstack Developer",
            company: "Freelance / Proyecto Personal",
            date: "2023",
            description: "Creación de sistema CRM para gestión de clientes con login seguro por JWT. API RESTful y diseño del frontend completo enfocándose en el flujo de sesiones.",
            technologies: ["PHP", "Node.js", "MySQL", "HTML", "CSS", "Express"]
        }
    ];

    return (
        <section id="experience" className="py-24 relative">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-4">
                        <h2 className="text-3xl md:text-5xl font-bold">Experiencia Profesional</h2>
                        <div className="h-px bg-white/10 flex-grow" />
                    </div>
                </motion.div>

                <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
                        >
                            {/* Timeline dot */}
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-accent absolute left-0 md:left-1/2 -translate-x-1/2 z-10">
                                <Briefcase className="w-4 h-4 text-white" />
                            </div>

                            <div className="ml-14 md:ml-0 md:w-[calc(50%-2.5rem)] glass-panel p-6 rounded-2xl hover:border-accent/50 transition-colors">
                                <div className="flex flex-col mb-4">
                                    <h3 className="text-xl font-bold text-gradient">{exp.role}</h3>
                                    <div className="flex items-center justify-between mt-1">
                                        <span className="font-medium text-foreground/90">{exp.company}</span>
                                        <span className="text-sm text-foreground/50 flex items-center gap-1">
                                            <Calendar className="w-4 h-4" /> {exp.date}
                                        </span>
                                    </div>
                                </div>
                                <p className="text-foreground/70 mb-6 leading-relaxed text-sm md:text-base">
                                    {exp.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {exp.technologies.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="px-2 py-1 text-xs rounded-md bg-accent/10 text-accent font-medium"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
