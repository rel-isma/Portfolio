"use client";

import { useEffect } from 'react';

interface LayoutShiftEntry extends PerformanceEntry {
  value: number;
  hadRecentInput: boolean;
}

interface NavigationEntry extends PerformanceEntry {
  entryType: string;
  responseStart: number;
  requestStart: number;
}

interface FirstInputEntry extends PerformanceEntry {
  processingStart: number;
  startTime: number;
}

export const PerformanceMonitor = () => {
  useEffect(() => {
    // Monitor Core Web Vitals
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      // Largest Contentful Paint (LCP)
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        console.log('LCP:', lastEntry.startTime);
        
        // Send to analytics if needed
        if (lastEntry.startTime > 2500) {
          console.warn('LCP is too slow:', lastEntry.startTime);
        }
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay (FID)
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          const firstInputEntry = entry as FirstInputEntry;
          console.log('FID:', firstInputEntry.processingStart - firstInputEntry.startTime);
          
          if (firstInputEntry.processingStart - firstInputEntry.startTime > 100) {
            console.warn('FID is too slow:', firstInputEntry.processingStart - firstInputEntry.startTime);
          }
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift (CLS)
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          const layoutShiftEntry = entry as LayoutShiftEntry;
          if (!layoutShiftEntry.hadRecentInput) {
            clsValue += layoutShiftEntry.value;
            console.log('CLS:', clsValue);
            
            if (clsValue > 0.1) {
              console.warn('CLS is too high:', clsValue);
            }
          }
        });
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      // Time to First Byte (TTFB)
      const navigationObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          const navigationEntry = entry as NavigationEntry;
          if (navigationEntry.entryType === 'navigation') {
            const ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
            console.log('TTFB:', ttfb);
            
            if (ttfb > 600) {
              console.warn('TTFB is too slow:', ttfb);
            }
          }
        });
      });
      navigationObserver.observe({ entryTypes: ['navigation'] });

      // Cleanup
      return () => {
        lcpObserver.disconnect();
        fidObserver.disconnect();
        clsObserver.disconnect();
        navigationObserver.disconnect();
      };
    }
  }, []);

  return null; // This component doesn't render anything
}; 