"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Save, Bell, Lock, User, Monitor, Key, ShieldAlert } from "lucide-react";

export default function SettingsPage() {
    const [activeTab, setActiveTab] = useState('profile');

    // Form fields interaction mock
    const [isSaving, setIsSaving] = useState(false);
    const [saved, setSaved] = useState(false);

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSaving(true);
        setTimeout(() => {
            setIsSaving(false);
            setSaved(true);
            setTimeout(() => setSaved(false), 3000);
        }, 1000);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="mb-8">
                <h1 className="text-2xl md:text-3xl font-bold">Configuración</h1>
                <p className="text-foreground/60 text-sm mt-1">Administra tus preferencias personales y de la cuenta.</p>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
                {/* Settings Sidebar Tabs */}
                <div className="w-full lg:w-64 flex flex-col gap-2">
                    <button
                        onClick={() => setActiveTab('profile')}
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-colors font-medium text-sm
                            ${activeTab === 'profile' ? 'bg-accent/10 text-accent' : 'hover:bg-white/5 text-foreground/70'}`}
                    >
                        <User className="w-5 h-5" /> Perfil Público
                    </button>
                    <button
                        onClick={() => setActiveTab('security')}
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-colors font-medium text-sm
                            ${activeTab === 'security' ? 'bg-accent/10 text-accent' : 'hover:bg-white/5 text-foreground/70'}`}
                    >
                        <Lock className="w-5 h-5" /> Seguridad
                    </button>
                    <button
                        onClick={() => setActiveTab('notifications')}
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-colors font-medium text-sm
                            ${activeTab === 'notifications' ? 'bg-accent/10 text-accent' : 'hover:bg-white/5 text-foreground/70'}`}
                    >
                        <Bell className="w-5 h-5" /> Notificaciones
                    </button>
                    <button
                        onClick={() => setActiveTab('appearance')}
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-colors font-medium text-sm
                            ${activeTab === 'appearance' ? 'bg-accent/10 text-accent' : 'hover:bg-white/5 text-foreground/70'}`}
                    >
                        <Monitor className="w-5 h-5" /> Apariencia
                    </button>
                </div>

                {/* Settings Content */}
                <div className="flex-1 glass-panel rounded-2xl p-6 md:p-8">
                    {activeTab === 'profile' && (
                        <motion.form
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            onSubmit={handleSave}
                        >
                            <h2 className="text-xl font-bold mb-6">Información del Perfil</h2>

                            <div className="flex items-center gap-6 mb-8">
                                <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center text-accent text-2xl font-bold">
                                    R
                                </div>
                                <div className="space-x-2">
                                    <button type="button" className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm font-medium transition-colors">
                                        Cambiar Avatar
                                    </button>
                                    <button type="button" className="px-4 py-2 text-red-400 hover:bg-red-400/10 rounded-lg text-sm font-medium transition-colors">
                                        Eliminar
                                    </button>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-foreground/80">Nombre Completo</label>
                                    <input type="text" defaultValue="Rafael Admin" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 outline-none focus:border-accent/50 transition-colors" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-foreground/80">Correo Electrónico</label>
                                    <input type="email" defaultValue="rafael@securetech.com" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 outline-none focus:border-accent/50 transition-colors" />
                                </div>
                                <div className="space-y-2 md:col-span-2">
                                    <label className="text-sm font-medium text-foreground/80">Rol en la Empresa</label>
                                    <input type="text" defaultValue="Full Stack Developer / Architect" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 outline-none focus:border-accent/50 transition-colors" />
                                </div>
                                <div className="space-y-2 md:col-span-2">
                                    <label className="text-sm font-medium text-foreground/80">Biografía Pública</label>
                                    <textarea rows={4} defaultValue="Ingeniero de software resolviendo problemas complejos con código limpio y arquitecturas robustas." className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 outline-none focus:border-accent/50 transition-colors resize-none"></textarea>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                                <button type="submit" disabled={isSaving} className="flex items-center gap-2 px-6 py-2.5 bg-accent text-white rounded-lg text-sm font-medium hover:bg-accent/90 transition-all shadow-lg shadow-accent/20 disabled:opacity-70">
                                    {isSaving ? (
                                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    ) : (
                                        <Save className="w-4 h-4" />
                                    )}
                                    {isSaving ? "Guardando..." : "Guardar Cambios"}
                                </button>
                                {saved && <span className="text-emerald-400 text-sm font-medium flex items-center gap-1">¡Cambios guardados!</span>}
                            </div>
                        </motion.form>
                    )}

                    {activeTab === 'security' && (
                        <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }}>
                            <h2 className="text-xl font-bold mb-6">Seguridad de la Cuenta</h2>

                            <div className="space-y-6">
                                <div className="flex items-center justify-between p-4 border border-white/10 rounded-xl bg-white/5">
                                    <div>
                                        <h4 className="font-medium flex items-center gap-2"><Key className="w-4 h-4 text-accent" /> Contraseña de acceso</h4>
                                        <p className="text-sm text-foreground/50 mt-1">Última actualización hace 3 meses.</p>
                                    </div>
                                    <button className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm font-medium transition-colors">
                                        Cambiar
                                    </button>
                                </div>

                                <div className="flex items-center justify-between p-4 border border-white/10 rounded-xl bg-white/5">
                                    <div>
                                        <h4 className="font-medium flex items-center gap-2"><ShieldAlert className="w-4 h-4 text-emerald-400" /> Autenticación de dos pasos (2FA)</h4>
                                        <p className="text-sm text-foreground/50 mt-1">Asegura tu cuenta con códigos temporales.</p>
                                    </div>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input type="checkbox" className="sr-only peer" defaultChecked />
                                        <div className="w-11 h-6 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-accent"></div>
                                    </label>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {(activeTab === 'notifications' || activeTab === 'appearance') && (
                        <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="flex flex-col items-center justify-center py-20 text-center">
                            <Monitor className="w-16 h-16 text-foreground/20 mb-4" />
                            <h3 className="text-xl font-bold text-foreground/80 mb-2">Sección en Construcción</h3>
                            <p className="text-foreground/50 text-sm max-w-sm">Esta es una vista demostrativa de un dashboard para mostrar en el portafolio. Las funcionalidades completas se codifican a necesidad.</p>
                        </motion.div>
                    )}
                </div>
            </div>
        </motion.div>
    );
}
