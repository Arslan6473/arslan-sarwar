"use client";

import Card from "@/components/Card";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import { Reveal } from "@/components/Reveal";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

const workExperience = [
  {
    role: "Full Stack Developer",
    company: "Optimageeks",
    location: "Lahore, Pakistan",
    period: "Mar 2026 — Present",
    achievements: [
      "Building and maintaining full-stack web applications end to end using React.js, Next.js, Node.js, and Python FastAPI, delivering scalable frontends and reliable backend services.",
      "Developed browser extensions that integrate with backend APIs to streamline user workflows and automate repetitive tasks.",
      "Working on AI-powered apps leveraging LangChain and advanced AI integrations to support context-aware conversations, tool calling, and multi-model workflows.",
    ],
    stack: ["React.js", "Next.js", "Node.js", "FastAPI", "LangChain"],
  },
  {
    role: "MERN Stack Developer",
    company: "Zysoftec",
    location: "Remote",
    period: "Oct 2024 — Feb 2026",
    achievements: [
      "Developed MERN stack applications across industries like Education, Hotel Booking, and AI-powered solutions.",
      "Contributed to a hotel booking platform with features like interactive maps, favorites, and comparison tools.",
      "Built a player ranking and information platform displaying player stats, ranks, and performance insights across various sports.",
    ],
    stack: ["MongoDB", "Express.js", "React.js", "Node.js", "LangChain"],
  },
  {
    role: "MERN Stack Developer",
    company: "Integer Array",
    location: "Bahawalpur, Pakistan",
    period: "Dec 2023 — May 2024",
    achievements: [
      "Built full-stack web apps using the MERN stack for e-commerce and healthcare.",
      "Built responsive user interfaces with React.js, Tailwind CSS, Redux Toolkit, and React Hook Form.",
      "Developed REST APIs with Node.js and Express.js backed by MongoDB for secure and optimized data storage.",
    ],
    stack: ["React.js", "Tailwind CSS", "Redux Toolkit", "Express.js", "MongoDB"],
  },
];

export const ExperienceSection = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 80%", "end 55%"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <section id="experience" className="py-20 lg:py-28">
      <div className="container">
        <Reveal>
          <div className="flex justify-center items-center">
            <p className="uppercase font-bold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
              Career Journey
            </p>
          </div>
          <h2 className="font-serif text-3xl text-center mt-6 md:text-5xl">
            Work Experience
          </h2>
          <p className="text-center text-white/60 mt-4 md:text-lg lg:text-xl max-w-md mx-auto">
            Over 2 years of building production-grade applications for companies
            across the globe.
          </p>
        </Reveal>
        <div ref={timelineRef} className="relative mt-10 md:mt-20 max-w-4xl mx-auto">
          <div className="absolute left-[11px] md:left-[15px] top-2 bottom-2 w-0.5 bg-white/10" />
          <motion.div
            aria-hidden
            style={{ scaleY: shouldReduceMotion ? 1 : scaleY }}
            className="absolute left-[11px] md:left-[15px] top-2 bottom-2 w-0.5 origin-top bg-gradient-to-b from-emerald-300 to-sky-400 shadow-[0_0_12px] shadow-emerald-300/50"
          />
          <div className="flex flex-col gap-12">
            {workExperience.map((job, jobIndex) => (
              <div key={`${job.company}-${job.role}`} className="relative pl-10 md:pl-16">
                <motion.div
                  initial={shouldReduceMotion ? { scale: 1 } : { scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ type: "spring", stiffness: 300, damping: 18, delay: 0.15 }}
                  className="absolute left-0 top-8 size-6 md:size-8 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 flex items-center justify-center"
                >
                  <div className="size-2.5 md:size-3 rounded-full bg-gray-900" />
                  {jobIndex === 0 && (
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 animate-ping [animation-duration:2.5s] -z-10" />
                  )}
                </motion.div>
                <motion.div
                  initial={
                    shouldReduceMotion
                      ? { opacity: 1, x: 0 }
                      : { opacity: 0, x: 48 }
                  }
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
                >
                  <Card className="px-8 py-8 md:px-10 md:py-10 transition-transform duration-300 hover:-translate-y-1">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                      <div>
                        <h3 className="font-serif text-2xl md:text-3xl">{job.role}</h3>
                        <p className="mt-1 text-white/60 text-sm md:text-base font-medium">
                          {job.company} &bull; {job.location}
                        </p>
                      </div>
                      <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text uppercase text-sm font-bold tracking-widest md:whitespace-nowrap md:mt-2">
                        {job.period}
                      </div>
                    </div>
                    <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                    <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                      {job.achievements.map((achievement) => (
                        <li
                          key={achievement}
                          className="flex gap-2 text-sm md:text-base text-white/50"
                        >
                          <CheckCircleIcon className="size-5 md:size-6 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-3 mt-6">
                      {job.stack.map((tech) => (
                        <span
                          key={tech}
                          className="text-sm font-semibold text-white/70 px-3 py-1 rounded-full outline outline-2 outline-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
