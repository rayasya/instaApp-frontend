import Image from "next/image";

export default function Home() {
  return (
    <div className=" min-h-screen text-white flex flex-col max-w-3xl mx-auto">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 shadow-md sticky top-0 z-10 bg-primary">
        <a href="#" className="text-2xl font-bold">
          InstaApp
        </a>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <i className="ri-notification-line text-2xl"></i>
            <div className="absolute top-0 right-0 bg-red-500 size-2.5 rounded-full"></div>
          </div>
          <div className="relative">
            <i className="ri-chat-3-line text-2xl"></i>
            <div className="absolute top-0 right-0 bg-red-500 size-2.5 rounded-full"></div>
          </div>
        </div>
      </nav>

      {/* Story Section */}
      <section className="overflow-x-auto py-4 border-b max-w-3xl">
        <div className="flex space-x-4 px-4 min-w-max justify-center">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="flex flex-col items-center flex-shrink-0 w-16"
            >
              <div
                className={`rounded-full size-16 ${
                  i === 0 ? "bg-blue-500" : "bg-white"
                } shadow-md flex items-center justify-center overflow-hidden`}
              >
                {i === 0 ? (
                  <i className="ri-add-line text-white text-2xl"></i>
                ) : (
                  <Image
                    src={`https://picsum.photos/seed/${i}/200/200`}
                    alt={`Story ${i}`}
                    width={64}
                    height={64}
                  />
                )}
              </div>
              <p className="text-center text-xs mt-2 truncate">
                {i === 0 ? "Tambah" : `User ${i}`}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Home Feed Section */}
      <section className="p-4 sm:p-6 max-w-xl mx-auto mb-8">
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className=" shadow-md rounded-xl mb-8 border border-gray-200/20 overflow-hidden"
          >
            <div className="p-4">
              {/* Post Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="rounded-full size-10 bg-blue-300"></div>
                  <h1 className="text-sm font-medium">Username Akun</h1>
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
              <div className="flex items-center justify-between mt-4 text-gray-700">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <i className="ri-heart-line text-2xl"></i>
                    <p className="text-sm">100</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="ri-chat-3-line text-2xl"></i>
                    <p className="text-sm">50</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="ri-send-plane-line text-2xl"></i>
                    <p className="text-sm">20</p>
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
    </div>
  );
}
