import { MdShoppingCart } from "react-icons/md";
export default function Container() {
  return (
    <div>
      <div className="w-[192px] h-[228px] flex flex-col shadow-md rounded-[18px] overflow-hidden text-secondary bg-[#D1D1D1]">
        {/* Image Section */}
        <div className="w-full h-[100px]">
          <img
            src="/img/spaghetti.png"
            alt="Spaghetti"
            className="object-cover" // Ensures the image fills the fixed height and width of the card
          />
        </div>

        {/* Content Section */}
        <div className="p-4 flex flex-col justify-between h-full">
          {/* Food Details */}
          <div>
            <h3 className="text-[15px] font-semibold ">
              Double Cheese Spaghetti
            </h3>
            <p className="text-sm  mt-2">The original taste from Italy</p>
          </div>

          {/* Price and Button */}
          <div className="flex justify-between items-center ">
            <div className=" font-semibold ">$12</div>
            <button className="bg-primary text-white py-2 px-4 rounded-full text-sm flex items-center">
              <MdShoppingCart className="mr-2" /> {/* Cart Icon */}
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
