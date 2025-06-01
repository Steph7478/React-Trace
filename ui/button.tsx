import { cn } from "@/libs/clsx";
import { cva, VariantProps } from "class-variance-authority";
import React from "react";

const buttonVariants = cva(
  "px-5 py-2 border-[1px] border-white rounded-full cursor-pointer font-semibold transition-colors duration-300 ease-in-out",
  {
    variants: {
      intent: {
        primary: "bg-transparent hover:bg-violet-950 text-white",
        secondary:
          "bg-white text-black/80 hover:bg-violet-950 hover:text-white",
        third:
          "bg-gradient-to-tr from-violet-400/25 via-violet-950/25 to-violet-400/25 text-white hover:bg-violet-950",
        pay: "w-[80%] bg-violet-600 text-white py-1 transition-colors duration-150 ease-in-out rounded hover:bg-violet-500 disabled:opacity-50 cursor-pointer border-0",
      },
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, intent, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ intent }), className)}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { buttonVariants, Button };
