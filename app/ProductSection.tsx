import Image from "next/image";
import React from "react";

// Define the product data separately
const products = [
  {
    id: 1,
    name: "Elegance Collection",
    description: "Our signature black box with gold wave patterns",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tissue_design.png-mz3gJd4D0X5t0bHAVflGaKdDJwnnoR.webp",
    price: "$8.99",
  },
  {
    id: 2,
    name: "Dual-Tone Series",
    description: "Light and dark sides with premium wave designs",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tissue_design_02.png-d8H7QgvM3uRrRf2PdYsZTjCmPeeN4R.webp",
    price: "$9.99",
  },
  {
    id: 3,
    name: "Premium Rectangle",
    description: "Rectangular design for modern spaces",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tissue_design_03.png-Uoc33V996gstOo3UkfOcgjksXdvttP.webp",
    price: "$7.99",
  },
];

const ProductSection = () => {
  return (
    <section
      id="products"
      className="w-full py-24 bg-gradient-to-b from-gray-900 to-[#8e2a3c]"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Premium Collection
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Explore our range of exquisitely designed tissue boxes that combine
            functionality with art.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-2xl group"
            >
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-400 mb-4">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
