"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import NavigationBar from "../layout/navbar";
import { FaUser, FaCog, FaCreditCard, FaHeart, FaHeadset, FaSignOutAlt } from "react-icons/fa";
import ButtonWithIcon from "../tools/ButtonWithIcon";
import { useRouter } from "next/navigation";
import Button from "../tools/signIn&UpButton";
import Loading from "../tools/loading";

export default function UserCentralPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if(status === 'loading'){
    return <Loading/>
  }
  return (
    <div className="bg-white h-[90%] flex flex-col items-center pb-20">
      {session ? (
        <div className="w-full max-w-[480px] flex flex-col items-center">
          {/* Profile Section */}
          <div className="bg-primary w-full flex flex-col items-center justify-center space-y-4 py-6 rounded-b-xl">
            <div className="bg-white rounded-full overflow-hidden w-24 h-24 border-4 border-white">
              <Image
                src="/components/img/profile.png"
                width={500}
                height={500}
                alt="profile picture"
              />
            </div>
            <h1 className="text-2xl font-bold pt-3">{session.user?.username || session.user?.name}</h1>
          </div>

          {/* Button Section */}
          <div className="flex flex-col items-center space-y-4 mt-10">
            <ButtonWithIcon label="Account" icon={FaUser} route="/user/account"  />
            <ButtonWithIcon label="Setting" icon={FaCog} route="/user/setting" />
            <ButtonWithIcon label="Payment Method" icon={FaCreditCard} route="/user/payment" />
            <ButtonWithIcon label="Favourite Restaurant" icon={FaHeart} route="/user/favourite-restaurant" />
            <ButtonWithIcon label="Support" icon={FaHeadset} route="/user/support" />
            <ButtonWithIcon
              label="Log Out"
              icon={FaSignOutAlt}
              onClick={() => {
                signOut();
                router.push("/landing");
              }}
            />
          </div>

          {/* Navigation Bar */}
          <div className="fixed bottom-0 w-full max-w-[480px]">
            <NavigationBar />
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
      )}
    </div>
  );
}
