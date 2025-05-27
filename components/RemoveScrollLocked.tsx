"use client";

import { useEffect } from "react";

export const RemoveScrollLocked = () => {
  useEffect(() => {
    const body = document.body;

    const observer = new MutationObserver(() => {
      if (body.hasAttribute("data-scroll-locked")) {
        body.removeAttribute("data-scroll-locked");
      }
    });

    observer.observe(body, {
      attributes: true,
      attributeFilter: ["data-scroll-locked"],
    });

    if (body.hasAttribute("data-scroll-locked")) {
      body.removeAttribute("data-scroll-locked");
    }

    return () => observer.disconnect();
  }, []);

  return null;
};
