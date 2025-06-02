"use client";
import { api } from "@/services/api/apiClient";
import { useState, useEffect } from "react";

export function useUserCurrency() {
  const [currency, setCurrency] = useState<"brl" | "usd" | "eur">("usd");
  const [ip, setIp] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await api.get("/api/v1/user-currency");
        const data = res.data;

        setIp(data.ip);
        setCurrency(data.currency);
      } catch (err) {
        console.error("Erro ao detectar moeda");
      }
    })();
  }, []);

  return { ip, currency, setCurrency };
}
