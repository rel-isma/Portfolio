import { Button } from "@/components/ui/button";
import { Download, MessageSquare } from "lucide-react";
import { SocialLinks } from "@/components/social-links";
import Image from "next/image";

export function Sidebar() {
  return (
    <aside
      id="topHome"
      className="w-full md:w-[400px] flex flex-col md:h-screen  p-8 bg-gradient-radial 
                md:bg-white md:dark:bg-secondary md:rounded-r-3xl md:shadow-lg"
    >
      {/* Top Section */}
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center cursor-pointer">
          <Image
            src="/relismalogo.svg"
            alt="Logo"
            width={28}
            height={28}
            className="text-white"
          />
        </div>
        <h2 className="text-xl font-semibold">Rachid El-ismailyly</h2>
      </div>

      {/* Profile Image */}
      <div
        className="w-full max-w-[350px] mx-auto aspect-square bg-gradient-to-b from-primary/10 to-primary/5 
                      rounded-2xl mb-6 relative"
      >
        <Image
          src="/relisma_pic.jpg"
          alt="Profile"
          fill
          className="object-cover object-top rounded-2xl"
        />
      </div>

      {/* Info Section */}
      <div className="space-y-6 flex-grow">
        <div>
          <h3 className="text-sm text-foreground/60 dark:text-foreground-dark/60">
            Specialization:
          </h3>
          <p className="font-semibold">
            Full-stack Developer
            <br />& Software Developer
          </p>
        </div>

        <div>
          <h3 className="text-sm text-foreground/60 dark:text-foreground-dark/60">
            Based in:
          </h3>
          <p className="font-semibold">Taounate, Morocco</p>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-auto space-y-4">
        <SocialLinks />
        <Button
          href="/#contact"
          className="w-full bg-primary hover:bg-primary/90 text-white"
        >
          <MessageSquare className="mr-2 h-4 w-4" />
          Let&apos;s work together
        </Button>
        <Button
          href="/Rachid_El_ismaiyly_Full-Stack.pdf"
          target="_blank"
          variant="outline"
          className="w-full"
        >
          <Download className="mr-2 h-4 w-4" />
          Download Resume
        </Button>
      </div>
    </aside>
  );
}
