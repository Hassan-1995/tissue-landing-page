import { Check } from "lucide-react";
import React from "react";

const FeatureSection = () => {
  return (
    <section className="w-full py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Our Premium Tissues
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the perfect blend of luxury, comfort, and elegance in every
            box
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Premium 2-Ply Quality",
              description:
                "Experience unmatched softness and durability with our premium 2-ply tissue technology.",
            },
            {
              title: "Elegant Design",
              description:
                "Transform your space with our artistically crafted tissue boxes that double as decorative pieces.",
            },
            {
              title: "Eco-Friendly Materials",
              description:
                "Our tissues are made from sustainable sources, ensuring luxury without compromising the environment.",
            },
            {
              title: "Dermatologically Tested",
              description:
                "Gentle on skin and hypoallergenic, perfect for the most sensitive skin types.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-[#8e2a3c]/10 rounded-full flex items-center justify-center mb-6">
                <Check className="w-6 h-6 text-[#8e2a3c]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
