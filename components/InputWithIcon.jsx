import { FaUser, FaLock, FaPhone, FaEnvelope } from 'react-icons/fa';  // Import icons from react-icons

function InputWithIcon({ type, placeholder, value, onChange, icon }) {
  // Set the icon dynamically based on the input type (email, phone, password, etc.)
  const renderIcon = () => {
    switch (icon) {
      case "user":
        return <FaUser className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-500" size={24} />;
      case "lock":
        return <FaLock className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-500" size={24} />;
      case "phone":
        return <FaPhone className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-500" size={24} />;
      case "email":
        return <FaEnvelope className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-500" size={24} />;
      default:
        return null;
    }
  };

  return (
    <div className="relative w-full max-w-xs mb-2">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="bg-white text-primary pl-[75px] w-full h-[59px] border-[1px] border-black py-2 px-14 rounded-[12px] focus:outline-none"
      />
      {renderIcon()}
      <span className="absolute left-[62px] top-1/2 transform -translate-y-1/2 text-gray-500">
        &#8739;
      </span>
    </div>
  );
}

export default InputWithIcon;
