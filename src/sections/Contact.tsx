"use client";
import React, { useState } from "react";
import grainImage from "@/assets/images/grain.jpg";
import toast, { Toaster } from "react-hot-toast";
import { FiCopy } from "react-icons/fi";

export const ContactSection = () => {
  const email = "Arslansarwarwebdev@gmail.com";

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

        <div className="bg-gradient-to-r from-emerald-400 to-sky-400 rounded-3xl p-8 text-gray-900 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-5 -z-10 pointer-events-none"
            style={{
              backgroundImage: `url(${grainImage.src})`,
            }}
          ></div>
          <div className="flex flex-col items-start gap-2 text-center relative z-10">
            <h2 className="font-serif text-left text-2xl md:text-3xl">
              Let's create something amazing together{" "}
            </h2>
            <p className="text-sm mt-2 md:text-base text-left">
              Ready to bring your next project life? Let's connect and discuss
              how I can help you achieve your goals.
            </p>

            <div className="flex items-center bg-white/80 mt-2 px-4 py-3 rounded-xl shadow-sm">
              <span className="font-medium text-sm md:text-base mr-3">{email}</span>

              <button
                onClick={copyToClipboard}

              >
                <FiCopy
                  className="text-lg text-gray-700 hover:text-gray-900 transition"
                  title="Copy Email"
                />
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
