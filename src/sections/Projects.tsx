import clasy from "@/assets/images/clasy.png";
import freshbox from "@/assets/images/freshbox.png";
import noorboutique from "@/assets/images/noorboutique.png";
import carfig from "@/assets/images/carfig.png";
import undiscoveredworld from "@/assets/images/undiscoveredworld.png";
import CheckBoxIcon from "@/assets/icons/check-circle.svg";
import ArrowUp from "@/assets/icons/arrow-up-right.svg";

import Image from "next/image";
import Card from "@/components/Card";
import { Reveal } from "@/components/Reveal";

const portfolioProjects = [
  {
    company: "Noor Boutique",
    year: "2026",
    title: "Modest Fashion E-Commerce Platform",
    results: [
      {
        title:
          "Built a bilingual (English/Arabic) storefront with collections, advanced product filtering, and multi-currency support.",
      },
      {
        title:
          "Implemented cart, checkout, discounts & offers, and a customer loyalty program to drive repeat purchases.",
      },
    ],
    link: "https://noorboutique.vip/shop",
    image: noorboutique,
  },
  {
    company: "Carfig",
    year: "2026",
    title: "Nationwide Car Marketplace",
    results: [
      {
        title:
          "Built advanced vehicle search across 6M+ live listings, filterable by make, model, trim, and year.",
      },
      {
        title:
          "Integrated an interactive dealership locator map covering 80K+ dealerships across all 50 US states.",
      },
    ],
    link: "https://carfig.com",
    image: carfig,
  },
  {
    company: "Undiscovered World 48",
    year: "2025",
    title: "Basketball Recruiting Showcase Platform",
    results: [
      {
        title:
          "Built a searchable player roster with position and country filters, plus full profiles featuring bio, stats, and game film.",
      },
      {
        title:
          "Implemented event registration and waitlist flows connecting international prospects with US college coaches.",
      },
    ],
    link: "https://www.undiscoveredworld48.com/players",
    image: undiscoveredworld,
  },
  {
    company: "Clasy",
    year: "2025",
    title: "An AI-driven Tool Designed to Help Educators",
    results: [
      {
        title:
          "Integrated multimodal capabilities with both image and text-based AI models.",
      },
      {
        title:
          "Implemented secure cloud storage to allow users to upload and manage files.",
      },
    ],
    link: "https://clasy.io",
    image: clasy,
  },
  {
    company: "Freshbox Pro",
    year: "2025",
    title: "Laundry Service Platform",
    results: [
      {
        title:
          "Implemented an order management feature that allows users to create and track their laundry service orders.",
      },
      {
        title:
          "Implemented a real-time chat feature that enables communication between customers and delivery riders.",
      },
    ],
    link: "https://freshbox-frontend.netlify.app/",
    image: freshbox,
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="pb-16 lg:py-24">
      <div className="container">
        <Reveal>
          <div className="flex justify-center items-center">
            <p className="uppercase font-bold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text ">
              Real-world Results
            </p>
          </div>
          <h2 className="font-serif text-3xl text-center mt-6 md:text-5xl">
            Featured Projects
          </h2>
          <p className="text-center text-white/60 mt-4 md:text-lg lg:text-xl max-w-md mx-auto">
            See how I transformed concepts into engaging digital experiences.{" "}
          </p>
        </Reveal>
        <div className="flex flex-col mt-10 gap-20 md:mt-20">
          {portfolioProjects?.map((project, projectIndex) => (
            <Card
              key={project.company}
              className="px-8 md:pt-12 pb-0 md:px-10 lg:pt-16 lg:px-20 pt-8 sticky"
              style={{ top: `calc(64px + ${projectIndex * 40}px)` }}
            >
              <Reveal className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text  inline-flex gap-2 tracking-widest uppercase text-sm font-bold">
                    <span className="">{project.company}</span>
                    <span className="">&bull;</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li
                        key={result.title}
                        className="flex gap-2 text-sm md:text-base text-white/50"
                      >
                        <CheckBoxIcon className="size-5 md:size-6 flex-shrink-0" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={
                      project.link.startsWith("http")
                        ? project.link
                        : `https://${project.link}`
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button
                      className="bg-white text-gray-950 h-12 w-full md:w-auto md:px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8
    transition-all duration-300 ease-in-out
    hover:bg-white/90 
    hover:shadow-md 
    active:scale-95
    group"
                    >
                      <span className="transition-transform group-hover:translate-x-0.5">
                        Visit Live Site
                      </span>
                      <ArrowUp className="size-4 transition-transform group-hover:translate-x-0.5" />
                    </button>
                  </a>
                </div>
                <div className="lg:relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 lg:mt-0 -mb-4 md:-mb-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none rounded-md transition-transform duration-500 ease-out hover:scale-[1.03]"
                  />
                </div>
              </Reveal>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
