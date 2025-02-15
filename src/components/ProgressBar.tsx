"use client";

import { useState, useEffect } from "react";

export function ProgressBar() {
  const [progress, setProgress] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    setIsDesktop(mediaQuery.matches);

    const handleResize = () => setIsDesktop(mediaQuery.matches);
    mediaQuery.addListener(handleResize);

    return () => mediaQuery.removeListener(handleResize);
  }, []);

  useEffect(() => {
    const updateProgress = () => {
      if (isDesktop) {
        const element = document.getElementById("main-content");
        if (element) {
          const { scrollTop, scrollHeight, clientHeight } = element;
          const windowHeight = scrollHeight - clientHeight;
          if (windowHeight > 0) {
            const progress = (scrollTop / windowHeight) * 100;
            setProgress(Math.round(progress));
          }
        }
      } else {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollTop =
          window.pageYOffset || document.documentElement.scrollTop;
        const maxScroll = documentHeight - windowHeight;
        const currentProgress = (scrollTop / maxScroll) * 100;
        setProgress(Math.min(100, Math.max(0, Math.round(currentProgress))));
      }
    };

    const element = isDesktop
      ? document.getElementById("main-content")
      : window;
    element?.addEventListener("scroll", updateProgress);
    updateProgress();

    return () => element?.removeEventListener("scroll", updateProgress);
  }, [isDesktop]);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 h-1 bg-gray-200 dark:bg-gray-800 z-50">
        <div
          className="h-full bg-primary transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="fixed bottom-24 md:bottom-8 right-4 h-12 w-12 md:h-16 md:w-16 rounded-full bg-background/90 dark:bg-background-dark/90 backdrop-blur-lg border border-gray-200 dark:border-gray-800 shadow-lg z-50 overflow-hidden">
        <svg className="w-full h-full" viewBox="0 0 32 32">
          <circle
            className="text-gray-300/30"
            strokeWidth="4"
            stroke="currentColor"
            fill="transparent"
            r="14"
            cx="16"
            cy="16"
          />
          <circle
            className="text-primary"
            strokeWidth="4"
            strokeDasharray={88}
            strokeDashoffset={88 - (88 * progress || 0) / 100}
            strokeLinecap="round"
            stroke="currentColor"
            fill="transparent"
            r="14"
            cx="16"
            cy="16"
            style={{
              transition: "stroke-dashoffset 0.35s",
              transform: "rotate(-90deg)",
              transformOrigin: "50% 50%",
            }}
          />
        </svg>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs md:text-sm font-semibold text-primary">
          {progress}%
        </div>
      </div>
    </>
  );
}
