
import Footer from "@/components/layout/Footer";
import Hero from "@/components/layout/Hero";
import Navbar from "@/components/layout/Navbar";
import About from "@/components/Pages/About";
import Projects from "@/components/Pages/Projects";
import Services from "@/components/Pages/Service";
import ServiceList from "@/components/Pages/ServiceList";
import TechStackDock from "@/components/Pages/TechStack";
import TechStack from "@/components/Pages/TechStack";

export default function Home() {
  return (
    <>
      <div className="bg-gradient-to-br text-white from-zinc-800 via-gray-900 to-slate-600 min-h-screen  py-2 flex flex-col gap-8">
        <Navbar />
        <Hero />
        <Services/>
        <ServiceList/>
        <Projects/>
        <About/>
       <TechStackDock/>
        <Footer/>
      </div>
    </>
  );
}
