"use client";

import React from "react";
import Image from "next/image";
import { HiOutlineSparkles } from "react-icons/hi";
import main from "@/images/main-modified.png";
import { useRouter } from "next/navigation";
import { signIn, signOut, useSession } from "next-auth/react";
const Appbar = () => {
  const router = useRouter();
  const session = useSession();
  return (
    <div>
      <div
        className="flex justify-between m-4"
        style={{ backgroundColor: "#050718" }}
      >
        <a className="flex">
          <Image src={main} height={30} width={30} alt="main" />
          <h1 className="text-xl font-bold px-2 text-white">100xdevs</h1>
        </a>

        <div className="flex items-center space-x-2">
          <button
            className="px-2 text-white border-slate-700 border-[1px] rounded"
            onClick={() => {
              signIn();
            }}
          >
            Login
          </button>
          <button
            className="flex py-1 pl-2 items-center rounded text-white text-sm"
            onClick={() => {
              router.push("https://harkirat.classx.co.in/");
            }}
            style={{ backgroundColor: "#6235fd" }}
          >
            Join now
            <HiOutlineSparkles className="w-8" />
          </button>
          <button
            style={{ color: "white" }}
            className=" mt-0 border-slate-700 border-[1px] rounded p-1"
          >
            <svg
              style={{ position: "static" }}
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-sun-moon absolute h-[1rem] w-[1rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
            >
              <path d="M12 8a2.83 2.83 0 0 0 4 4 4 4 0 1 1-4-4"></path>
              <path d="M12 2v2"></path>
              <path d="M12 20v2"></path>
              <path d="m4.9 4.9 1.4 1.4"></path>
              <path d="m17.7 17.7 1.4 1.4"></path>
              <path d="M2 12h2"></path>
              <path d="M20 12h2"></path>
              <path d="m6.3 17.7-1.4 1.4"></path>
              <path d="m19.1 4.9-1.4 1.4"></path>
            </svg>
          </button>
        </div>
      </div>
      <div style={{ borderTop: "1px solid rgb(51 65 85)" }}></div>
    </div>
  );
};

export default Appbar;
