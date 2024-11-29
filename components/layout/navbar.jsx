import { useRouter } from 'next/navigation';
import { FaHome, FaShoppingCart, FaHistory, FaUser } from 'react-icons/fa';

export default function NavigationBar() {
  const router = useRouter();

  const navigate = (path) => {
    router.replace(path);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black text-white w-full p-4 sm:p-6 lg:p-8 flex justify-around items-center shadow-lg sm:hidden lg:flex">
      <button
        className="flex flex-col items-center cursor-pointer"
        onClick={() => navigate('/home')}
      >
        <FaHome className="text-2xl" />
        <span className="text-xs mt-1">Home</span>
      </button>

      <button
        className="flex flex-col items-center cursor-pointer"
        onClick={() => navigate('/cart')}
      >
        <FaShoppingCart className="text-2xl" />
        <span className="text-xs mt-1">Cart</span>
      </button>

      <button
        className="flex flex-col items-center cursor-pointer"
        onClick={() => navigate('/past_order')}
      >
        <FaHistory className="text-2xl" />
        <span className="text-xs mt-1">History</span>
      </button>

      <button
        className="flex flex-col items-center cursor-pointer"
        onClick={() => navigate('/user')}
      >
        <FaUser className="text-2xl" />
        <span className="text-xs mt-1">Account</span>
      </button>
    </div>
  );
}
