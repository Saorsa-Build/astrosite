import { ArrowDownRight } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

interface Hero3Props {
  heading?: string;
  description?: string;
  buttons?: {
    primary?: {
      text: string;
      url: string;
      className?: string;
    };
    secondary?: {
      text: string;
      url: string;
    };
  };
  className?: string;
}

const Hero3 = ({
  heading = "Building Premium SEO Friendly Websites",
  description = "Finely crafted by Ethan Walker; a Marketing Specialist and Software Engineer based in Windsor, Ontario.",
  buttons = {
    primary: {
      text: "Contact",
      url: "/contact",
    },
    secondary: {
      text: "About Saorsa Media",
      url: "/about",
    },
  },
  className,
}: Hero3Props) => {
  return (
    <section className={cn("py-32", className)} style={{ background: "var(--background)" }}>
      <div className="container grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
        <div className="mx-auto flex flex-col items-center text-center md:ml-auto lg:max-w-3xl lg:items-start lg:text-left">
          <h1
            className="my-6 text-4xl font-bold text-pretty lg:text-6xl xl:text-7xl"
            style={{ color: "var(--foreground)" }}
          >
            {heading}
          </h1>
          <p
            className="mb-8 max-w-xl lg:text-xl"
            style={{ color: "var(--muted-foreground)" }}
          >
            {description}
          </p>
          <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
            {buttons.primary && (
              <Button
                asChild
                className="w-full sm:w-auto"
                style={{ background: "var(--primary)", color: "var(--primary-foreground)", borderColor: "var(--primary)" }}
                onMouseOver={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.opacity = "0.85";
                }}
                onMouseOut={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.opacity = "1";
                }}
                onMouseDown={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.opacity = "0.7";
                }}
                onMouseUp={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.opacity = "0.85";
                }}
              >
                <a href={buttons.primary.url}>{buttons.primary.text}</a>
              </Button>
            )}
            {buttons.secondary && (
              <Button
                asChild
                variant="outline"
                style={{ borderColor: "var(--border)", color: "var(--foreground)", background: "var(--muted)" }}
                onMouseOver={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "var(--accent)";
                  el.style.borderColor = "var(--ring)";
                  el.style.color = "var(--accent-foreground)";
                }}
                onMouseOut={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "var(--muted)";
                  el.style.borderColor = "var(--border)";
                  el.style.color = "var(--foreground)";
                }}
                onMouseDown={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "var(--secondary)";
                  el.style.borderColor = "var(--ring)";
                  el.style.color = "var(--secondary-foreground)";
                }}
                onMouseUp={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = "var(--accent)";
                  el.style.borderColor = "var(--ring)";
                  el.style.color = "var(--accent-foreground)";
                }}
              >
                <a href={buttons.secondary.url}>
                  {buttons.secondary.text}
                  <ArrowDownRight className="size-4" />
                </a>
              </Button>
            )}
          </div>
        </div>
        <div className="flex">
          <img
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
            alt="placeholder hero"
            className="max-h-[600px] w-full rounded-md object-cover lg:max-h-[800px]"
          />
        </div>
      </div>
    </section>
  );
};

export { Hero3 };