"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function generateOTP() {
  const numbers = [];
  while (numbers.length < 3) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    numbers.push(randomNumber);
  }
  return numbers.join("");
}

export default function SmsPage() {
  const router = useRouter();
  const [otp, setOtp] = useState("");
  const [conOTP, setConOTP] = useState("");

  useEffect(() => {
    const otpValue = generateOTP();
    setConOTP(otpValue);
  }, []);

  const handleOTP = (e) => {
    e.preventDefault();
    if (otp === conOTP) {
      router.push("/login");
    } else {
      alert("Invalid OTP.");
    }
  };

  return (
    <div className="bg-white min-h-screen flex justify-center items-center">
      <div className="p-8 flex flex-col space-y-4 items-center">
        <div className="relative flex flex-col space-y-4 items-center w-[90%] sm:w-[300px] lg:w-[400px]">
          <img src="/img/logo.png" alt="logo" />
        </div>
        <div role="alert" className="alert alert-success bg-primary text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 shrink-0 stroke-current bg-primary"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Enter this OTP: {conOTP} to continue</span>
        </div>
        <h2 className="font-semibold text-xl">Verify your phone number</h2>
        <p className="text-center text-gray-600">
          Check your SMS. We have sent a confirmation code to your phone
          <span className="font-semibold text-black"> +855 *********</span>.
        </p>
        <form onSubmit={handleOTP}>
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
            type="submit"
            className="mt-4 px-4 py-2 w-full sm:w-auto md:w-[50%] bg-primary text-white font-semibold rounded-[24px] hover:bg-primary-dark focus:outline-none"
          >
            Confirm
          </button>
        </form>
      </div>
    </div>
  );
}
