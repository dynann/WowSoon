import { MdShoppingCart } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
export default function Container({food}) {
  return (
    <div>
      <div className="w-[192px] h-[228px] flex flex-col shadow-md rounded-[18px] overflow-hidden text-secondary bg-accent">
        
        <div className="w-full h-[100px] mb-5 border-zinc-50">
          <Link href="/home/food-detail"><Image src={"http:" + food.fields.featureImage.fields.file.url} width={500} height={100} alt="food"/></Link>
          
        </div>
        <div className="p-4 flex flex-col justify-between h-full">
          <div>
            <h3 className="text-[14px] font-semibold ">
              {food.fields.name}
            </h3>
            <p className="text-[10px]  mt-2">include protein shake</p>
          </div>

          
          <div className="flex justify-between items-center mt-2">
            <div className=" font-[16px] ">${food.fields.price}</div>
            <button className="bg-primary text-white py-[6px] px-[9px] rounded-[14px] text-[12px] flex items-center">
              <MdShoppingCart className="font-[12px]" /> 
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
