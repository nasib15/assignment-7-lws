"use client";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useRef } from "react";

export default function Modal({ children }) {
  const overlay = useRef(null);
  const wrapper = useRef(null);
  const router = useRouter();

  const onDismiss = useCallback(() => {
    if (router && router.back) {
      router.back();
    }
  }, [router]);

  const onClick = useCallback(
    (e) => {
      if (!overlay.current || !wrapper.current) return;

      if (e.target === overlay.current || e.target === wrapper.current) {
        if (onDismiss) onDismiss();
      }
    },
    [onDismiss, overlay, wrapper]
  );

  const onKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape" && onDismiss) {
        onDismiss();
      }
    },
    [onDismiss]
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.addEventListener("keydown", onKeyDown);
      return () => document.removeEventListener("keydown", onKeyDown);
    }
  }, [onKeyDown]);

  return (
    <div
      ref={overlay}
      className="fixed z-10 left-0 right-0 top-0 bottom-0 mx-auto bg-black/40 lg:p-10 backdrop-blur-sm"
      onClick={onClick}
    >
      <div
        ref={wrapper}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10/12 md:w-9/12 lg:w-11/12 p-6"
      >
        {children}
      </div>
    </div>
  );
}
