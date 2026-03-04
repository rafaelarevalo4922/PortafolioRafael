"use client";

import { motion } from "framer-motion";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip as RechartsTooltip, LineChart, Line, XAxis, YAxis, CartesianGrid } from "recharts";
import { TrendingUp, MousePointerClick, Activity } from "lucide-react";

const conversionData = [
    { name: 'Tráfico Directo', value: 40 },
    { name: 'Redes Sociales', value: 30 },
    { name: 'Referidos (Partners)', value: 15 },
    { name: 'Búsqueda Orgánica', value: 15 },
];

const COLORS = ['#4f46e5', '#0ea5e9', '#10b981', '#f59e0b'];

const weeklyTraffic = [
    { name: 'Lun', visitas: 2400, conversiones: 400 },
    { name: 'Mar', visitas: 1398, conversiones: 300 },
    { name: 'Mie', visitas: 3800, conversiones: 600 },
    { name: 'Jue', visitas: 3908, conversiones: 780 },
    { name: 'Vie', visitas: 4800, conversiones: 890 },
    { name: 'Sab', visitas: 3800, conversiones: 590 },
    { name: 'Dom', visitas: 4300, conversiones: 690 },
];

export default function AnalyticsPage() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="pb-20 md:pb-0"
        >
            <div className="mb-8">
                <h1 className="text-2xl md:text-3xl font-bold">Analíticas Avanzadas</h1>
                <p className="text-foreground/60 text-sm mt-1">Explora a profundidad el comportamiento de usuarios y fuentes de tráfico.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="glass-panel p-6 rounded-2xl flex items-center justify-between">
                    <div>
                        <p className="text-foreground/60 text-sm font-medium">Tasa de Conversión</p>
                        <h3 className="text-3xl font-bold mt-1">14.5%</h3>
                        <span className="text-emerald-400 text-xs font-medium flex items-center gap-1 mt-1">
                            <TrendingUp className="w-3 h-3" /> +2.4% vs mes anterior
                        </span>
                    </div>
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                        <Activity className="w-6 h-6" />
                    </div>
                </div>
                <div className="glass-panel p-6 rounded-2xl flex items-center justify-between">
                    <div>
                        <p className="text-foreground/60 text-sm font-medium">Clics Totales</p>
                        <h3 className="text-3xl font-bold mt-1">124,592</h3>
                        <span className="text-emerald-400 text-xs font-medium flex items-center gap-1 mt-1">
                            <TrendingUp className="w-3 h-3" /> +12.1% vs mes anterior
                        </span>
                    </div>
                    <div className="w-12 h-12 bg-sky-500/10 rounded-full flex items-center justify-center text-sky-400">
                        <MousePointerClick className="w-6 h-6" />
                    </div>
                </div>
                <div className="glass-panel p-6 rounded-2xl flex items-center justify-between">
                    <div>
                        <p className="text-foreground/60 text-sm font-medium">Tiempo Promedio</p>
                        <h3 className="text-3xl font-bold mt-1">4m 32s</h3>
                        <span className="text-red-400 text-xs font-medium flex items-center gap-1 mt-1">
                            <TrendingUp className="w-3 h-3 rotate-180" /> -0.8% vs mes anterior
                        </span>
                    </div>
                    <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center text-purple-400">
                        <Activity className="w-6 h-6" />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Traffic Sources - Pie Chart */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="glass-panel p-6 rounded-2xl h-[400px] flex flex-col"
                >
                    <div className="mb-2">
                        <h3 className="font-semibold text-lg">Fuentes de Tráfico</h3>
                        <p className="text-sm text-foreground/50">Origen de las visitas.</p>
                    </div>
                    <div className="flex-1 w-full relative">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={conversionData}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={70}
                                    outerRadius={100}
                                    paddingAngle={5}
                                    dataKey="value"
                                >
                                    {conversionData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <RechartsTooltip
                                    contentStyle={{ backgroundColor: '#0f172a', borderColor: '#ffffff20', borderRadius: '8px' }}
                                    itemStyle={{ color: '#fff' }}
                                />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                    {/* Custom Legend */}
                    <div className="flex flex-wrap justify-center gap-3 mt-4">
                        {conversionData.map((entry, index) => (
                            <div key={index} className="flex items-center gap-1.5 text-xs text-foreground/70">
                                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[index] }} />
                                {entry.name}
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Conversion Timeline - Line Chart */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="lg:col-span-2 glass-panel p-6 rounded-2xl h-[400px] flex flex-col"
                >
                    <div className="mb-4">
                        <h3 className="font-semibold text-lg">Visitas vs Conversiones (Semanal)</h3>
                        <p className="text-sm text-foreground/50">Rendimiento comparativo de los últimos 7 días.</p>
                    </div>
                    <div className="flex-1 w-full relative -left-4">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={weeklyTraffic} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ffffff10" />
                                <XAxis dataKey="name" stroke="#ffffff50" fontSize={12} tickLine={false} axisLine={false} />
                                <YAxis yAxisId="left" stroke="#ffffff50" fontSize={12} tickLine={false} axisLine={false} />
                                <YAxis yAxisId="right" orientation="right" stroke="#ffffff50" fontSize={12} tickLine={false} axisLine={false} />
                                <RechartsTooltip
                                    contentStyle={{ backgroundColor: '#0f172a', borderColor: '#ffffff20', borderRadius: '8px' }}
                                />
                                <Line yAxisId="left" type="monotone" dataKey="visitas" stroke="#0ea5e9" strokeWidth={3} dot={{ r: 4, strokeWidth: 2 }} activeDot={{ r: 6 }} />
                                <Line yAxisId="right" type="monotone" dataKey="conversiones" stroke="#10b981" strokeWidth={3} dot={{ r: 4, strokeWidth: 2 }} activeDot={{ r: 6 }} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
}
