import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center p-6">
      <AlertTriangle className="w-16 h-16 text-red-500 mb-4" />
      <h1 className="text-3xl font-bold">Project Not Found</h1>
      <p className="text-gray-500 mt-2">
        Sorry, we couldn’t find the project you’re looking for.
      </p>
      <Button
        variant="outline"
        className="mt-6"
        onClick={() => window.history.back()}
      >
        Go Back
      </Button>
    </div>
  );
}
