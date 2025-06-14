import Image from "next/image";

export default function Explore() {
  return (
    <div className="min-h-screen">
      {/* Search Section */}
      <section className="p-4">
        <div className="flex items-center rounded-2xl border border-gray-300/20 px-4 py-2 shadow-sm">
          <i className="ri-search-line text-2xl text-gray-500"></i>
          <input
            type="text"
            placeholder="Search"
            className="w-full ml-2 p-2 bg-transparent focus:outline-none text-sm"
          />
        </div>
      </section>

      {/* Masonry Section */}
      <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 sm:gap-4 p-2 sm:p-4">
        {[...Array(50)].map((_, i) => (
          <div key={i} className="relative rounded-2xl overflow-hidden">
            <Image
              src={`https://picsum.photos/seed/${i + 1}/400/600`}
              alt={`Post ${i}`}
              width={400}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </section>
    </div>
  );
}
