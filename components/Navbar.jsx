import avatar from "@/public/assets/avatar.png";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="flex justify-between items-center mb-8">
      <div className="flex items-center space-x-8">
        <Link href={"/"}>
          <Image
            src="/assets/logo.svg"
            width={224}
            height={24}
            alt="LWS Xstream Logo"
            className="h-6"
          />
        </Link>
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="text-color-purple font-semibold">
            TOP STREAMING
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            GAMES
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            TEAMS
          </a>
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="bg-color-gray rounded-full py-2 px-4 w-64 focus:outline-none focus:ring-2 focus:ring-color-purple"
          />
          <svg
            className="w-5 h-5 text-gray-400 absolute right-3 top-2.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>

        <Image
          src={avatar}
          alt="User Avatar"
          className="w-8 h-8 rounded-full"
        />
      </div>
    </header>
  );
};
export default Navbar;
