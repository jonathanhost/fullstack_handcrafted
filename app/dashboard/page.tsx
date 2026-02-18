
import Link from "next/link";

interface Product {
  id: number;
  name: string;
  image: string;
}

export default function MyProductsPage() {
  const products: Product[] = [
    {
      id: 1,
      name: "Lorem ipsum dolor",
      image: "https://via.placeholder.com/300x200?text=Image",
    },
    {
      id: 2,
      name: "Lorem ipsum dolor",
      image: "https://via.placeholder.com/300x200?text=Image",
    },
    {
      id: 3,
      name: "Lorem ipsum dolor",
      image: "https://via.placeholder.com/300x200?text=Image",
    },
    {
      id: 4,
      name: "Lorem ipsum dolor",
      image: "https://via.placeholder.com/300x200?text=Image",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-100 p-6">

      {/* Page Title */}
      <section className="max-w-5xl mx-auto bg-white rounded-2xl shadow p-6 mb-6">
        <h1 className="text-2xl font-bold text-center text-gray-800">
          My Products
        </h1>
      </section>

      {/* Products Grid */}
      <section className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white border rounded-xl shadow hover:shadow-lg transition overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-40 w-full object-cover"
              />

              <div className="p-4 text-center">
                <p className="text-gray-800 font-semibold">
                  Name: {product.name}
                </p>
                <Link className="text-sm text-gray-500 underline hover:text-pink-500 mt-2 inline-block" href={`/product/${product.id}/edit`}>
                  Edit Product
                </Link>
                <Link className="text-sm text-gray-500 underline hover:text-pink-500 mt-4 inline-block" href={`/product/${product.id}/remove`}>
                  Remove Product
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
