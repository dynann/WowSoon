import Image from "next/image";
import { MdDelete } from "react-icons/md";
export default function CartResturant (){
  return(
    <div className="w-[380px] h-[133px] bg-accent rounded-[24px] flex items-center">
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
      <button className="pr-4">
      <MdDelete className="w-[34px] h-[34px] text-primary" />
      </button>
    </div>
  </div>
  )
}