"use client";

import { motion } from "framer-motion";
import { ExternalLink, Trophy, Award, Medal } from "lucide-react";

export const Projects = () => {
    const projects = [
        {
            title: "CRM Inmobiliario Avanzado",
            description: "Sistema integral para la gestión de clientes, propiedades y ventas en tiempo real.",
            image: "bg-gradient-to-br from-blue-900 to-slate-900",
            tags: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"]
        },
        {
            title: "Plataforma de E-Learning",
            description: "Aplicación interactiva para streaming de cursos con pasarela de pagos y analíticas.",
            image: "bg-gradient-to-br from-purple-900 to-slate-900",
            tags: ["Next.js", "AWS S3", "Stripe", "Prisma"]
        },
        {
            title: "Dashboard Analítico Fintech",
            description: "Visualización de grandes volúmenes de datos financieros interactivos de alta eficiencia.",
            image: "bg-gradient-to-br from-emerald-900 to-slate-900",
            tags: ["Angular", "Python", "Pandas", "TimescaleDB"]
        }
    ];

    const awards = [
        {
            title: "Huawei Developer Competition",
            subtitle: "Trofeo & Reconocimiento (2024)",
            description: "Ganador de la competencia latinoamericana desarrollando una aplicación multiplataforma innovadora usando React Native, Node.js y TSX.",
            icon: <Trophy className="w-8 h-8 text-yellow-400" />
        },
        {
            title: "Certificate of Appreciation",
            subtitle: "Reconocimiento Universitario",
            description: "Otorgado por la Universidad Privada Del Valle por contribución destacada.",
            icon: <Award className="w-8 h-8 text-sky-400" />
        }
    ];

    return (
        <section id="projects" className="py-24 relative overflow-hidden">
            {/* Glow Effects */}
            <div className="absolute top-1/2 left-0 w-72 h-72 bg-accent/10 rounded-full blur-[100px] -z-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex items-center gap-4 mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold">Proyectos Destacados</h2>
                        <div className="h-px bg-white/10 flex-grow" />
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group relative rounded-2xl overflow-hidden glass-panel flex flex-col h-full"
                            >
                                {/* Image Placeholder */}
                                <div className={`w-full h-48 ${project.image} flex items-center justify-center relative overflow-hidden`}>
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                                    <span className="text-white/50 text-sm font-medium tracking-wider uppercase z-10">[Preview de App]</span>
                                </div>

                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-foreground/70 mb-6 flex-grow text-sm">
                                        {project.description}
                                    </p>

                                    <div className="space-y-4">
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.map(tag => (
                                                <span key={tag} className="text-xs px-2 py-1 rounded-md bg-white/5 text-foreground/80 border border-white/10">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Awards Section */}
                    <div className="flex items-center gap-4 mb-12">
                        <h2 className="text-3xl md:text-5xl font-bold">Reconocimientos & Premios</h2>
                        <div className="h-px bg-white/10 flex-grow" />
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {awards.map((award, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="glass-panel p-8 rounded-2xl flex gap-6"
                            >
                                <div className="flex-shrink-0">
                                    <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shadow-inner">
                                        {award.icon}
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-foreground/90">{award.title}</h3>
                                    <p className="text-accent text-sm font-medium mb-3">{award.subtitle}</p>
                                    <p className="text-foreground/70 text-sm leading-relaxed">
                                        {award.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </motion.div>
            </div>
        </section>
    );
};
