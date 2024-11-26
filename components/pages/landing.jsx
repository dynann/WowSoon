import Link from "next/link";
import Button from "/components/signIn&UpButton.js";

export default function LandingPage() {
  return (
    <div className=" relative flex flex-col items-center font-Kulim ">
      <div className="relative ">
        <img
          src="/img/Landing.png"
          alt="Landing page logo"
          className="w-full"
        />

        <Link href="/register">
          <Button
            className="
            text-secondary 
  hover:bg-gray-200
   hover:text-primary
    absolute 
    left-1/2 
    sm:top-[56%]
    transform 
    -translate-x-1/2 
    sm:-translate-y-1/2 
    top-[85%] 
    -translate-y-0 
     bg-white 
    
  "
            type="submit"
            text="Let's get started!"
          />
        </Link>
      </div>
    </div>
  );
}
