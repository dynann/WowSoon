"use client";
import { SearchBar } from "../tools/searchBar";
import { Notification } from "../tools/notificaction";
import CustomDropdown from "../tools/CustomDropDown.js";
import Card from "../tools/card";
import Container from "../tools/container";
import NavigationBar from "../layout/navbar";
import { useSession } from "next-auth/react";
import Loading from "../tools/loading";
import Button from "../tools/signIn&UpButton";
import dotenv from "dotenv";
dotenv.config();
export default function HomePage({ food }) {
  console.log(food);
  const { data: session, status } = useSession();
  if (status === "loading") {
    return <Loading />;
  }
  return (
    <div>
      {session ? (
        <div className="relative md:pt-6 pt-4 px-4 sm:px-6 lg:px-12 flex flex-col space-y-4 items-center justify-center min-h-screen bg-white">
          <div className="flex items-center justify-between sm:justify-evenly p-4 rounded-[16px] bg-gray-100 w-full max-w-md lg:max-w-lg">
            <SearchBar />
            <CustomDropdown />
            <Notification />
          </div>

          {/* Horizontally Scrollable Cards */}
          <div className="w-full px-4 py-4">
            <div className="overflow-x-auto flex space-x-2">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>

          {/* Grid for Containers */}
          <div className="grid grid-cols-2 gap-4 md:gap-6 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
            {Array.from({ length: 24 }).map((_, index) => (
              <Container food={food} key={index} />
            ))}
          </div>

          <NavigationBar />
        </div>
      ) : (
        <div className="w-screen h-screen bg-white flex flex-col justify-center items-center text-secondary">
          You are not signed in. Go to the sign-in page
          <div
            onClick={() => {
              router.push("/login");
            }}
            className="mt-3"
          >
            <Button
              text="Sign in"
              className="bg-primary font-bold hover:bg-green-600 hover:text-white"
            />
          </div>
        </div>
      )}
    </div>
  );
}
