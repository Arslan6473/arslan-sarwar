import React from 'react';
import UpwardIcon from "@/assets/icons/arrow-up-right.svg";

export const Footer = () => {
  const links = [
    {
      title: "Github",
      link: "https://github.com/Arslan6473"
    },
    {
      title: "Instagram", 
      link: "https://www.instagram.com/arslansarwar_064?igsh=YzljYTk1ODg3Zg=="
    },
    {
      title: "Twitter",
      link: "https://x.com/Arslans82555659?s=08"
    },
    {
      title: "Linkedin",
      link: "https://www.linkedin.com/in/arslan-sarwar64/"
    }
  ]

  return (
    <footer className="relative z-0 overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col items-center md:flex-row md:justify-between gap-8">
          <div className="text-white/40">&copy; 2025 | Design with ❤️ by Arslan </div>
          <nav className="flex flex-col md:flex-row items-center gap-8">
            {links.map((link) => (
              <a 
                href={link.link} 
                key={link.title}  
                target="_blank"
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-1.5 text-white hover:text-emerald-400  cursor-pointer transition-all duration-300 ease-in-out"
              >
                <span className="font-semibold">{link.title}</span>
                <UpwardIcon className="size-4"/>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};