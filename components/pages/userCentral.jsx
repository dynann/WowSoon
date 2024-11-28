"use client";

import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import NavigationBar from "../layout/navbar";
import {
  FaUser,
  FaCog,
  FaCreditCard,
  FaHeart,
  FaHeadset,
  FaSignOutAlt,
} from "react-icons/fa";
import ButtonWithIcon from "../ButtonWithIcon";
import Link from "next/link";

export default function UserCentralPage() {
  const { data: session } = useSession();

  return (
    <div className="bg-white h-screen flex flex-col items-center pb-20">
      {session ? (
        <div className="w-full max-w-[480px] flex flex-col items-center">
          {/* Profile Section */}
          <div className="bg-primary w-full flex flex-col items-center justify-center space-y-4 py-6 rounded-b-xl ">
            <div className="bg-white rounded-full overflow-hidden w-24 h-24 border-4 border-white">
              <Image
                src="/components/img/profile.png"
                width={500}
                height={500}
                alt="profile picture"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-lg font-bold text-center">
              {session.user?.username || session.user?.name}
            </h1>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col items-center mr-[26px] mt-6">
            <ButtonWithIcon label="Account" icon={FaUser} route="/user/account" />
            <ButtonWithIcon label="Setting" icon={FaCog} route="/user/setting" />
            <ButtonWithIcon
              label="Payment Method"
              icon={FaCreditCard}
              route="/user/payment-method"
            />
            <ButtonWithIcon
              label="Favourite Restaurant"
              icon={FaHeart}
              route="/user/favourite-restaurant"
            />
            <ButtonWithIcon label="Support" icon={FaHeadset} route="/user/support" />
            <ButtonWithIcon
              label="Log Out"
              icon={FaSignOutAlt}
              onClick={() => signOut()}
            />
          </div>

          {/* Navigation Bar */}
          <div className="mt-[8rem] md:mt-[8rem]">
            <NavigationBar />
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center h-screen px-4">
          <div className="text-center">
            <p className="text-sm">You are not signed in.</p>
            <Link href="/register" className="text-primary font-bold underline">
              Sign In
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
