"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Activity, Users, LayoutDashboard, Settings, Bell, Search, UserCircle, ArrowLeft } from "lucide-react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    const menuItems = [
        { name: "Dashboard", href: "/dashboard", icon: <LayoutDashboard className="w-5 h-5" /> },
        { name: "Usuarios", href: "/dashboard/users", icon: <Users className="w-5 h-5" /> },
        { name: "Analíticas", href: "/dashboard/analytics", icon: <Activity className="w-5 h-5" /> },
        { name: "Configuración", href: "/dashboard/settings", icon: <Settings className="w-5 h-5" /> },
    ];

    return (
        <div className="min-h-screen bg-background flex flex-col md:flex-row pb-16 md:pb-0">
            {/* Sidebar (Desktop) */}
            <aside className="w-full md:w-64 bg-background/80 backdrop-blur-md border-r border-white/5 flex flex-col p-4 shadow-xl hidden md:flex h-screen sticky top-0">
                <div className="flex items-center gap-2 px-2 py-4 mb-8">
                    <Activity className="w-8 h-8 text-accent" />
                    <span className="font-bold text-xl tracking-tight text-gradient">SecureDash</span>
                </div>

                <nav className="flex-1 space-y-2">
                    {menuItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors ${isActive
                                        ? "bg-accent/10 text-accent"
                                        : "text-foreground/60 hover:text-foreground hover:bg-white/5"
                                    }`}
                            >
                                {item.icon} {item.name}
                            </Link>
                        );
                    })}
                </nav>

                <div className="mt-auto">
                    <Link href="/" className="flex items-center gap-2 text-sm text-foreground/50 hover:text-accent transition-colors p-4">
                        <ArrowLeft className="w-4 h-4" /> Volver al Portafolio
                    </Link>
                </div>
            </aside>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col min-w-0 relative">
                {/* Glow Background */}
                <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-accent/5 rounded-full blur-[100px] md:blur-[120px] -z-10" />

                {/* Header */}
                <header className="h-20 border-b border-white/5 flex items-center justify-between px-4 md:px-6 bg-background/50 backdrop-blur-sm z-10 sticky top-0">
                    <div className="flex md:hidden items-center gap-2">
                        <Activity className="w-6 h-6 text-accent" />
                        <span className="font-bold text-lg">SecureDash</span>
                    </div>

                    <div className="hidden md:flex items-center bg-white/5 border border-white/10 rounded-full px-4 py-2 w-96">
                        <Search className="w-4 h-4 text-foreground/40 mr-2" />
                        <input
                            type="text"
                            placeholder="Buscar reportes, usuarios..."
                            className="bg-transparent border-none outline-none text-sm w-full text-foreground/80 placeholder:text-foreground/40"
                        />
                    </div>

                    <div className="flex items-center gap-4 ml-auto">
                        <button className="relative p-2 text-foreground/60 hover:text-foreground transition-colors">
                            <Bell className="w-5 h-5" />
                            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border border-background"></span>
                        </button>
                        <hr className="w-px h-6 bg-white/10 rotate-180 hidden sm:block" />
                        <div className="flex items-center gap-3 cursor-pointer">
                            <div className="hidden sm:flex flex-col text-right">
                                <span className="text-sm font-medium">Rafael Admin</span>
                                <span className="text-xs text-foreground/50">Developer</span>
                            </div>
                            <UserCircle className="w-8 h-8 text-foreground/80" />
                        </div>
                    </div>
                </header>

                <main className="flex-1 p-4 md:p-8 z-0">
                    {children}
                </main>
            </div>

            {/* Mobile Bottom Navigation */}
            <div className="md:hidden fixed bottom-0 left-0 right-0 border-t border-white/10 bg-background/90 backdrop-blur-lg flex justify-around p-2 z-50">
                {menuItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`flex flex-col items-center justify-center w-full gap-1 p-2 rounded-lg ${isActive ? 'text-accent' : 'text-foreground/60'}`}
                        >
                            <div className={`${isActive ? 'bg-accent/20 p-1 rounded-full' : ''}`}>
                                {item.icon}
                            </div>
                            <span className="text-[10px] font-medium hidden sm:block">{item.name}</span>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
