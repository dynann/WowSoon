"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  FaMapMarkerAlt,
  FaPlus,
  FaChevronCircleLeft,
  FaHeart,
} from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";
import Button from "../tools/signIn&UpButton";
import Loading from "../tools/loading";
import Container from "../layout/container";
import NavigationBar from "../layout/navbar";

export default function FoodDetailPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return (
      <div className="bg-white w-screen h-screen flex justify-center items-center">
        <Loading className="bg-white text-primary" />
      </div>
    );
  }

  const handleClick = () => {
    router.back();
  };

  return (
    <div className="bg-accent min-h-screen flex flex-col overflow-y-auto">
      {session ? (
        <div className="w-full flex flex-col justify-center items-center">
          <div className="w-[100%] sm:w-[300px] lg:w-[440px] flex flex-col items-center bg-white rounded-lg shadow-md">
            <div className="bg-secondary flex flex-col w-full space-y-2 py-12 rounded-b-3xl">
              <div className="flex flex-row text-white justify-between mb-3">
                <button className="ml-4 p-0" onClick={handleClick}>
                  <FaChevronCircleLeft className="text-3xl" />
                </button>
                <h3>Detail</h3>
                <FaHeart className="mr-4 mt-2 text-2xl" />
              </div>

              <div className="bg-white self-center rounded-sm overflow-hidden w-36 h-36 border-none">
                <Image src="/components/img/profile.png" width={600} height={600} alt="fetch food img" />
              </div>
              <h1 className="text-2xl text-white font-bold pt-3 self-center">fetched food name</h1>
            </div>

            <div className="flex flex-row my-4 justify-center w-full">
              <div className="flex w-[398px] justify-between">
                <div className="flex flex-row justify-center items-end">
                  <FaMapMarkerAlt className="text-primary w-[34px] h-[45px]" />
                  <p className="text-secondary text-l">fetch location</p>
                </div>
                <div>
                  <button className="bg-primary rounded-full p-4 hover:bg-green-600">
                    <FaPlus className="text-white" />
                  </button>
                </div>
              </div>
            </div>

            <div className="text-white flex flex-row justify-center w-full h-[84px]">
              <div className="w-[398px] flex justify-between items-center rounded-[18px] bg-primary">
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
            </div>

            <div className="w-full flex justify-center items-center my-4">
              <div className="w-[398px] flex-col">
                <h1 className="text-secondary font-semibold text-xl">Description</h1>
                <h3 className="text-secondary font-normal text-sm">fetched food description</h3>
              </div>
            </div>

            <div className="flex flex-row w-full justify-center">
              <div className="flex justify-between w-[398px]">
                <div>
                  <button className="bg-secondary rounded-full p-2 hover:bg-primary">
                    <MdShoppingCart className="text-4xl text-white" />
                  </button>
                </div>
                <button className="items-center py-2 text-white bg-secondary w-[300px] h-[50px] rounded-[24px] hover:bg-primary">
                  Buy Now
                </button>
              </div>
            </div>

            <div className="flex mt-4 w-full items-center justify-center">
              <div className="flex-wrap flex w-[410px]">
                <div className="flex justify-center w-1/2 mb-2">
                  <Container className="w-[195px]" />
                </div>
                <div className="flex justify-center w-1/2 mb-2">
                  <Container className="w-[195px]" />
                </div>
                <div className="flex justify-center w-1/2 mb-2">
                  <Container className="w-[195px]" />
                </div>
                <div className="flex justify-center w-1/2 mb-2">
                  <Container className="w-[195px]" />
                </div>
                <div className="flex justify-center w-1/2 mb-2">
                  <Container className="w-[195px]" />
                </div>
                <div className="flex justify-center w-1/2 mb-2">
                  <Container className="w-[195px]" />
                </div>
                <div className="flex justify-center w-1/2 mb-2">
                  <Container className="w-[195px]" />
                </div>
                <div className="flex justify-center w-1/2 mb-2">
                  <Container className="w-[195px]" />
                </div>
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
