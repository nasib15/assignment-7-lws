import avatar from "@/public/assets/avatar.png";
import logo from "@/public/assets/logo.svg";
import { SearchIcon } from "@/svg/Icon";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="flex justify-between items-center mb-8">
      <div className="flex items-center space-x-8">
        <Image src={logo} alt="LWS Xstream Logo" className="h-6" />
        <nav className="hidden md:flex space-x-6">
          <Link href="#" className="text-color-purple font-semibold">
            TOP STREAMING
          </Link>
          <Link href="#" className="text-gray-400 hover:text-white">
            GAMES
          </Link>
          <Link href="#" className="text-gray-400 hover:text-white">
            TEAMS
          </Link>
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="bg-color-gray rounded-full py-2 px-4 w-64 focus:outline-none focus:ring-2 focus:ring-color-purple"
          />
          <SearchIcon />
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
