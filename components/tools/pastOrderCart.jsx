import Image from "next/image";
import { MdDelete } from "react-icons/md";
import Button from "../tools/signIn&UpButton";
export default function PastOrderCart(){
  return(
    <div className="w-[398px] h-[220px] bg-accent rounded-[24px] flex flex-col items-center justify-center relative">
    <button className="absolute top-0 right-0 p-4">
      <MdDelete className="w-[34px] h-[34px] text-primary" />
    </button>

    <div className="w-full flex justify-center items-center px-2">
      <div className="flex flex-col justify-center items-center w-[199px]  rounded-[12px]">
        <div className="flex flex-col items-center">
          <div className="rounded-full w-[100px] h-[100px] bg-white overflow-hidden">
            <Image src="/img/kfc.png" width={100} height={100} alt="food" />
          </div>
          <span className="font-semibold text-secondary mt-2">KPC</span>
        </div>
      </div>
    </div>
    <div className="flex justify-evenly  w-[400px] mt-4">
    <Button className="w-[120px] h-[37px] p-1 bg-secondary text-white" type="sumbit" text="Reorder"/>
    <Button className="w-[120px] h-[37px] p-1 bg-secondary text-white" type="sumbit" text="Rate"/>
    </div>

  </div>
  )
}