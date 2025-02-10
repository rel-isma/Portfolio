"use client";

import {
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";
import { MdOutlineDownload } from "react-icons/md";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-200 to-white p-4">
      <div className="max-w-6xl w-full flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <aside className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center w-full md:w-1/4">
          <div className="w-24 h-24 bg-blue-500 rounded-lg mb-4" />
          <h2 className="text-lg font-semibold">Rachid El-Ismaiyly</h2>
          <p className="text-gray-600 text-sm text-center">
            <strong>Full-stack developer</strong> <br /> And Software developer
          </p>
          <p className="text-gray-600 text-sm mt-2">
            Based in: Taounate, Morocco
          </p>
          <div className="flex gap-3 mt-4 text-xl">
            <Link href="#">
              <FaLinkedin className="hover:text-blue-500" />
            </Link>
            <Link href="#">
              <FaGithub className="hover:text-gray-700" />
            </Link>
            <Link href="#">
              <FaWhatsapp className="hover:text-green-500" />
            </Link>
            <Link href="#">
              <FaInstagram className="hover:text-pink-500" />
            </Link>
            <Link href="#">
              <FaFacebook className="hover:text-blue-700" />
            </Link>
          </div>
          <div className="mt-6 w-full flex flex-col gap-2">
            <button className="bg-blue-600 text-white py-2 rounded-lg w-full hover:bg-blue-700">
              Let's work together
            </button>
            <button className="border border-gray-400 py-2 rounded-lg w-full flex items-center justify-center gap-2">
              Resume <MdOutlineDownload />
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <h1 className="text-5xl font-bold leading-tight">
            Hi! I'm <br />
            <span className="text-blue-600">Rachid</span> El-Ismaiyly
          </h1>
          <h2 className="text-2xl font-bold text-blue-600 mt-2">
            Full-Stack Web Developer
          </h2>
          <p className="mt-4 text-gray-700 max-w-xl">
            I build all kinds of{" "}
            <span className="text-blue-600 font-semibold">Websites</span> and
            <span className="text-blue-600 font-semibold">
              {" "}
              Web Applications
            </span>{" "}
            that help businesses grow and meet their needs. From interactive
            user interfaces to powerful backend systems, I focus on delivering
            <span className="text-blue-600 font-semibold"> High-Quality</span>,
            scalable, and
            <span className="text-blue-600 font-semibold">
              {" "}
              User-Friendly
            </span>{" "}
            solutions.
          </p>
          <div className="mt-6 flex gap-4">
            <button className="border border-gray-400 py-2 px-6 rounded-lg flex items-center">
              My works
            </button>
            <button className="border border-gray-400 py-2 px-6 rounded-lg flex items-center gap-2">
              Download CV <MdOutlineDownload />
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default HeroSection;
