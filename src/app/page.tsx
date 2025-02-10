import { Button } from "@/components/ui/button";
import { Download, LayoutGrid } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-full bg-gradient-radial from-background to-background/80 dark:from-background-dark dark:to-background-dark/80">
      <section id="home" className="py-16 lg:py-24">
        <h1 className="text-4xl lg:text-6xl font-bold space-y-4">
          <span className="text-foreground/60 dark:text-foreground-dark/60">
            Hi! I&apos;m
          </span>
          <br />
          <span className="text-primary">Rachid</span> El-Ismailyly
        </h1>
        <h2 className="text-2xl lg:text-4xl font-bold mt-6 flex items-center">
          <span className="text-primary mr-2">&gt;</span> Full-Stack Web
          Developer
        </h2>

        <p className="mt-8 text-lg lg:text-xl leading-relaxed max-w-3xl">
          I Build All Kinds Of <span className="text-primary">Websites</span>{" "}
          And <span className="text-primary">Web Applications</span> That Help
          Businesses Grow And Meet Their Needs. From Interactive User Interfaces
          To Powerful Backend Systems, I Focus On Delivering{" "}
          <span className="text-primary">High-Quality</span>, Scalable, And{" "}
          <span className="text-primary">User-Friendly</span> Solutions.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-12">
          <Button className="text-lg px-8 py-6" variant="outline">
            <LayoutGrid className="mr-2 h-5 w-5" />
            My works
          </Button>
          <Button className="text-lg px-8 py-6" variant="outline">
            <Download className="mr-2 h-5 w-5" />
            Download cv
          </Button>
        </div>
      </section>

      <div className="fixed bottom-12 right-12 text-sm font-medium [writing-mode:vertical-rl] hidden lg:flex items-center gap-12">
        <span>SCROLL FOR MORE</span>
        <span className="h-24 w-px bg-foreground/20 dark:bg-foreground-dark/20" />
      </div>
    </div>
  );
}
