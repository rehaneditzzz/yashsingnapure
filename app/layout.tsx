// app/layout.tsx
import { ClerkProvider } from "@clerk/nextjs";
import { dark, shadesOfPurple } from "@clerk/themes";

// import { Inter } from 'next/font/google';
import { Poppins } from "next/font/google";
import "./globals.css";
import ClientWrapper from "@/components/layout/ClientWrapper";
import { Toaster } from "react-hot-toast";

// const inter = Inter({ subsets: ['latin'] });

// 1. Load the font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200"],
  variable: "--font-poppins",
  display: "swap",
});
export const metadata = {
  title: "Yash Singnapure",
  description:
    "Welcome to the portfolio of Yash Singnapure — a passionate MERN Stack Developer and UI/UX enthusiast. Explore modern web projects, clean user interfaces, and powerful full-stack applications built with React, Node.js, MongoDB, Tailwind CSS, and more.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: [shadesOfPurple],
        variables: { colorPrimary: "" },
        signIn: {
          baseTheme: [shadesOfPurple],
          variables: { colorPrimary: "" },
        },
      }}
    >
      <html lang="en" className={`${poppins.className} overflow-x-hidden overflow-y-auto`}>
        <body>
          {children}
    <Toaster position="top-right" />

          <ClientWrapper/>
        </body>
      </html>
    </ClerkProvider>
  );
}
