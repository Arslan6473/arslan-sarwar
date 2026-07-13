"use client";
import Card from "@/components/Card";
import Starticon from "@/assets/icons/star.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import movieImage from "@/assets/images/movie.jpeg";
import Image from "next/image";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaAws, FaPython, FaVuejs, FaGitAlt, FaStripe } from "react-icons/fa";
import { RiTailwindCssFill, RiFirebaseFill, RiSupabaseFill } from "react-icons/ri";
import {
  SiShadcnui,
  SiTypescript,
  SiNextdotjs,
  SiMui,
  SiExpress,
  SiMongodb,
  SiRedux,
  SiReactquery,
  SiNestjs,
  SiFastapi,
  SiFlask,
  SiLangchain,
  SiMysql,
  SiGooglecloud,
  SiVercel,
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoPostgresql } from "react-icons/bi";
import { TbBrandReactNative } from "react-icons/tb";
import { FaGithub } from "react-icons/fa6";
import TechIcon from "@/components/TechIcon";
import mapImage from "@/assets/images/lahore-map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import { Fragment, useRef } from "react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/Reveal";

const toolBoxRow1 = [
  { title: "JavaScript", iconType: IoLogoJavascript },
  { title: "TypeScript", iconType: SiTypescript },
  { title: "Python", iconType: FaPython },
  { title: "React Js", iconType: FaReact },
  { title: "Next Js", iconType: SiNextdotjs },
  { title: "React Native", iconType: TbBrandReactNative },
  { title: "Vue Js", iconType: FaVuejs },
  { title: "Redux Toolkit", iconType: SiRedux },
  { title: "TanStack Query", iconType: SiReactquery },
  { title: "Tailwind CSS", iconType: RiTailwindCssFill },
  { title: "Material UI", iconType: SiMui },
  { title: "Shadcn UI", iconType: SiShadcnui },
  { title: "HTML5", iconType: FaHtml5 },
  { title: "CSS3", iconType: FaCss3Alt },
];

const toolBoxRow2 = [
  { title: "Node Js", iconType: FaNodeJs },
  { title: "Express Js", iconType: SiExpress },
  { title: "Nest Js", iconType: SiNestjs },
  { title: "FastAPI", iconType: SiFastapi },
  { title: "Flask", iconType: SiFlask },
  { title: "LangChain", iconType: SiLangchain },
  { title: "MongoDB", iconType: SiMongodb },
  { title: "PostgreSQL", iconType: BiLogoPostgresql },
  { title: "MySQL", iconType: SiMysql },
  { title: "AWS", iconType: FaAws },
  { title: "Google Cloud", iconType: SiGooglecloud },
  { title: "Firebase", iconType: RiFirebaseFill },
  { title: "Supabase", iconType: RiSupabaseFill },
  { title: "Stripe", iconType: FaStripe },
  { title: "Git", iconType: FaGitAlt },
  { title: "Github", iconType: FaGithub },
  { title: "Vercel", iconType: SiVercel },
];

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
    title: "Movies",
    emoji: "🎥",
    left: "10%",
    top: "35%",
  },
  {
    title: "Running",
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
    {
    title: "Volleyball",
    emoji: "🏐",
    left: "70%",
    top: "75%",
  },
];

export const AboutSection = () => {
  const ref = useRef(null);
  return (
    <div id="about" className="py-20 lg:py-28">
      <div className="container">
        <Reveal>
          <div className="flex justify-center items-center ">
            <p className="uppercase font-bold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text ">
              About Me
            </p>
          </div>
          <h2 className="font-serif text-3xl text-center mt-6 md:text-5xl">
            A Glimpse Into My World
          </h2>
          <p className="text-center text-white/60 mt-4 md:text-lg lg:text-xl max-w-md mx-auto">
            Learn more about who I am, what I do, and what inspires me.{" "}
          </p>
        </Reveal>
        <div className="mt-20 flex flex-col gap-8">
          <Reveal className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3 ">
            <Card className="h-[350px] md:col-span-2 lg:col-span-1 group transition-all duration-300 hover:-translate-y-1 hover:after:outline-emerald-300/40">
              <div className="flex flex-col p-6 md:py-8 md:px-10">
                <div className="inline-flex items-center gap-2">
                  <Starticon className="size-9 text-emerald-300" />
                  <h3 className="font-serif text-3xl">My Watches</h3>
                </div>
                <p className="text-sm lg:text-base lg:max-w-xs text-white/60 mt-2">
                  Game of Thrones
                </p>
              </div>
              <div className="w-40 mx-auto mt-2 md:mt-0 rounded-md relative">
                <div className="absolute -inset-3 bg-gradient-to-r from-emerald-300/30 to-sky-400/30 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                <Image
                  src={movieImage}
                  alt="Movie Image"
                  className="rounded-md transition-transform duration-500 ease-out group-hover:scale-105 group-hover:-rotate-1"
                />
              </div>
            </Card>
            <Card className="h-[350px] md:col-span-3 lg:col-span-2 group transition-all duration-300 hover:-translate-y-1 hover:after:outline-emerald-300/40">
              <div className="flex flex-col p-6 md:py-8 md:px-10">
                <div className="inline-flex items-center gap-2">
                  <Starticon className="size-9 text-emerald-300" />
                  <h3 className="font-serif text-3xl">My Toolbox</h3>
                </div>
                <p className="text-sm lg:text-base lg:max-w-xs text-white/60 mt-2">
                  Explore the technologies and tools I use to craft digital
                  experiences.
                </p>
              </div>
              <div className="">
                <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                  <div className="flex flex-none py-0.5 gap-6 animate-move-left [animation-duration:45s] group-hover:[animation-play-state:paused]">
                    {[...new Array(2)].fill(0).map((_, idx) => (
                      <Fragment key={idx}>
                        {toolBoxRow1.map((item) => (
                          <div
                            key={item.title}
                            className="inline-flex items-center gap-4 py-2 px-3 rounded-lg outline outline-2 outline-white/10 transition-colors duration-300 hover:outline-emerald-300/40 hover:bg-white/5"
                          >
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
                  <div className="flex flex-none py-0.5 gap-6 pr-6 -translate-x-1/2 animate-move-right [animation-duration:50s] group-hover:[animation-play-state:paused]">
                    {[...new Array(2)].fill(0).map((_, idx) => (
                      <Fragment key={idx}>
                        {toolBoxRow2.map((item) => (
                          <div
                            key={item.title}
                            className="inline-flex items-center gap-4 py-2 px-3 rounded-lg outline outline-2 outline-white/10 transition-colors duration-300 hover:outline-emerald-300/40 hover:bg-white/5"
                          >
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
          </Reveal>
          <Reveal className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3 ">
            <Card className="h-[350px] flex flex-col md:col-span-3 lg:col-span-2 transition-all duration-300 hover:-translate-y-1 hover:after:outline-emerald-300/40">
              <div className="flex flex-col p-6 md:py-8 md:px-10">
                <div className="inline-flex items-center gap-2">
                  <Starticon className="size-9 text-emerald-300" />
                  <h3 className="font-serif text-3xl">Beyond the Code</h3>
                </div>
                <p className="text-sm lg:text-base lg:max-w-xs text-white/60 mt-2">
                  Explore my interests and hobbies beyond the digital realm.
                </p>
              </div>

              <div className="relative flex-1" ref={ref}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    style={{
                      top: hobby.top,
                      left: hobby.left,
                    }}
                    className="absolute cursor-grab active:cursor-grabbing inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 shadow-lg shadow-emerald-300/20"
                    drag
                    dragConstraints={ref}
                    whileHover={{ scale: 1.08 }}
                    whileDrag={{ scale: 1.12 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="font-medium text-gray-950 ">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Lahore,+Punjab,+Pakistan"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open my location in Google Maps"
              className="block md:col-span-2 lg:col-span-1"
            >
            <Card className="h-[350px] relative group cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:after:outline-emerald-300/40">
              <Image
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                src={mapImage}
                alt="Map showing my location in Pakistan"
              />
              <div className="absolute top-4 right-4 z-20 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-950/70 backdrop-blur text-xs font-semibold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <span>Open in Google Maps</span>
                <ArrowUpRightIcon className="size-3" />
              </div>

              <div className="absolute top-[49%] left-[44%] -translate-x-1/2 -translate-y-1/2 size-14 rounded-full  after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
                <Image
                  src={smileMemoji}
                  alt="Smile Memoji"
                  className="size-14"
                />
              </div>
            </Card>
            </a>
          </Reveal>
        </div>
      </div>
    </div>
  );
};
