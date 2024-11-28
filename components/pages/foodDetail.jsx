"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  FaMapMarkerAlt,
  FaPlus,
  FaChevronCircleLeft,
  FaHeart
} from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";
import Button from "../tools/signIn&UpButton";
import Loading from "../tools/loading";
import Container from "../layout/container";

export default function FoodDetailPage(){
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return ( 
      <div className="bg-white w-screen h-screen flex  justify-center items-center m-auto">
          <Loading className="bg-white text-primary"/>
      </div>
   )
  }

  const handleClick = () => {
    router.back()
   }
  return (
    <div className="bg-white h-full flex flex-col -mt-4">
      {session ? (
        <div>
          <div className="bg-secondary flex flex-col  space-y-2 pt-12 py-12 rounded-3xl">
            <div className="flex flex-row justify-between mb-3">
              <button className="ml-4 p-0 " onClick={handleClick}>
                <FaChevronCircleLeft className=" text-3xl " />
              </button>
              <h3>Detail</h3>
              <FaHeart className=" mr-4 mt-2 text-2xl "/>
            </div>

            <div className="bg-white self-center rounded-sm overflow-hidden w-36 h-36 border-none">
              <Image
                src="/components/img/profile.png"
                width={600}
                height={600}
                alt="fetch food img"
              />
            </div>
            <h1 className="text-2xl font-bold pt-3 self-center">
              fetched food name
            </h1>
          </div>
          <div className="flex flex-row mt-4 justify-between ">
            <div className="flex flex-row space-x-1 ml-4 mt-3">
              <FaMapMarkerAlt className="text-primary text-xl" />
              <p className="text-secondary text-l">fetch location </p>
            </div>
            <div className="self-end mr-4 ">
              <button className="bg-primary rounded-full p-4 hover:bg-green-600 ">
                <FaPlus className="text-white" />
              </button>
            </div>
          </div>
          <div className="bg-primary flex flex-row justify-between items-center max-w-screen-md h-[84px] rounded-[24px] ml-4 mr-4 mt-4">
            <div className="flex flex-col ml-5 items-center">
              <p className="text-sm">data</p>
              <p className="text-xs">data</p>
            </div>
            |
            <div className="flex flex-col items-center">
              <p className="text-sm">data</p>
              <p className="text-xs">data</p>
            </div>
            |
            <div className="flex flex-col items-center">
              <p className="text-sm">data</p>
              <p className="text-xs">data</p>
            </div>
            |
            <div className="flex flex-col mr-5 items-center">
              <p className="text-sm">data</p>
              <p className="text-xs">data</p>
            </div>
          </div>
          <div className="mt-4 ml-4 ">
            <h1 className="text-secondary font-semibold text-xl">Description</h1>
            <h3 className="text-secondary font-normal text-sm">
               fetched food description
            </h3>
          </div>
          <div className="flex flex-row ml-4 mt-4 ">
            <div>
            <button className="bg-secondary rounded-full p-2">
                <MdShoppingCart className="text-4xl"/>
            </button>
            </div>
            <button className="items-center px-2 py-2 pr-4 pl-4 bg-secondary ml-4 mr-4 w-[335px] h-[50px] rounded-[24px]">
              Buy Now
            </button>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-4 ml-4 mr-4 mb-4">
             <Container/>
             <Container/>
             <Container/>
             <Container/>
             <Container/>
             <Container/>
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
            <Button
              text="Sign in"
              className="bg-primary font-bold hover:bg-green-600 hover:text-white "
            />
          </div>
        </div>
      )}
    </div>
  );
}
