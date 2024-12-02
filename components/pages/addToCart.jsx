"use client";
import CartResturant from "../tools/cartResturant";
import Loading from "../tools/loading";
import { useSession } from "next-auth/react";
import Button from "../tools/signIn&UpButton";
import HeaderLayout from "../layout/headerlayout";
export default function AddToCartPage() {
  const {data : session, status} = useSession()
  if(status === 'loading'){
    return <Loading/>
  } 
  return(
    <div className="min-h-screen flex flex-col bg-white">
    { session ? (
        <div className=" relative md:pt-6 pt-4 px-4 sm:px-6 lg:px-12 flex flex-col space-y-4 items-center justify-center bg-white">
        <HeaderLayout/>
          <div className="my-4">
            <span className="font-semibold text-lg text-black ">Your Past Carts</span>
          </div>
  
          <div className="mb-4 w-full flex justify-center">
            <div className="flex flex-col space-y-4">
              <CartResturant/>
            </div>
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
      ) }
    </div>
  )
}
