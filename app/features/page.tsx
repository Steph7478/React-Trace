"use client";

import { Button } from "@/ui/button";
import React, { useEffect } from "react";
import Image from "next/image";
import { Card3D } from "@/ui/card";
import { useFadeIn } from "@/hooks/useFadeIn";
import { motion } from "framer-motion";
import { AnimatedCard } from "@/hooks/useAnimatedCards";
import Link from "next/link";

const Features = () => {
  const fadeInData = [
    useFadeIn(),
    useFadeIn(),
    useFadeIn(),
    useFadeIn(),
    useFadeIn(),
    useFadeIn(),
  ];

  const animatedCards = (
    n: number,
    children: React.ReactNode,
    text: string
  ) => {
    return (
      <AnimatedCard
        refProp={fadeInData[n].ref}
        animationProps={fadeInData[n].animationProps}
        className="max-w-[400px] gap-y-4 w-full flex flex-col justiy-center items-center"
      >
        <p> {text}</p>
        <Card3D className="p-0">{children}</Card3D>
      </AnimatedCard>
    );
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen h-full gap-y-20 pb-[120px] px-4">
      <section className="max-w-[850px] w-full h-full min-h-screen flex justify-center items-center">
        <motion.div
          ref={fadeInData[0].ref}
          {...fadeInData[0].animationProps}
          className="flex max-[750px]:flex-col gap-x-4 w-full min-h-screen  max-[750px]:justify-evenly justify-center items-center px-4"
        >
          <div
            ref={fadeInData[0].ref}
            {...fadeInData[0].animationProps}
            className="flex flex-col max-[750px]:items-center justify-center min-[750px]:items-start gap-y-5 text-white"
          >
            <h2 className="text-[45px] w-full font-semibold text-transparent  max-[750px]:text-center bg-clip-text bg-gradient-to-tr from-white to-violet-500/50">
              Optimize your projects
            </h2>
            <p className="max-[750px]:text-center w-[75%]">
              Analyze render behavior deeply and fix performance problems fast.
            </p>
            <Link href={"/download"}>
              {" "}
              <Button intent={"primary"}>Install the Extension</Button>
            </Link>
          </div>

          <Card3D className="max-w-[50%]  max-[750px]:max-w-[75%] min-h-fit w-full p-0 rounded-[20px]">
            <Image
              width={1000}
              height={1000}
              layout="responsive"
              alt="Extension"
              className=" border-violet-600/25 border-[1px] rounded-[20px] w-full h-full"
              src="/mac.png"
            />
          </Card3D>
        </motion.div>
      </section>

      <section className="flex gap-y-16 flex-col justify-center items-center w-full max-w-[900px]">
        <motion.h2
          ref={fadeInData[1].ref}
          {...fadeInData[1].animationProps}
          className="relative font-semibold text-[38px] text-center before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(circle,_rgba(187,155,255,0.1)_100%,_transparent_100%)] before:blur-2xl before:z-[-1] text-[#ECECEC]"
        >
          All Features
        </motion.h2>
        <motion.h3>
          To use this extension, is required{" "}
          <Link
            href={
              "/https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi"
            }
            rel="noopener noreferrer"
            target="_blank"
          >
            React Devtools
          </Link>
        </motion.h3>
        <div className="w-full flex-wrap text-lg font-semibold flex max-[900px]:flex-col justify-center items-center gap-y-10 gap-x-15">
          {animatedCards(
            2,
            <>
              <Image
                src="/featurelist.png"
                width={1400}
                height={1400}
                alt=""
                className="w-full h-full object-cover flex-grow object-left"
              />
            </>,
            "A full list of your components"
          )}
          {animatedCards(
            3,
            <>
              <Image
                src="/featureproblem.png"
                width={1400}
                height={1400}
                alt=""
                className="w-full h-full object-cover flex-grow object-left"
              />
            </>,
            "A tab only to track problems"
          )}
          {animatedCards(
            4,
            <>
              <Image
                src="/featuretree.png"
                width={1400}
                height={1400}
                alt=""
                className="w-full h-full object-cover flex-grow object-left"
              />
            </>,
            "A better view in your component tree"
          )}
          {animatedCards(
            5,
            <>
              <Image
                src="/featuresummary.png"
                width={1400}
                height={1400}
                alt=""
                className="w-full h-full object-cover flex-grow object-left"
              />
            </>,
            "Summary of analysis"
          )}
        </div>
      </section>
    </div>
  );
};

export default Features;
