"use client";
import Link from "next/link";
import Button from "../tools/signIn&UpButton";
import { useSession } from "next-auth/react";
import Loading from "../tools/loading";
import Image from "next/image";

export default function LandingPage() {
  const { data: session, status } = useSession();
  if (status === "loading") {
    return <Loading />;
  }

  return (
    <div className="relative flex items-center justify-center h-screen bg-cover bg-center bg-primary">
      {/* Overlay for better text visibility */}
      <div className="absolute "></div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-6">
        <Image
         
            src="/img/logo.png"
            alt="logo"
            width={150}
            height={150}
            className="mb-6"
          />
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4">
          Welcome to WowSoon
        </h1>


        <Link href="/register">
          <Button
            className="
              bg-white text-primary 
              hover:bg-gray-200 hover:text-primary 
              px-8 py-3 rounded-full 
              text-lg sm:text-xl 
              shadow-lg  duration-300 ease-in-out
              sm:w-auto
            "
            type="submit"
            text="Let's get started!"
          />
        </Link>
      </div>
    </div>
  );
}
