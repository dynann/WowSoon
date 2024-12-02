import Image from "next/image";
import { MdDelete } from "react-icons/md";
export default function CartRestaurant (){
  return(
    <div className="w-[398px] h-[133px]  bg-accent rounded-[24px] flex items-center text-black">
    <div className="w-full flex justify-between items-center px-2">
      <div className="flex justify-around items-center  w-[199px] px-2">
        <div className="rounded-full w-[100px] h-[100px] bg-white">
        <Image
          src="/img/kfc.png"
          width={100}
          height={100}
          alt="food"
        />
        </div>
        <span className="font-semibold">KPC</span>
      </div>
      <button className="btn btn-active bg-transparent border-none shadow-none pr-4 hover:bg-transparent">
      <MdDelete className="text-xl text-primary hover:text-red-500" />
      </button>
    </div>
  </div>
  )
}