import Image from "next/image";

export default function Explore() {
  return (
    <>
      {/* Search Section */}
      <section className="p-4">
        <div className="flex items-center rounded-2xl border border-gray-200/50 p-2">
          <i className="ri-search-line text-2xl"></i>
          <input
            type="text"
            placeholder="Search"
            className="w-full p-2 focus:outline-none"
          />
        </div>
      </section>

      {/* Masonry Section */}
      <section className="grid grid-cols-3 gap-4 p-4">
        {[...Array(50)].map((_, i) => (
          <div key={i} className="relative rounded-2xl overflow-hidden">
            <Image
              src={`https://picsum.photos/seed/${i + 1}/400/400`}
              alt={`Post ${i}`}
              width={400}
              height={400}
            />
          </div>
        ))}
      </section>
    </>
  );
}
