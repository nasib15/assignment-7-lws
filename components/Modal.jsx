"use client";
import { usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect, useRef } from "react";

export default function Modal({ children }) {
  const overlay = useRef(null);
  const wrapper = useRef(null);
  const router = useRouter();
  const pathname = usePathname();

  const onDismiss = useCallback(() => {
    // Get the current language and base path
    const pathParts = pathname.split("/");
    const lang = pathParts[1];
    const basePath = `/${lang}`;

    // Navigate to the base path directly
    router.push(basePath);
  }, [router, pathname]);

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
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.addEventListener("keydown", onKeyDown);
      return () => document.removeEventListener("keydown", onKeyDown);
    }
  }, [onKeyDown]);

  // Check if pathname matches /[lang]/videos/[id] pattern
  const isVideoPath = /^\/[a-z]{2}\/videos\/[a-zA-Z0-9_-]+$/.test(pathname);

  // Return null if not a video path
  if (!isVideoPath) {
    return null;
  }

  return (
    <div
      ref={overlay}
      className="fixed z-10 left-0 right-0 top-0 bottom-0 mx-auto bg-black/40 backdrop-blur-sm overflow-y-auto"
      onClick={onClick}
    >
      <div
        ref={wrapper}
        className="absolute top-0 left-0 right-0 min-h-full w-full p-6 lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:min-h-0 lg:w-11/12"
      >
        {children}
      </div>
    </div>
  );
}
