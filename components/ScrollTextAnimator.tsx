"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * ScrollTextAnimator
 * 
 * Provides an Apple/Linear-grade kinetic text reveal animation across the entire website
 * when scrolling up or down. Automatically observes headings (h1, h2, h3), section titles,
 * subtitle lead paragraphs, and badge pills.
 * 
 * Features:
 * - Silky smooth translateY + blur-to-sharp resolve on enter (0.75s cubic-bezier)
 * - Automatic cascading stagger delays for siblings (badge -> heading -> subtitle)
 * - Bi-directional: triggers smoothly when scrolling DOWN and re-reveals when scrolling UP
 * - Pre-loads items in viewport to prevent any flash or delay
 * - Respects prefers-reduced-motion for full accessibility
 * - Excludes navigation bars, modals, and input forms to maintain strict functionality
 */
export default function ScrollTextAnimator() {
  const pathname = usePathname();

  useEffect(() => {
    // Respect reduced motion settings
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let observer: IntersectionObserver | null = null;
    let mutationObserver: MutationObserver | null = null;
    const observedElements = new Set<HTMLElement>();

    const setupObserver = () => {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const el = entry.target as HTMLElement;
            if (entry.isIntersecting) {
              el.classList.add("lux-revealed");
            } else {
              // Check if element has scrolled past significantly (either above or below viewport)
              const rect = entry.boundingClientRect;
              const isFarAbove = rect.bottom < -120;
              const isFarBelow = rect.top > window.innerHeight + 120;
              if (isFarAbove || isFarBelow) {
                el.classList.remove("lux-revealed");
              }
            }
          });
        },
        {
          root: null,
          rootMargin: "40px 0px 40px 0px", // Trigger smoothly just before hitting view
          threshold: [0, 0.1, 0.25],
        }
      );

      // Select target headings, section subtitles, badge pills, and cards
      const selectors = [
        "main h1:not([data-no-scroll-reveal])",
        "main h2:not([data-no-scroll-reveal])",
        "main h3:not([data-no-scroll-reveal])",
        "main section > div > div > p:not([data-no-scroll-reveal])",
        "main p.leading-relaxed:not([data-no-scroll-reveal])",
        "main [data-scroll-text]",
        "main .lux-card-target",
      ];

      const elements = Array.from(
        document.querySelectorAll<HTMLElement>(selectors.join(", "))
      );

      // Group elements by parent or section to apply natural cascading stagger
      const containers = new Map<HTMLElement, HTMLElement[]>();

      elements.forEach((el) => {
        const isCard = el.classList.contains("lux-card-target");

        // Exclude elements inside navbar, header, forms, or dialogs (unless it's an intentional card)
        if (
          !isCard &&
          (el.closest("header") ||
            el.closest("nav") ||
            el.closest("form") ||
            el.closest("[role='dialog']") ||
            el.closest(".no-scroll-reveal") ||
            el.closest("svg") ||
            el.closest("button"))
        ) {
          return;
        }

        const parent = (el.parentElement as HTMLElement) || document.body;
        if (!containers.has(parent)) {
          containers.set(parent, []);
        }
        containers.get(parent)!.push(el);
      });

      containers.forEach((group) => {
        group.forEach((el, index) => {
          if (!observedElements.has(el)) {
            // Apply appropriate luxury reveal class
            const isCard = el.classList.contains("lux-card-target");
            const isHeading = el.tagName === "H1" || el.tagName === "H2";
            
            if (isCard) {
              el.classList.add("lux-card-reveal");
            } else if (isHeading) {
              el.classList.add("lux-heading-reveal");
            } else {
              el.classList.add("lux-text-reveal");
            }

            // Natural cascading stagger delay (0ms, 90ms, 180ms, 270ms, etc.)
            const delay = Math.min(index * 90, 360);
            el.style.transitionDelay = `${delay}ms`;

            // If already inside the visible viewport, reveal immediately
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
              el.classList.add("lux-revealed");
            }

            observer!.observe(el);
            observedElements.add(el);
          }
        });
      });
    };

    // Initial setup with a microtask tick so DOM is fully ready
    const timer = setTimeout(setupObserver, 50);

    // Watch for dynamic DOM changes (e.g., tabs, sliders, accordions)
    mutationObserver = new MutationObserver(() => {
      if (observer) {
        setupObserver();
      }
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      clearTimeout(timer);
      if (observer) {
        observer.disconnect();
      }
      if (mutationObserver) {
        mutationObserver.disconnect();
      }
      observedElements.clear();
    };
  }, [pathname]);

  return null;
}
