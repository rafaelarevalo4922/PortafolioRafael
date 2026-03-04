"use client";

import { motion } from "framer-motion";
import { Activity, Users, DollarSign, ArrowUpRight } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";

// Dummy Data
const salesData = [
    { name: "Ene", value: 4000 },
    { name: "Feb", value: 3000 },
    { name: "Mar", value: 2000 },
    { name: "Abr", value: 2780 },
    { name: "May", value: 1890 },
    { name: "Jun", value: 2390 },
    { name: "Jul", value: 3490 },
];

const employeeData = [
    { name: "IT", value: 40 },
    { name: "Ventas", value: 30 },
    { name: "Marketing", value: 20 },
    { name: "Soporte", value: 25 },
];

const recentActivity = [
    { id: 1, user: "Juan Pérez", action: "Se registró como nuevo prospecto", time: "Hace 2 min", status: "Nuevo" },
    { id: 2, user: "María Gómez", action: "Adquirió el plan Anual Pro", time: "Hace 15 min", status: "Venta" },
    { id: 3, user: "Carlos López", action: "Actualizó sus reportes financieros", time: "Hace 1 hora", status: "Actualización" },
    { id: 4, user: "Ana Silva", action: "Solicitó soporte técnico", time: "Hace 2 horas", status: "Soporte" },
];

export default function DashboardPage() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold">Resumen de Actividad</h1>
                    <p className="text-foreground/60 text-sm mt-1">Monitorea las métricas clave del sistema en tiempo real.</p>
                </div>
                <div className="flex gap-2">
                    <button className="px-4 py-2 bg-accent/10 text-accent border border-accent/20 rounded-lg text-sm font-medium hover:bg-accent hover:text-white transition-all">
                        Descargar Reporte Mensual
                    </button>
                </div>
            </div>

            {/* Top Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <StatCard
                    title="Ingresos Totales"
                    value="$45,231.89"
                    increase="+20.1% este mes"
                    icon={<DollarSign className="w-6 h-6 text-emerald-400" />}
                    delay={0.1}
                />
                <StatCard
                    title="Usuarios Activos"
                    value="+2350"
                    increase="+180.1% este mes"
                    icon={<Users className="w-6 h-6 text-sky-400" />}
                    delay={0.2}
                />
                <StatCard
                    title="Ventas Cerradas"
                    value="+12,234"
                    increase="+19% este mes"
                    icon={<Activity className="w-6 h-6 text-purple-400" />}
                    delay={0.3}
                />
                <StatCard
                    title="Nuevos Prospectos"
                    value="+573"
                    increase="+201 desde la última hora"
                    icon={<ArrowUpRight className="w-6 h-6 text-yellow-400" />}
                    delay={0.4}
                />
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                {/* Area Chart - Ventas */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="lg:col-span-2 glass-panel p-6 rounded-2xl h-[400px] flex flex-col"
                >
                    <div className="mb-4">
                        <h3 className="font-semibold text-lg text-foreground/90">Flujo de Ingresos</h3>
                        <p className="text-sm text-foreground/50">Métricas de ventas en los últimos meses.</p>
                    </div>
                    <div className="flex-1 w-full relative -left-4">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={salesData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                                <defs>
                                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.8} />
                                        <stop offset="95%" stopColor="#4f46e5" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ffffff10" />
                                <XAxis dataKey="name" stroke="#ffffff50" fontSize={12} tickLine={false} axisLine={false} />
                                <YAxis stroke="#ffffff50" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(val) => `$${val}`} />
                                <Tooltip
                                    contentStyle={{ backgroundColor: '#0f172a', borderColor: '#ffffff20', borderRadius: '8px' }}
                                    itemStyle={{ color: '#fff' }}
                                />
                                <Area type="monotone" dataKey="value" stroke="#4f46e5" strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </motion.div>

                {/* Bar Chart - Empleados */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="glass-panel p-6 rounded-2xl h-[400px] flex flex-col"
                >
                    <div className="mb-4">
                        <h3 className="font-semibold text-lg text-foreground/90">Distribución de Empleados</h3>
                        <p className="text-sm text-foreground/50">Personal por departamento.</p>
                    </div>
                    <div className="flex-1 w-full relative -left-4">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={employeeData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ffffff10" />
                                <XAxis dataKey="name" stroke="#ffffff50" fontSize={12} tickLine={false} axisLine={false} />
                                <YAxis stroke="#ffffff50" fontSize={12} tickLine={false} axisLine={false} />
                                <Tooltip
                                    cursor={{ fill: '#ffffff05' }}
                                    contentStyle={{ backgroundColor: '#0f172a', borderColor: '#ffffff20', borderRadius: '8px' }}
                                />
                                <Bar dataKey="value" fill="#0ea5e9" radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </motion.div>
            </div>

            {/* Recent Activity List */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="glass-panel rounded-2xl overflow-hidden mb-8 md:mb-0"
            >
                <div className="p-6 border-b border-white/5">
                    <h3 className="font-semibold text-lg text-foreground/90">Actividad Reciente</h3>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[600px]">
                        <thead>
                            <tr className="bg-white/5 text-sm text-foreground/60">
                                <th className="px-6 py-4 font-medium">Usuario</th>
                                <th className="px-6 py-4 font-medium">Acción</th>
                                <th className="px-6 py-4 font-medium">Estado</th>
                                <th className="px-6 py-4 font-medium text-right">Tiempo</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm">
                            {recentActivity.map((activity, index) => (
                                <tr key={index} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                    <td className="px-6 py-4 font-medium">{activity.user}</td>
                                    <td className="px-6 py-4 text-foreground/70">{activity.action}</td>
                                    <td className="px-6 py-4">
                                        <span className={`px-2 py-1 rounded-full text-xs font-medium border
                                            ${activity.status === 'Nuevo' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' :
                                                activity.status === 'Venta' ? 'bg-purple-500/10 text-purple-400 border-purple-500/20' :
                                                    'bg-sky-500/10 text-sky-400 border-sky-500/20'}`}>
                                            {activity.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right text-foreground/50">{activity.time}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </motion.div>
        </motion.div>
    );
}

function StatCard({ title, value, increase, icon, delay }: { title: string, value: string, increase: string, icon: React.ReactNode, delay: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay }}
            className="glass-panel p-6 rounded-2xl flex flex-col relative overflow-hidden group hover:border-white/20 transition-colors"
        >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 group-hover:opacity-20 transition-all duration-500">
                {icon}
            </div>
            <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    {icon}
                </div>
                <h3 className="text-sm font-medium text-foreground/70">{title}</h3>
            </div>
            <div className="flex flex-col gap-1">
                <span className="text-2xl font-bold tracking-tight">{value}</span>
                <span className="text-xs text-foreground/50 font-medium">{increase}</span>
            </div>
        </motion.div>
    );
}
