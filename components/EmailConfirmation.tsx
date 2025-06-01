"use client";

import { api } from "@/app/services/api/apiClient";
import { Card3D } from "@/ui/card";
import React, { useState, useEffect, useRef } from "react";
import { LabeledInput } from "./LabeledInput";
import { LabeledSelect, Option } from "./LabeledSelect";
import { useUserCurrency } from "@/hooks/useUserCurrency";
import { Button } from "@/ui/button";
import { AxiosError } from "axios";

type SignUpProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const currencyOptions: Option[] = [
  { value: "brl", label: "BRL - Brazilian Real" },
  { value: "usd", label: "USD - US Dollar" },
  { value: "eur", label: "EUR - Euro" },
];

const paymentMethodOptionsBRL: Option[] = [
  { value: "card", label: "Credit Card" },
  { value: "boleto", label: "Boleto" },
];

const paymentMethodOptionsOther: Option[] = [
  { value: "card", label: "Credit Card" },
];

type PaymentMethod = "card" | "boleto";

const Payment: React.FC<SignUpProps> = ({ isOpen, setIsOpen }) => {
  const { currency, setCurrency } = useUserCurrency();

  const [error, setError] = useState("");
  const [checkoutUrl, setCheckoutUrl] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("card");
  const [isProcessing, setIsProcessing] = useState(false);
  const prevCurrency = useRef(currency);

  useEffect(() => {
    if (prevCurrency.current !== currency) {
      const options =
        currency === "brl"
          ? paymentMethodOptionsBRL
          : paymentMethodOptionsOther;

      setPaymentMethod(options[0].value as PaymentMethod);
    }
    prevCurrency.current = currency;
  }, [currency]);

  function warning() {
    window.alert(
      "The extension is still being reviewed by the Chrome Web Store. It will be available for purchase soon!"
    );
  }

  async function startCheckout() {
    setError("");
    setIsProcessing(true);

    try {
      const res = await api.post("api/v1/checkout", {
        currency,
        paymentMethod,
        email,
      });

      if (res.data?.url) {
        setCheckoutUrl(res.data.url);
        window.location.href = res.data.url;
      } else {
        throw new Error("Checkout URL not found");
      }
    } catch (err) {
      const error = err as AxiosError<{ error: string }>;
      setError(error.response?.data?.error || error.message);
    } finally {
      setIsProcessing(false);
    }
  }

  void startCheckout;

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
          className="relative w-[350px] h-[350px] rounded-lg overflow-hidden"
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

                <LabeledSelect
                  id="paymentMethod"
                  label="Choose a payment method:"
                  value={paymentMethod}
                  onChange={(val) => setPaymentMethod(val as PaymentMethod)}
                  options={
                    currency === "brl"
                      ? paymentMethodOptionsBRL
                      : paymentMethodOptionsOther
                  }
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
                  onClick={warning}
                  disabled={isProcessing}
                >
                  {" "}
                  {isProcessing ? "Processing..." : "Pay"}
                </Button>
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
