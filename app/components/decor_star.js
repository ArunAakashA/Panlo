"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

export default function DecorStar({
  size = 40,
  position = "left-6 top-1/3",
  glow = true,
  float = true,
  rotate = true,
  delay = 0,
}) {
  const starRef = useRef(null);

  useEffect(() => {
    const el = starRef.current;
    if (!el) return;

    if (float) {
      gsap.to(el, {
        y: -10,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay,
      });
    }

    if (rotate) {
      const tl = gsap.timeline({
        repeat: -1,
        delay,
        defaults: { ease: "sine.inOut" },
      });

      tl.to(el, { rotate: -90, scale: 1.4, duration: 2 })
        .to(el, { rotate: 90, scale: 0.875, duration: 2 })
        .to(el, { rotate: -90, scale: 1.4, duration: 2 })
        .to(el, { rotate: 90, scale: 0.875, duration: 2 });
    }

    if (glow) {
      gsap.to(el, {
        opacity: 0.9,
        repeat: -1,
        yoyo: true,
        duration: 2.5,
        ease: "sine.inOut",
        delay,
      });
    }
  }, [float, rotate, glow, delay]);

  return (
    <div
      ref={starRef}
      className={`hidden lg:block pointer-events-none absolute ${position} z-20`}
      style={{
        width: size,
        height: size,
        filter: glow
          ? "drop-shadow(0 0 10px var(--color-primary)) drop-shadow(0 0 20px var(--color-primary))"
          : "none",
        transformOrigin: "center center",
      }}
    >
      <Image
        src="/decor-star.svg"
        alt="Decorative star"
        width={size}
        height={size}
        className="opacity-90 w-full h-full z-[60]"
      />
    </div>
  );
}
