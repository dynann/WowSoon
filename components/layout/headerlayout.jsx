"use client";

import CustomDropdown from "../tools/CustomDropDown";
import { Notification } from "../tools/notificaction";
import { SearchBar } from "../tools/searchBar";

export default function HeaderLayout() {
  return (
    <div className="flex flex-row justify-between items-center sm:justify-evenly p-4 rounded-[16px] bg-gray-100 w-full">
      <SearchBar />
      <CustomDropdown />
      <Notification />
    </div>
  );
}
