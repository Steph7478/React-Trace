import { motion } from "framer-motion";

export const AnimatedCard = ({
  refProp,
  animationProps,
  children,
  className,
}: {
  refProp: React.Ref<HTMLDivElement>;
  animationProps: Record<string, unknown>;
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      ref={refProp}
      {...animationProps}
      className={` w-full h-full flex justify-center items-center ${className}`}
    >
      {children}
    </motion.div>
  );
};
