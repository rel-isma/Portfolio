"use client";

import React, { useEffect, useState, ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface PerformanceWrapperProps {
  children: ReactNode;
  className?: string;
  threshold?: number;
  triggerOnce?: boolean;
  animation?: 'fadeIn' | 'slideUp' | 'scale' | 'none';
  delay?: number;
}

export const PerformanceWrapper: React.FC<PerformanceWrapperProps> = ({
  children,
  className = '',
  threshold = 0.1,
  triggerOnce = true,
  animation = 'fadeIn',
  delay = 0,
}) => {
  const [isInView, setIsInView] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  // Animation variants
  const variants = {
    fadeIn: {
      initial: { opacity: 0 },
      animate: { opacity: 1, transition: { duration: 0.5, delay } },
    },
    slideUp: {
      initial: { opacity: 0, y: 30 },
      animate: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
    },
    scale: {
      initial: { opacity: 0, scale: 0.95 },
      animate: { opacity: 1, scale: 1, transition: { duration: 0.5, delay } },
    },
    none: {
      initial: { opacity: 1 },
      animate: { opacity: 1 },
    },
  };

  // Use Intersection Observer for better performance
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (triggerOnce) {
            observer.disconnect();
          }
        } else if (!triggerOnce) {
          setIsInView(false);
        }
      },
      { threshold }
    );

    const element = document.querySelector(`[data-performance-wrapper]`);
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [threshold, triggerOnce]);

  // If user prefers reduced motion, show content immediately
  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      data-performance-wrapper
      className={className}
      initial={variants[animation].initial}
      animate={isInView ? variants[animation].animate : variants[animation].initial}
      viewport={{ once: triggerOnce, amount: threshold }}
    >
      {children}
    </motion.div>
  );
};

// Lazy loading wrapper for heavy components
export const LazyWrapper: React.FC<{
  children: ReactNode;
  fallback?: ReactNode;
  threshold?: number;
}> = ({ children, fallback, threshold = 0.1 }) => {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    const element = document.querySelector('[data-lazy-wrapper]');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div data-lazy-wrapper>
      {shouldLoad ? children : fallback}
    </div>
  );
}; 