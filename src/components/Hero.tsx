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
    <section className={cn("py-20", className)}>
      <div className="container">
        <div className="grid bg-card/75 backdrop-blur-sm border border-border/30 rounded-2xl p-8 md:p-12 items-center gap-10 lg:grid-cols-2 lg:gap-20">
          <div className="mx-auto flex flex-col items-center text-center md:ml-auto lg:max-w-3xl lg:items-start lg:text-left">
            <h1 className="my-6 text-4xl font-bold text-pretty text-foreground lg:text-6xl xl:text-7xl">
              {heading}
            </h1>
            <p className="mb-8 max-w-xl text-muted-foreground lg:text-xl">
              {description}
            </p>
            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
              {buttons.primary && (
                <Button
                  asChild
                  className="w-full sm:w-auto bg-primary text-primary-foreground hover:opacity-85"
                >
                  <a href={buttons.primary.url}>{buttons.primary.text}</a>
                </Button>
              )}
              {buttons.secondary && (
                <Button
                  asChild
                  variant="outline"
                  className="w-full sm:w-auto border-border text-foreground bg-muted hover:bg-accent hover:text-accent-foreground hover:border-ring"
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
      </div>
    </section>
  );
};

export { Hero3 };