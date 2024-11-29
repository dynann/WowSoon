"use client";
import { SearchBar } from "../tools/searchBar";
import { Notification } from "../tools/notificaction";
import CustomDropdown from "../tools/CustomDropDown.js";
import Card from "../layout/card";
import Container from "../layout/container";
import NavigationBar from "../layout/navbar";
import { useSession } from "next-auth/react";
import Loading from "../tools/loading";
import Button from "../tools/signIn&UpButton";
import dotenv from 'dotenv'
dotenv.config()
export default  function HomePage( {food} ) {
  console.log(food)
  const {data: session, status} = useSession()
  if (status === "loading") {
    return <Loading/>
  }
  return (
   <div>
    {session ? (
      <div>
        <div className="relative p-8 flex flex-col space-y-4 items-center  min-h-screen bg-white">
      <div className="flex items-center justify-between p-4 rounded-[16px] bg-gray-100 w-[90%] sm:w-[300px] lg:w-[400px] ">
        <SearchBar />
        <CustomDropdown />
        <Notification />
      </div>
      <div>
      <Card />
      </div>
      <div className="grid grid-cols-2 gap-2">
      <Container food={food} />
      <Container food={food} />
      <Container food={food} />
      <Container food={food} />
      <Container food={food} />
      <Container food={food} />
      <Container food={food} />
      <Container food={food} />
      </div>
      <NavigationBar />
    </div>
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
        <Button text="Sign in" className="bg-primary font-bold hover:bg-green-600 hover:text-white" />
      </div>
    </div>
    )
  }
   </div> 
  )
}
