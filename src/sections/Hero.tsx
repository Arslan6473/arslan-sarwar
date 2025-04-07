"use client"
import Image from "next/image";
import memoji from "@/assets/images/memoji-computer.png"
import ArrowDown from "@/assets/icons/arrow-down.svg"
import grainImage from "@/assets/images/grain.jpg"
import StartIcon from "@/assets/icons/star.svg"
import HeroOrbit from "@/components/HeroOrbit";
import SparkalIcon from "@/assets/icons/sparkle.svg";

export const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return <div id="home" className="py-32 md:48 lg:py-68 relative z-0 overflow-x-clip">
    <div className="absolute inset-0 pointer-events-none [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">

      <div className="absolute inset-0 -z-30 opacity-5" style={{
        backgroundImage: `url(${grainImage.src})`,

      }}></div>
      <div className="absolute inset-0 -z-30 size-[620px] border-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-emerald-300/5 shadow-[0_0_80px_inset] shadow-emerald-300/5">
      </div>
      <div className="absolute inset-0 -z-30 size-[820px] border-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-emerald-300/5 shadow-[0_0_80px_inset] shadow-emerald-300/5">
      </div>
      <div className="absolute inset-0 -z-30 size-[1020px] border-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-emerald-300/5 shadow-[0_0_80px_inset] shadow-emerald-300/5">
      </div>
      <div className="absolute inset-0 -z-30 size-[1220px] border-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-emerald-300/5 shadow-[0_0_80px_inset] shadow-emerald-300/5">
      </div>
      <HeroOrbit rotation={-14} shouldOrbit orbitDuration="30s" shouldSpin spinDuration="3s" size={430}><SparkalIcon className="text-emerald-300 size-8 opacity-20" /></HeroOrbit>
      <HeroOrbit rotation={79} shouldOrbit orbitDuration="32s" shouldSpin spinDuration="3s" size={440}><SparkalIcon className="text-emerald-300 size-5 opacity-20" /></HeroOrbit>
      <HeroOrbit rotation={-41} shouldOrbit orbitDuration="34s" size={520}><div className="bg-emerald-300 size-2 rounded-full opacity-20"></div></HeroOrbit>
      <HeroOrbit rotation={178} shouldOrbit orbitDuration="36s" shouldSpin spinDuration="3s" size={530}><SparkalIcon className="text-emerald-300 size-10 opacity-20" /></HeroOrbit>
      <HeroOrbit rotation={20} shouldOrbit orbitDuration="38s" shouldSpin spinDuration="10s" size={550}><StartIcon className="text-emerald-300 size-12" /></HeroOrbit>
      <HeroOrbit rotation={98} shouldOrbit orbitDuration="40s" shouldSpin spinDuration="10s" size={590}><StartIcon className="text-emerald-300 size-8" /></HeroOrbit>
      <HeroOrbit rotation={-5} shouldOrbit orbitDuration="42s" size={650}><div className="bg-emerald-300 size-2 rounded-full opacity-20"></div></HeroOrbit>
      <HeroOrbit rotation={144} shouldOrbit orbitDuration="44s" shouldSpin spinDuration="10s" size={710}><SparkalIcon className="text-emerald-300 size-14 opacity-20" /></HeroOrbit>
      <HeroOrbit rotation={85} shouldOrbit orbitDuration="46s" size={720}><div className="bg-emerald-300 size-3 rounded-full opacity-20"></div></HeroOrbit>
      <HeroOrbit rotation={-72} shouldOrbit orbitDuration="48s" shouldSpin spinDuration="6s" size={800}><StartIcon className="text-emerald-300 size-28" /></HeroOrbit>
    </div>
    <div className="container">
      <div className="flex flex-col justify-center items-center">
        <Image src={memoji} className="size-[100px]" alt="Hero" />
        <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 rounded-lg inline-flex items-center gap-4 ">
          <div className="bg-green-500 size-2.5 rounded-full relative">
            <div className="bg-green-500 absolute inset-0 animate-ping-large rounded-full "></div>
          </div>
          <div className="text-sm font-medium">Avaliable for new projects</div>
        </div>
      </div>
      <div className="max-w-lg mx-auto">
        <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-tight">Bulding Exceptional Full Stack Projects</h1>
        <p className="mt-4 text-center md:text-lg text-white/60">
          I specialize in building high-performance web applications with Next.js, React.js, Node.js, and modern web technologies.
        </p>
      </div>
      <div className="flex flex-col md:flex-row md:justify-center items-center mt-8 gap-4">
        <button
          onClick={() => scrollToSection("projects")}
          className="inline-flex items-center cursor-pointer gap-2 border border-white/15 px-6 h-12 rounded-xl 
    transition-all duration-300 ease-in-out 
    hover:bg-white/10 
    hover:border-white/30 
    active:scale-95"
        >
          <span className="font-semibold">Explore My Work</span>
          <ArrowDown className="size-4 transition-transform group-hover:translate-y-0.5" />
        </button>

        <button
          onClick={() => window.open("https://www.linkedin.com/in/arslan-sarwar64/", "_blank")}
          className="inline-flex font-semibold cursor-pointer items-center gap-2 border border-white bg-white text-gray-900 px-6 h-12 rounded-xl 
    transition-all duration-300 ease-in-out 
    hover:bg-white/90 
    hover:shadow-lg 
    active:scale-95"
        >
          <span>👋</span>
          <span>Let&#39;s Connect</span>
        </button>
      </div>
    </div>
  </div>;
};
