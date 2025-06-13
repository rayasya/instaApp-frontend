"use client";

import { useState } from "react";
import Image from "next/image";

export default function ExploreSection() {
  const [activeTab, setActiveTab] = useState("posts");

  return (
    <>
      {/* Header Section */}
      <section className="p-4">
        <h1 className="text-2xl font-bold">Username</h1>
        <div className="flex items-center justify-around mt-5">
          <Image
            src="https://picsum.photos/seed/1153/400/400"
            alt="Profile"
            width={200}
            height={200}
            className="size-24 rounded-full"
          />
          <div className="flex flex-col gap-4">
            <p>Name</p>
            <div className="flex items-center justify-evenly gap-10">
              <div className="flex flex-col items-center">
                <span className="text-lg font-bold">0</span>
                <span className="text-sm">Posts</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-lg font-bold">0</span>
                <span className="text-sm">Followers</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-lg font-bold">0</span>
                <span className="text-sm">Following</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="gap-10 p-4">
        {/* Tab Navigation */}
        <nav className="flex items-center justify-evenly gap-10">
          <button
            className={`text-lg font-bold pb-1 border-b-2 ${
              activeTab === "posts" ? "border-blue-500" : "border-transparent"
            }`}
            onClick={() => setActiveTab("posts")}
          >
            Posts
          </button>
          <button
            className={`text-lg font-bold pb-1 border-b-2 ${
              activeTab === "saved" ? "border-blue-500" : "border-transparent"
            }`}
            onClick={() => setActiveTab("saved")}
          >
            Saved
          </button>
        </nav>

        {/* Tab Content */}
        <div className="grid grid-cols-3 gap-2 p-4">
          {activeTab === "posts" &&
            [...Array(20)].map((_, i) => (
              <div key={i} className="relative rounded-md overflow-hidden">
                <Image
                  src={`https://picsum.photos/seed/post-${i + 1}/400/500`}
                  alt={`Post ${i}`}
                  width={400}
                  height={500}
                />
              </div>
            ))}

          {activeTab === "saved" &&
            [...Array(10)].map((_, i) => (
              <div key={i} className="relative rounded-md overflow-hidden">
                <Image
                  src={`https://picsum.photos/seed/saved-${i + 1}/400/500`}
                  alt={`Saved ${i}`}
                  width={400}
                  height={500}
                />
              </div>
            ))}
        </div>
      </section>
    </>
  );
}
