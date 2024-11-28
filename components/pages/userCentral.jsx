"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import NavigationBar from "../layout/navbar";
import { FaUser, FaCog, FaCreditCard, FaHeart, FaHeadset, FaSignOutAlt } from "react-icons/fa"; // Import icons
import ButtonWithIcon from "../tools/ButtonWithIcon"; // Adjust the path based on your folder structure

export default function UserCentralPage() {
  const { data: session } = useSession();
  
 

  return (
    <div className="bg-white h-screen flex flex-col top-0">
      {session ? (
        <div>
          <div className="bg-primary flex flex-col items-center justify-center space-y-2 pt-18 py-12 rounded-xl">
            <div className="bg-white rounded-full overflow-hidden w-36 h-36 border-white">
              <Image
                src="/components/img/profile.png"
                width={500}
                height={500}
                alt="profile picture"
              />
            </div>
            <h1 className="text-2xl font-bold pt-3">{session.user?.username || session.user?.name}</h1>
          </div>

          <div className="flex flex-col items-center space-y-4 justify-center mt-10">
            {/* Use the reusable ButtonWithIcon component */}
            <ButtonWithIcon label="Account" icon={FaUser} route="/user/account" />
            <ButtonWithIcon label="Setting" icon={FaCog} route="/user/setting" />
            <ButtonWithIcon label="Payment Method" icon={FaCreditCard} route="/user/payment" />
            <ButtonWithIcon label="Favourite Restaurant" icon={FaHeart} route="/user/favourite-restaurant" />
            <ButtonWithIcon label="Support" icon={FaHeadset} route="/user/support" />
            <ButtonWithIcon
              label="Log Out"
              icon={FaSignOutAlt}
              onClick={() => {
                signOut()
              }}
            />
          </div>

          <NavigationBar />
        </div>
      ) : (
        <div>
          You are not signed in. Go to the sign-in page <Link href="/register">Sign In</Link>
        </div>
      )}
    </div>
  );
}
