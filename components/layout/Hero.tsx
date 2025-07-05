"use client";

import React from "react";
import Magnet from "@/components/bits/Magnet";
import {
  RocketLaunchIcon,
  CodeBracketIcon,
  DevicePhoneMobileIcon,
} from "@heroicons/react/24/solid";
import { useContactModal } from "@/lib/store/contactModalStore";
import { Button } from "../ui/button";

// Floating tech icons
const techIcons = [
  {
    src: "/images/icon1.jpg",
    alt: "React",
    style: { top: "25%", left: "12%" },
  },
  {
    src: "/images/icon2.png",
    alt: "Tailwind CSS",
    style: { top: "15%", right: "20%" },
  },
  {
    src: "/images/icon3.png",
    alt: "JavaScript",
    style: { bottom: "25%", left: "12%" },
  },
  {
    src: "/images/icon4.png",
    alt: "Photoshop",
    style: { bottom: "25%", left: "35%" },
  },
  {
    src: "/images/icon9.png",
    alt: "VSCode",
    style: { bottom: "25%", left: "40%" },
  },
  {
    src: "/images/icon7.png",
    alt: "Node.js",
    style: { bottom: "5%", right: "20%" },
  },
];

// Floating avatar + intro + CTA
export default function Hero() {
  const { openModal } = useContactModal();

  return (
    <section className="relative w-full px-6 py-24 md:py-20 lg:py-40 min-h-screen lg:min-h-[60vh] overflow-hidden">
      {/* Floating Icon Layer */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {techIcons.map((icon, i) => (
          <Magnet
            key={i}
            padding={80}
            magnetStrength={2}
            className="absolute"
            style={{
              ...icon.style,
              width: "50px",
              height: "50px",
              zIndex: 0,
            }}
          >
            <img
              src={icon.src}
              alt={icon.alt}
              className="w-full h-full object-contain opacity-80 hover:opacity-100 transition"
            />
          </Magnet>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10 items-center">
        {/* Left Side — Intro Text */}
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Transforming Ideas into{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
              Beautiful Code
            </span>
          </h1>
          <p className="text-lg md:text-xl text-white/80">
            I'm Yash — A full-stack developer crafting performant and modern
            digital experiences.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <button onClick={openModal} className="relative group px-6 py-3 font-semibold text-white bg-white/5 backdrop-blur-md border border-white/20 rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-white/30 hover:scale-105">
              <span className="absolute inset-0 w-full h-full bg-white opacity-10 group-hover:opacity-20 transition-all duration-300" />
              {/* <span className="relative z-10">Get in Touch</span> */}
              
                Get in Touch
            
            </button>
            <button className="relative px-6 py-3 font-semibold text-white rounded-lg overflow-hidden border border-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:scale-105 transition-transform duration-300">
              <span className="absolute inset-0 bg-zinc-900 rounded-lg m-[2px]" />
              <span className="relative z-10">View Projects</span>
            </button>
          </div>
        </div>

        {/* Right Side — Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Avatar Card */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-xl p-6 flex flex-col items-center text-center">
            <img
              src="/images/1000178703 (1).png"
              alt="Yash Singnapure"
              className="w-28 h-28 rounded-full object-cover border-white mb-4"
            />
            <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-700 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Yash Singnapure
            </h3>
            <p className="text-white/70 text-sm">
              MERN Stack Developer | UI/UX Enthusiast
            </p>
          </div>

          {/* Feature Cards */}
          <FeatureCard
            icon={
              <DevicePhoneMobileIcon className="h-8 w-8 text-emerald-400" />
            }
            title="Creative Photoshop Designer"
            desc="Designing clean UI mockups, graphics, and brand visuals with precision."
          />
          <FeatureCard
            icon={<CodeBracketIcon className="h-8 w-8 text-blue-400" />}
            title="Full-Stack Developer"
            desc="Building scalable apps with React, Node.js, and MongoDB."
          />
        </div>
      </div>
    </section>
  );
}

// Reusable Feature Card Component
function FeatureCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="p-6 bg-white/5 backdrop-blur-md border border-white/20 rounded-xl shadow-xl hover:scale-105 transition transform duration-300 ease-in-out">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm text-white/80">{desc}</p>
    </div>
  );
}
