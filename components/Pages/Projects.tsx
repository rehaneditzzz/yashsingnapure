"use client";

import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { CircleArrowOutUpRight } from "lucide-react";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const res = await fetch("/api/projects");
      const data = await res.json();
      setProjects(data);
    };
    fetchProjects();
  }, []);

  return (
    <section className=" relative sm:py-4  text-white">
      <div className=" max-w-7xl sm:py-4 px-2 mx-auto">
        <h2 className="text-4xl font-bold  mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj: any) => (
            <div
              key={proj.id}
              className="group relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl bg-white/5 backdrop-blur-lg p-4 transition-transform hover:scale-[1.02]"
            >
              {/* Parallax image with glow */}
              <div className="relative h-44 overflow-hidden rounded-xl mb-4">
                <img
                  src={proj.img}
                  alt={proj.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all"></div>
              </div>

              {/* Text and tags */}
              <div className="space-y-1">
                <h3 className="text-xl font-semibold text-white/90 group-hover:text-white">
                  {proj.name}
                </h3>
                <p className="text-sm text-white/60">{proj.tech.join(", ")}</p>
              </div>

              {/* Buttons */}
              <div className="mt-5 flex gap-2 justify-between">
                <a href={proj.live} target="_blank" rel="noopener noreferrer" className="flex-1">
                  <Button
                    variant="ghost"
                    className="w-full text-sm border border-fuchsia-500/30 text-fuchsia-300 hover:bg-fuchsia-500/10 transition-all"
                  >
                    Live <CircleArrowOutUpRight size={14} className="ml-1" />
                  </Button>
                </a>
                <a href={proj.code} target="_blank" rel="noopener noreferrer" className="flex-1">
                  <Button
                    variant="ghost"
                    className="w-full text-sm border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/10 transition-all"
                  >
                    Code <CircleArrowOutUpRight size={14} className="ml-1" />
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
