"use client";

import {
  Camera,
  Code,
  Film,
  Globe,
  Image,
  Layers,
  Music2,
  Pencil,
  Play,
  Search,
  ShoppingBag,
  Wind,
} from "lucide-react";

import { cn } from "@/lib/utils";

interface ContentCaptureProps {
  className?: string;
}

const ContentCapture = ({ className }: ContentCaptureProps) => {
  const services = [
    {
      icon: Camera,
      title: "Brand & product photography — stills and motion",
    },
    {
      icon: Film,
      title: "Cinematic video production with gimbal-stabilised A7III footage",
    },
    {
      icon: Wind,
      title: "Aerial drone footage for location, real estate & brand content",
    },
    {
      icon: Image,
      title: "Adobe Photoshop retouching & colour grading",
    },
    {
      icon: Play,
      title: "Premiere Pro video editing, cuts & social-ready exports",
    },
    {
      icon: Pencil,
      title: "Illustrator graphics, overlays & motion title design",
    },
    {
      icon: Music2,
      title: "Audio sync, sound design & licensed music sourcing",
    },
    {
      icon: Layers,
      title: "Content repurposing for web, social & Shopify product pages",
    },
  ];

  const stats = [
    {
      // Adobe CC
      icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/adobe-icon.png",
      title: "Adobe Creative Cloud",
      description: "Photoshop · Premiere Pro · Illustrator · After Effects",
    },
    {
      // Sony — using a camera emoji SVG fallback since no CDN logo available
      icon: null,
      emoji: "📷",
      title: "Sony A7 III + Gimbal",
      description: "Full-frame mirrorless · 4K · stabilised cinematic footage",
    },
    {
      // DJI / drone
      icon: null,
      emoji: "🚁",
      title: "DJI Drone",
      description: "Aerial stills & video · cinematic flyovers",
    },
  ];

  const relatedServices = [
    {
      icon: Globe,
      title: "Work With Us",
      description: "Get a quote for your next content production",
      link: "/contact",
    },
    {
      icon: Code,
      title: "SEO Web Development",
      description: "AstroJS & Shopify storefronts built to rank",
      link: "/development",
    },
  ];

  return (
    <section className={cn("py-20", className)}>
      <div className="container max-w-3xl">
        <div className="mb-10 rounded-2xl p-8 bg-card/95 backdrop-blur-sm border border-border/30">

          {/* Icon and Intro */}
          <div className="mb-12 space-y-8 text-center">
            <div className="flex justify-center">
              <div className="rounded-lg bg-muted p-4">
                <Camera className="h-12 w-12 text-primary" />
              </div>
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl">
                Content Capture
              </h1>
              <p className="text-xl leading-relaxed text-muted-foreground">
                We shoot, edit, and deliver professional photo and video content
                using a full-frame Sony A7 III, gimbal-stabilised rigs, and
                aerial drone footage — then bring everything to life in Adobe
                Creative Cloud. From product photography to cinematic brand
                films, we handle the full production pipeline.
              </p>
            </div>
          </div>

          {/* Kit Section */}
          <div className="mb-16">
            <h2 className="mb-8 text-center text-2xl font-semibold tracking-tight md:text-3xl">
              Our Kit
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="rounded-lg bg-muted/50 p-6 text-center"
                >
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center">
                    {stat.icon ? (
                      <img
                        src={stat.icon}
                        alt={stat.title}
                        className="h-8 w-8 object-contain"
                      />
                    ) : (
                      <span className="text-3xl">{stat.emoji}</span>
                    )}
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm font-medium">{stat.title}</div>
                    <div className="text-xs text-muted-foreground">
                      {stat.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="mx-auto prose prose-sm mb-16 max-w-none dark:prose-invert">
            <h2>Full-Production Content, Start to Finish</h2>
            <p>
              Great content starts with great capture. We shoot on the Sony A7
              III — a full-frame mirrorless camera that delivers cinematic depth
              of field, low-light performance, and 4K video in a compact,
              run-and-gun body. Paired with a professional gimbal, every frame
              is smooth, intentional, and broadcast-ready without the bulk of a
              traditional video crew.
            </p>

            <p>
              When the brief calls for scale, we take it aerial. Drone footage
              adds a production dimension that instantly elevates brand films,
              location shoots, and real estate content — perspectives that simply
              aren't possible from the ground. We plan every flight around your
              creative brief, not just what the sky allows.
            </p>

            <p>
              Everything we capture flows into Adobe Creative Cloud for post.
              Photoshop handles retouching, compositing, and product image
              polish. Premiere Pro is our edit suite for cuts, colour grades,
              and social-format exports. Illustrator and After Effects round out
              the pipeline for motion graphics, title design, and branded
              overlays — giving your content a consistent, professional finish
              across every platform.
            </p>

            <p>
              For Shopify clients, we align shoot plans directly with product
              catalogue structure — ensuring you have hero images, lifestyle
              context shots, and short-form video assets ready for each listing,
              collection, and campaign, reducing post-launch bottlenecks.
            </p>

            <h2>What We Produce</h2>
            <div className="space-y-3">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div key={index} className="flex items-center gap-3">
                    <Icon className="h-5 w-5 text-primary" />
                    <span>{service.title}</span>
                  </div>
                );
              })}
            </div>

            <h2>Content That Works Harder</h2>
            <p>
              A shoot isn't just a shoot. Every image and video we produce is
              planned for multi-channel use — web, social, email, and paid ads
              — so you get maximum value from a single production day. We export
              to the exact specs each platform demands: square for Instagram,
              vertical for Reels and TikTok, widescreen for web heroes and
              YouTube, and web-optimised stills for your Shopify product pages.
            </p>

            <p>
              We also brief for SEO. Product images are named, alt-tagged, and
              compressed at export. Video embeds are structured with the right
              schema so search engines surface your content in rich results.
              Good production habits and good SEO habits aren't separate — we
              build both in from day one.
            </p>
          </div>

          {/* Related Services */}
          <div className="rounded-lg">
            <h2 className="mb-8 text-center text-2xl font-semibold tracking-tight md:text-3xl">
              Related Services
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {relatedServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div key={index} className="group rounded-lg bg-muted/50">
                    <a
                      href={service.link}
                      className="block space-y-2 rounded-lg p-6 transition-colors hover:bg-muted"
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="h-5 w-5 text-muted-foreground group-hover:text-primary" />
                        <div className="text-lg font-medium group-hover:text-primary">
                          {service.title}
                        </div>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {service.description}
                      </div>
                    </a>
                  </div>
                );
              })}
            </div>
          </div>

        </div>{/* end card */}
      </div>
    </section>
  );
};

export { ContentCapture };