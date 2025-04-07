"use client"
import Card from "@/components/Card";
import Starticon from "@/assets/icons/star.svg"
import bookImage from "@/assets/images/book-cover.png"
import Image from "next/image";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiShadcnui } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { RiFirebaseFill } from "react-icons/ri";
import { SiNextdotjs } from "react-icons/si";
import { SiAppwrite } from "react-icons/si";
import { RiSupabaseFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { VscVscode } from "react-icons/vsc";
import { FaGithub } from "react-icons/fa6";
import TechIcon from "@/components/TechIcon";
import mapImage from "@/assets/images/map.png"
import smileMemoji from "@/assets/images/memoji-smile.png"
import { Fragment, useRef } from "react";
import { motion } from "framer-motion";

const toolBoxItems = [

  {
    title: "HTML5",
    iconType: FaHtml5,
  },
  {
    title: "CSS3",
    iconType: FaCss3Alt
  },
  {
    title: "TailwindCSS",
    iconType: RiTailwindCssFill,
  },

  {
    title: "Shadcn UI",
    iconType: SiShadcnui
  },
  {
    title: "JavaScript",
    iconType: IoLogoJavascript
  },
  {
    title: "TypeScript",
    iconType: SiTypescript
  },
  {
    title: "React Js",
    iconType: FaReact
  },
  {
    title: "Next Js",
    iconType: SiNextdotjs
  },
  {
    title: "Firebase",
    iconType: RiFirebaseFill
  },
  {
    title: "Appwrite",
    iconType: SiAppwrite
  },
  {
    title: "Supabase",
    iconType: RiSupabaseFill
  },
  {
    title: "Node Js",
    iconType: FaNodeJs
  }, {
    title: "Express Js",
    iconType: SiExpress
  }, {
    title: "MongoDB",
    iconType: SiMongodb
  }, {
    title: "PostgreSQL",
    iconType: BiLogoPostgresql
  },
  {
    title: "VS Code",
    iconType: VscVscode
  },
  {
    title: "Github",
    iconType: FaGithub
  },
]

const hobbies = [
  {
    title: "Music",
    emoji: "🎵",
    left: "5%",
    top: "5%",

  },
  {
    title: "Photography",
    emoji: "📷",
    left: "50%",
    top: "5%",

  },

  {
    title: "Reading",
    emoji: "📖",
    left: "35%",
    top: "40%",

  },
  {
    title: "Moveis",
    emoji: "🎥",
    left: "10%",
    top: "35%",

  },
  {
    title: "Runing",
    emoji: "🏃‍♂️",
    left: "70%",
    top: "35%",

  },
  {
    title: "Gaming",
    emoji: "🎮",
    left: "5%",
    top: "65%",

  },
  {
    title: "Cricket",
    emoji: "🏏",
    left: "45%",
    top: "70%",

  },


]

export const AboutSection = () => {
  const ref = useRef(null)
  return <div id="about" className="py-20 lg:py-28">
    <div className="container">
      <div className="flex justify-center items-center ">
        <p className="uppercase font-bold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text ">About Me</p>
      </div>
      <h2 className="font-serif text-3xl text-center mt-6 md:text-5xl">A Glimpse Into My World</h2>
      <p className="text-center text-white/60 mt-4 md:text-lg lg:text-xl max-w-md mx-auto">Learn more about who I am, what I do, and wht Inspires me. </p>
      <div className="mt-20 flex flex-col gap-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3 ">
          <Card className="h-[320px] md:col-span-2 lg:col-span-1">
            <div className="flex flex-col p-6 md:py-8 md:px-10">
              <div className="inline-flex items-center gap-2">
                <Starticon className="size-9 text-emerald-300" />
                <h3 className="font-serif text-3xl">My Reads</h3>
              </div>
              <p className="text-sm lg:text-base lg:max-w-xs text-white/60 mt-2">Explore the books shaping my prespesctives.</p>
            </div>
            <div className="w-40 mx-auto mt-2 md:mt-0">
              <Image src={bookImage} alt="Book Image" />
            </div>
          </Card>
          <Card className="h-[320px] md:col-span-3 lg:col-span-2">
            <div className="flex flex-col p-6 md:py-8 md:px-10">
              <div className="inline-flex items-center gap-2">
                <Starticon className="size-9 text-emerald-300" />
                <h3 className="font-serif text-3xl">My Toolbox</h3>
              </div>
              <p className="text-sm lg:text-base lg:max-w-xs text-white/60 mt-2">Explore the technologies and tools I used to create digital experiences.</p>
            </div>
            <div className="">
              <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                <div className="flex flex-none py-0.5 gap-6 animate-move-left [animation-duration:35s]">
                  {[...new Array(2)].fill(0).map((_, idx) => (
                    <Fragment key={idx}>
                      {toolBoxItems.map((item) => (
                        <div key={item.title} className="inline-flex items-center gap-4 py-2 px-3 rounded-lg outline outline-2 outline-white/10">
                          <TechIcon component={item.iconType} />
                          <span className="font-semibold">{item.title}</span>
                        </div>
                      ))}
                    </Fragment>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-6">
              <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                <div className="flex flex-none py-0.5 gap-6 pr-6 -translate-x-1/2 animate-move-right [animation-duration:20s]">
                  {[...new Array(2)].fill(0).map((_, idx) => (
                    <Fragment key={idx}>
                      {toolBoxItems.map((item) => (
                        <div key={item.title} className="inline-flex items-center gap-4 py-2 px-3 rounded-lg outline outline-2 outline-white/10">
                          <TechIcon component={item.iconType} />
                          <span className="font-semibold">{item.title}</span>
                        </div>
                      ))}
                    </Fragment>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3 ">
          <Card className="h-[320px] flex flex-col md:col-span-3 lg:col-span-2">
            <div className="flex flex-col p-6 md:py-8 md:px-10">
              <div className="inline-flex items-center gap-2">
                <Starticon className="size-9 text-emerald-300" />
                <h3 className="font-serif text-3xl">Beyond the Code</h3>
              </div>
              <p className="text-sm lg:text-base lg:max-w-xs text-white/60 mt-2">Explore my intrests and hobbies beyond the degital realm.</p>
            </div>

            <div className="relative flex-1" ref={ref}>
              {hobbies.map((hobby) => (
                <motion.div key={hobby.title} style={{
                  top: hobby.top,
                  left: hobby.left,
                }} className="absolute cursor-pointer inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 " drag dragConstraints={ref}>
                  <span className="font-medium text-gray-950 ">{hobby.title}</span>
                  <span>{hobby.emoji}</span>
                  
                </motion.div>
              ))}
            </div>
          </Card>
          <Card className="h-[320px] relative md:col-span-2 lg:col-span-1">
            <Image className="w-full h-full object-cover" src={mapImage} alt="Map" />
           
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full  after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
             <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
             <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
              <Image src={smileMemoji} alt="Smile Memoji" className="size-20" />
            </div>
          </Card>
        </div>
      </div>
    </div>

  </div>;
};
