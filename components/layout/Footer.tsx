import React from "react";

export default function Footer() {
  return (
    <div>
      <footer className="py-6 text-center text-white/60 bg-black/30 border-t border-white/10">
        © {new Date().getFullYear()} Yash Singnapure. All rights reserved.
      </footer>
    </div>
  );
}
