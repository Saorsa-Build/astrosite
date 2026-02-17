import React from "react";

import { cn } from "@/lib/utils";

interface About15Props {
  className?: string;
}

const About15 = ({ className }: About15Props) => {
  return (
    <section
      className={cn("py-16 lg:py-32 bg-neutral-950 text-white", className)}
    >
      <div className="container flex flex-col items-center justify-center gap-12 lg:gap-25 lg:flex-row lg:gap-[10vw]">
        <div className="w-full max-w-xs border-2 border-white bg-white p-1">
          <img
            src=""
            alt="Ethan Walker"
            className="pointer-events-none h-110 w-full object-cover border border-neutral-200"
          />

          <div className="pt-2 pb-1 flex items-stretch justify-between gap-2">
            <div>
              <p className="text-lg font-semibold tracking-tight text-neutral-950">
                Ethan Walker
              </p>
              <p className="text-sm text-neutral-950/50">Founder</p>
            </div>
            <a 
              href="https://www.linkedin.com/in/ethanwalker576/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center min-w-[40px]"
            >
              <svg 
                className="w-10 h-10 text-neutral-950/70 hover:text-[#0A66C2] transition-colors"
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
        <div className="w-full max-w-lg space-y-6 px-4 lg:px-0">
          <h1 className="text-3xl lg:text-5xl font-semibold tracking-tight lg:tracking-tighter">
            Shaping ideas with clarity and{" "}
            <span className="font-serif">impact</span>
          </h1>
          <p className="text-sm lg:text-base leading-relaxed">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
            voluptate saepe quas cum reprehenderit eligendi inventore animi
            excepturi sapiente earum.
          </p>
          <p className="text-sm lg:text-base leading-relaxed">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
            voluptate saepe quas cum reprehenderit eligendi inventore animi
            excepturi sapiente earum.
          </p>
        </div>
      </div>
    </section>
  );
};

export { About15 };