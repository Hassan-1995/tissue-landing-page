import { Star } from "lucide-react";
import React from "react";

// Define a TypeScript interface for a testimonial
interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
}

// Testimonials data
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ayesha Khan",
    role: "Interior Designer",
    content:
      "These tissue boxes have added an elegant touch to my clients' homes in Karachi. The quality and aesthetics make them a must-have in any living space.",
    rating: 5,
  },
  {
    id: 2,
    name: "Bilal Ahmed",
    role: "Hotel Manager",
    content:
      "Our guests at our Lahore hotel frequently appreciate the luxurious feel of these tissues. They complement our premium hospitality experience.",
    rating: 5,
  },
  {
    id: 3,
    name: "Sadia Malik",
    role: "Homeowner",
    content:
      "I was surprised at how much a simple tissue box can elevate the look of my home in Islamabad. The design and quality are truly impressive!",
    rating: 4,
  },
  {
    id: 4,
    name: "Usman Siddiqui",
    role: "Office Administrator",
    content:
      "We use these tissues in our corporate offices in Karachi. Employees and clients alike have praised their softness and premium feel.",
    rating: 5,
  },
  {
    id: 5,
    name: "Fatima Raza",
    role: "Event Planner",
    content:
      "I use these tissues at weddings and events in Lahore. They blend perfectly with elegant decor, adding a refined touch to every table setting.",
    rating: 4,
  },
  {
    id: 6,
    name: "Hassan Javed",
    role: "Restaurant Owner",
    content:
      "These tissues have become a part of our fine dining experience in Islamabad. Customers appreciate the high quality and beautiful packaging.",
    rating: 5,
  },
];

// Testimonial Card Component
const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({
  testimonial,
}) => (
  <div className="bg-gray-50 p-8 rounded-lg shadow-lg border border-gray-100">
    <div className="flex mb-4">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-5 h-5 ${
            i < testimonial.rating
              ? "text-[#d4a76a] fill-[#d4a76a]"
              : "text-gray-300"
          }`}
        />
      ))}
    </div>
    <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
    <div className="flex items-center">
      <div className="w-12 h-12 bg-[#8e2a3c] rounded-full flex items-center justify-center text-white font-bold">
        {testimonial.name.charAt(0)}
      </div>
      <div className="ml-4">
        <h4 className="text-lg font-semibold text-gray-900">
          {testimonial.name}
        </h4>
        <p className="text-gray-500">{testimonial.role}</p>
      </div>
    </div>
  </div>
);

// Main Testimonial Section Component
const TestimonialSection: React.FC = () => {
  return (
    <section className="w-full py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have elevated their spaces
            with our premium tissues.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
