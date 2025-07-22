"use client";
import { AnimatedCard } from "@/hooks/useAnimatedCards";
import { useFadeIn } from "@/hooks/useFadeIn";
import { Button } from "@/ui/button";
import { Card3D } from "@/ui/card";
import { Check } from "@/ui/checks";
import { FaRegStar, FaStar } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Payment from "@/components/EmailConfirmation";
import { useUserCurrency } from "@/hooks/useUserCurrency";

const Download = () => {
  const startCheckout = () => {
    window.alert("Due to no sales, I deactivated this project.");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const { currency } = useUserCurrency();
  const fadeInData = [useFadeIn(), useFadeIn(), useFadeIn()];

  const checks = (type: "check" | "noCheck", children: string) => {
    return (
      <Check textIntent={type} intent={type}>
        {children}
      </Check>
    );
  };

  const price = (
    <>
      {currency === "brl" ? "R$ 11,99" : currency === "eur" ? "€ 1,99" : "$2"}
    </>
  );

  const animatedCards = (n: number, children: React.ReactNode) => {
    return (
      <AnimatedCard
        refProp={fadeInData[n].ref}
        animationProps={fadeInData[n].animationProps}
        className="w-full max-[600px]:min-h-[65vh]"
      >
        <Card3D className="relative pb-4 flex min-h-[350px] justify-between w-full flex-col pt-20 px-2">
          {children}
        </Card3D>
      </AnimatedCard>
    );
  };

  return (
    <>
      <Payment isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="flex flex-col justify-center items-center w-full h-full min-h-screen text-white pt-[60px]">
        <section className="w-full max-w-[600px] max-[600px]:max-w-[300px] flex justify-center items-center flex-col text-center">
          <motion.h2
            ref={fadeInData[0].ref}
            {...fadeInData[0].animationProps}
            className="text-[30px] text-transparent bg-clip-text bg-gradient-to-tr from-white font-semibold to-violet-500/25"
          >
            Choose your plan
          </motion.h2>

          <div className="flex min-[600px]:gap-10 my-10 justify-center items-center w-full max-[600px]:flex-col ">
            {animatedCards(
              1,
              <>
                <div className="absolute right-0 top-0 m-5 text-gray-300/90 text-[25px] font-semibold">
                  Free
                </div>
                <div className="flex items-center justify-center gap-x-4 absolute left-0 top-0 m-5">
                  <h3 className="text-[25px] font-semibold text-gray-300/90">
                    Demo
                  </h3>
                  <FaRegStar className="text-gray-400 w-[25px] h-auto" />
                </div>

                <div className="flex flex-col gap-y-6">
                  {checks("noCheck", "Real data")}
                  {checks("noCheck", "Production use")}
                  {checks("noCheck", "Supports React")}
                  {checks("check", "All features")}
                </div>

                <Button intent={"primary"} onClick={startCheckout}>
                  Free to install
                </Button>
              </>
            )}

            {animatedCards(
              2,
              <>
                <div className="absolute right-0 top-0 m-5 text-amber-400 text-[25px] font-semibold">
                  {price}
                </div>
                <div className="flex items-center justify-center gap-x-4 absolute left-0 top-0 m-5">
                  <h3 className="text-[25px] font-semibold text-amber-300">
                    PRO
                  </h3>
                  <FaStar className="text-amber-300 w-[25px] h-auto" />
                </div>

                <div className="flex flex-col gap-y-6">
                  {checks("check", "Real data")}
                  {checks("check", "Production use")}
                  {checks("check", "Supports React")}
                  {checks("check", "All features")}
                </div>
                <Button onClick={() => setIsOpen(true)} intent={"third"}>
                  Get it for <span className="text-green-400">{price}</span>
                </Button>
              </>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default Download;
