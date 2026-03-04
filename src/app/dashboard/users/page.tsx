"use client";

import { motion } from "framer-motion";
import { UserPlus, MoreVertical, Edit2, Trash2, Mail, Shield } from "lucide-react";

const users = [
    { id: 1, name: "María Gómez", email: "maria@example.com", role: "Admin", status: "Activo", lastLog: "Hace 2 horas" },
    { id: 2, name: "Carlos López", email: "carlos@example.com", role: "Ventas", status: "Activo", lastLog: "Hace 5 horas" },
    { id: 3, name: "Ana Silva", email: "ana@example.com", role: "Soporte", status: "Inactivo", lastLog: "Hace 2 días" },
    { id: 4, name: "Diego Torres", email: "diego@example.com", role: "Usuario", status: "Activo", lastLog: "Hace 1 hora" },
    { id: 5, name: "Laura Mendoza", email: "laura@example.com", role: "Ventas", status: "Pendiente", lastLog: "-" },
    { id: 6, name: "Roberto Ramos", email: "roberto@example.com", role: "Usuario", status: "Activo", lastLog: "Hace 15 min" },
];

export default function UsersPage() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold">Gestión de Usuarios</h1>
                    <p className="text-foreground/60 text-sm mt-1">Administra los accesos y roles del sistema.</p>
                </div>
                <button className="flex items-center justify-center gap-2 px-4 py-2 bg-accent text-white rounded-lg text-sm font-medium hover:bg-accent/90 transition-all shadow-lg shadow-accent/20">
                    <UserPlus className="w-4 h-4" /> Nuevo Usuario
                </button>
            </div>

            <div className="glass-panel rounded-2xl overflow-hidden">
                <div className="p-4 border-b border-white/5 flex gap-4">
                    <input
                        type="text"
                        placeholder="Buscar por nombre o correo..."
                        className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm w-full md:max-w-md outline-none focus:border-accent/50 transition-colors"
                    />
                    <select className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm outline-none hidden sm:block">
                        <option value="">Todos los Roles</option>
                        <option value="admin">Admin</option>
                        <option value="ventas">Ventas</option>
                    </select>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[800px]">
                        <thead>
                            <tr className="bg-white/5 text-sm text-foreground/60">
                                <th className="px-6 py-4 font-medium">Usuario</th>
                                <th className="px-6 py-4 font-medium">Correo</th>
                                <th className="px-6 py-4 font-medium">Rol</th>
                                <th className="px-6 py-4 font-medium">Estado</th>
                                <th className="px-6 py-4 font-medium">Último Acceso</th>
                                <th className="px-6 py-4 font-medium text-right">Acciones</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm">
                            {users.map((user) => (
                                <tr key={user.id} className="border-b border-white/5 hover:bg-white/5 transition-colors group">
                                    <td className="px-6 py-4 font-medium flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-accent/20 text-accent flex items-center justify-center font-bold text-xs">
                                            {user.name.charAt(0)}
                                        </div>
                                        {user.name}
                                    </td>
                                    <td className="px-6 py-4 text-foreground/70 flex items-center gap-2">
                                        <Mail className="w-3 h-3 text-foreground/40" /> {user.email}
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="flex items-center gap-1">
                                            {user.role === 'Admin' && <Shield className="w-3 h-3 text-amber-500" />}
                                            {user.role}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`px-2 py-1 rounded-full text-xs font-medium border
                                            ${user.status === 'Activo' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' :
                                                user.status === 'Inactivo' ? 'bg-red-500/10 text-red-400 border-red-500/20' :
                                                    'bg-yellow-500/10 text-yellow-400 border-yellow-500/20'}`}>
                                            {user.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-foreground/50">{user.lastLog}</td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center justify-end gap-2 opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button className="p-1.5 text-foreground/50 hover:text-sky-400 hover:bg-sky-400/10 rounded-md transition-colors">
                                                <Edit2 className="w-4 h-4" />
                                            </button>
                                            <button className="p-1.5 text-foreground/50 hover:text-red-400 hover:bg-red-400/10 rounded-md transition-colors">
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                            <button className="p-1.5 text-foreground/50 hover:text-foreground rounded-md transition-colors">
                                                <MoreVertical className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="p-4 border-t border-white/5 flex justify-between items-center text-sm text-foreground/60">
                    <span>Mostrando {users.length} de 24 usuarios</span>
                    <div className="flex gap-1">
                        <button className="px-3 py-1 rounded bg-white/5 hover:bg-white/10 disabled:opacity-50">Ant</button>
                        <button className="px-3 py-1 rounded bg-accent text-white">1</button>
                        <button className="px-3 py-1 rounded bg-white/5 hover:bg-white/10">2</button>
                        <button className="px-3 py-1 rounded bg-white/5 hover:bg-white/10">3</button>
                        <button className="px-3 py-1 rounded bg-white/5 hover:bg-white/10">Sig</button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
