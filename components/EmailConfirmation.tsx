"use client";

import { Card3D } from "@/ui/card";
import React, { useState } from "react";
import { LabeledInput } from "./LabeledInput";
import { LabeledSelect, Option } from "./LabeledSelect";
import { useUserCurrency } from "@/hooks/useUserCurrency";
import { Button } from "@/ui/button";
import Link from "next/link";

type SignUpProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const currencyOptions: Option[] = [
  { value: "brl", label: "BRL - Brazilian Real" },
  { value: "usd", label: "USD - US Dollar" },
  { value: "eur", label: "EUR - Euro" },
];

const Payment: React.FC<SignUpProps> = ({ isOpen, setIsOpen }) => {
  const { currency, setCurrency } = useUserCurrency();

  const [error, setError] = useState("");
  const [checkoutUrl, setCheckoutUrl] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  // async function startCheckout() {
  //   setError("");
  //   setIsProcessing(true);

  //   try {
  //     const res = await api.post("api/v1/checkout", {
  //       currency,
  //       email,
  //     });

  //     if (res.data?.url) {
  //       setCheckoutUrl(res.data.url);
  //       window.location.href = res.data.url;
  //     } else {
  //       throw new Error("Checkout URL not found");
  //     }
  //   } catch (err) {
  //     const error = err as AxiosError<{ error: string }>;
  //     setError(error.response?.data?.error || error.message);
  //   } finally {
  //     setIsProcessing(false);
  //   }
  // }

  const startCheckout = () => {
    window.alert(
      "Due to no sales, I deactivated this project. If you're still interested, you can contact me."
    );
  };

  return (
    <>
      <div
        className={`fixed w-full h-full z-40 bg-black/75 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } transition-opacity duration-150 ease-in-out`}
      ></div>
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 w-full h-full flex justify-center items-center flex-col text-white z-50 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } transition-opacity duration-150 ease-in-out`}
      >
        <Card3D
          onClick={(e) => e.stopPropagation()}
          className="relative w-[350px] h-[300px] rounded-lg overflow-hidden"
        >
          <div className="absolute inset-0 backdrop-blur-md bg-[#0b0121]/70 z-0 " />

          <div className="relative gap-4 z-10 w-full h-full flex flex-col justify-center items-center text-white text-sm font-semibold">
            {!checkoutUrl && (
              <>
                <LabeledSelect
                  id="currency"
                  label="Choose a currency:"
                  value={currency}
                  onChange={(val) => setCurrency(val as "brl" | "usd" | "eur")}
                  options={currencyOptions}
                />

                <LabeledInput
                  id="email"
                  label="Enter your email:"
                  value={email}
                  onChange={setEmail}
                  placeholder="email@example.com"
                />

                <Button
                  intent={"pay"}
                  onClick={startCheckout}
                  disabled={isProcessing}
                >
                  {" "}
                  {isProcessing ? "Processing..." : "Pay"}
                </Button>

                <span>
                  Already paid?{" "}
                  <Link
                    className="text-amber-400 hover:brightness-125 underline"
                    href={
                      "https://chromewebstore.google.com/detail/reacttrace/inknnbamfelahmngdlnbabjbhcejagmi?authuser=2"
                    }
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Click here to install
                  </Link>
                </span>
              </>
            )}{" "}
            {!isProcessing && checkoutUrl && (
              <p className="text-amber-300! text-lg">
                Redirecting to payment...
              </p>
            )}
          </div>
          {error && (
            <p className="text-red-500! text-sm absolute bottom-0 mb-3">
              {error}
            </p>
          )}
        </Card3D>
      </div>
    </>
  );
};

export default Payment;
