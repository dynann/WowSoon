"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function SmsPage() {
  const router = useRouter();
  const { data: session } = useSession();
  const [signIn, setIsSignedIn] = useState(false);
  const [otp, setOtp] = useState(""); // State to store the OTP code

  useEffect(() => {
    if (session) {
      setIsSignedIn(true);
    } else {
      setIsSignedIn(false);
    }
  }, [session]);

  const handleOTP = () => {
    if (signIn) {
      if (otp.length === 6) {
        router.push("/home");
      } else {
        alert("Please enter a valid 6-digit OTP code.");
      }
    }
  };

  return (
    <div className="bg-white min-h-screen flex justify-center items-center">
      {session ? (
        <div className="p-8 flex flex-col space-y-4 items-center">
          <div className="relative flex flex-col space-y-4  items-center w-[90%] sm:w-[300px] lg:w-[400px]">
            <img src="/img/logo.png" alt="logo" />
          </div>
          <h2 className="font-semibold text-xl">Verify your phone number</h2>
          <p className="text-center text-gray-600">
            Check your SMS. We’ve sent a confirmation code to your phone
            <span className="font-semibold text-black"> +855 *********</span>.
          </p>

          <div className="w-full sm:w-[300px] lg:w-[400px]">
            <label
              htmlFor="otp"
              className="block text-sm font-medium text-gray-700"
            >
              Enter your 6-digit code
            </label>
            <input
              type="text"
              id="otp"
              maxLength={6}
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
              placeholder="Enter OTP"
            />
          </div>

          <button
            className="mt-4 px-4 py-2 w-full sm:w-auto md:w-[50%]  bg-primary text-white font-semibold rounded-md hover:bg-primary-dark focus:outline-none"
            onClick={handleOTP}
          >
            Confirm
          </button>
        </div>
      ) : (
        <div className="text-center">
          <h1 className="text-2xl font-semibold">Please sign in first</h1>
        </div>
      )}
    </div>
  );
}
