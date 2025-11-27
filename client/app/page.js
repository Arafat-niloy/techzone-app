import Link from "next/link";
import Image from "next/image";
import { FaShippingFast, FaHeadset, FaShieldAlt, FaStar } from "react-icons/fa";

export default function Home() {
  
  // Manual product data
  const products = [
    { id: 1, title: "Wireless Headphone", price: "$120.00", image: "/images/p1.jpg" },
    { id: 2, title: "Smart Watch", price: "$80.00", image: "/images/p2.jpg" },
    { id: 3, title: "Gaming Mouse", price: "$45.00", image: "/images/p3.jpg" },
    { id: 4, title: "Mechanical Keyboard", price: "$100.00", image: "/images/p4.jpg" },
  ];

  return (
    <div className="space-y-16 pb-10">

      {/* 1. Hero Section */}
      <div className="hero min-h-[70vh] relative flex justify-center items-center">
        <Image
          src="/images/hero-bg.jpg"
          alt="Hero"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="relative text-center text-white">
          <h1 className="mb-5 text-5xl font-bold drop-shadow-lg">Next Gen Tech</h1>
          <p className="mb-5 drop-shadow-md">
            Upgrade your lifestyle with our premium selection of gadgets and accessories.
          </p>
          <Link
            href="/products"
            className="font-medium hover:bg-green-400 rounded-2xl p-2 bg-[#4CAF50] italic"
          >
            Shop Now
          </Link>
        </div>
      </div>

      {/* 2. Features Section */}
      <section className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="card bg-white rounded-2xl py-2 text-center shadow-xl hover:shadow-2xl transition">
            <div className="card-body flex flex-col items-center space-y-2">
              <FaShippingFast className="text-4xl text-primary" />
              <h2 className="card-title">Free Shipping</h2>
              <p>On all orders over $200</p>
            </div>
          </div>
          <div className="card bg-white rounded-2xl py-2 text-center shadow-xl hover:shadow-2xl transition">
            <div className="card-body flex flex-col items-center space-y-2">
              <FaHeadset className="text-4xl text-primary" />
              <h2 className="card-title">24/7 Support</h2>
              <p>We are here to help you</p>
            </div>
          </div>
          <div className="card bg-white rounded-2xl py-2 text-center shadow-xl hover:shadow-2xl transition">
            <div className="card-body flex flex-col items-center space-y-2">
              <FaShieldAlt className="text-4xl text-primary" />
              <h2 className="card-title">Secure Payment</h2>
              <p>100% secure payment methods</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Promotional Banner */}
      <section className="bg-red-600 rounded-2xl py-8 mx-10">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <div>
            <div className="text-4xl font-bold flex items-center space-x-2">
              <h2 className="text-white">Summer Flash Sale!</h2>
              <FaStar className="text-yellow-400" />
            </div>
            <p className="py-4 text-xl">Get 30% off on all headphones.</p>
          </div>
          <Link
            href="/products"
            className="rounded-2xl p-2 bg-[#4CAF50] hover:bg-green-400 italic text-white"
          >
            View Offers
          </Link>
        </div>
      </section>

      {/* 4. Trending Products Preview */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Trending Now</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {products.map((item) => (
            <div key={item.id} className="card bg-white shadow-md hover:scale-105 transition duration-300">
              <figure className="relative w-full h-48">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover"
                />
              </figure>
              <div className="card-body p-4">
                <h2 className="card-title text-base">{item.title}</h2>
                <p className="text-primary font-bold">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Testimonials */}
      <section className="bg-base-200 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Customer Stories</h2>
          <div className="max-w-2xl mx-auto rounded-2xl bg-white px-6 py-8">
            <div className="chat chat-start justify-center">
              <div className="chat-bubble chat-bubble-primary text-lg">
                "TechZone provided the best delivery experience I have ever had.
                The products are authentic and top-notch!"
              </div>
            </div>
            <p className="mt-4 font-bold">- Sarah Johnson</p>
          </div>
        </div>
      </section>

      {/* 6. Newsletter */}
      <div className="flex flex-col items-center justify-center space-y-3">
        <h2 className="text-2xl font-bold">Subscribe for Updates</h2>
        <div className="flex gap-3 justify-center">
          <input
            type="email"
            placeholder="Email"
            className="input w-2/3 rounded-full bg-white text-black px-6 focus:outline-none"
          />
          <button className="btn border-none bg-[#4CAF50] hover:bg-green-600 text-white rounded-full w-1/3 lg:w-auto px-8 font-bold">
            SUBSCRIBE
          </button>
        </div>
      </div>

      {/* 7. Brands */}
      <section className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-black opacity-100">Brands</h2>
        <div className="flex justify-center gap-8 flex-wrap">
          <span className="text-2xl font-bold">SONY</span>
          <span className="text-2xl font-bold">APPLE</span>
          <span className="text-2xl font-bold">SAMSUNG</span>
          <span className="text-2xl font-bold">DELL</span>
        </div>
      </section>

    </div>
  );
}
