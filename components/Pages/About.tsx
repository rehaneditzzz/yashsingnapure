import CircularText from "../bits/CircularText";
import Image from "next/image";
import profileImg from "@/public/images/dp.png"; // <-- replace with your actual image path
// import { CircleArrowOutUpRight, UserCircleIcon } from "lucide-react";
import {
  FaInstagram,
  FaLinkedin,
  FaRegIdCard,
  FaYoutube,
} from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { BsEmojiGrinFill } from "react-icons/bs";
import { Link } from "lucide-react";

export default function About() {
  return (
    <>
      <section className="w-full px-4 text-white relative overflow-hidden ">
        {/* Header Section */}
        <div className="flex border-b border-white/20 flex-col p-2 items-center justify-center text-center space-y-6">
          <h2 className="text-7xl flex justify-center items-center sm:text-8xl md:text-9xl lg:text-[18rem] tracking-wider font-extralight ">
            AB
            <div className="relative flex justify-center items-center w-[150px] h-[150px] sm:w-[250px] sm:h-[250px] md:w-[240px] md:h-[240px] mx-auto">
              {/* Circular Text */}
              <CircularText
                text="FULL STACK DEVELOPER ✦ CREATIVE THINKER ✦ PROBLEM SOLVER ✦ "
                onHover="speedUp"
                spinDuration={10}
                className="text-sm sm:text-base md:text-lg font-extrabold w-full h-full "
              />

              {/* Profile Image Centered */}
              <Image
                src={profileImg}
                alt="Profile"
                className="absolute top-1/2 left-1/2 w-[60%] h-[60%] sm:w-[55%] sm:h-[55%] md:w-[75%] md:h-[75%] rounded-full object-cover border-2 border-white shadow-xl transform -translate-x-1/2 -translate-y-1/2"
                width={300}
                height={300}
              />
            </div>
            UT {/* <span className="text-gray-900 lg:text-9xl ">*</span> */}
            <span className="font-bold bg-gradient-to-r from-cyan-50 via-blue-400 to-fuchsia-700 bg-clip-text text-transparent">
              <i>Me</i>
            </span>
          </h2>
        </div>

        <div className="py-2">
          <div className="flex text-neutral-600 font-bold w-full items-center justify-around text-center">
            <span>BASED IN NAGPUR</span>
            <span>DETAIL-ORIENTED</span>
            <span>CURIOUS</span>
          </div>

          {/* About Description */}
          <div className="max-w-7xl mx-auto lg:mt-11 grid grid-cols-1 md:grid-cols-6 gap-6 p-4 relative z-10">
            {/* About Me Card (Top Left) */}
            <div className="md:col-span-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-tr-[80px] rounded-bl-[80px] shadow-xl p-6 hover:scale-[1.02] transition-all text-white">
  <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
    <span className="p-2 rounded-full bg-white/10 backdrop-blur-xl shadow-inner text-white/60">
      <BsEmojiGrinFill color="yellow" size={20} />
    </span>
    About Me
  </h2>
{/* ////////////////////////// */}





  <p className="text-sm text-white/80 leading-relaxed">
    Growing up in Nagpur, I was surrounded by a supportive family. I
    always wanted to become a web developer—not just as a career,
    but to build something meaningful and impactful.
  </p>

  <div className="mt-6 flex justify-between flex-wrap text-sm text-white/70 gap-4">
    <ul className="flex flex-wrap gap-4 items-center">
   
        <a  href="mailto:yashsingnapure@gmail.com"  className="p-2 bg-white/10 backdrop-blur-sm rounded-full text-white/60 hover:text-white transition">
          <TfiEmail  size={16} />
        </a>
  
     
        <span className="p-2 bg-white/10 backdrop-blur-sm rounded-full text-white/60 hover:text-white transition">
          <FaLinkedin  size={16} />
        </span>


        <span className="p-2 bg-white/10 backdrop-blur-sm rounded-full text-white/60 hover:text-white transition">
          <FaInstagram  size={16} />
        </span>

     
        <span className="p-2 bg-white/10 backdrop-blur-sm rounded-full text-white/60 hover:text-white transition">
          <FaYoutube size={16} />
        </span>

    </ul>

    <span className="flex items-center gap-2 underline hover:text-white cursor-pointer text-white/70">
      <span className="p-2 bg-white/10 backdrop-blur-sm rounded-full text-white/60 hover:text-white transition">
        <FaRegIdCard size={16} />
      </span>
      Resume
    </span>
  </div>
</div>

            {/* Certifications (Complements the top-left with opposite rounding) */}
            <div className="md:col-span-2 bg-purple-800/40 backdrop-blur-md border border-white/10 rounded-tl-[80px] rounded-br-[80px] shadow-xl p-6 hover:scale-[1.02] transition-all">
              <h2 className="text-xl font-semibold text-white mb-2">
                📜 Certifications
              </h2>
              <ul className="text-sm text-white/80 list-disc list-inside space-y-1">
                <li>HTML, CSS, JS – ICEICO</li>
                <li>Tailwind CSS</li>
                <li>React.js</li>
              </ul>
            </div>

            {/* Experience (Offset look using only top-left curve) */}
            <div className="md:col-span-3 bg-purple-800/40 backdrop-blur-md border border-white/10 rounded-tl-[70px] shadow-lg p-6 hover:scale-[1.02] transition-all">
              <h2 className="text-xl font-semibold text-white mb-2">
                💼 Experience
              </h2>
              <p className="text-sm text-white/80">
                Interned at ICEICO. Built projects with MERN stack, focused on
                full-stack architecture and user experience.
              </p>
            </div>

            {/* Education (Completes shape from Experience) */}
            <div className="md:col-span-3 bg-gray-500/10 backdrop-blur-md border border-white/10 rounded-br-[70px] shadow-lg p-6 hover:scale-[1.02] transition-all">
              <h2 className="text-xl font-semibold text-white mb-2">
                🎓 Education
              </h2>
              <p className="text-sm text-white/80">
                BCCA – Graduate at RTMNU. <br />
                CGPA: 7.11 | Focus on modern web technologies and real-world
                development.
              </p>
            </div>
          </div>

          {/* <div className="relative group overflow-hidden w-full h-[300px] bg-white/1 backdrop-blur-md rounded-[30px] shadow-xl transition-transform transform hover:scale-[1.03] duration-300 border border-white/20">
            Custom shape using clip-path
            <div className="absolute inset-0 z-0">
              <div className="w-full h-4/5 clip-custom-shape bg-white/20 backdrop-blur-[8px] rounded-[30px] border border-white/10" />
            </div>

            Content
            <div className="relative z-10 flex flex-col  justify-between p-6 text-white">
              <div>
                <h3 className="text-xl font-bold mb-1">title</h3>
               <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
              I'm a passionate web developer from Nagpur with a strong eye for
              detail and a deep love for crafting functional, beautiful digital
              experiences. From a young age, I knew I wanted to build my own
              apps and solve real problems with code. My journey from editing
              photos to writing JavaScript has always been about one thing:
              bringing ideas to life — perfectly.
            </p>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
}
