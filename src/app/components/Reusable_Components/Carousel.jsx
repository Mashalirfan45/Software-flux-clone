"use client";

import { useState, useEffect, useCallback, useMemo } from "react";

// Slides per screen size, e.g. { 0: 1, 768: 2, 1024: 3 }
function useSlidesPerView(breakpoints) {
  const key = JSON.stringify(breakpoints);
  const [perView, setPerView] = useState(breakpoints[0] ?? 1);

  useEffect(() => {
    const calculate = () => {
      const width = window.innerWidth;
      let value = breakpoints[0] ?? 1;
      Object.keys(breakpoints)
        .map(Number)
        .sort((a, b) => a - b)
        .forEach((bp) => {
          if (width >= bp) value = breakpoints[bp];
        });
      setPerView(value);
    };
    calculate();
    window.addEventListener("resize", calculate);
    return () => window.removeEventListener("resize", calculate);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  return perView;
}

export default function Carousel({
  items,
  renderItem, // (item, index, { position, next, prev }) => JSX
  breakpoints = { 0: 1, 768: 2, 1024: 3 },
  gap = 40, // px between cards
  autoPlay = true,
  interval = 4000, // ms
  pauseOnHover = true,
  showDots = true,
  className = "",
}) {
  const perView = useSlidesPerView(breakpoints);
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const maxIndex = useMemo(
    () => Math.max(0, Math.ceil(items.length - perView)),
    [items.length, perView]
  );
  const active = Math.min(current, maxIndex);

  const next = useCallback(
    () => setCurrent((c) => (Math.min(c, maxIndex) >= maxIndex ? 0 : c + 1)),
    [maxIndex]
  );
  const prev = useCallback(
    () => setCurrent((c) => (Math.min(c, maxIndex) <= 0 ? maxIndex : c - 1)),
    [maxIndex]
  );

  // Auto slide
  useEffect(() => {
    if (!autoPlay || paused || maxIndex === 0) return;
    const timer = setInterval(next, interval);
    return () => clearInterval(timer);
  }, [autoPlay, paused, interval, next, maxIndex]);

  const slideWidth = 100 / perView;
  // Don't leave empty space at the end when perView is fractional (e.g. 3.3)
  const offset = Math.min(active, Math.max(0, items.length - perView));

  return (
    <div className={className}>
      <div
        className="overflow-hidden"
        onMouseEnter={() => pauseOnHover && setPaused(true)}
        onMouseLeave={() => pauseOnHover && setPaused(false)}
      >
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${offset * slideWidth}%)` }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="shrink-0"
              style={{
                flexBasis: `${slideWidth}%`,
                padding: `0 ${gap / 2}px`,
              }}
            >
              {renderItem(item, index, {
                position: index - active, // 0 = first visible card
                next,
                prev,
              })}
            </div>
          ))}
        </div>
      </div>

      {/* DOTS (optional) */}
      {showDots && maxIndex > 0 && (
        <div className="mt-16 flex items-center justify-center gap-4">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`relative rounded-full transition-all duration-300 ${
                active === index
                  ? "h-12 w-12 bg-[#c88bd0]"
                  : "h-4 w-4 bg-[#92278f]"
              }`}
            >
              {active === index && (
                <span className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#92278f]" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}