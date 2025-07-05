"use client";

import {
  SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiNextdotjs,
  SiTailwindcss, SiNodedotjs, SiMongodb, SiPostgresql, SiPrisma, SiOpenai,
} from "react-icons/si";
import Dock from "../bits/Dock";

export default function TechStackDock() {
  const techItems = [
    { icon: <SiHtml5 size={28} color="#e34c26" />, label: "HTML" },
    { icon: <SiCss3 size={28} color="#264de4" />, label: "CSS" },
    { icon: <SiJavascript size={28} color="#f0db4f" />, label: "JavaScript" },
    { icon: <SiTypescript size={28} color="#3178c6" />, label: "TypeScript" },
    { icon: <SiReact size={28} color="#61dafb" />, label: "React" },
    { icon: <SiNextdotjs size={28} color="#ffffff" />, label: "Next.js" },
    { icon: <SiTailwindcss size={28} color="#38bdf8" />, label: "Tailwind" },
    { icon: <SiNodedotjs size={28} color="#3c873a" />, label: "Node.js" },
    { icon: <SiMongodb size={28} color="#47a248" />, label: "MongoDB" },
    { icon: <SiPostgresql size={28} color="#336791" />, label: "PostgreSQL" },
    { icon: <SiPrisma size={28} color="#0c344b" />, label: "Prisma" },
    { icon: <SiOpenai size={28} color="#10a37f" />, label: "OpenAI" },
  ];

  return (
    <div className="lg:p-4 w-full flex flex-col  items-center justify-center text-white">
      <h1 className="text-4xl font-bold mb-4  bg-gradient-to-r from-green-500 via-blue-400 to-fuchsia-700 bg-clip-text text-transparent text-center ">Tech Stack</h1>
      <Dock items={techItems} />
    </div>
  );
}
