"use client";

import { useClientDictionary } from "@/hooks/useClientDictionary";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NotFound() {
  const dict = useClientDictionary();
  const pathname = usePathname();
  const lang = pathname.split("/")[1] || "en";

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">{dict.errors.notFound.title}</h1>
      <p className="text-gray-400 mb-6">{dict.errors.notFound.message}</p>
      <Link
        href={`/${lang}`}
        className="bg-color-purple hover:bg-opacity-80 text-white px-6 py-2 rounded-full"
      >
        {dict.errors.notFound.goBack}
      </Link>
    </div>
  );
}
