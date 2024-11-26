"use client";
import { SearchBar } from "../searchBar";
import { Notification } from "../notificaction";
import CustomDropdown from "../CustomDropDown.js";
import Card from "../layout/card";

import Container from "../layout/container";
import NavigationBar from "../layout/navbar";

export default function HomePage() {
  return (
    <div className="relative p-8 flex flex-col space-y-4 items-center  min-h-screen bg-white">
      <div className="flex items-center justify-between p-4 rounded-[16px] bg-gray-100 w-[90%] sm:w-[300px] lg:w-[400px] ">
        <SearchBar />
        <CustomDropdown />
        <Notification />
      </div>
      <Card />
      <Container />
      <NavigationBar />
    </div>
  );
}
