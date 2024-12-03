"use client";

import { useEffect, useState } from "react";
import NavigationBar from "../layout/navbar";
import { FaChevronLeft } from "react-icons/fa";
import CartItem from "../tools/cartItems";
import VoucherAndNoted from "../tools/voucherAndNoted";
import Button from "../tools/signIn&UpButton";
import Loading from "../tools/loading";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function CartPage() {
  const router = useRouter();
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    const storedBasket = JSON.parse(localStorage.getItem("basket")) || [];
    setBasket(storedBasket);
  }, []);

  const updateBasket = (updatedBasket) => {
    setBasket(updatedBasket);
    localStorage.setItem("basket", JSON.stringify(updatedBasket));
  };

  const { data: session, status } = useSession();
  if (status === "loading") {
    return <Loading />;
  }

  const handleIncrease = (id) => {
    const updatedBasket = basket.map((item) =>
      item.id === id ? { ...item, amount: item.amount + 1 } : item
    );
    updateBasket(updatedBasket);
  };

  const handleDecrease = (id) => {
    const updatedBasket = basket.map((item) =>
      item.id === id ? { ...item, amount: Math.max(item.amount - 1, 1) } : item
    );
    updateBasket(updatedBasket);
  };

  const clearBasket = () => {
    localStorage.removeItem("basket");
    setBasket([]);
  };

  const subtotal = basket.reduce(
    (acc, item) => acc + item.price * (item.amount || 1),
    0
  );

  
  console.log(basket)
  return (
    <div>
      {session ? (
        <div className="relative flex items-start justify-center h-screen bg-white">
          <div className="w-full sm:w-[300px] lg:w-[480px] flex flex-col justify-center items-center bg-accent pb-28">
            <div className="flex items-center justify-between pl-4 rounded-b-[16px] bg-secondary w-full sm:w-[300px] lg:w-[480px] h-[200px]">
              <button onClick={router.back}>
                <FaChevronLeft className="w-[46px] h-[46px] p-2 border-primary text-primary bg-white rounded-full" />
              </button>
              <span className="flex-grow text-center text-lg font-semibold text-accent pr-6">
                My Basket
              </span>
            </div>
            <div className="flex flex-col justify-center mt-4 items-center space-y-4 w-full">
              {basket.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  onIncrease={handleIncrease}
                  onDecrease={handleDecrease}
                />
              ))}
              <VoucherAndNoted />
              <div className="mx-4 w-[398px]">
                <div className="bg-primary rounded-[18px] p-4 w-full space-y-2 text-white">
                  <div className="space-x-10">
                    <span>Subtotal:</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="space-x-[15px]">
                    <span>Delivery fee:</span>
                    <span>$5.00</span>
                  </div>
                </div>
                <div
                  className="mt-4 flex items-center justify-center"
                  onClick={clearBasket}
                >
                  <span className="p-4">Total: ${(subtotal + 5).toFixed(2)}</span>
                  <Button
                    type="total"
                    text="clear"
                    className="text-white hover:bg-primary bg-secondary"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-screen h-screen bg-white flex flex-col justify-center items-center text-secondary">
          You are not signed in. Go to the sign-in page.
          <div
            onClick={() => router.push("/login")}
            className="mt-3"
          >
            <Button
              text="Sign in"
              className="bg-primary font-bold hover:bg-green-600 hover:text-white"
            />
          </div>
        </div>
      )}
    </div>
  );
}
