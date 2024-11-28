"use client";
import { useState } from "react";
import NavigationBar from "../layout/navbar";
import { FaChevronLeft } from "react-icons/fa";
import CartItem from "../tools/cartItems";
import VoucherAndNoted from "../tools/voucherAndNoted";
import Button from "../tools/signIn&UpButton";

export default function CartPage() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: "Double Cheese Spaghetti",
      image: "/img/spaghetti.png",
      price: 12,
      quantity: 1,
    },
  ]);

  // Handlers for quantity and delete
  const handleIncrease = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrease = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const handleDelete = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Calculate subtotal
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="relative flex items-start justify-center h-screen bg-white ">
      <div className="w-[90%] sm:w-[300px] lg:w-[480px] flex flex-col justify-center items-center bg-accent pb-28">
        <div className="flex items-center justify-between pl-4 rounded-b-[16px] bg-secondary w-full sm:w-[300px] lg:w-[480px] h-[200px]">
          <button>
            <FaChevronLeft className="w-[46px] h-[46px] p-2 border-primary text-current text-primary bg-white rounded-full" />
          </button>
          <span className="flex-grow text-center text-lg font-semibold text-accent pr-6">
            My Basket
          </span>
        </div>
        <div className="flex-col justify-center mt-4 flex  items-center   space-y-4 w-full">
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
              onDelete={handleDelete}
            />
          ))}

          <VoucherAndNoted />
          <div className=" mx-4 w-[398px]">
            <div className="bg-primary rounded-[18px] p-4  w-full space-y-2 text-white">
              <div className="space-x-10">
                <span>Subtotal: </span>
                <span> ${subtotal.toFixed(2)} </span>
              </div>
              <div className="space-x-[15px]">
                <span>Delivery fee: </span>
                <span>$5.00</span>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-center">
              <span className="p-4 ">Total: ${(subtotal + 5).toFixed(2)}</span>
              <Button
                type="total"
                text="Place Order"
                className="text-white hover:bg-primary bg-secondary"
              />
            </div> 
          </div> 
        </div>
      </div>
      <NavigationBar />
    </div>
  );
}
