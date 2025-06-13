"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [active, setActive] = useState("/");

  const handleNavigate = (path: string) => {
    setActive(path);
    router.push(path);
  };
  return (
    <>
      <nav className="flex items-center justify-between p-4">
        <a href="" className="text-2xl font-bold">
          InstaApp
        </a>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <i className="ri-notification-line text-2xl"></i>
            <div className="absolute top-0 right-0 bg-red-500 size-3 rounded-full"></div>
          </div>
          <div className="relative">
            <i className="ri-chat-3-line text-2xl"></i>
            <div className="absolute top-0 right-0 bg-red-500 size-3 rounded-full"></div>
          </div>
        </div>
      </nav>

      {/* Story Section */}
      <section className="flex items-center overflow-x-auto">
        <div className="flex space-x-2 mb-3">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className={`rounded-full size-20 ${
                i === 0 ? "bg-blue-500" : "bg-white"
              } shadow-lg m-2 ${
                i === 0 ? "flex items-center justify-center" : ""
              }`}
            >
              <div
                className={
                  i === 0
                    ? "flex flex-col items-center justify-center"
                    : "h-full w-full"
                }
              >
                {i === 0 && <i className="ri-add-line text-white text-2xl"></i>}
                {i !== 0 && (
                  <Image
                    src={`https://picsum.photos/seed/${i}/200/200`}
                    alt={`Story ${i}`}
                    className="rounded-full mb-2"
                    width={200}
                    height={200}
                  />
                )}
                <p className="text-center text-xs">
                  {i === 0 ? "Tambah Story" : `User ${i}`}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Home Feed Section */}
      <section className="p-2 mb-10">
        {/* Post */}
        {[...Array(5)].map((_, index) => (
          <div
            key={index + 1}
            className="w-full text-white border border-white/20 rounded-xl mt-4 mb-8"
          >
            <div className="p-4">
              {/* Post Header */}
              <div className="flex items-center justify-between">
                <div className="flex gap-4 items-center">
                  <div className="rounded-full size-10 bg-blue-300 shadow-lg"></div>
                  <h1 className="text-sm">Username Akun</h1>
                </div>
                <i className="ri-more-2-fill text-xl"></i>
              </div>

              {/* Post Image */}
              <div className="mt-4">
                <Image
                  src={`https://picsum.photos/seed/${index + 1}/800/600`}
                  alt="Post"
                  className="w-full rounded-lg"
                  width={800}
                  height={600}
                />
              </div>

              {/* Post Actions */}
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <i className="ri-heart-line text-2xl"></i>
                    <p>100</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="ri-chat-3-line text-2xl"></i>
                    <p>50</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="ri-send-plane-line text-2xl"></i>
                    <p>20</p>
                  </div>
                </div>
                <i className="ri-bookmark-line text-2xl"></i>
              </div>

              {/* Post Description */}
              <div className="mt-2">
                <p className="text-sm">
                  <span className="font-bold">Username Akun</span> Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Bottom Bar Navigation Section */}
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
    </>
  );
}
