import { MdDelete } from "react-icons/md";
import Image from "next/image";

export default function CartItem({ item, onIncrease, onDecrease, onDelete }) {
  const { id, name, image, price, amount } = item;
  const imageUrl = image.replace(/^url\(["']?|["']?\)$/g, ''); // Remove `url()` wrapper

  return (
    <div className="w-[398px] h-[133px] flex flex-col justify-center items-center shadow-xl rounded-[18px] overflow-hidden text-secondary bg-accent p-4">
      <div className="flex items-center space-x-4">
        {/* Image Section */}
        <div className="bg-white rounded-[12px]">
          <Image
            src={imageUrl}  // Pass the raw URL here
            width={100}
            height={100}
            alt={name}
            className="object-cover rounded-[12px]"
          />
        </div>

        {/* Text and Buttons Section */}
        <div className="flex flex-1 flex-col justify-between h-full space-y-2">
          {/* Food Title */}
          <h3 className="text-[12px] font-semibold text-gray-800">{name}</h3>

          {/* Action Buttons */}
          <div className="flex items-center justify-between bg-white rounded-[18px] py-2 px-4 shadow-sm">
            {/* Delete Button */}
            <button
              className="text-secondary hover:text-red-700 mr-1"
              onClick={() => onDelete(id)}
              aria-label={`Delete ${name}`}
            >
              <MdDelete className="w-[26px] h-[26px] text-white font-extrabold bg-primary rounded-full p-[4px] hover:bg-red-500" />
            </button>

            {/* Quantity Buttons */}
            <div className="flex items-center space-x-3 ml-1">
              <button
                className="text-[18px] w-[26px] h-[26px] font-extrabold text-white bg-primary rounded-full"
                onClick={() => onDecrease(id)}
                aria-label={`Decrease quantity of ${name}`}
              >
                −
              </button>
              <span className="text-[16px] font-semibold text-gray-800">
                {amount || 1}
              </span>
              <button
                className="text-[18px] w-[26px] h-[26px] font-extrabold text-white bg-primary rounded-full"
                onClick={() => onIncrease(id)}
                aria-label={`Increase quantity of ${name}`}
              >
                +
              </button>
            </div>
          </div>
        </div>

        {/* Price Section */}
        <span className="text-[18px] font-sm text-gray-800">
          ${(price || 0) * (amount || 1).toFixed(2)}
        </span>
      </div>
    </div>
  );
}
