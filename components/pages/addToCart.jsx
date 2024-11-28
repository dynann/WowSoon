"use client";
import CustomDropdown from "../tools/CustomDropDown";
import { Notification } from "../tools/notificaction";
import { SearchBar } from "../tools/searchBar";

import NavigationBar from "../layout/navbar";
import CartResturant from "../tools/cartResturant";

export default function AddToCartPage() {
  return (
    <div className="bg-accent w-full min-h-screen flex justify-center items-center">
      <div className="w-[100%] sm:w-[300px] lg:w-[440px] flex flex-col items-center  bg-white pb-20 shadow-md">
        <div className="flex items-center justify-between p-8 rounded-[16px]  w-[100%]">
          <SearchBar />
          <CustomDropdown />
          <Notification />
        </div>
        <div className="my-4">
          <span className="font-semibold text-lg">Your Order Carts</span>
        </div>
        <div className="mb-4 w-full flex justify-center">
          <div className="flex flex-col space-y-4">
            <CartResturant />
            <CartResturant />
            <CartResturant />
            <CartResturant />
            <CartResturant />
          </div>
        </div>
      </div>
      <NavigationBar />
    </div>
  );
}
