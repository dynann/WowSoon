'use client';
import Link from "next/link";
import Image from "next/image";
import { useSession } from "next-auth/react";
import Loading from "../tools/loading";

export default function AccountPage() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <Loading />;
  }

  return (
    <div className="bg-white h-[90%] flex flex-col items-center">
      {session ? (
        <div className="w-full max-w-[480px] flex flex-col items-center">
          
          <div className="bg-primary w-full flex flex-col items-center justify-center space-y-4 py-6 rounded-b-xl">
           
            <div className="bg-white rounded-full overflow-hidden w-36 h-36 border-[4px] border-white">
              <Image
                src="/components/img/profile.png"
                width={500}
                height={500}
                alt="profile picture"
                className="object-cover w-full h-full"
              />
            </div>

            
            <h1 className="text-2xl font-bold pt-3 text-white text-center">
              {session.user?.name || session.user?.username}
            </h1>
          </div>

          
          <div className="flex flex-col items-center space-y-4 mt-10 w-full px-4">
            
            <div className="flex flex-col bg-accent w-full rounded-2xl p-4">
              <p className="text-black font-light text-xs">Username</p>
              <h1 className="text-black font-medium">{session.user?.name}</h1>
            </div>

           
            <div className="flex flex-col bg-accent w-full rounded-2xl p-4">
              <p className="text-black font-light text-xs">Email</p>
              <h1 className="text-black font-medium">{session.user?.email}</h1>
            </div>

            
            <h1 className="text-secondary text-sm text-center">Connected Account</h1>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <p>You are not signed in. Go to sign-in page:</p>
          <Link href="/register" className="text-blue-500 underline">
            Sign in
          </Link>
        </div>
      )}
    </div>
  );
}
