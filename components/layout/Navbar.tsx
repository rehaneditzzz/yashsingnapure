"use client";

import { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { useUser } from "@clerk/nextjs";


import {
  Bars3Icon,
  XMarkIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/24/outline";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { useContactModal } from "@/lib/store/contactModalStore";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const { user } = useUser();
const isAdmin = user?.id === process.env.NEXT_PUBLIC_ADMIN_ID;

    const { openModal } = useContactModal();



  // Toggle dark mode on/off
  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setDarkMode(!darkMode);
  };

  return (
    <Disclosure
      as="nav"
      className="fixed w-full  z-20 bg-white/5 backdrop-blur-md border border-white/30 dark:border-white/10 dark:bg-black/30 rounded-xl shadow-lg"
    >
      {({ open }) => (
        <>
          {/* Main Navbar */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <div className="flex justify-between items-center">
              {/* Left side — Contact */}
              <div className="flex items-center gap-2">
                <Button onClick={openModal} variant="ghost">
        Contact Me
      </Button>
              </div>

              {/* Mobile Menu Toggle Button */}
              <div className="flex sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white/80 transition">
                  {open ? (
                    <XMarkIcon className="h-6 w-6" />
                  ) : (
                    <Bars3Icon className="h-6 w-6" />
                  )}
                </Disclosure.Button>
              </div>

              {/* Desktop Menu + Theme + User */}
              <div className="hidden sm:flex items-center gap-6">
                {/* Navigation Links */}
                <ul className="flex gap-6  ">
                  <li><a href="#" className="hover:text-white/80 transition">Home</a></li>
                  <li><a href="#projects" className="hover:text-white/80 transition">Projects</a></li>
                  <li><a href="#services" className="hover:text-white/80 transition">Services</a></li>
                  <li><a href="#about" className="hover:text-white/80 transition">About</a></li>
                </ul>

                {/* Theme Toggle Button */}
                <button
                  onClick={toggleTheme}
                  className="p-2 hover:text-white/80 transition"
                  aria-label="Toggle theme"
                >
                  {darkMode ? (
                    <SunIcon className="h-6 w-6" />
                  ) : (
                    <MoonIcon className="h-6 w-6" />
                  )}
                </button>

                {/* Clerk User Icon */}
                <UserButton
                  afterSignOutUrl="/"
                  appearance={{
                    elements: {
                      userButtonAvatarBox: {
                        width: "35px",
                        height: "35px",
                      },
                    },
                  }}
                />

              </div>
             {isAdmin && (
  <Link href="/admin">
    <div className="flex items-center gap-2">
      <Button variant="ghost">Admin Dashboard</Button>
    </div>
  </Link>
)}

            </div>
          </div>

          {/* Mobile Dropdown Menu */}
          <Disclosure.Panel className="sm:hidden px-4 pb-4">
            <ul className="flex flex-col gap-4 text-base font-medium">
              <li><a href="#" className="hover:text-white/80 transition">Home</a></li>
              <li><a href="#projects" className="hover:text-white/80 transition">Projects</a></li>
              <li><a href="#services" className="hover:text-white/80 transition">Services</a></li>
              <li><a href="#about" className="hover:text-white/80 transition">About</a></li>
            </ul>

            {/* Theme + User for Mobile */}
            <div className="mt-4 flex justify-between items-center">
              <button
                onClick={toggleTheme}
                className="p-2 hover:text-white/80 transition"
              >
                {darkMode ? (
                  <SunIcon className="h-6 w-6" />
                ) : (
                  <MoonIcon className="h-6 w-6" />
                )}
              </button>

              <UserButton
                afterSignOutUrl="/"
                appearance={{
                  elements: {
                    userButtonAvatarBox: {
                      width: "35px",
                      height: "35px",
                    },
                  },
                }}
              />
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
