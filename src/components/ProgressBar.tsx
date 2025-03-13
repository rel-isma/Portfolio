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
    </>
  );
}
