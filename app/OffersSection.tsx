import Image from "next/image";
import React from "react";

const OffersSection = () => {
  return (
    <section id="offers" className="w-full py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Special Offers
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Take advantage of our limited-time promotions and exclusive deals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg overflow-hidden shadow-xl border border-gray-200 flex flex-col md:flex-row">
            <div className="md:w-2/5 relative">
              <div className="absolute top-4 left-4 bg-[#8e2a3c] text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
                SAVE 20%
              </div>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tissue_design.png-mz3gJd4D0X5t0bHAVflGaKdDJwnnoR.webp"
                alt="Bundle Offer"
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 md:w-3/5 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Family Bundle Pack
                </h3>
                <p className="text-gray-600 mb-4">
                  Stock up on soft, durable tissues for your home! Our Family
                  Bundle Pack offers multiple tissue boxes for everyday comfort
                  and convenience—perfect for dining, personal care, and quick
                  cleanups.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg overflow-hidden shadow-xl border border-gray-200 flex flex-col md:flex-row">
            <div className="md:w-2/5 relative">
              <div className="absolute top-4 left-4 bg-[#d4a76a] text-gray-900 px-3 py-1 rounded-full text-sm font-semibold z-10">
                NEW
              </div>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tissue_design_02.png-d8H7QgvM3uRrRf2PdYsZTjCmPeeN4R.webp"
                alt="Subscription Offer"
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 md:w-3/5 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Premium Comfort Napkins
                </h3>
                <p className="text-gray-600 mb-4">
                  Upgrade your space with our stylish and functional tissue box.
                  Designed for modern homes and offices, it adds a touch of
                  sophistication while keeping tissues within easy reach.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OffersSection;
