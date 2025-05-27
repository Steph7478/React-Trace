import { cn } from "@/libs/inde";
import { cva, VariantProps } from "class-variance-authority";
import React from "react";
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const iconVariants = cva("", {
  variants: {
    intent: {
      check: "text-green-500",
      noCheck: "text-red-500",
    },
  },
});

const textVariants = cva("flex text-lg items-center gap-2", {
  variants: {
    textIntent: {
      check: "text-white",
      noCheck: "text-gray-400",
    },
  },
});

type CheckProps = React.HTMLAttributes<HTMLParagraphElement> &
  VariantProps<typeof iconVariants> &
  VariantProps<typeof textVariants>;

const Check = React.forwardRef<HTMLParagraphElement, CheckProps>(
  ({ className, intent, textIntent, children, ...props }, ref) => {
    return (
      <span ref={ref} className={cn(textVariants({ textIntent }), className)} {...props}>
        {intent === "check" && <FaCheck className={iconVariants({ intent })} />}
        {intent === "noCheck" && <ImCross className={iconVariants({ intent })} />}
        {children}
      </span>
    );
  }
);

Check.displayName = "Check";

export { Check, iconVariants };
