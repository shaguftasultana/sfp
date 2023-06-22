import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-white w-full py-4 fixed top-0 z-20">
      <div className="mx-auto flex items-center justify-center">
        <Image
          src="./Images/Logo/SFP.svg"
          alt="Logo"
          width="60"
          height="60"
          className="mx-20"
        />
        <div className="flex items-center justify-center space-x-4 text-[18] font-medium cursor-pointer mx-auto">
          <Link
            href="/landing"
            className="text-black hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium"
          >
            About us
          </Link>
          <Link
            href="/product"
            className="text-black hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium"
          >
            Product
          </Link>
          <Link
            href="/pricing"
            className="text-black hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium"
          >
            Pricing
          </Link>
          <Link
            href="/contact"
            className="text-black hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium"
          >
            Contact
          </Link>
          <Link
            href="/download"
            className="text-black hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium"
          >
            Download
          </Link>
        </div>

        <div className="flex items-center justify-center mr-20 gap-10">
          <Link
            href="/login"
            className="text-black hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="text-black font-semibold hover:text-gray-500 px-5 py-2 rounded-md text-md font-medium border border-gray-500"
          >
            Try for Free
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
