"use client";
import Card from "../../tools/card";
import Container from "../../tools/container";
import { useSession } from "next-auth/react";
import Loading from "../../tools/loading";
import Button from "../../tools/signIn&UpButton";
import dotenv from "dotenv";
import HeaderLayout from "@/components/layout/headerlayout";
import { redirect } from "next/navigation";
dotenv.config();
export default function HomePage({ foods }) {
  console.log(foods);
  const { data: session, status } = useSession();
  if (status === "loading") {
    return <Loading />;
  }
  return (
    <div className="min-h-screen  bg-white flex flex-col ">
      {session ? (
        <div className="relative md:pt-6 pt-4 px-4 sm:px-6 lg:px-12 flex flex-col space-y-4 items-center justify-center bg-white">
          <HeaderLayout/>

          {/* Horizontally Scrollable Cards */}
          <div className="w-full">
            <div className="overflow-x-auto flex space-x-2">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>

          {/* Grid for Containers */}
          <h1 className="text-black font-bold sm:self-start">
            Recommend For You
          </h1>
          <div className="grid grid-cols-2 gap-4 md:gap-6 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
            {foods.map((food, index) => (
              <Container food={food} key={index} />
            ))}
          </div>

        </div>
      ) : (() => {
        redirect('/login')
      }) }
    </div>
  );
}
