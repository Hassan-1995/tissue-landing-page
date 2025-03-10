// import Image from "next/image"
// import Link from "next/link"
// import { ChevronRight, Mail, MapPin, Phone } from "lucide-react"

// export default function Home() {
//   return (
//     <div className="min-h-screen bg-white">
//       {/* Navigation */}
//       <header className="sticky top-0 z-50 bg-navy-900 text-white shadow-md">
//         <div className="container mx-auto flex h-16 items-center justify-between px-4">
//           <div className="flex items-center space-x-2">
//             <span className="text-xl font-bold">LuxeTissue</span>
//           </div>
//           <nav className="hidden md:block">
//             <ul className="flex space-x-8">
//               <li>
//                 <Link href="#home" className="hover:text-sky-300 transition-colors">
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link href="#products" className="hover:text-sky-300 transition-colors">
//                   Products
//                 </Link>
//               </li>
//               <li>
//                 <Link href="#offers" className="hover:text-sky-300 transition-colors">
//                   Offers
//                 </Link>
//               </li>
//               <li>
//                 <Link href="#contact" className="hover:text-sky-300 transition-colors">
//                   Contact
//                 </Link>
//               </li>
//             </ul>
//           </nav>
//           <div className="md:hidden">
//             <button className="p-2">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </header>

//       {/* Hero Section */}
//       <section id="home" className="bg-gradient-to-b from-navy-800 to-navy-900 text-white">
//         <div className="container mx-auto px-4 py-20 md:py-32">
//           <div className="grid gap-8 md:grid-cols-2 items-center">
//             <div className="space-y-6">
//               <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
//                 Premium Quality <span className="text-sky-400">Tissues</span> For Your Everyday Needs
//               </h1>
//               <p className="text-lg md:text-xl text-gray-200">
//                 Experience unmatched softness and durability with our premium tissue products. Elegantly designed for
//                 both functionality and aesthetics.
//               </p>
//               <div className="pt-4">
//                 <Link
//                   href="#products"
//                   className="inline-flex items-center rounded-md bg-sky-500 px-6 py-3 text-white hover:bg-sky-600 transition-colors"
//                 >
//                   Explore Products
//                   <ChevronRight className="ml-2 h-5 w-5" />
//                 </Link>
//               </div>
//             </div>
//             <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
//               <Image
//                 src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tissue_design.png-sbER3yJ4v1ZbwAcm9V74yazkEVjqQP.webp"
//                 alt="Premium Tissue Box"
//                 fill
//                 className="object-cover"
//                 priority
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Products Section */}
//       <section id="products" className="py-20 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold text-navy-900">Our Premium Products</h2>
//             <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
//               Discover our range of high-quality tissue products designed with elegance and comfort in mind.
//             </p>
//           </div>

//           <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//             {/* Product 1 */}
//             <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
//               <div className="relative h-64">
//                 <Image
//                   src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tissue_design.png-sbER3yJ4v1ZbwAcm9V74yazkEVjqQP.webp"
//                   alt="2-Ply Luxury Tissue"
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//               <div className="p-6">
//                 <h3 className="text-xl font-bold text-navy-900">2-Ply Luxury Tissue</h3>
//                 <p className="mt-2 text-gray-600">
//                   Our signature 2-ply tissue offers exceptional softness and strength for everyday use.
//                 </p>
//                 <div className="mt-4 flex items-center justify-between">
//                   <span className="text-navy-900 font-semibold">Premium Quality</span>
//                   <span className="bg-sky-100 text-sky-800 px-3 py-1 rounded-full text-sm">Bestseller</span>
//                 </div>
//               </div>
//             </div>

//             {/* Product 2 */}
//             <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
//               <div className="relative h-64">
//                 <Image
//                   src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tissue_design_03.png-6iiCCUU91l0fV1Sx5XfQ80OHo3CLVr.webp"
//                   alt="Premium Tissue Box"
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//               <div className="p-6">
//                 <h3 className="text-xl font-bold text-navy-900">Premium Tissue Box</h3>
//                 <p className="mt-2 text-gray-600">
//                   Elegant design meets functionality with our premium tissue box, perfect for any room.
//                 </p>
//                 <div className="mt-4 flex items-center justify-between">
//                   <span className="text-navy-900 font-semibold">Elegant Design</span>
//                   <span className="bg-sky-100 text-sky-800 px-3 py-1 rounded-full text-sm">New Arrival</span>
//                 </div>
//               </div>
//             </div>

//             {/* Product 3 */}
//             <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
//               <div className="relative h-64">
//                 <Image
//                   src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tissue_design_02.png-UB0PjhCIhLVrmJoXKq5nbp1eHzPU7i.webp"
//                   alt="Decorative 2-Ply Tissue"
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//               <div className="p-6">
//                 <h3 className="text-xl font-bold text-navy-900">Decorative 2-Ply Tissue</h3>
//                 <p className="mt-2 text-gray-600">
//                   Artistic design with premium quality, our decorative tissue adds elegance to any space.
//                 </p>
//                 <div className="mt-4 flex items-center justify-between">
//                   <span className="text-navy-900 font-semibold">Artistic Design</span>
//                   <span className="bg-sky-100 text-sky-800 px-3 py-1 rounded-full text-sm">Limited Edition</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Offers Section */}
//       <section id="offers" className="py-20 bg-navy-800 text-white">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold">Special Offers</h2>
//             <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
//               Take advantage of our limited-time offers and exclusive deals on premium tissue products.
//             </p>
//           </div>

//           <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//             {/* Offer 1 */}
//             <div className="bg-navy-700 rounded-lg p-6 shadow-lg border border-sky-700">
//               <div className="bg-sky-500 text-white text-center py-2 px-4 rounded-full text-sm font-bold mb-4 w-fit">
//                 SAVE 15%
//               </div>
//               <h3 className="text-xl font-bold">Bulk Purchase Discount</h3>
//               <p className="mt-2 text-gray-300">
//                 Get 15% off when you purchase 5 or more boxes of our premium tissues.
//               </p>
//               <button className="mt-4 w-full bg-sky-500 hover:bg-sky-600 text-white py-2 rounded-md transition-colors">
//                 Claim Offer
//               </button>
//             </div>

//             {/* Offer 2 */}
//             <div className="bg-navy-700 rounded-lg p-6 shadow-lg border border-sky-700">
//               <div className="bg-sky-500 text-white text-center py-2 px-4 rounded-full text-sm font-bold mb-4 w-fit">
//                 NEW CUSTOMER
//               </div>
//               <h3 className="text-xl font-bold">First-Time Buyer Discount</h3>
//               <p className="mt-2 text-gray-300">New customers receive 10% off their first order plus free shipping.</p>
//               <button className="mt-4 w-full bg-sky-500 hover:bg-sky-600 text-white py-2 rounded-md transition-colors">
//                 Claim Offer
//               </button>
//             </div>

//             {/* Offer 3 */}
//             <div className="bg-navy-700 rounded-lg p-6 shadow-lg border border-sky-700">
//               <div className="bg-sky-500 text-white text-center py-2 px-4 rounded-full text-sm font-bold mb-4 w-fit">
//                 LIMITED TIME
//               </div>
//               <h3 className="text-xl font-bold">Seasonal Special</h3>
//               <p className="mt-2 text-gray-300">
//                 Buy any 3 decorative tissue boxes and get 1 free for a limited time only.
//               </p>
//               <button className="mt-4 w-full bg-sky-500 hover:bg-sky-600 text-white py-2 rounded-md transition-colors">
//                 Claim Offer
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section id="contact" className="py-20 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold text-navy-900">Contact Us</h2>
//             <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
//               Have questions or want to place an order? Reach out to our team and we'll be happy to assist you.
//             </p>
//           </div>

//           <div className="grid gap-8 md:grid-cols-1">
//             <div className="bg-gray-50 p-6 rounded-lg shadow-md">
//               <h3 className="text-xl font-bold text-navy-900 mb-4">Contact Information</h3>
//               <div className="space-x-4 flex">
//                 <div className="flex items-start">
//                   <Phone className="h-5 w-5 text-sky-500 mt-1 mr-3" />
//                   <div>
//                     <p className="font-medium">Phone</p>
//                     <p className="text-gray-600">+1 (555) 123-4567</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start">
//                   <Mail className="h-5 w-5 text-sky-500 mt-1 mr-3" />
//                   <div>
//                     <p className="font-medium">Email</p>
//                     <p className="text-gray-600">info@luxetissue.com</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start">
//                   <MapPin className="h-5 w-5 text-sky-500 mt-1 mr-3" />
//                   <div>
//                     <p className="font-medium">Address</p>
//                     <p className="text-gray-600">
//                       123 Business Avenue, Suite 456
//                       <br />
//                       New York, NY 10001
//                     </p>
//                   </div>
//                 </div>
//               </div>
//               <div className="mt-6">
//                 <h4 className="font-medium text-navy-900 mb-2">Business Hours</h4>
//                 <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM</p>
//                 <p className="text-gray-600">Saturday: 10:00 AM - 2:00 PM</p>
//                 <p className="text-gray-600">Sunday: Closed</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-navy-900 text-white py-8">
//         <div className="container mx-auto px-4">
//           <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
//             <div>
//               <h3 className="text-lg font-bold mb-4">LuxeTissue</h3>
//               <p className="text-gray-300">Premium quality tissues designed for comfort and elegance.</p>
//             </div>
//             <div>
//               <h3 className="text-lg font-bold mb-4">Quick Links</h3>
//               <ul className="space-y-2">
//                 <li>
//                   <Link href="#home" className="text-gray-300 hover:text-sky-300 transition-colors">
//                     Home
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="#products" className="text-gray-300 hover:text-sky-300 transition-colors">
//                     Products
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="#offers" className="text-gray-300 hover:text-sky-300 transition-colors">
//                     Offers
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="#contact" className="text-gray-300 hover:text-sky-300 transition-colors">
//                     Contact
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="text-lg font-bold mb-4">Legal</h3>
//               <ul className="space-y-2">
//                 <li>
//                   <Link href="#" className="text-gray-300 hover:text-sky-300 transition-colors">
//                     Privacy Policy
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="#" className="text-gray-300 hover:text-sky-300 transition-colors">
//                     Terms of Service
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="#" className="text-gray-300 hover:text-sky-300 transition-colors">
//                     Shipping Policy
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="#" className="text-gray-300 hover:text-sky-300 transition-colors">
//                     Returns & Refunds
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="text-lg font-bold mb-4">Newsletter</h3>
//               <p className="text-gray-300 mb-2">Subscribe to receive updates on new products and special offers.</p>
//               <form className="flex">
//                 <input
//                   type="email"
//                   placeholder="Your email"
//                   className="px-4 py-2 w-full rounded-l-md focus:outline-none focus:ring-1 focus:ring-sky-500 text-gray-900"
//                 />
//                 <button type="submit" className="bg-sky-500 hover:bg-sky-600 px-4 py-2 rounded-r-md transition-colors">
//                   Subscribe
//                 </button>
//               </form>
//             </div>
//           </div>
//           <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
//             <p>&copy; {new Date().getFullYear()} LuxeTissue. All rights reserved.</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   )
// }

import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Check,
  Star,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Simple Header */}
      <div className="w-full bg-gray-900 py-6 text-center sticky top-0 z-50">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">
            Sunny<span className="text-[#d4a76a]">Enterprises</span>
          </h1>
          <div className="flex space-x-6">
            <a
              href="#home"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Home
            </a>
            <a
              href="#products"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Products
            </a>
            <a
              href="#offers"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Offers
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>

      {/* Home/Hero Section */}
      <section id="home" className="w-full relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-800 opacity-90 z-0"></div>
        <div
          className="absolute inset-0 opacity-20 z-0"
          style={{
            backgroundImage: "url('/wave-pattern.svg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        <div className="container relative z-10 mx-auto px-4 py-24 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-7xl font-bold text-white mb-8">
              HygieniX<span className="text-[#d4a76a]">Tissue</span>
            </h1>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              <span className="block">Experience Luxury</span>
              <span className="block text-[#d4a76a]">In Every Touch</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
              Discover our premium 2-ply tissues, crafted with elegance and
              comfort in mind. Elevate your everyday moments with our exquisite
              designs and superior softness.
            </p>
            {/* <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="bg-[#8e2a3c] hover:bg-[#7a1f30] text-white px-8 py-6 text-lg">Shop Now</Button>
              <Button
                variant="outline"
                className="border-[#d4a76a] text-[#d4a76a] hover:bg-[#d4a76a]/10 px-8 py-6 text-lg"
              >
                Learn More
              </Button>
            </div> */}

            <div className="pt-4">
              <Link
                href="#products"
                className="inline-flex items-center rounded-md bg-[#8e2a3c] px-6 py-3 text-white hover:bg-[#7a1f30] transition-colors"
              >
                Explore Products
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="relative w-full max-w-md mx-auto">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tissue_design.png-mz3gJd4D0X5t0bHAVflGaKdDJwnnoR.webp"
                alt="Premium Tissue Box"
                width={500}
                height={500}
                className="rounded-lg shadow-2xl transform rotate-3 z-20 relative"
              />
              <div className="absolute -bottom-10 -left-10 z-10">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tissue_design_02.png-d8H7QgvM3uRrRf2PdYsZTjCmPeeN4R.webp"
                  alt="Premium Tissue Box Design"
                  width={300}
                  height={300}
                  className="rounded-lg shadow-2xl transform -rotate-6"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Premium Tissues
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover the perfect blend of luxury, comfort, and elegance in
              every box
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

      {/* Products Section */}
      <section
        id="products"
        className="w-full py-24 bg-gradient-to-b from-gray-900 to-[#8e2a3c]"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Premium Collection
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Explore our range of exquisitely designed tissue boxes that
              combine functionality with art
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
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
            ].map((product) => (
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
                  {/* <div className="flex justify-between items-center">
                    <span className="text-[#d4a76a] text-xl font-bold">
                      {product.price}
                    </span>
                    <Button className="bg-[#d4a76a] hover:bg-[#c09355] text-gray-900">
                      Add to Cart
                    </Button>
                  </div> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offers Section */}
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
                    Bundle Pack offers multiple tissue boxes for everyday
                    comfort and convenience—perfect for dining, personal care,
                    and quick cleanups.
                  </p>
                  {/* <div className="flex items-center mb-4">
                    <span className="text-gray-400 line-through mr-2">
                      $35.96
                    </span>
                    <span className="text-[#8e2a3c] font-bold text-xl">
                      $28.77
                    </span>
                  </div> */}
                </div>
                {/* <Button className="bg-[#8e2a3c] hover:bg-[#7a1f30] text-white w-full">
                  Claim Offer
                </Button> */}
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
                    Upgrade your space with our stylish and functional tissue
                    box. Designed for modern homes and offices, it adds a touch
                    of sophistication while keeping tissues within easy reach.
                  </p>
                  {/* <div className="flex items-center mb-4">
                    <span className="text-[#8e2a3c] font-bold text-xl">
                      $24.99/month
                    </span>
                    <span className="ml-2 text-gray-600 text-sm">
                      Free shipping
                    </span>
                  </div> */}
                </div>
                {/* <Button className="bg-[#d4a76a] hover:bg-[#c09355] text-gray-900 w-full">
                  Subscribe Now
                </Button> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join thousands of satisfied customers who have elevated their
              spaces with our premium tissues
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                id: 1,
                name: "Sarah Johnson",
                role: "Interior Designer",
                content:
                  "These tissue boxes have transformed my clients' bathrooms and living spaces. The elegant design adds a touch of luxury to any room.",
                rating: 5,
              },
              {
                id: 2,
                name: "Michael Chen",
                role: "Hotel Manager",
                content:
                  "Our guests constantly comment on the quality and design of these tissues. They've become a signature element in our premium suites.",
                rating: 5,
              },
              {
                id: 3,
                name: "Emma Williams",
                role: "Homeowner",
                content:
                  "I never thought a tissue box could be a conversation starter, but these designs are truly works of art. The quality matches the beauty.",
                rating: 4,
              },
            ].map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-gray-50 p-8 rounded-lg shadow-lg border border-gray-100"
              >
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
                <p className="text-gray-600 mb-6 italic">
                  "{testimonial.content}"
                </p>
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
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="w-full py-24 bg-gray-900 relative overflow-hidden"
      >
        <div
          className="absolute inset-0 opacity-10 z-0"
          style={{
            backgroundImage: "url('/wave-pattern.svg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Have questions or feedback? We'd love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-1 gap-12">
            <div className="text-white">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-8 md:flex lg:justify-between md:space-y-0">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#8e2a3c]/20 rounded-full flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-[#d4a76a]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-[#d4a76a] mb-1">
                      Email Us
                    </h4>
                    <p className="text-gray-300">info@luxetissue.com</p>
                    <p className="text-gray-300">support@luxetissue.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#8e2a3c]/20 rounded-full flex items-center justify-center mr-4">
                    <Phone className="w-6 h-6 text-[#d4a76a]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-[#d4a76a] mb-1">
                      Call Us
                    </h4>
                    <p className="text-gray-300">+1 (555) 123-4567</p>
                    <p className="text-gray-300">Mon-Fri, 9am-5pm EST</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#8e2a3c]/20 rounded-full flex items-center justify-center mr-4">
                    {/* <Phone className="w-6 h-6 text-[#d4a76a]" /> */}
                    <MessageCircle className="w-6 h-6 text-[#d4a76a]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-[#d4a76a] mb-1">
                      Message Us
                    </h4>
                    <p className="text-gray-300">+1 (555) 123-4567</p>
                    <p className="text-gray-300">Mon-Fri, 9am-5pm EST</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#8e2a3c]/20 rounded-full flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6 text-[#d4a76a]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-[#d4a76a] mb-1">
                      Visit Us
                    </h4>
                    <p className="text-gray-300">123 Luxury Lane</p>
                    <p className="text-gray-300">Suite 456</p>
                    <p className="text-gray-300">New York, NY 10001</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h4 className="text-lg font-semibold text-[#d4a76a] mb-4">
                  Follow Us
                </h4>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-[#8e2a3c] transition-colors"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-[#8e2a3c] transition-colors"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-[#8e2a3c] transition-colors"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-[#8e2a3c] transition-colors"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">LuxeTissue</h3>
              <p className="mb-4">
                Elevating everyday moments with premium tissue products.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Facebook</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Instagram</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Twitter</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Products</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white">
                    Premium Collection
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Elegance Series
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Limited Editions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Gift Sets
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Sustainability
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Press
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Shipping
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Returns
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
            <p>
              &copy; {new Date().getFullYear()} LuxeTissue. All rights reserved.
            </p>
          </div>
        </div>
      </footer> */}
    </main>
  );
}
