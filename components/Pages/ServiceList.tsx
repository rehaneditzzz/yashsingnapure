"use client";

import React from "react";
import {
  CodeBracketIcon,
  PhotoIcon,
  PaintBrushIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  RectangleGroupIcon,
} from "@heroicons/react/24/solid";

const services = [
  {
    title: "Full-Stack Web Development",
    description:
      "MERN/Next.js development, authentication APIs, secure login systems, admin dashboards.",
    icon: <CodeBracketIcon className="w-8 h-8 text-white" />,
    bg: "bg-purple-900/80", // deep brown
  },
  {
    title: "Photo Editing & Retouching",
    description:
      "Professional-level retouching, skin smoothing, cinematic effects, and color grading.",
    icon: <PhotoIcon className="w-8 h-8 text-white" />,
    bg: "bg-[#1E3A8A]/80", // deep blue
  },
  {
    title: "Creative Manipulation",
    description:
      "Compositing, surreal edits, fantasy-themed visuals, and high-end digital artwork.",
    icon: <PaintBrushIcon className="w-8 h-8 text-white" />,
    bg: "bg-[#8B0000]/80", // dark red
  },
  {
    title: "UI/UX Design",
    description:
      "Figma wireframes, responsive Tailwind UI components, interactive flows using Shadcn & Framer Motion.",
    icon: <RectangleGroupIcon className="w-8 h-8 text-white" />,
    bg: "bg-[#374151]/80", // slate gray
  },
  {
    title: "Wedding Projects",
    description:
      "Cinematic wedding edits, pre-wedding shoot enhancement, album layouts, portrait retouching.",
    icon: <UserGroupIcon className="w-8 h-8 text-white" />,
    bg: "bg-cyan-800/80", // chocolate
  },
  {
    title: "Authentication & Security",
    description:
      "Secure token-based auth with JWT/Clerk, role-based access, OTP, and session handling.",
    icon: <ShieldCheckIcon className="w-8 h-8 text-white" />,
    bg: "bg-[#065F46]/80", // dark emerald
  },
];

export default function ServiceList() {
  return (
    <section className="w-full py-5 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          <span className="text-white/80">Services </span>
          <span className="bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
            I Offer
          </span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-md p-6 transition-transform hover:scale-105 flex flex-col items-center text-center sm:items-start sm:text-left"
            >
              <div className="flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-left gap-3 mb-4">
                <div
                  className={`w-12 h-12 flex items-center justify-center rounded-full ${service.bg}`}
                >
                  {service.icon}
                </div>
                <h3 className="text-base font-semibold text-white mt-2 sm:mt-0 sm:text-lg">
                  {service.title}
                </h3>
              </div>
              <p className="text-white/70 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
