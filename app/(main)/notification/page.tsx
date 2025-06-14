"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ActivityPage() {
  const [activeTab, setActiveTab] = useState<"you" | "following">("you");

  return (
    <main className="max-w-lg mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Notification</h1>

      {/* Manual Tabs */}
      <div className="flex border-b mb-4">
        <button
          onClick={() => setActiveTab("you")}
          className={`flex-1 text-center py-2 font-medium ${
            activeTab === "you"
              ? "border-b-2 border-blue-500 text-blue-600"
              : "text-gray-500"
          }`}
        >
          You
        </button>
        <button
          onClick={() => setActiveTab("following")}
          className={`flex-1 text-center py-2 font-medium ${
            activeTab === "following"
              ? "border-b-2 border-blue-500 text-blue-600"
              : "text-gray-500"
          }`}
        >
          Following
        </button>
      </div>

      {activeTab === "you" ? (
        <div className="space-y-6">
          {/* === Today === */}
          <section>
            <h2 className="font-semibold text-gray-700 mb-2">Today</h2>

            {/* 1. Like */}
            <div className="flex items-center justify-between py-3 border-t">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200">
                  <Image
                    src="/placeholder.svg"
                    alt="janedoe"
                    width={40}
                    height={40}
                  />
                </div>
                <div className="text-sm">
                  <p className="text-gray-800">
                    <Link
                      href="/profile/janedoe"
                      className="font-semibold hover:underline"
                    >
                      janedoe
                    </Link>{" "}
                    liked your photo.
                  </p>
                  <span className="text-xs text-gray-500">2h</span>
                </div>
              </div>
              <div className="w-10 h-10 overflow-hidden rounded-md">
                <Image
                  src="/placeholder.svg"
                  alt="post"
                  width={40}
                  height={40}
                />
              </div>
            </div>

            {/* 2. Follow */}
            <div className="flex items-center justify-between py-3 border-t">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200">
                  <Image
                    src="/placeholder.svg"
                    alt="mike123"
                    width={40}
                    height={40}
                  />
                </div>
                <div className="text-sm">
                  <p className="text-gray-800">
                    <Link
                      href="/profile/mike123"
                      className="font-semibold hover:underline"
                    >
                      mike123
                    </Link>{" "}
                    started following you.
                  </p>
                  <span className="text-xs text-gray-500">5h</span>
                </div>
              </div>
              <button className="text-sm px-3 py-1 rounded-md border text-blue-600 border-blue-500 hover:bg-blue-50">
                Follow
              </button>
            </div>

            {/* 3. Comment */}
            <div className="flex items-center justify-between py-3 border-t">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200">
                  <Image
                    src="/placeholder.svg"
                    alt="sarah"
                    width={40}
                    height={40}
                  />
                </div>
                <div className="text-sm">
                  <p className="text-gray-800">
                    <Link
                      href="/profile/sarah"
                      className="font-semibold hover:underline"
                    >
                      sarah
                    </Link>{" "}
                    commented: Love this shot!
                  </p>
                  <span className="text-xs text-gray-500">6h</span>
                </div>
              </div>
              <div className="w-10 h-10 overflow-hidden rounded-md">
                <Image
                  src="/placeholder.svg"
                  alt="post"
                  width={40}
                  height={40}
                />
              </div>
            </div>
          </section>

          {/* === This Week === */}
          <section>
            <h2 className="font-semibold text-gray-700 mb-2">This Week</h2>

            {/* 4. Mention */}
            <div className="flex items-center justify-between py-3 border-t">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200">
                  <Image
                    src="/placeholder.svg"
                    alt="alex"
                    width={40}
                    height={40}
                  />
                </div>
                <div className="text-sm">
                  <p className="text-gray-800">
                    <Link
                      href="/profile/alex"
                      className="font-semibold hover:underline"
                    >
                      alex
                    </Link>{" "}
                    mentioned you in a comment.
                  </p>
                  <span className="text-xs text-gray-500">2d</span>
                </div>
              </div>
              <div className="w-10 h-10 overflow-hidden rounded-md">
                <Image
                  src="/placeholder.svg"
                  alt="post"
                  width={40}
                  height={40}
                />
              </div>
            </div>

            {/* 5. Like */}
            <div className="flex items-center justify-between py-3 border-t">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200">
                  <Image
                    src="/placeholder.svg"
                    alt="emma"
                    width={40}
                    height={40}
                  />
                </div>
                <div className="text-sm">
                  <p className="text-gray-800">
                    <Link
                      href="/profile/emma"
                      className="font-semibold hover:underline"
                    >
                      emma
                    </Link>{" "}
                    liked your photo.
                  </p>
                  <span className="text-xs text-gray-500">3d</span>
                </div>
              </div>
              <div className="w-10 h-10 overflow-hidden rounded-md">
                <Image
                  src="/placeholder.svg"
                  alt="post"
                  width={40}
                  height={40}
                />
              </div>
            </div>

            {/* 6. Follow */}
            <div className="flex items-center justify-between py-3 border-t">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200">
                  <Image
                    src="/placeholder.svg"
                    alt="robert"
                    width={40}
                    height={40}
                  />
                </div>
                <div className="text-sm">
                  <p className="text-gray-800">
                    <Link
                      href="/profile/robert"
                      className="font-semibold hover:underline"
                    >
                      robert
                    </Link>{" "}
                    started following you.
                  </p>
                  <span className="text-xs text-gray-500">5d</span>
                </div>
              </div>
              <button className="text-sm px-3 py-1 rounded-md border text-blue-600 border-blue-500 hover:bg-blue-50">
                Follow
              </button>
            </div>
          </section>
        </div>
      ) : (
        <div className="text-center text-gray-500 py-12">
          <p>Activity from people you follow will appear here.</p>
        </div>
      )}
    </main>
  );
}
