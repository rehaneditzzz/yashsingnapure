// app/(auth)/layout.tsx

import React from "react";
import Image from "next/image";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1e1e2f] via-[#2b2b3a] to-[#1e1e2f] relative">
      {/* Blurred background elements */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-pink-500/20 rounded-full blur-[120px] animate-pulse -z-10" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-[120px] animate-pulse -z-10" />

      {/* Auth card */}
      <div className="w-full max-w-md px-6 py-10 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl text-white">
        <div className="mb-6 flex flex-col items-center">
          <Image
            src="/images/logo.png" // replace with your logo or remove
            alt="Logo"
            width={48}
            height={48}
            className="mb-2"
          />
          <h2 className="text-xl font-bold tracking-tight">Welcome to Yash's Portal</h2>
          <p className="text-sm text-white/60">Secure login powered by Clerk</p>
        </div>

        {/* Auth components (SignIn, SignUp, etc.) injected here */}
        {children}
      </div>
    </main>
  );
}
