import { Button } from "@/components/ui/button";
import { Download, LayoutGrid, ArrowUpRight, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
          <Button className="text-lg px-8 py-6 " variant="outline">
            <Download className="mr-2 h-5 w-5" />
            Download Resume
          </Button>
        </div>
      </section>

      <section id="portfolio" className="py-16 lg:py-24 scroll-mt-16">
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <div className="space-y-4">
            <div className="inline-flex items-center rounded-full border bg-white dark:bg-secondary shadow-sm px-3 py-1 text-sm font-semibold">
              <Star className="mr-1.5 h-4 w-4" />
              Portfolio
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              My latest
              <br />
              awesome <span className="text-primary">Projects</span>
            </h2>
          </div>

          <div className="group relative overflow-hidden rounded-3xl bg-white dark:bg-secondary shadow-lg">
            <div className="aspect-[4/3] relative">
              <Image
                src="/a4.png"
                alt="Project One"
                className="object-cover"
                fill
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="absolute bottom-0 p-6 text-white">
                <h3 className="text-2xl font-bold">Project one</h3>
                <Link
                  href="#"
                  className="inline-block text-lg mt-2 font-semibold border-b border-white/30 hover:border-white transition-colors"
                >
                  View Work
                </Link>
              </div>
            </div>
            {/* <div className="absolute inset-x-0 bottom-0 h-[30%] bg-primary/90 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div className="absolute bottom-0 p-6 w-full">
                <div className="relative">
                  <div className="relative z-10 text-white">
                    <h3 className="text-2xl font-bold mb-2">Project One</h3>
                    <Link
                      href="#"
                      className="inline-block text-lg font-semibold border-b border-white/30 hover:border-white transition-colors"
                    >
                      View Work
                    </Link>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {[2, 3].map((project) => (
            <div
              key={project}
              className="group relative overflow-hidden rounded-3xl bg-white dark:bg-secondary shadow-lg"
            >
              <div className="aspect-[4/3] relative">
                <Image
                  src="/a1.png"
                  alt={`Project ${project}`}
                  className="object-cover"
                  fill
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 h-[30%] bg-primary/90 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="absolute bottom-0 p-6 w-full">
                  <div className="relative">
                    <div className="relative z-10 text-white">
                      <h3 className="text-2xl font-bold mb-2">
                        {" "}
                        Project {project}
                      </h3>
                      <Link
                        href="#"
                        className="inline-block text-lg font-semibold border-b border-white/30 hover:border-white transition-colors"
                      >
                        View Work
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="group relative overflow-hidden rounded-3xl bg-white dark:bg-secondary shadow-lg">
            <div className="aspect-[4/3] relative">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Project 4"
                className="object-cover"
                fill
              />
            </div>
            <div className="absolute inset-x-0 bottom-0 h-[30%] bg-primary/90 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div className="absolute bottom-0 p-6 w-full">
                <div className="relative">
                  <div className="relative z-10 text-white">
                    <h3 className="text-2xl  font-bold mb-2">Project 4</h3>
                    <Link
                      href="#"
                      className="inline-block text-lg font-semibold border-b border-white/30 hover:border-white transition-colors"
                    >
                      View Work
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <Link
              href="#"
              className="inline-flex items-center text-2xl font-semibold hover:text-primary transition-colors group"
            >
              View all projects
              <ArrowUpRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>
        </div>
      </section>

      <div className="fixed bottom-12 right-12 text-sm font-medium [writing-mode:vertical-rl] hidden lg:flex items-center gap-12">
        <span>SCROLL FOR MORE</span>
        <span className="h-24 w-px bg-foreground/20 dark:bg-foreground-dark/20" />
      </div>
    </div>
  );
}
