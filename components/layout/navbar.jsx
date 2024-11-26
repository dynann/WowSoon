import { useRouter } from 'next/navigation';
import { FaHome, FaShoppingCart, FaHistory, FaUser } from 'react-icons/fa'; 
export default function NavigationBar(){
  const router = useRouter()
  const accountClick = () => {
    router.replace('/user')
  }
  const homeClick = () => {
    router.replace('/home')
  }
  const pastOrderClick = () => {
    router.replace('/past_order')
  }
  const cartClick = () => {
    router.replace('/cart')
  }
    return (
        <div className="fixed bottom-0 left-0 right-0 bg-black text-white p-4 flex justify-around items-center shadow-lg   ">
          
          <button className="flex flex-col items-center cursor-pointer" onClick={homeClick}>
            <FaHome className="text-2xl" />
            <span className="text-xs mt-1">Home</span>
          </button>
          
    
          
          <button className="flex flex-col items-center cursor-pointer" onClick={cartClick}>
            <FaShoppingCart className="text-2xl" />
            <span className="text-xs mt-1">Cart</span>
          </button>
    
        
          <button className="flex flex-col items-center cursor-pointer" onClick={pastOrderClick}>
            <FaHistory className="text-2xl" />
            <span className="text-xs mt-1">History</span>
          </button>
    
          
          <button className="flex flex-col items-center cursor-pointer" onClick={accountClick}>
            <FaUser className="text-2xl" />
            <span className="text-xs mt-1">Account</span>
          </button>
        </div>
      );
}