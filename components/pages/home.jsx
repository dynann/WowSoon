"use client";
import { SearchBar } from "../tools/searchBar";
import { Notification } from "../tools/notificaction";
import CustomDropdown from "../tools/CustomDropDown.js";
import Card from "../layout/card";


import Container from "../layout/container";
import NavigationBar from "../layout/navbar";
import { useSession } from "next-auth/react";
import Loading from "../tools/loading";

export default function HomePage() {
  const {data: session, status} = useSession()
  if(status === 'loading'){
    return <Loading/>
  }
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
