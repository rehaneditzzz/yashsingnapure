"use client";

import {
  Menu,
  X,
  LayoutDashboard,
  FolderKanban,
  PhoneCall,
  UserCircle2,
  CircleArrowLeft,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Projects", href: "/admin", icon: FolderKanban },
  { label: "Services", href: "/admin/services", icon: LayoutDashboard },
  { label: "Contacts", href: "/admin/contact-messages", icon: PhoneCall },
  { label: "Profile", href: "/admin/profile", icon: UserCircle2 },
];

export default function GlassDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-[#1e3c72] via-[#2a5298] to-[#1e3c72] text-white">
      {/* Sidebar */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.aside
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-y-0 left-0 z-50 w-64 bg-white/10 backdrop-blur-md border-r border-white/20 shadow-lg flex flex-col md:hidden"
          >
            <div className="p-4 flex justify-between items-center border-b border-white/10">
              <Link href="/" className="cursor-pointer text-xl font-bold">Admin</Link>

              
              <button
                className="md:hidden"
                onClick={() => setSidebarOpen(false)}
              >
                <X />
              </button>
            </div>
            <nav className="p-4 flex flex-col space-y-2">
              {navLinks.map(({ label, href, icon: Icon }) => (
                <Link
                  key={label}
                  href={href}
                  className="flex items-center gap-3 p-2 rounded-md hover:bg-white/20 transition-all"
                  onClick={() => setSidebarOpen(false)}
                >
                  <Icon size={20} />
                  <span>{label}</span>
                </Link>
              ))}
            </nav>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Desktop Sidebar */}
      <aside className="hidden md:flex md:flex-col w-64 bg-white/10 backdrop-blur-md border-r border-white/20 shadow-lg">
        <div className="p-4 border-b flex justify-evenly border-white/10">
          <Link href="/" className="text-xl font-bold">
            <CircleArrowLeft />
          </Link>
          <h2 className="text-xl font-bold">Admin</h2>
        </div>
        <nav className="p-4 flex flex-col space-y-2">
          {navLinks.map(({ label, href, icon: Icon }) => (
            <Link
              key={label}
              href={href}
              className="flex items-center gap-3 p-2 rounded-md hover:bg-white/20 transition-all"
            >
              <Icon size={20} />
              <span>{label}</span>
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navbar */}
        <header className="w-full px-4 py-4 bg-white/10 backdrop-blur-md border-b border-white/20 flex justify-between items-center">
          <button
            className="md:hidden text-white"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu />
          </button>
          {/* <div className=''>
             <Navbar/>
         </div> */}
          <h1 className="text-lg">Admin Dashboard Portfolio</h1>
          <div className="w-6" /> {/* spacer */}
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-4">{children}</main>
      </div>
    </div>
  );
}
