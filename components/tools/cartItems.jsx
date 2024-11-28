import { MdDelete } from "react-icons/md";

export default function CartItem({ item, onIncrease, onDecrease, onDelete }) {
  const { id, title, image, price, quantity } = item;

  return (
    <div className="w-[398px] h-[133px] flex flex-col justify-center items-center shadow-md rounded-[18px] overflow-hidden text-secondary bg-accent p-4">
      <div className="flex items-center space-x-4">
        {/* Image Section */}
        <div className="bg-white rounded-[12px]">
          <img
            src={image}
            width={100}
            height={100}
            alt={title}
            className="object-cover rounded-[12px]"
          />
        </div>

        {/* Text and Buttons Section */}
        <div className="flex flex-1 flex-col justify-between h-full space-y-2">
          {/* Food Title */}
          <h3 className="text-[12px] font-semibold text-gray-800">{title}</h3>

          {/* Action Buttons */}
          <div className="flex items-center justify-between bg-white rounded-[18px] py-2 px-4 shadow-sm">
            {/* Delete Button */}
            <button
              className="text-secondary hover:text-red-700"
              onClick={() => onDelete(id)}
            >
              <MdDelete className="w-[26px] h-[26px] text-white bg-primary rounded-full p-[4px] hover:bg-red-500" />
            </button>

            {/* Quantity Buttons */}
            <div className="flex items-center space-x-3">
              <button
                className="text-[18px] w-[26px] h-[26px] font-extrabold text-white bg-primary rounded-full"
                onClick={() => onDecrease(id)}
              >
                −
              </button>
              <span className="text-[16px] font-semibold text-gray-800">
                {quantity}
              </span>
              <button
                className="text-[18px] w-[26px] h-[26px] font-extrabold text-white bg-primary rounded-full"
                onClick={() => onIncrease(id)}
              >
                +
              </button>
            </div>
          </div>
        </div>

        {/* Price Section */}
        <span className="text-[18px] font-sm text-gray-800">
          ${(price * quantity).toFixed(2)}
        </span>
      </div>
    </div>
  );
}
