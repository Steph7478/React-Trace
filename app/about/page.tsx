"use client";
import { AnimatedCard } from "@/hooks/useAnimatedCards";
import { useFadeIn } from "@/hooks/useFadeIn";
import Typewriter from "@/hooks/useTypeWriterMotion";
import { Card3D } from "@/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeInData = [useFadeIn()];
  return (
    <div className="min-[1150px]:px-10 max-[1150px]:pb-[30px] pt-[60px] max-[1150px]:px-4 min-h-screen flex justify-start items-center w-full">
      <div className="flex max-[1150px]:flex-col justify-center max-[1150px]:gap-20 max-w-[1150px] items-center w-full max-[1150px]:pt-[30px]">
        <motion.div
          ref={fadeInData[0].ref}
          {...fadeInData[0].animationProps}
          className="flex flex-col gap-10 justify-center items-center w-full h-full"
        >
          <div className="relative w-[300px] h-[300px]">
            <div className="absolute inset-0 z-0 before:content-[''] before:absolute before:inset-0 before:rounded-full before:bg-violet-600/25 before:blur-[60px] before:opacity-70"></div>

            <div className="relative w-full h-full rounded-full overflow-hidden z-10">
              <div
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{
                  padding: "6px",
                  background:
                    "linear-gradient(to right, #22c55e, #3b82f6, #ef4444)",
                  WebkitMask:
                    "radial-gradient(farthest-side, transparent calc(100% - 6px), black calc(100% - 6px))",
                  mask: "radial-gradient(farthest-side, transparent calc(100% - 6px), black calc(100% - 6px))",
                }}
              ></div>

              <Image
                src="/avatar.png"
                alt=""
                width={800}
                height={800}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>

          <Typewriter
            tag="h3"
            className="text-4xl text-white overflow-hidden text-center min-h-[80px] font-bold"
            phrases={[
              `Hi there! <span class="text-fuchsia-500">I'm Stephanie.</span>`,
              `I'm a <span class="text-green-500">Frontend Developer.</span>`,
              `Feel free to <span class="text-red-500">reach out!</span>`,
            ]}
          />
        </motion.div>

        <AnimatedCard
          refProp={fadeInData[0].ref}
          animationProps={fadeInData[0].animationProps}
          className="w-full h-full max-w-[550px]"
        >
          <Card3D className="relative flex min-h-[350px] justify-center py-20 items-center text-lg font-semibold w-full flex-col px-5">
            <Image
              width={30}
              height={30}
              src="/components.png"
              className="drop-shadow-[0_0_10px_#ff3de7] rounded-lg absolute top-0 left-0 m-5"
              alt="Descriptive alt text"
            />
            <p>
              I'm a self-taught frontend developer with strong skills in{" "}
              <span className="text-sky-400">
                React, Next.js, TypeScript, Framer Motion,
              </span>{" "}
              and <span className="text-sky-400">Tailwind CSS</span>. I'm
              passionate about expanding my knowledge and becoming a fullstack
              developer.
              <br />
              <br />
              Feel free to explore my projects on{" "}
              <Link
                className="text-green-500 underline cursor-pointer transition-colors duration-100 ease-in-out hover:brightness-125"
                href="https://github.com/Steph7478"
                rel="noopener noreferrer"
                target="_blank"
              >
                Github.
              </Link>
            </p>
          </Card3D>
        </AnimatedCard>
      </div>
    </div>
  );
};

export default About;
