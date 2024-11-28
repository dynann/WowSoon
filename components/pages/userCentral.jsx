"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import NavigationBar from "../layout/navbar";
import { FaUser, FaCog, FaCreditCard, FaHeart, FaHeadset, FaSignOutAlt } from "react-icons/fa";
import ButtonWithIcon from "../tools/ButtonWithIcon";
import { useRouter } from "next/navigation";
import Button from "../tools/signIn&UpButton";

export default function UserCentralPage() {
  const { data: session } = useSession();
  const router = useRouter()
 

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
                router.push('/landing')
              }}
            />
          </div>

          <NavigationBar />
        </div>
      ) : (
        <div className="w-screen h-screen bg-white flex flex-col justify-center items-center text-secondary">
          You are not signed in. Go to the sign-in page
          <div  onClick={() => {
            router.push('/login')
          }} className="mt-3">
            <Button text="Sign in" className="bg-primary font-bold hover:bg-green-600 hover:text-white "/>
          </div>
        </div>
      )}
    </div>
  );
}
