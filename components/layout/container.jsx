import { MdShoppingCart } from "react-icons/md";
import Image from "next/image";
export default function Container() {
  return (
    <div>
      <div className="w-[192px] h-[228px] flex flex-col shadow-md rounded-[18px] overflow-hidden text-secondary bg-accent">
        
        <div className="w-full h-[100px]">
          <Image src="/img/spaghetti.png" width={500} height={100} alt="food"/>
        </div>

       
        <div className="p-4 flex flex-col justify-between h-full">
          
          <div>
            <h3 className="text-[15px] font-semibold ">
              Double Cheese Spaghetti
            </h3>
            <p className="text-sm  mt-2">The original taste from Italy</p>
          </div>

          
          <div className="flex justify-between items-center ">
            <div className=" font-semibold ">$12</div>
            <button className="bg-primary text-white py-2 px-4 rounded-full text-sm flex items-center">
              <MdShoppingCart className="mr-2" /> 
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
