import grainImage from "@/assets/images/grain.jpg";
import { CSSProperties, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

function Card({className,style,children}:PropsWithChildren<{className?:string,style?:CSSProperties}>) {
  return (
    <div style={style} className={twMerge("bg-gray-800 rounded-3xl relative z-0 overflow-hidden  after:z-10  after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-3xl after:outline-white/20 after:pointer-events-none",className)}>
      <div
        className="absolute inset-0 -z-10 opacity-5"
        style={{
          backgroundImage: `url(${grainImage.src})`,
        }}
      >
        
      </div>
      {children}
    </div>
  );
}
export default Card;
