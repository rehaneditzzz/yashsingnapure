"use client";

import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from "framer-motion";
import React, { useRef, useState } from "react";

type DockItem = {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
};

type DockProps = {
  items: DockItem[];
};

export default function Dock({ items }: DockProps) {
  const mouseX = useMotionValue<number>(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.clientX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className=" bottom-6  px-4 py-2 flex gap-2 md:gap-4 rounded-2xl border border-white/10 bg-slate-900/20 backdrop-blur-md max-w-full overflow-x-auto"
    >
      {items.map((item, i) => (
        <DockIcon
          key={i}
          icon={item.icon}
          label={item.label}
          mouseX={mouseX}
          onClick={item.onClick}
        />
      ))}
    </motion.div>
  );
}

function DockIcon({
  icon,
  label,
  mouseX,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  mouseX: ReturnType<typeof useMotionValue<number>>;
  onClick?: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [hover, setHover] = useState(false);

  const distance = useTransform(mouseX, (x) => {
    const bounds = ref.current?.getBoundingClientRect();
    if (!bounds) return Infinity;
    return x - (bounds.left + bounds.width / 2);
  });

  const size = useTransform(distance, [-150, 0, 150], [40, 64, 40]);
  const smoothSize = useSpring(size, { mass: 0.25, stiffness: 120, damping: 15 });

  return (
    <motion.div
      ref={ref}
      style={{ width: smoothSize, height: smoothSize }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onClick}
      className="relative flex items-center justify-center rounded-full bg-[#060010] border border-white/20 shadow-md cursor-pointer"
    >
      {icon}
      <AnimatePresence>
        {hover && (
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: -10 }}
            exit={{ opacity: 0, y: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute -top-7 px-2 py-1 text-xs bg-[#060010] text-white border border-white/10 rounded-md whitespace-nowrap"
          >
            {label}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
