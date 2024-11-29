"use client";
import { FaChevronLeft, FaCcVisa, FaCcMastercard, FaCcPaypal, FaPlus } from "react-icons/fa";
import PaymentButton from "../tools/paymentButton";
import NavigationBar from "../layout/navbar";
import { useSession } from "next-auth/react";
import Loading from "../tools/loading";
export default function PaymentMethodPage() {
  const {data: session, status} = useSession()
  if(status === 'loading'){
    return <Loading/>
  }
  return (
    <div>
        {session ? (
            <div className="bg-accent w-full h-screen flex justify-center items-center">
            <div className="w-full sm:w-[300px] lg:w-[440px] h-full flex flex-col items-center bg-white shadow-md relative pb-20">             
              <button className="absolute top-4 left-4 p-2 border-primary text-current text-primary bg-white rounded-full">
                <FaChevronLeft className="w-[34px] h-[34px]" />
              </button>           
              <div className="mt-20 flex flex-col items-center w-full px-10">
                <h1 className="text-secondary text-3xl font-medium w-[350px] text-center">Payment Methods</h1>
                <p className="mt-2 text-gray-700 text-base w-[350px] text-center">Select Payment Method</p>
              </div>          
              <div className="mt-10 space-y-4 w-full px-4">
                
                <PaymentButton
                  icon={<FaCcVisa className="text-blue-500 w-8 h-8" />}
                  label="Visa"
                  buttonWidth="w-full"  
                />            
                <PaymentButton
                  icon={<FaCcMastercard className="text-red-500 w-8 h-8" />}
                  label="MasterCard"
                  buttonWidth="w-full" 
                />
                <PaymentButton
                  icon={<FaCcPaypal className="text-blue-700 w-8 h-8" />}
                  label="PayPal"
                  buttonWidth="w-full"  
                />
      <div className="w-full">
        <button className="flex items-center justify-start w-[92%] mx-auto px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg">
          <img
            src="/img/khqr.png"
            alt="KHQR Logo"
            className="w-8 h-6 my-1 rounded-sm"
          />
          <span className="mx-3 text-gray-500">&#8739;</span> 
          <span className="text-base font-medium text-gray-700">KHQR</span>
        </button>
      </div>

      <div className="w-full border-t border-gray-300 my-4" />

      <button className="flex items-center justify-center w-[92%] mx-auto px-4 py-2 bg-green-500 border border-gray-300 rounded-lg">
        <FaPlus className="text-white w-6 h-6 mr-3" /> 
        <span className="text-base font-medium text-white">Add Payment Method</span>
      </button>
      
              </div>
            </div>
            <NavigationBar />
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
        ) 
      }
    </div>
  );
}
