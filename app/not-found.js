import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-gray-400 mb-6">
        Sorry, the page you are looking for does not exist.
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
