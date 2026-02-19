import React from "react";

import { cn } from "@/lib/utils";

interface About15Props {
  className?: string;
}

const About15 = ({ className }: About15Props) => {
  return (
    <section className={cn("py-22 text-white", className)}>
      <div className="container flex flex-col items-center justify-center gap-12 lg:flex-row lg:gap-[10vw]">

        {/* Card wrapper */}
        <div className="mb-10 rounded-2xl p-8 bg-card/95 backdrop-blur-sm border border-border/30 w-full max-w-4xl">
          <div className="flex flex-col items-center justify-center gap-12 lg:flex-row lg:gap-16">

            {/* Photo card */}
            <div className="w-full max-w-xs shrink-0 border-2 border-white bg-white p-1">
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
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Copy */}
            <div className="w-full max-w-lg space-y-6 px-4 lg:px-0">
              <h1 className="text-3xl lg:text-5xl font-semibold tracking-tight lg:tracking-tighter">
                I build the website{" "}
                <span className="font-serif italic">and</span>{" "}
                shoot the content to fill it.
              </h1>
              <p className="text-sm lg:text-base leading-relaxed">
                My name is Ethan, I'm a web developer and content creator who got tired
                of watching great businesses hand off their site to one agency
                and their photography to another, then spend months waiting for
                a lackluster result. I do both, which means your
                visuals are designed for the pages they'll live on from day one.
              </p>
              <p className="text-sm lg:text-base leading-relaxed">
                On the development side, I specialise in AstroJS and Shopify
                storefronts built with SEO baked in. On the
                content side, I shoot with my own equipment, then edit everything in Adobe
                Creative Cloud. The result is a site that loads fast, ranks
                well, and actually looks like your brand.
              </p>
              <p className="text-sm lg:text-base leading-relaxed">
                If you want to work with someone who cares as much about your
                Google ranking as your grid aesthetic,{" "}
                <a
                  href="/contact"
                  className="underline underline-offset-4 hover:opacity-70 transition-opacity"
                >
                  let's talk.
                </a>
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export { About15 };