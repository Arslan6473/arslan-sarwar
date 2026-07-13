"use client";
import React from "react";
import Image from "next/image";
import grainImage from "@/assets/images/grain.jpg";
import smileMemoji from "@/assets/images/memoji-smile.png";
import toast, { Toaster } from "react-hot-toast";
import { FiCopy, FiSend } from "react-icons/fi";
import { Reveal } from "@/components/Reveal";
import { motion, useReducedMotion } from "framer-motion";

export const ContactSection = () => {
  const email = "Arslansarwarwebdev@gmail.com";
  const shouldReduceMotion = useReducedMotion();

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(email)
      .then(() => {
        toast.success("Copied to clipboard 🚀", {
          style: {
            borderRadius: "10px",
            background: "#1f2937",
            color: "#fff",
          },
        });

      })
      .catch((err) => {
        console.error("Copy failed:", err);
        toast.error("Failed to copy");
      });
  };

  return (
    <div id="contact" className="py-16 pt-12 lg:py-24 lg:pt-20">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="container">

        <Reveal>
        <div className="bg-gradient-to-r from-emerald-400 via-sky-400 to-emerald-400 bg-[length:200%_100%] animate-gradient-shift rounded-3xl px-8 py-10 md:px-12 md:py-12 text-gray-900 relative overflow-hidden motion-reduce:animate-none">
          <div
            className="absolute inset-0 opacity-5 -z-10 pointer-events-none"
            style={{
              backgroundImage: `url(${grainImage.src})`,
            }}
          ></div>
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 relative z-10">
            <div className="flex-1 text-center md:text-left">
              <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl">
                Let&apos;s create something amazing together
              </h2>
              <p className="text-sm mt-3 md:text-base text-gray-900/80 max-w-md mx-auto md:mx-0">
                Ready to bring your next project to life? Let&apos;s connect and
                discuss how I can help you achieve your goals.
              </p>

              <div className="flex flex-col lg:flex-row items-center justify-center md:justify-start gap-4 mt-6 w-full">
                <a
                  href={`mailto:${email}`}
                  className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-xl bg-gray-900 text-white font-semibold whitespace-nowrap w-full md:w-auto
                    transition-all duration-300 ease-in-out
                    hover:bg-gray-800 hover:shadow-lg hover:-translate-y-0.5
                    active:scale-95"
                >
                  <FiSend className="text-lg flex-shrink-0" />
                  <span>Send me an email</span>
                </a>

                <button
                  onClick={copyToClipboard}
                  aria-label={`Copy email address ${email}`}
                  className="inline-flex items-center justify-center gap-3 h-12 px-4 rounded-xl bg-white/50 backdrop-blur max-w-full w-full md:w-auto
                    transition-all duration-300 ease-in-out
                    hover:bg-white/70 hover:shadow-md
                    active:scale-95 group"
                >
                  <span className="font-medium text-gray-900 text-sm md:text-base truncate">
                    {email}
                  </span>
                  <FiCopy className="text-lg text-gray-700 flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:text-gray-900" />
                </button>
              </div>
            </div>

            <motion.div
              animate={shouldReduceMotion ? undefined : { y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="hidden md:block flex-shrink-0"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-white/30 blur-2xl rounded-full" />
                <Image
                  src={smileMemoji}
                  alt="Smiling memoji of Arslan"
                  className="size-28 lg:size-32 relative"
                />
              </div>
            </motion.div>
          </div>
        </div>
        </Reveal>

      </div>
    </div>
  );
};
