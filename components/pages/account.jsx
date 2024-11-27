'use client'
import Link from "next/link";
import Image from "next/image";
import { useSession } from "next-auth/react";
export default function AccountPage(){
    const {data: session} = useSession()
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
                <h1 className="text-2xl font-bold pt-3">{session.user?.name}{session.user?.username}</h1>
              </div>
    
              <div className="flex flex-col items-center space-y-4 justify-center mt-10 ">
                
                 <div className="flex flex-col bg-accent w-[350px] justify-start rounded-2xl  ">
                 <p className="text-black font-light text-xs pl-3 pt-3">username</p>
                 <h1 className="text-black font-medium py-3 pl-3">
                    {session.user?.name}
                 </h1>
                </div>
                <div className="flex flex-col bg-accent w-[350px] justify-start rounded-2xl  ">
                 <p className="text-black font-light text-xs pl-3 pt-3">email</p>
                 <h1 className="text-black font-medium py-3 pl-3">
                    {session.user?.email}
                 </h1>
                </div>
                <h1 className=" text-secondary  ">
                Connected Account
                </h1>
              </div>
              <div className="items-center justify-center">
             
              </div>
            
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