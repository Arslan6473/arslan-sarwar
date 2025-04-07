"use client"
import UpwardIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";

export const ContactSection = () => {
  return (
<div id="contact" className="py-16 pt-12 lg:py-24 lg:pt-20">
  <div className="container">
    <div className="bg-gradient-to-r overflow-hidden from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative z-0">
      <div
        className="absolute inset-0 opacity-5 -z-10"
        style={{
          backgroundImage: `url(${grainImage.src})`,
        }}
      ></div>
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
        <div>
          <h2 className="font-serif text-2xl md:text-3xl">
            Let's create something amazing together{" "}
          </h2>
          <p className="text-sm mt-2 md:text-base">
            Ready to bring your next project life? Let's connect and discuss
            how I can help you achieve your goals.
          </p>
        </div>
        <div>
          <button
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/arslan-sarwar64/",
                "_blank"
              )
            }
            className="bg-gray-900 border border-gray-900 w-max text-white inline-flex items-center px-6 h-12 rounded-xl gap-2"
          >
            <span className="font-semibold">Contact Me</span>
            <UpwardIcon className="size-4" />
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

  );
};
