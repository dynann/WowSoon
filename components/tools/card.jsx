export default function Card() {
  return (
    <div className="min-w-[250px] sm:min-w-[300px] lg:min-w-[350px]  my-6">
      <div className="flex sm:flex-row justify-center items-center lg:flex-col bg-primary shadow-md rounded-[24px] overflow-hidden">
        {/* Content Section */}
        <div className="p-4 sm:p-6 flex flex-col justify-between w-full sm:w-2/3 lg:w-full">
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-white">
              Free Delivery for Spaghetti
            </h3>
            <p className="text-sm sm:text-base text-white mt-2">
              Up to 3 times a day
            </p>
          </div>
          <button className="mt-4 bg-secondary w-[132px] h-[40px] text-white py-2 px-4 rounded-[24px] shadow hover:bg-secondary-dark transition">
            Order Now
          </button>
        </div>

        {/* Image Section */}
        <div className="w-full sm:w-1/3">
          <img
            src="/img/spaghetti.png"
            alt="Spaghetti"
            className="w-full h-auto object-cover rounded-b-[24px] sm:rounded-none"
          />
        </div>
      </div>
    </div>
  );
}
