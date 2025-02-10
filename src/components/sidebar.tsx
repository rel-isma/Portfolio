import { Button } from "@/components/ui/button";
import { Download, MessageSquare } from "lucide-react";
import { SocialLinks } from "@/components/social-links";

export function Sidebar() {
  return (
    <aside className="w-full lg:w-[400px] lg:h-screen overflow-y-auto p-8 bg-white dark:bg-secondary lg:rounded-r-3xl shadow-lg">
      <div className="flex flex-col h-full">
        <div className="flex items-center space-x-3 mb-8">
          <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-white text-2xl">R</span>
          </div>
          <h2 className="text-xl font-semibold">Rachid El-ismailyly</h2>
        </div>

        <div className="w-full h-64 bg-primary rounded-2xl mb-8" />

        <div className="space-y-6">
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
          <Button className="w-full bg-primary hover:bg-primary/90">
            <MessageSquare className="mr-2 h-4 w-4" />
            let&apos;s work together
          </Button>
          <Button variant="outline" className="w-full">
            <Download className="mr-2 h-4 w-4" />
            Download cv
          </Button>
        </div>
      </div>
    </aside>
  );
}
