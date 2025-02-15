"use client";

import { useEffect } from "react";

export default function ReadingProgressBar() {
  useEffect(() => {
    const progressBar = document.getElementById("progress-bar");

    const updateProgress = () => {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrollPercent = (scrollTop / scrollHeight) * 100;

      if (progressBar) {
        progressBar.style.width = `${scrollPercent}%`;
      }
    };

    window.addEventListener("scroll", updateProgress);
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1.5 bg-gray-200 z-50">
      <div
        id="progress-bar"
        className="h-full bg-primary transition-all duration-200"
        style={{ width: "0%" }}
      ></div>
    </div>
  );
}
