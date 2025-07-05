import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-12 pb-4 mt-12">
      <div className="container mx-auto px-4 justify-center">
        <ul className=" text-base flex justify-center items-center gap-6">
          <li>
            <Link href="/" className="hover:text-amber-300 transition">
              Home
            </Link>
          </li>
          <li>
            <Link href="/my-projects" className="hover:text-amber-300 transition">
              My Projects
            </Link>
          </li>
          <li>
            <Link href="/create-new-website" className="hover:text-amber-300 transition">
              Studio
            </Link>
          </li>
        </ul>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-6 mb-2">
          <a href="#" aria-label="Facebook" className="hover:text-amber-300 transition"><Facebook size={28} /></a>
          <a href="#" aria-label="Twitter" className="hover:text-amber-300 transition"><Twitter size={28} /></a>
          <a href="#" aria-label="Instagram" className="hover:text-amber-300 transition"><Instagram size={28} /></a>
          <a href="#" aria-label="LinkedIn" className="hover:text-amber-300 transition"><Linkedin size={28} /></a>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom Section */}
        <div className="text-center text-sm justify-center flex text-gray-400 md:text-left ">
          Copyright © 2025 Rekaz
        </div>
      </div>
    </footer>
  );
}
