import { Button } from "@/components/ui/button";
import { Download, MessageSquare } from "lucide-react";
import { SocialLinks } from "@/components/social-links";
import Link from "next/link";
import Image from "next/image";

export function Sidebar() {
  return (
    <aside
      id="topHome"
      className="w-full md:w-[400px] md:h-screen  p-8 md:bg-white  bg-gradient-radial md:dark:bg-secondary md:rounded-r-3xl md:shadow-lg"
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center space-x-3 mb-8">
          <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-white text-2xl">R</span>
          </div>
          <h2 className="text-xl font-semibold">Rachid El-ismailyly</h2>
        </div>

        <div className="w-full aspect-square bg-gradient-to-b from-primary/10 to-primary/5 rounded-2xl mb-8 relative">
          <Image
            src="/relisma1.jpg"
            alt="Profile"
            fill
            className="object-cover object-top rounded-2xl"
          />
        </div>

        <div className="space-y-6 mb-4">
          <div>
            <h3 className="text-sm text-foreground/60 dark:text-foreground-dark/60">
              Specialization:
            </h3>
            <p className="font-semibold">
              Full-stack developer
              <br />
              And Software developer
            </p>
          </div>

          <div>
            <h3 className="text-sm text-foreground/60 dark:text-foreground-dark/60">
              Based in:
            </h3>
            <p className="font-semibold">Taounate, Morocco</p>
          </div>
        </div>

        <div className="mt-auto space-y-4">
          <SocialLinks />
          <Button className="w-full bg-primary hover:bg-primary/90 text-white">
            <MessageSquare className="mr-2 h-4 w-4" />
            <Link href="#contact">let&apos;s work together</Link>
          </Button>
          <Button variant="outline" className="w-full">
            <Download className="mr-2 h-4 w-4" />
            <Link
              href="/Rachid_El_ismaiyly_Full-Stack.pdf"
              target="_blank"
              download
            >
              {" "}
              Download Resume{" "}
            </Link>
          </Button>
        </div>
      </div>
    </aside>
  );
}
