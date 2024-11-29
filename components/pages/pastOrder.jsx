"use client";
import CustomDropdown from "../tools/CustomDropDown";
import { Notification } from "../tools/notificaction";
import { SearchBar } from "../tools/searchBar";
import Loading from "../tools/loading";
import NavigationBar from "../layout/navbar";
import PastOrderCart from "../tools/pastOrderCart";
import { useSession } from "next-auth/react";
import Button from "../tools/signIn&UpButton";
export default function PastOrderPage() {
  const {data: session, status} = useSession()
  if(status === 'loading'){
    return <Loading/>
  }
  return (
    <div>
      { session ? (
          <div className="bg-accent w-full min-h-screen flex justify-center items-center">
          <div className="w-[100%] sm:w-[300px] lg:w-[440px] flex flex-col items-center bg-white pb-20 shadow-md">
            <div className="flex items-center justify-between p-8 rounded-[16px] w-[100%]">
              <SearchBar />
              <CustomDropdown />
              <Notification />
            </div>
            <div className="my-4">
              <span className="font-semibold text-lg">Your Past Carts</span>
            </div>
    
            <div className="mb-4 w-full flex justify-center">
              <div className="flex flex-col space-y-4">
                <PastOrderCart />
                <PastOrderCart />
                <PastOrderCart />
                <PastOrderCart />
              </div>
            </div>
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
          <Button text="Sign in" className="bg-primary font-bold hover:bg-green-600 hover:text-white" />
        </div>
      </div>
      ) }
    </div>
  );
}
