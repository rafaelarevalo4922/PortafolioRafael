"use client";

import { motion } from "framer-motion";
import { Server, Layout, Database, Cloud, Wrench, TerminalSquare, Sparkles } from "lucide-react";

export const Skills = () => {
    const categories = [
        {
            title: "Frontend & UI/UX",
            icon: <Layout className="w-6 h-6 text-accent" />,
            skills: ["React (Avanzado)", "Next.js", "Dashboards Animados", "Angular", "React Native", "TypeScript", "Tailwind CSS", "Framer Motion", "Shadcn UI"]
        },
        {
            title: "Backend Development",
            icon: <Server className="w-6 h-6 text-purple-400" />,
            skills: ["Node.js (Express, NestJS)", "Python (Flask, Pandas)", "C# (ASP.NET)", "Java (Intermedio)", "Go (Básico)", "Dart", "PHP"]
        },
        {
            title: "Databases",
            icon: <Database className="w-6 h-6 text-emerald-400" />,
            skills: ["PostgreSQL", "SQL Server", "MySQL", "DynamoDB", "MongoDB", "Timescale", "Query Optimization"]
        },
        {
            title: "Cloud & Infrastructure",
            icon: <Cloud className="w-6 h-6 text-sky-400" />,
            skills: ["AWS (Lambda, EC2, ECS)", "DynamoDB, Cognito, IAM", "AWS CDK & CloudFormation", "VPC & Peering", "Docker", "Docker Compose"]
        },
        {
            title: "Arquitectura & Metodologías",
            icon: <TerminalSquare className="w-6 h-6 text-orange-400" />,
            skills: ["Arquitectura Ágil", "Domain-Driven Design (DDD)", "Arquitectura Hexagonal", "MVC", "Microservicios", "Scrum", "Test-Driven Development (TDD)"]
        },
        {
            title: "Herramientas & Otros",
            icon: <Wrench className="w-6 h-6 text-amber-400" />,
            skills: ["Git & GitHub Actions", "Tanstack Query", "Supabase", "Firebase", "WebSockets", "Apache Kafka", "Data Analysis (Pandas, NumPy)"]
        }
    ];

    return (
        <section id="skills" className="py-24 bg-white/5 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Habilidades Técnicas</h2>
                    <p className="text-foreground/60 max-w-2xl mx-auto">
                        Amplio dominio de tecnologías en todo el stack de desarrollo, desde la creación de interfaces dinámicas hasta el diseño de arquitecturas en la nube.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass-panel p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-white/5 rounded-xl">
                                    {category.icon}
                                </div>
                                <h3 className="text-xl font-bold">{category.title}</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, skillIndex) => (
                                    <span
                                        key={skillIndex}
                                        className="px-3 py-1 text-sm rounded-full bg-white/10 text-foreground/80 border border-white/5"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
