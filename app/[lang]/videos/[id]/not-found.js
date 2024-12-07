"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function VideoNotFound() {
  const pathname = usePathname();
  const id = pathname.split("/")[2];

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">Video Not Found</h1>
      <p className="text-gray-400 mb-6">
        This video with {id} id was not found!
      </p>
      <Link
        href="/"
        className="bg-color-purple hover:bg-opacity-80 text-white px-6 py-2 rounded-full"
      >
        Go Back Home
      </Link>
    </div>
  );
}
