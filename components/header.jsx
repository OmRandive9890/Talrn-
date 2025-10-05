"use client";
import { useState, useEffect } from "react";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Header() {
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const [isWhyOpen, setIsWhyOpen] = useState(false);
  const [animate, setAnimate] = useState(false);

  // Trigger animation once when component mounts
  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full bg-[#f0f8ff] border-b border-gray-200 z-50 shadow-md transition-all duration-700 ease-out ${
        animate ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"
      }`}
    >
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/logo.png"
              alt="Talm Logo"
              className="h-14 w-auto mr-2"
            />
          </div>

          {/* Navigation + Join button together */}
          <div className="flex items-center space-x-6">
            <nav className="hidden md:flex items-center space-x-6">
              {/* Why Dropdown */}
              <DropdownMenu open={isWhyOpen} onOpenChange={setIsWhyOpen}>
                <DropdownMenuTrigger className="flex items-center text-black text-md font-semibold hover:text-blue-600 transition-colors focus:outline-none">
                  Why <ChevronDownIcon className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-48">
                  <DropdownMenuItem>About Us</DropdownMenuItem>
                  <DropdownMenuItem>Our Process</DropdownMenuItem>
                  <DropdownMenuItem>Success Stories</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Industries Dropdown */}
              <DropdownMenu
                open={isIndustriesOpen}
                onOpenChange={setIsIndustriesOpen}
              >
                <DropdownMenuTrigger className="flex items-center text-md text-black font-semibold hover:text-blue-600 transition-colors focus:outline-none">
                  Industries <ChevronDownIcon className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-48">
                  <DropdownMenuItem>Travel</DropdownMenuItem>
                  <DropdownMenuItem>Automotive</DropdownMenuItem>
                  <DropdownMenuItem>Banking</DropdownMenuItem>
                  <DropdownMenuItem>Capital Markets</DropdownMenuItem>
                  <DropdownMenuItem>Healthcare</DropdownMenuItem>
                  <DropdownMenuItem>Digital Commerce</DropdownMenuItem>
                  <DropdownMenuItem>View all</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Links */}
              <a
                href="#"
                className="text-black text-md font-semibold hover:text-blue-600 transition-colors"
              >
                Find iOS Dev
              </a>
              <a
                href="#"
                className="text-black text-md font-semibold hover:text-blue-600 transition-colors"
              >
                Apply as Vendor
              </a>
              <a
                href="#"
                className="bg-blue-500 text-md hover:bg-blue-800 text-white font-semibold px-5 py-2 rounded-full transition-colors duration-200"
              >
                Hire iOS Dev
              </a>
              <a
                href="/join"
                className="text-black text-xl font-semibold hover:text-blue-600 transition-colors"
              >
                Join
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
