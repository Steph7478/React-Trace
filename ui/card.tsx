"use client";

import { cn } from "@/libs/clsx";
import { cva, VariantProps } from "class-variance-authority";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const cardVariants = cva(
  "min-h-[300px] flex w-full h-full border-2 border-black/5 rounded-lg bg-gradient-to-b from-white/5 to-white/0 shadow-[0_-2px_5px_rgba(233,223,255,0.3),0_-2px_20px_rgba(187,155,255,0.2),inset_0_0_0_rgba(255,255,255,0.3)] gap-y-4 py-12 px-4",
  {
    variants: {
      intent: {
        primary: "flex-col justify-evenly items-center",
        secondary: "flex-row items-center text-start relative",
      },
    },
  }
);

type Card3DProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof cardVariants>;

export function Card3D({
  className,
  children,
  intent = "primary",
  ...props
}: Card3DProps) {
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const smoothX = useSpring(x, { stiffness: 25, damping: 20 });
  const smoothY = useSpring(y, { stiffness: 25, damping: 20 });

  const rotateX = useTransform(smoothY, [0, 1], [5, -5]);
  const rotateY = useTransform(smoothX, [0, 1], [-5, 5]);

  function handleMouseMove(e: React.MouseEvent) {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    x.set(px);
    y.set(py);
  }

  function handleMouseLeave() {
    x.set(0.5);
    y.set(0.5);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1000,
        scale: 1.02,
        transformStyle: "preserve-3d",
      }}
      className={cn(cardVariants({ intent }), className)}
      {...(props as React.ComponentProps<typeof motion.div>)}
    >
      {children}
    </motion.div>
  );
}
