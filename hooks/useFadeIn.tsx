import {useInView} from "react-intersection-observer";

export const useFadeIn = (options = {triggerOnce: true, threshold: 0.3}) => {
  const [ref, inView] = useInView(options);

  const fadeInVariants = {
    hidden: {opacity: 0, y: 50},
    visible: {opacity: 1, y: 0, transition: {duration: 0.8}},
  };

  const animationProps = {
    initial: "hidden",
    animate: inView ? "visible" : "hidden",
    variants: fadeInVariants,
  };

  return {ref, animationProps};
};
