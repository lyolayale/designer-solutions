"use client";

import { useEffect, useRef, useState } from "react";

export default function Reveal({ children, delay = 0 }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Sets visible to true when entering, and false when leaving
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1, // Triggers when 10% of the element is visible
      },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-1000 ease-out ${
        isVisible
          ? "opacity-100 translate-y-0 filter blur-0 scale-100"
          : "opacity-0 translate-y-12 filter blur-sm scale-95"
      }`}
    >
      {children}
    </div>
  );
}
