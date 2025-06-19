"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Links = [
    { name: "Home", path: "/home" },
    { name: "Destination", path: "/destination" },
    { name: "Cities", path: "/cities" },
    { name: "Inspiration", path: "/inspiration" },

];

const Nav = () => {
    const pathname = usePathname();

    return (
        <div className="w-full flex items-center justify-between px-4 py-2">
            {/* Left spacer to assist centering */}
            <div className="w-1/3" />

            {/* Centered navigation menu */}
            <nav className="w-1/3 flex justify-center gap-6 font-medium text-gray-600">
                {Links.map((link, index) => (
                    <Link
                        href={link.path}
                        key={index}
                        className={`${
                            link.path === pathname
                                ? "text-blue-800 border-b-2 border-blue-800"
                                : "hover:text-blue-800"
                        } capitalize font-medium transition-all`}
                    >
                        {link.name}
                    </Link>
                ))}
            </nav>

            {/* Right-aligned search input */}
            <div className="w-1/3 flex justify-end">
                <div className="flex items-center border border-gray-300 rounded-full px-4 py-1">
                    <input
                        type="text"
                        name="search"
                        placeholder="Search"
                        className="outline-none px-2 py-1 text-sm w-40 bg-transparent placeholder-gray-500"
                    />
                    <svg
                        className="w-4 h-4 text-gray-500 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 103.5 10.5a7.5 7.5 0 0013.15 6.15z"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default Nav;
