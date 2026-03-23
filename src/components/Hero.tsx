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
    <section className={cn("py-5", className)}>
      <div className="container px-4">
        <div className="rounded-2xl bg-black/20 backdrop-blur-lg border border-white/10 p-8 md:p-12">
          <div className="flex flex-col items-start text-left">
            <h1 className="my-6 text-4xl font-bold text-pretty text-white lg:text-6xl xl:text-7xl">
              {heading}
            </h1>
            <p className="mb-8 max-w-xl text-white/70 lg:text-xl">
              {description}
            </p>
            <div className="flex flex-row gap-2">
              {buttons.primary && (
                <Button
                  asChild
                  size="sm"
                  className="flex-1 max-w-[180px] bg-white text-black hover:opacity-85"
                >
                  <a href={buttons.primary.url}>{buttons.primary.text}</a>
                </Button>
              )}
              {buttons.secondary && (
                <Button
                  asChild
                  size="sm"
                  variant="outline"
                  className="flex-1 max-w-[180px] border-white/10 text-white bg-black/20 hover:bg-white/10 hover:text-white hover:border-white/20"
                >
                  <a href={buttons.secondary.url}>
                    {buttons.secondary.text}
                    <ArrowDownRight className="size-4" />
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero3 };