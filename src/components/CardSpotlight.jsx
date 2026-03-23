import { useMotionValue, motion, useMotionTemplate } from "framer-motion";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

export const CardSpotlight = ({
  children,
  className,
}) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      className={cn(
        "group relative flex h-full w-full flex-col overflow-hidden rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all p-5",
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              300px circle at ${mouseX}px ${mouseY}px,
              hsl(var(--primary) / 0.15),
              transparent 80%
            )
          `,
        }}
      />
      
      {/* Dot pattern background */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300"
        style={{
          backgroundImage: `radial-gradient(hsl(var(--primary) / 0.25) 1px, transparent 1px)`,
          backgroundSize: "20px 20px"
        }}
      />

      <div className="relative z-10 flex-col flex h-full">{children}</div>
    </div>
  );
};
