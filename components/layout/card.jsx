export default function Card() {
  return (
    <div>
      <div className="max-w-md lg:flex  flex shadow-md rounded-[24px] overflow-hidden w-[404px] h-[175px] justify-center items-center bg-primary">
        {/* Left Side: Text Content */}
        <div className="p-4 pl-[1.5rem] flex flex-col justify-between w-2/3">
          <div>
            <h3 className="text-lg font-semibold text-white">
              Free Delivery for Spaghetti
            </h3>
            <p className="text-sm text-white mt-2">Up to 3 times a day</p>
          </div>
          <button className="mt-4 bg-secondary w-[132px] h-[40px] text-white py-2 px-4 rounded-[24px] shadow hover:bg-secondary-dark transition">
            Order Now
          </button>
        </div>
        {/* Right Side: Image */}
        <div className="w-full">
          <img
            src="/img/spaghetti.png"
            alt="Spaghetti"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
}
