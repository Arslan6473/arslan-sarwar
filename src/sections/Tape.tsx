import StartIcon from "@/assets/icons/star.svg";
import { Fragment } from "react";

const words = [
  "Scalable",
  "Maintainable",
  "Accessible",
  "Responsive",
  "Optimized",
  "Secure",
  "Modular",
  "Robust",
  "Extensible",
  "Reliable",
  "User friendly",
  "Efficient",
  "Dynamic",
  "SEO friendly",
  "Automated"
];


export const TapeSection = () => {
  return (
    <div className="py-16 lg:py-24 overflow-x-clip ">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400 -rotate-3 -mx-1">
        <div className="flex">
          <div className="flex flex-none gap-4 py-3 pr-4 animate-move-left [animation-duration:35s]">
            {[...new Array(2)].fill(0).map((_, idx) => (
              <Fragment key={idx}>
                {words.map((word) => (
                  <div key={word} className="inline-flex gap-4 items-center">
                    <span className="text-gray-900 uppercase font-extrabold text-sm">{word}</span>
                    <StartIcon className="size-6 text-gray-900 -rotate-12" />
                  </div>
                ))}
              </Fragment>
            ))}


          </div>
        </div>
      </div>
    </div>
  );
};
