"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function BottomBarNav() {
  const router = useRouter();
  const [active, setActive] = useState("/");

  const handleNavigate = (path: string) => {
    setActive(path);
    router.push(path);
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-primary border-t border-gray-200/50 p-4 flex justify-around">
      <i
        className={`${
          active === "/"
            ? "ri-home-fill text-white"
            : "ri-home-line text-gray-500"
        } text-2xl`}
        onClick={() => handleNavigate("/")}
      />
      <i
        className={`${
          active === "/explore"
            ? "ri-search-fill text-white"
            : "ri-search-line text-gray-500"
        } text-2xl`}
        onClick={() => handleNavigate("/explore")}
      />
      <i
        className={`${
          active === "/add"
            ? "ri-add-circle-fill text-white"
            : "ri-add-circle-line text-gray-500"
        } text-2xl`}
        onClick={() => handleNavigate("/add")}
      />
      <i
        className={`${
          active === "/liked"
            ? "ri-heart-fill text-white"
            : "ri-heart-line text-gray-500"
        } text-2xl`}
        onClick={() => handleNavigate("/liked")}
      />
      <i
        className={`${
          active === "/profile"
            ? "ri-user-fill text-white"
            : "ri-user-line text-gray-500"
        } text-2xl`}
        onClick={() => handleNavigate("/profile")}
      />
    </nav>
  );
}
