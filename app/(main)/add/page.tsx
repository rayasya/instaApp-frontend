"use client";

import Image from "next/image";
import { useState } from "react";

export default function AddPost() {
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  };

  return (
    <section className="p-6 max-w-2xl mx-auto text-white">
      <h2 className="text-2xl font-bold mb-6 ">Make a Post</h2>

      <form
        action="/api/posts"
        method="POST"
        encType="multipart/form-data"
        className="flex flex-col gap-6"
      >
        {/* Upload Image */}
        <div>
          <label htmlFor="image" className="block font-semibold mb-2">
            Upload Gambar{" "}
            <span className="text-sm text-gray-500">(opsional)</span>
          </label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full border border-gray-300 rounded-lg p-2 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
          {imagePreview && (
            <div className="mt-4">
              <Image
                src={imagePreview}
                alt="Preview"
                className="w-full h-auto max-h-[400px] object-cover rounded-xl border"
                width={400}
                height={400}
              />
            </div>
          )}
        </div>

        {/* Caption */}
        <div>
          <label htmlFor="caption" className="block font-semibold mb-2">
            Caption <span className="text-sm text-gray-500">(opsional)</span>
          </label>
          <textarea
            id="caption"
            name="caption"
            rows={4}
            placeholder="Tulis caption kamu di sini..."
            className="w-full border border-gray-300 p-3 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 transition-all duration-200 text-white font-bold py-3 rounded-xl shadow-md"
        >
          Posting Sekarang
        </button>
      </form>
    </section>
  );
}
