"use client";
import { useState } from "react";
import { MdDelete, MdStar } from "react-icons/md";
import { FaChevronLeft } from "react-icons/fa";
import Button from "../tools/signIn&UpButton";
import NavigationBar from "../layout/navbar";
import Image from "next/image";
import InputWithIcon from "../tools/InputWithIcon";
import { useSession } from "next-auth/react";
import Loading from "../tools/loading";

export default function RatingPage() {
  // State to store the rating
  const [rating, setRating] = useState(0); // 0 means no rating yet
  const [addNoted, setAddNoted] = useState("");
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <Loading />;
  }

  const handleRating = (value) => {
    setRating(value);
  };

  const handleSubmit = () => {
    console.log(addNoted);
  };

  return (
    <div>
      {session ? (
        <div className="bg-accent w-full h-screen flex justify-center items-center">
          <div className="w-full sm:w-[300px] lg:w-[440px] h-full flex flex-col items-center justify-center bg-white pb-20 shadow-md relative">
            <button className="absolute top-4 left-4 p-2 border-primary text-current text-primary bg-white rounded-full">
              <FaChevronLeft className="w-[34px] h-[34px]" />
            </button>

            <div className="w-full h-[220px] bg-accent rounded-[24px] flex flex-col items-center justify-center">
              <div className="w-full flex justify-center items-center px-2">
                <div className="flex flex-col justify-center items-center w-[199px] rounded-[12px]">
                  <div className="flex flex-col items-center">
                    <div className="rounded-full w-[100px] h-[100px] bg-white overflow-hidden">
                      <Image
                        src="/img/kfc.png"
                        width={100}
                        height={100}
                        alt="food"
                        layout="intrinsic" // Ensure proper image layout
                      />
                    </div>
                    <span className="font-semibold text-secondary mt-2">
                      KPC
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex space-x-2 mt-4">
              {[1, 2, 3, 4, 5].map((value) => (
                <button
                  key={value}
                  onClick={() => handleRating(value)}
                  className={`p-2 ${
                    rating >= value ? "text-yellow-500" : "text-gray-400"
                  }`}
                >
                  <MdStar size={24} />
                </button>
              ))}
            </div>

            <div className="w-[350px] h-[59px] mb-4">
              <InputWithIcon
                type="text"
                placeholder="Add noted"
                value={addNoted}
                onChange={(e) => setAddNoted(e.target.value)}
                icon="sticky-note"
                className="bg-accent border-2 border-primary text-primary w-full" // Ensure it fills the entire div
              />
            </div>

            <button
              className="w-[350px] h-[59px] py-4 rounded-[24px] flex items-center justify-center bg-secondary bg-black text-white"
              onClick={handleSubmit}
            >
              Submit
            </button>
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
              className="bg-primary font-bold hover:bg-green-600 hover:text-white"
            />
          </div>
        </div>
      )}
    </div>
  );
}
