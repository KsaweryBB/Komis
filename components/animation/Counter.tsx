"use client";
import { useEffect, useRef } from "react";
import { useMotionValue, useSpring, useInView } from "framer-motion";

interface CounterProps {
  value: number;
  direction?: "up" | "down";
}

export default function Counter({ value, direction = "up" }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-20px",
    amount: 0.1,
  });

  const motionValue = useMotionValue(direction === "down" ? value : 0);

  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, value, isInView]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest: number) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat("pl-PL").format(
          Math.round(latest),
        );
      }
    });
    return () => unsubscribe();
  }, [springValue]);

  return (
    <span ref={ref} style={{ display: "inline-block", minWidth: "1ch" }} />
  );
}
