import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface NavbarProps {
  logo?: string;
  links?: Array<{
    label: string;
    href: string;
    dropdown?: Array<{
      label: string;
      href: string;
    }>;
  }>;
}

const Navbar = ({
  logo = "RecruitPro",
  links = [
    { label: "Home", href: "/" },
    { label: "Recruitment", href: "/recruitment" },
    { label: "Login", href: "/login" },
    { label: "Register", href: "/register" },
    { label: "Contact", href: "/contact" },
  ],
}: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full h-20 bg-white border-b border-gray-200 shadow-sm fixed top-0 left-0 z-50">
      <div className="container mx-auto h-full flex items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-blue-600">{logo}</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {links.map((link, index) => (
            <React.Fragment key={index}>
              {link.dropdown ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="flex items-center gap-1">
                      {link.label}
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {link.dropdown.map((item, idx) => (
                      <DropdownMenuItem key={idx} asChild>
                        <Link to={item.href}>{item.label}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  to={link.href}
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                >
                  {link.label}
                </Link>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Mobile Navigation Trigger */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-10 w-10">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[350px]">
              <nav className="flex flex-col gap-4 mt-8">
                {links.map((link, index) => (
                  <div key={index}>
                    {link.dropdown ? (
                      <div className="flex flex-col gap-2">
                        <div className="font-medium text-lg">{link.label}</div>
                        <div className="pl-4 flex flex-col gap-2">
                          {link.dropdown.map((item, idx) => (
                            <Link
                              key={idx}
                              to={item.href}
                              className="text-gray-700 hover:text-blue-600 transition-colors"
                              onClick={() => setIsOpen(false)}
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        to={link.href}
                        className="text-gray-700 hover:text-blue-600 font-medium text-lg transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.label}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
