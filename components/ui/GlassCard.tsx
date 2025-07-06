"use client";

import Image from "next/image";
import React from "react";
import { Button } from "./button";
import { CircleArrowOutUpRight } from "lucide-react";

interface GlassCardProps {
  title: string;
  description: string;
  image: string;
  isCode: string; // "code" or "photo"
}

export default function GlassCard({
  title,
  description,
  image,
  isCode,
}: GlassCardProps) {
  return (
    <div className="relative group overflow-hidden w-full min-h-[300px] bg-white/1 backdrop-blur-md rounded-[30px] shadow-xl transition-transform transform hover:scale-[1.03] duration-300 border border-white/20">
      {/* Custom shape using clip-path */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full clip-custom-shape bg-white/5 backdrop-blur-[8px] rounded-[30px] border border-white/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full justify-between p-3 text-white">
        <div>
          <div className="w-full h-35 relative rounded-xl overflow-hidden mb-4 border border-white/10">
            <Image
              src={image.replace("/upload/", "/upload/f_auto,q_auto/")}
              alt={title}
              fill
              className="object-cover rounded-xl"
            />
          </div>
          <h3 className="text-lg mb-1">{title}</h3>
          <p className="text-xs text-white/70">{description}</p>
        </div>

        {/* Conditional Buttons */}
        <div className="my-2  flex justify-between gap-2">
          {isCode === "code" ? (
            <>
              <Button
                variant="ghost"
                className="text-white border border-white/10"
              >
                Source Code <CircleArrowOutUpRight size={16} className="ml-1" />
              </Button>
              <Button
                variant="ghost"
                className="text-white border border-white/10"
              >
                Live <CircleArrowOutUpRight size={16} className="ml-1" />
              </Button>
            </>
          ) : (
            <Button
              variant="ghost"
              className="text-white border border-white/10"
            >
              Check Photos <CircleArrowOutUpRight size={16} className="ml-1 " />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
