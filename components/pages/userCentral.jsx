"use client";
import { signOut, useSession} from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import NavigationBar from "../layout/navbar";



export default function userCentralPage() {
  const router = useRouter()
  const { data: session } = useSession()
  const account = () => {
    router.push('/user/account')
  }




  return (
    <div className="bg-white h-screen flex flex-col top-0 ">
      {session ? (
        <div>
          <div className=" bg-primary flex flex-col items-center justify-center space-y-2 pt-18 py-12 rounded-xl ">
            <div className="bg-white rounded-full overflow-hidden w-36 h-36 border-white">
              <Image
                src="/components/img/profile.png"
                width={500}
                height={500}
                alt="profile picture"
              ></Image>
            </div>
            <h1 className="text-2xl font-bold pt-3">{session.user?.username}{session.user?.name}</h1>
          </div>

          <div className="flex flex-col items-center space-y-4 justify-center mt-10 ">
            <button className="bg-accent text-secondary font-semibold w-[350px] pt-3 py-3 rounded-2xl " onClick={account}>
               Account
            </button>
            <button className="bg-accent text-secondary font-semibold w-[350px] pt-3 py-3 rounded-2xl ">
               Setting
            </button>
            <button className="bg-accent text-secondary font-semibold w-[350px] pt-3 py-3 rounded-2xl ">
              Payment Method
            </button>
            <button className="bg-accent text-secondary font-semibold w-[350px] pt-3 py-3 rounded-2xl ">
              Favourite Restaurant
            </button>
            <button className="bg-accent text-secondary font-semibold w-[350px] pt-3 py-3 rounded-2xl ">
              Support
            </button>
            <button className="bg-accent text-secondary font-semibold w-[350px] pt-3 py-3 rounded-2xl  " onClick={signOut}>
              Log Out
            </button>
          </div>
          <NavigationBar/>
        </div>
      ) : (
        <div>
          you are not signed in go to sign in page{" "}
          <Link href="/register"> sign in</Link>
        </div>
      )}
    </div>
  );
}
