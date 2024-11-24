import Link from "next/link";

export default function LandingPage() {
  return (
    <div className=" relative p-8 flex flex-col space-y-4 items-center font-Kulim ">
      <div className="mt-16 flex flex-col items-center">
        <div className="bg-white rounded-full p-4 w-20 h-20 flex items-center justify-center mb-4">
            {/* logo section */}
          <div className="relative">
            <div
              className="w-6 h-8 bg-primary absolute left-0 transform -rotate-45"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 50% 100%)" }}
            ></div>
            <div
              className="w-4 h-6 bg-primary absolute right-0 transform rotate-45"
              style={{ clipPath: "polygon(0 0, 100% 0, 50% 100%, 0 100%)" }}
            ></div>
          </div>
        </div>
        <h1 className="text-white text-3xl font-bold">WOWSOON</h1>
        {/* logo section */}
      </div>
      <div className="bg-white text-gray-800 w-full max-w-xs py-4 px-6 rounded-full  flex items-center justify-center ">
      <Link href="/register"><button> continue </button></Link>
      </div>
    </div>
  );
}
