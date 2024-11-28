"use client";
import { useState } from "react";
import { IoNotificationsOutline } from "react-icons/io5";

export function Notification() {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const notifications = ["You have a new message!", "Your order is on the way"];

  return (
    <div className="relative">
      <IoNotificationsOutline
        className="text-2xl cursor-pointer"
        onClick={() => setIsNotificationOpen(!isNotificationOpen)}
      />
      {isNotificationOpen && (
        <div className="absolute top-8 right-0 w-64 bg-white shadow-lg rounded-md p-2 z-10 text-secondary">
          {notifications.length > 0 ? (
            <ul>
              {notifications.map((notification, index) => (
                <li
                  key={index}
                  className="py-2 px-3 hover:bg-gray-100 rounded cursor-pointer text-secondary"
                >
                  {notification}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500 text-sm">No new notifications</p>
          )}
        </div>
      )}
    </div>
  );
}
