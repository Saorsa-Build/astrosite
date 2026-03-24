"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

import codingImg from "@/assets/services/coding.jpg";
import cameraImg from "@/assets/services/filming.jpg";
import slbLogo from "@/assets/portfolio/slb.png";
import acmetalLogo from "@/assets/portfolio/acmetal.png";

type ServiceProps = {
  title: string;
  image: string;
  url: string;
};

const services: ServiceProps[] = [
  {
    title: "Web Development",
    image: codingImg.src,
    url: "/development",
  },
  {
    title: "Content Capture",
    image: cameraImg.src,
    url: "/content",
  },
];

const portfolioLogos = [
  { src: slbLogo.src, alt: "SLB", url: "https://www.spencelb.com/" },
  { src: acmetalLogo.src, alt: "AC Metal", url: "https://www.acmetalfabricating.com/" },
];

interface Services11Props {
  className?: string;
}

const Services = ({ className }: Services11Props) => {
  return (
    <section className={cn("py-5", className)}>
      <div className="container grid grid-cols-1 gap-10 lg:grid-cols-3">
        <div className="flex flex-col gap-4 lg:col-span-1">
          {/* Our Services card */}
          <div className="rounded-2xl bg-black/30 backdrop-blur-lg p-6 border border-white/10">
            <h2 className="mb-4 text-4xl font-medium text-white md:text-6xl">
              Our Services
            </h2>
            <p className="w-72 text-base tracking-tight text-white/85">
              We build fast, SEO-ready websites and shoot professional photo and
              video content — everything you need to show up online and look the
              part.
            </p>
          </div>

          {/* Portfolio logos */}
          <div className="rounded-2xl bg-black/30 backdrop-blur-lg px-6 py-5 border border-white/10">
            <p className="text-xs font-medium uppercase tracking-widest text-white/40 mb-4">
              Portfolio
            </p>
            <div className="flex items-center gap-4">
              {portfolioLogos.map((logo) => (
                <a
                  key={logo.alt}
                  href={logo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center rounded-lg bg-white/5 border border-white/10 p-4 cursor-pointer hover:bg-white/10 transition-colors"
                  style={{ width: "calc(50% - 8px)", height: "calc(50% - 8px)", aspectRatio: "1 / 1" }}
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="w-full h-full object-contain opacity-80 hover:opacity-100 transition-opacity"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2">
          {services.map((service, idx) => (
            <motion.a
              key={idx}
              href={service.url}
              whileHover={{ opacity: 0.8 }}
              className="group block overflow-hidden rounded-xl"
            >
              <Card className="relative aspect-[3/4] overflow-hidden border-none bg-muted p-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <CardContent className="absolute inset-0 flex flex-col justify-start p-6">
                  <div className="pr-4 font-semibold text-white">
                    {service.title}
                  </div>
                </CardContent>
                <ArrowUpRight className="absolute top-6 right-6 h-6 w-6 text-white transition-transform group-hover:scale-110" />
              </Card>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Services };