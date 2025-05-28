"use client";
import { Button } from "@/ui/button";
import { Card3D } from "@/ui/card";
import { useFadeIn } from "@/hooks/useFadeIn";
import { motion } from "framer-motion";
import React, { useEffect } from "react";
import Image from "next/image";
import { AnimatedCard } from "@/hooks/useAnimatedCards";
import Link from "next/link";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function warning() {
    window.alert(
      "The extension is still being reviewed by the Chrome Web Store. It will be available for purchase soon!"
    );
  }

  const fadeInData = [
    useFadeIn(),
    useFadeIn(),
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
    className?: string
  ) => {
    return (
      <AnimatedCard
        key={n}
        refProp={fadeInData[n].ref}
        animationProps={fadeInData[n].animationProps}
        className="w-full"
      >
        <Card3D className={className}>{children}</Card3D>
      </AnimatedCard>
    );
  };

  return (
    <div className="w-full items-center justify-center flex flex-col pt-[35px] px-3 h-full">
      <Image
        src="/main-bg.png"
        alt="main background"
        priority
        className="object-cover object-center  blur-sm absolute top-10 left-0 right-0 -z-10"
        width={1920}
        height={1080}
      />
      <div className="max-w-[850px] w-full h-full flex-grow items-center flex flex-col gap-y-20">
        <section className="flex flex-col w-full h-full text-center items-center justify-center p-2">
          <div className="min-h-screen flex flex-col items-center justify-center gap-y-8 pb-10">
            <motion.h1
              ref={fadeInData[0].ref}
              {...fadeInData[0].animationProps}
              className="min-[749px]:text-[50px] min-[545px]:text-[45px] max-[545px]:text-[40px] text-transparent bg-clip-text bg-gradient-to-br from-white to-violet-900/50 font-semibold"
            >
              ReactTrace Extension <br /> for React Performance
            </motion.h1>
            <motion.p
              ref={fadeInData[0].ref}
              {...fadeInData[0].animationProps}
              className=" px-2 w-full"
            >
              Monitor, analyze, and optimize your React renders with real-time
              insights and detailed performance tracing.
            </motion.p>
            <motion.div
              ref={fadeInData[0].ref}
              {...fadeInData[0].animationProps}
              className="flex gap-x-4 mt-2"
            >
              <Link href={"/download"}>
                {" "}
                <Button intent={"secondary"}>Install the Extension</Button>
              </Link>

              <Button onClick={warning} intent={"primary"}>
                Chrome Web Store
              </Button>
            </motion.div>
          </div>
          <div className="max-w-[600px] w-full h-full">
            {animatedCards(
              1,
              <Image
                src="/componenttree.png"
                width={1200}
                height={1000}
                alt=""
                className="w-auto h-auto object-center object-cover "
              />,
              "p-0 min-h-fit"
            )}
          </div>

          <motion.p
            ref={fadeInData[2].ref}
            {...fadeInData[2].animationProps}
            className="mt-8"
          >
            Track component renders, find slow updates, and improve performance
            instantly.
          </motion.p>
        </section>

        <section className="flex flex-col w-full h-full text-center items-center justify-center max-w-[850px] px-2 pb-10 gap-y-10">
          <motion.h2
            ref={fadeInData[3].ref}
            {...fadeInData[3].animationProps}
            className="relative font-semibold text-[38px] text-center before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(circle,_rgba(187,155,255,0.1)_100%,_transparent_100%)] before:blur-2xl before:z-[-1] text-[#ECECEC]"
          >
            Features available <br /> in your Extension
          </motion.h2>

          <motion.p ref={fadeInData[3].ref} {...fadeInData[3].animationProps}>
            Real-time React render tracing to debug, analyze, and optimize your
            UI.
          </motion.p>

          <div className="max-[800px]:flex-wrap flex gap-10 w-full justify-center">
            {[4, 5].map((index) =>
              animatedCards(
                index,
                index === 4 ? (
                  <>
                    <Image
                      width={30}
                      height={30}
                      src="/status.png"
                      className="drop-shadow-[0_0_10px_#693efe] w-auto h-auto rounded-lg absolute top-0 left-0 m-5"
                      alt="Descriptive alt text"
                    />
                    <div className="w-full h-full px-2 py-4 mt-auto flex flex-col justify-center items-start text-start">
                      <h3 className="text-white text-[28px] font-semibold mb-4">
                        Status
                      </h3>
                      <p>
                        Get a quick overview of your app&apos;s rendering
                        behavior, including total render time, number of
                        renders, and the amount of detected issues. This gives
                        you a clear sense of performance health at a glance.
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <Image
                      width={30}
                      height={30}
                      src="/detection.png"
                      className="drop-shadow-[0_0_10px_#ad3dff] w-auto h-auto rounded-lg absolute top-0 left-0 m-5"
                      alt="Descriptive alt text"
                    />
                    <div className="w-full h-full px-2 py-4 mt-auto flex flex-col justify-center items-start text-start">
                      <h3 className="text-white text-[28px] font-semibold mb-4">
                        Analyze
                      </h3>
                      <p>
                        Your extension provides a detailed, interactive
                        visualization of the component tree attached to the
                        FiberRoot. Each node in the tree represents a React
                        component and displays essential information.
                      </p>
                    </div>
                  </>
                )
              )
            )}
          </div>
          {[6, 7].map((index) =>
            animatedCards(
              index,
              index === 6 ? (
                <div className="flex w-full h-full justify-center items-center">
                  <Image
                    width={30}
                    height={30}
                    src="/components.png"
                    className="drop-shadow-[0_0_10px_#ff3de7] rounded-lg absolute top-0 w-auto h-auto left-0 m-5"
                    alt="Descriptive alt text"
                  />

                  <div className="flex px-2 py-4 flex-col w-full h-full ">
                    <div className=" min-[751px]:max-w-[80%] items-start justify-center text-start flex flex-col">
                      <h3 className="text-white text-[28px] font-semibold mb-4">
                        Components
                      </h3>
                      <p>
                        This section surfaces components that are rendering too
                        often or taking too long. You&apos;ll see when a render
                        is likely unnecessary or when it exceeds performance
                        thresholds, making it easy to focus your optimization
                        efforts where they matter most.
                      </p>
                    </div>
                  </div>
                  <div className=" w-full h-full flex justify-center items-center min-[751px]:px-8 max-[750px]:hidden min-[751]:block">
                    <Card3D className="p-0 w-full h-full ">
                      <Image
                        src="/featurelist.png"
                        width={1400}
                        height={1400}
                        alt=""
                        className="w-auto h-auto object-cover flex-grow object-left"
                      />
                    </Card3D>
                  </div>
                </div>
              ) : (
                <>
                  <h3 className="text-[28px] font-semibold text-white">
                    Your powerful extension provides invaluable tools
                  </h3>
                  <p>
                    Track, visualize, and diagnose React rendering with
                    precision. Explore the full component tree, spot costly
                    renders instantly, and understand the &quot;why&quot; behind
                    every update. With real-time insights, performance
                    summaries, and smart issue detection, your extension helps
                    developers optimize with confidence.
                  </p>
                  <Link href={"/download"}>
                    <Button intent={"primary"}>Install the Extension</Button>
                  </Link>
                </>
              )
            )
          )}
        </section>
      </div>
    </div>
  );
};

export default Home;
