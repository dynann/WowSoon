import Link from "next/link";

function ButtonWithIcon({ label, icon: Icon, route, onClick }) {
  return (
    <div className="relative w-full max-w-xs mb-4 h-full">
      {route ? (
        <Link
          href={route}
          className="flex items-center bg-accent text-secondary pl-[75px] w-[350px] h-[59px]  py-2 px-14 rounded-[12px] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-150"
        >
          <Icon className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-500" size={24} />
          <span className="absolute left-[62px] top-1/2 transform -translate-y-1/2 text-gray-500">
            &#8739;
          </span>
          {label}
        </Link>
      ) : (
        <button
          onClick={onClick}
          className="flex items-center  bg-accent text-secondary pl-[75px] w-[350px] h-[59px]  py-2 px-14 rounded-[12px] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-150"
        >
          <Icon className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-500" size={24} />
          <span className="absolute left-[62px] top-1/2 transform -translate-y-1/2 text-gray-500">
            &#8739;
          </span>
          {label}
        </button>
      )}
    </div>
  );
}

export default ButtonWithIcon;
