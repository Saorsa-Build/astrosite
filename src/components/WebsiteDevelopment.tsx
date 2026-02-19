"use client";

import {
  Code,
  Code2,
  Gauge,
  Globe,
  Link2,
  Search,
  ShoppingBag,
  Smartphone,
  Zap,
} from "lucide-react";

import { cn } from "@/lib/utils";

interface WebDevelopmentSEOProps {
  className?: string;
}

const WebsiteDevelopment = ({ className }: WebDevelopmentSEOProps) => {
  const services = [
    {
      icon: Globe,
      title: "Business websites — portfolio, service, landing & brochure sites",
    },
    {
      icon: ShoppingBag,
      title: "Headless Shopify storefronts via the Storefront API",
    },
    {
      icon: Gauge,
      title: "Core Web Vitals optimization (LCP, CLS, INP)",
    },
    {
      icon: Code2,
      title: "Semantic HTML & structured data (JSON-LD / Schema.org)",
    },
    {
      icon: Smartphone,
      title: "Mobile-first, responsive architecture",
    },
    {
      icon: Link2,
      title: "Crawlability, sitemap & canonical URL strategy",
    },
    {
      icon: Zap,
      title: "Static-first rendering with Astro Islands for speed",
    },
  ];

  const stats = [
    {
      icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/astro-icon.svg",
      title: "AstroJS",
      description: "Static-first headless frontend — zero-JS by default",
    },
    {
      icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shopify-icon.svg",
      title: "Shopify Storefront API",
      description: "Optional headless commerce layer — only when you need it",
    },
    {
      icon: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/tailwind-icon.svg",
      title: "Tailwind + shadcn",
      description: "Lean, utility-first CSS with no render-blocking styles",
    },
  ];

  const relatedServices = [
    {
      icon: Search,
      title: "Get in Touch",
      description: "Start the conversation, and get your website ASAP!",
      link: "/contact",
    },
    {
      icon: ShoppingBag,
      title: "Content Capture",
      description: "Professional photo & video to fill your storefront",
      link: "/content",
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
                <Code className="h-12 w-12 text-primary" />
              </div>
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl">
                Web Development
              </h1>
              <p className="text-xl leading-relaxed text-muted-foreground">
                Whether you need a sharp business website or a headless Shopify
                storefront, I build on AstroJS — fast, SEO-first, and designed
                to look nothing like a template. One stack, two use cases, zero
                compromise on performance.
              </p>
            </div>
          </div>

          {/* Stack Section */}
          <div className="mb-16">
            <h2 className="mb-8 text-center text-2xl font-semibold tracking-tight md:text-3xl">
              The Stack
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="rounded-lg bg-muted/50 p-6 text-center"
                >
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center">
                    <img
                      src={stat.icon}
                      alt={stat.title}
                      className="h-8 w-8 object-contain"
                    />
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
            <h2>One Framework, Built for Both</h2>
            <p>
              Not every business needs a Shopify storefront. A lot of people
              just need a website that looks professional, loads fast, and shows
              up on Google when someone searches for what they do. That's the
              core of what I build — clean, well-structured AstroJS sites for
              service businesses, consultants, creatives, and anyone else who
              needs a serious web presence without an overbuilt CMS or a
              WordPress install they'll never touch.
            </p>

            <p>
              For those who do need commerce, I build headless Shopify
              storefronts on the same foundation. Shopify handles the back-end
              — products, inventory, payments, checkout, fulfilment — while
              AstroJS handles everything the visitor sees. The result looks
              nothing like a Shopify theme, loads significantly faster than one,
              and gives you full control over every pixel without giving up any
              of Shopify's reliability.
            </p>

            <p>
              Either way, the approach is the same: pages pre-rendered at build
              time as pure HTML, served from a global CDN edge, with zero
              render-blocking JavaScript. Interactive elements — contact forms,
              cart drawers, navigation menus — are lightweight React islands
              that hydrate only when the visitor actually needs them. Everything
              else arrives at the browser already painted.
            </p>

            <p>
              Every site I ship includes hand-crafted JSON-LD structured data,
              Open Graph and Twitter card meta, a sitemap built around your most
              important pages, and canonical tags handled correctly from day one.
              None of it is delegated to a plugin — it's built directly into the
              Astro page templates so it works reliably on every page, every
              time.
            </p>

            <h2>What I Deliver</h2>
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

            <h2>Performance as a Competitive Advantage</h2>
            <p>
              Most websites are slower than they need to be — heavy page
              builders, unused plugins, and client-rendered JavaScript that
              stacks up before a visitor sees anything. AstroJS sidesteps all
              of that. Pages are pre-built and served as static HTML, which
              means sub-second load times on mobile, strong Core Web Vital
              scores, and a Lighthouse number your competitors almost certainly
              can't match.
            </p>

            <p>
              Every build ships with automated Lighthouse CI checks and bundle
              analysis so performance never regresses after launch. If a new
              page template or component introduces a slowdown, it's caught
              before it reaches production — not after it's already dented
              your rankings.
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

export { WebsiteDevelopment };