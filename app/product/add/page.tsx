"use client";

import { useParams } from "next/navigation";
import { useState } from "react";


export default function AddProductPage() {
  const params = useParams();
  const id = params.id as string;

  const [formData, setFormData] = useState({
    image: "",
    artisan: "",
    category: "Things",
    price: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log("Product ID:", id);
    console.log("Updated data:", formData);
    alert("Product updated successfully!");
  }

  return (
    <main className="min-h-screen bg-gray-100 p-6">


      <section className="max-w-2xl mx-auto bg-white rounded-2xl shadow p-6">
        <h1 className="text-2xl font-bold text-center mb-6">
          Add Product
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Image */}
          <div>
            <label className="block text-sm font-medium">Image URL</label>
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              className="w-full border rounded-lg p-2"
            />
          </div>

          {/* Artisan */}
          <div>
            <label className="block text-sm font-medium">Artisan</label>
            <input
              type="text"
              name="artisan"
              value={formData.artisan}
              onChange={handleChange}
              className="w-full border rounded-lg p-2"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium">Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full border rounded-lg p-2"
            >
              <option value="Things">Things</option>
              <option value="Colors">Colors</option>
              <option value="Decor">Decor</option>
            </select>
          </div>

          {/* Price */}
          <div>
            <label className="block text-sm font-medium">Price ($)</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full border rounded-lg p-2"
            />
          </div>

          {/* Preview */}
          <div className="mt-4">
            <p className="font-semibold mb-2">Preview:</p>
            <img
              src={formData.image}
              alt="Preview"
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-between mt-6">
            <button
              type="button"
              onClick={() => history.back()}
              className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-4 py-2 rounded bg-pink-500 text-white hover:bg-pink-600"
            >
              Save Changes
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}
