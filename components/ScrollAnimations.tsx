"use client";

import { useEffect } from "react";

export default function ScrollAnimations() {
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );

    sections.forEach((s) => observer.observe(s));

    // Set up observer first so visible sections get in-view before the
    // hiding CSS kicks in — prevents above-the-fold flash
    requestAnimationFrame(() => {
      document.documentElement.classList.add("js-animate");
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
