import { FaHome, FaShoppingCart, FaHistory, FaUser } from 'react-icons/fa'; 
export default function NavigationBar(){
    return (
        <div className="fixed bottom-0 left-0 right-0 bg-black text-white p-4 flex justify-around items-center shadow-lg   ">
          {/* Home Icon */}
          <div className="flex flex-col items-center cursor-pointer">
            <FaHome className="text-2xl" />
            <span className="text-xs mt-1">Home</span>
          </div>
    
          {/* Cart Icon */}
          <div className="flex flex-col items-center cursor-pointer">
            <FaShoppingCart className="text-2xl" />
            <span className="text-xs mt-1">Cart</span>
          </div>
    
          {/* Order History Icon */}
          <div className="flex flex-col items-center cursor-pointer">
            <FaHistory className="text-2xl" />
            <span className="text-xs mt-1">History</span>
          </div>
    
          {/* User Account Icon */}
          <div className="flex flex-col items-center cursor-pointer">
            <FaUser className="text-2xl" />
            <span className="text-xs mt-1">Account</span>
          </div>
        </div>
      );
}