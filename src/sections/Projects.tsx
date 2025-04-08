import clasy from "@/assets/images/clasy.png";
import arboristsupply from "@/assets/images/arboristsupply.png";
import findmyvenue from "@/assets/images/findmyvenue.png";
import CheckBoxIcon from "@/assets/icons/check-circle.svg"
import ArrowUp from "@/assets/icons/arrow-up-right.svg"

import Image from "next/image";
import Card from "@/components/Card";

const portfolioProjects = [
  {
    company: "Clasy",
    year: "2025",
    title: "An AI-driven Tool Designed to Help Educators",
    results: [
      { title: "Integrated multimodal capabilities with both image and text-based AI models." },
      { title: "Implemented secure cloud storage to allow users to upload and manage files." },
      { title: "Created customizable personas to ensure consistent tone and voice in generated content." },
    ],
    link: "https://clasy.io",
    image: clasy,
  },
  {
    company: "Arboristsupply",
    year: "2023",
    title: "An E-commerce Platform",
    results: [
      { title: "Developed dynamic cart and product listing pages with responsive UI/UX." },
      { title: "Built backend APIs for order creation and persistent cart storage." },
      { title: "Designed and developed a comprehensive 'About Us' page to enhance brand story." },
    ],
    link: "https://arboristsupply.ca",
    image: arboristsupply,
  },
  {
    company: "Findmyvenue",
    year: "2024",
    title: "Venue Search Platform",
    results: [
      { title: "Integrated interactive map functionality to display venues with location data." },
      { title: "Implemented 'My Favourites' feature to let users save and revisit preferred venues." },
      { title: "Built robust filtering options to improve user search experience." },
    ],
    link: "https://findmyvenue.com",
    image: findmyvenue,
  },
];


export const ProjectsSection = () => {
  return <section id="projects" className="pb-16 lg:py-24">
    <div className="container">
      <div className="flex justify-center items-center">
        <p className="uppercase font-bold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text ">Real-world Results</p>
      </div>
      <h2 className="font-serif text-3xl text-center mt-6 md:text-5xl">Featured Projects</h2>
      <p className="text-center text-white/60 mt-4 md:text-lg lg:text-xl max-w-md mx-auto">See how I tranformed concepts into engaging digital experiences. </p>
      <div className="flex flex-col mt-10 gap-20 md:mt-20">
        {portfolioProjects?.map((project, projectIndex) => (
          <Card key={project.company} className={`px-8 md:pt-12 pb-0 md:px-10 lg:pt-16 lg:px-20 pt-8 sticky top-16 ${projectIndex === 0 ? "top-[64px]" : projectIndex === 1 ? "top-[104px]" : "top-[124px]"}`}
          >

            <div className="lg:grid lg:grid-cols-2 lg:gap-16">
              <div className="lg:pb-16">

                <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text  inline-flex gap-2 tracking-widest uppercase text-sm font-bold">
                  <span className="">{project.company}</span>
                  <span className="">&bull;</span>
                  <span>{project.year}</span>
                </div>

                <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">{project.title}</h3>
                <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                  {project.results.map((result, i) => (
                    <li key={i} className="flex gap-2 text-sm md:text-base text-white/50">
                      <CheckBoxIcon className="size-5 md:size-6" />
                      <span>{result.title}</span>
                    </li>
                  ))}
                </ul>
                <a
 href={project.link.startsWith("http") ? project.link : `https://${project.link}`}
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
                    <span className="transition-transform group-hover:translate-x-0.5">Vist Live Site</span>
                    <ArrowUp className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </button>
                </a>
              </div>
              <div className="lg:relative">
                <Image src={project.image} alt={project.title} className="mt-8 lg:mt-0 -mb-4 md:-mb-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none rounded-md" />
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  </section>;
};
