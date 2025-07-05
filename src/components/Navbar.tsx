"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { ArrowRight, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

export default function Navbar() {
    return (
        <header className="border-b bg-white">
          <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between text-base font-medium">
        <Link href="/" className="text-xl font-bold text-gray-900">
          <Image src="https://rekaz.io/home/wp-content/uploads/2023/11/Rekaz-logo-arabic.svg" alt="Rekaz Website Builder" width={100} height={100}  priority/>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden items-center gap-10 lg:flex">
          <Link href="/">
            Home
          </Link>
          <Link href="/create-new-website">
           Studio
          </Link>
          <Link href="/my-projects">
            My Projects
          </Link>
        </div>

        {/* Desktop Create Website Button */}
        <div className="hidden lg:block">
          <Button variant="ghost" className="flex items-center gap-3 bg-black text-white rounded-full text-sm lg:text-lg py-6 font-semibold hover:bg-gradient-to-br from-amber-200 to-red-400 hover:text-black">
            Create Website 
            <span className="bg-gradient-to-br from-amber-200 to-red-400 text-black rounded-full p-3">
              <ArrowRight className="h-16 w-16"/>
            </span>
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-10 w-10">
                <Menu className="h-10 w-10" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle className="text-left">Menu</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-4 mt-6">
                <Link href="/" className="text-lg font-medium hover:text-gray-600 transition-colors">
                  Home
                </Link>
                <Link href="/create-new-website" className="text-lg font-medium hover:text-gray-600 transition-colors">
                  Studio
                </Link>
                <Link href="/my-projects" className="text-lg font-medium hover:text-gray-600 transition-colors">
                  My Projects
                </Link>
                <div className="pt-4">
                  <Link href="/create-new-website"  className="flex items-center gap-3 bg-black text-white rounded-full text-lg py-2 justify-center font-semibold hover:bg-gradient-to-br from-amber-200 to-red-400 hover:text-black w-full">
                    Create Website 
                    <span className="bg-gradient-to-br from-amber-200 to-red-400 text-black rounded-full p-3">
                      <ArrowRight className="h-6 w-6"/>
                    </span>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
      </div>
      </header>
    )
}