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
import Container from "../tools/container";
import NavigationBar from "../layout/navbar";

export default function FoodDetailPage({ food }) {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <Loading />;
  }

  const handleClick = () => {
    router.back();
  };

  return (
    <div className="bg-accent min-h-screen flex flex-col overflow-y-auto">
      {session ? (
        <div className="w-full flex flex-col items-center px-4">
          <div className="w-full sm:w-11/12 lg:w-2/3 flex flex-col items-center bg-white rounded-lg shadow-md">
            {/* Header Section */}
            <div className="bg-secondary flex flex-col w-full space-y-4 py-8 rounded-b-3xl">
              <div className="flex justify-between items-center text-white px-4">
                <button onClick={handleClick}>
                  <FaChevronCircleLeft className="text-2xl sm:text-3xl" />
                </button>
                <h3 className="text-lg">Detail</h3>
                <FaHeart className="text-xl sm:text-2xl" />
              </div>

              {/* Food Image */}
              <div className="bg-white self-center rounded-sm overflow-hidden w-full max-w-[300px]">
                <Image
                  src={"http:" + food.fields.featureImage.fields.file.url}
                  width={500}
                  height={300}
                  alt="food"
                  className="object-cover"
                />
              </div>
              <h1 className="text-2xl text-white font-bold pt-3 text-center">
                {food.fields.name}
              </h1>
            </div>

            {/* Location and Action Section */}
            <div className="w-full flex flex-wrap items-center justify-between lg:justify-around px-4 mt-2 sm:mt-3 lg:mt-5">
              {/* Location Section */}
              <div className="flex items-center space-x-2 mb-2 lg:mb-0">
                <FaMapMarkerAlt className="text-primary text-xl lg:text-2xl" />
                <p className="text-secondary text-sm sm:text-base lg:text-lg opacity-90">
                  {food.fields.location}
                </p>
              </div>

              {/* Action Button */}
              <button className="bg-primary rounded-full p-3 sm:p-4 lg:p-5 hover:bg-green-600">
                <FaPlus className="text-white text-sm sm:text-base lg:text-lg" />
              </button>
            </div>

            {/* Nutrition Info */}
            <div className="text-white flex justify-center w-full px-4 mb-4">
              <div className="flex justify-between items-center bg-primary rounded-[18px] w-full max-w-[300px] sm:max-w-[350px] lg:max-w-[400px] px-6 py-4 sm:py-5 lg:py-6">
                {[
                  { label: "kcal", value: food.fields.kcal },
                  { label: "protein", value: food.fields.protein },
                  { label: "fat", value: food.fields.fat },
                  { label: "carbo", value: food.fields.carbo },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center space-y-1 sm:space-y-2 lg:space-y-3"
                  >
                    <p className="text-sm sm:text-base lg:text-lg font-medium">
                      {item.value}
                    </p>
                    <p className="text-xs sm:text-sm lg:text-base">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Description Section */}
            <div className="w-full px-4 mb-4">
              <h1 className="text-secondary font-semibold text-lg">
                Description
              </h1>
              <p className="text-secondary font-normal text-sm mt-1">
                {food.fields.description}
              </p>
            </div>

            {/* Actions */}
            <div className="w-full flex sm:flex-col lg:flex-row lg:justify-around  items-center px-4 mb-4 space-y-0 space-x-1">
              <button className="bg-secondary rounded-full p-3 hover:bg-primary flex-shrink-0">
                <MdShoppingCart className="text-white text-xl" />
              </button>
              <button className="py-2 text-white bg-secondary w-full sm:max-w-[320px] rounded-[24px] hover:bg-primary">
                Buy Now
              </button>
            </div>

            {/* Related Items */}
            <div className="w-full">
              <h2 className="text-lg text-secondary font-semibold mb-2">
                Related Items
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {Array.from({ length: 12 }).map((_, index) => (
                  <Container key={index} className="w-full" food={food} />
                ))}
              </div>
            </div>
          </div>

          <NavigationBar />
        </div>
      ) : (
        <div className="w-screen h-screen bg-white flex flex-col justify-center items-center text-secondary">
          <p>You are not signed in. Go to the sign-in page.</p>
          <Button
            text="Sign in"
            className="mt-3 bg-primary font-bold hover:bg-green-600 hover:text-white"
            onClick={() => router.push("/login")}
          />
        </div>
      )}
    </div>
  );
}
