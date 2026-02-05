import Navigation from "../components/navigation";

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
}

export default function ProfilePage() {
  const products: Product[] = [
    {
      id: 1,
      name: "Crochet Bag",
      description:
        "A handmade crochet bag created using sustainable yarn and traditional techniques passed down through generations.",
      price: "120.00",
      image:
        "https://www.zwende.com/cdn/shop/files/RebornTreasuresTheUpcycledPatchworkJholaBag_2.jpg?v=1695648507&width=1080",
    },
    {
      id: 2,
      name: "Decorative Vase",
      description:
        "Handcrafted ceramic vase inspired by Brazilian nature, perfect for home decoration.",
      price: "80.00",
      image:
        "https://www.shutterstock.com/image-photo/artistic-painted-colorful-handcrafted-products-260nw-2224567737.jpg",
    },
    {
      id: 3,
      name: "Handmade Necklace",
      description:
        "Necklace made with natural stones and designed to express elegance and authenticity.",
      price: "60.00",
      image:
        "https://i.etsystatic.com/18879601/r/il/3d7505/1783091021/il_570xN.1783091021_himf.jpg",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <Navigation />

      {/* Profile Header */}
      <section className="max-w-5xl mx-auto bg-white rounded-2xl shadow p-6">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <img
            src="https://cdn.expertphotography.com/wp-content/uploads/2018/10/cool-profile-pictures-retouching-1.jpg"
            alt="Seller profile photo"
            className="w-32 h-32 rounded-full object-cover border-4 border-pink-500"
          />

          <div className="text-center md:text-left">
            <h1 className="text-3xl font-bold text-gray-800">
              Rebecca Artisan
            </h1>

            <p className="text-gray-600 mt-2">
              Handmade artist dedicated to preserving traditional techniques and
              creating meaningful pieces with love and care.
            </p>

            <div className="flex items-center justify-center md:justify-start mt-3 gap-1">
              <span className="text-yellow-400 text-lg">★★★★★</span>
              <span className="text-gray-500 text-sm">(128 reviews)</span>
            </div>

            <button className="mt-4 bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition">
              Contact seller
            </button>
             <a href="/dashboard">
                <button className="mt-4 bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition">
                  My Products
                </button>
            </a>
          </div>
        </div>
      </section>

      {/* Artisan Story */}
      <section className="max-w-5xl mx-auto bg-white rounded-2xl shadow p-6 mt-6">
        <h2 className="text-xl font-semibold mb-2">✨ About the Artisan</h2>
        <p className="text-gray-700 leading-relaxed">
          Rebecca started her journey as an artisan over 10 years ago, inspired by
          her family traditions and local culture. Each piece is carefully crafted
          by hand, reflecting her passion for creativity and sustainability.
          Through her work, she shares her story and connects with people who value
          authenticity and handmade art.
        </p>
      </section>

      {/* Craftsmanship */}
      <section className="max-w-5xl mx-auto bg-white rounded-2xl shadow p-6 mt-6">
        <h2 className="text-xl font-semibold mb-2">🧵 Craftsmanship</h2>
        <p className="text-gray-700">
          All products are handmade using eco-friendly materials and traditional
          techniques. Each item is unique and carries a personal artistic touch.
        </p>
      </section>

      {/* Info Cards */}
      <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <div className="bg-white rounded-2xl shadow p-5">
          <h2 className="font-semibold text-lg mb-2">📍 Location</h2>
          <p className="text-gray-600">São Paulo, Brazil</p>
        </div>

        <div className="bg-white rounded-2xl shadow p-5">
          <h2 className="font-semibold text-lg mb-2">🧵 Category</h2>
          <p className="text-gray-600">Crochet & Decoration</p>
        </div>

        <div className="bg-white rounded-2xl shadow p-5">
          <h2 className="font-semibold text-lg mb-2">🌐 Social Media</h2>
          <div className="flex gap-3 mt-2">
            <a href="#" className="text-pink-500 hover:underline">
              Instagram
            </a>
            <a href="#" className="text-pink-500 hover:underline">
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="max-w-5xl mx-auto mt-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Curated Handmade Collection
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-48 w-full object-cover"
              />

              <div className="p-4">
                <h3 className="font-semibold text-lg text-gray-800">
                  {product.name}
                </h3>

                <p className="text-gray-600 text-sm mt-2">
                  {product.description}
                </p>

                <p className="text-pink-500 font-bold mt-3">
                  $ {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
