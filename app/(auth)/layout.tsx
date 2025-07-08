// app/(auth)/layout.tsx

import React from "react";


export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1e1e2f] via-[#2b2b3a] to-[#1e1e2f] relative p-4">
      {/* Optional: Decorative blur background dots */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 opacity-30 blur-3xl rounded-full z-0" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-pink-500 opacity-30 blur-3xl rounded-full z-0" />

      {/* Glassmorphism Container */}
      <div className="relative z-10 w-full max-w-md rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md shadow-xl p-8">
        {children}
      </div>
    </main>
  );
}
