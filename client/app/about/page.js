import Image from "next/image";
import { FaAward, FaUsers, FaSmile } from "react-icons/fa";

export default function About() {
  return (
    <div>
      {/* 1. Hero Section */}
      {/* <div className="hero min-h-[40vh] bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Who We Are</h1>
            <p className="py-6">
              TechZone is your premier destination for the latest gadgets and tech accessories. We believe in quality, innovation, and customer satisfaction.
            </p>
          </div>
        </div>
      </div> */}

      {/* 2. Mission Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 relative h-[400px] w-full">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
              alt="Team"
              fill
              className="object-cover rounded-xl shadow-2xl"
            />
          </div>
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-4xl font-bold">Our Mission</h2>
            <p className="text-lg text-gray-600">
              Started in 2024, TechZone was built with a simple mission: to make premium technology accessible to everyone. We source authentic products directly from manufacturers to ensure you get the best deal without compromising on quality.
            </p>
            <p className="text-lg text-gray-600">
              We are not just a store; we are a community of tech enthusiasts. Whether you are a gamer, a professional, or just someone who loves cool gadgets, we have something for you.
            </p>
            
            {/* Stats */}
            <div className="stats shadow w-full mt-4 flex justify-between px-4 py-2 bg-amber-400 rounded-2xl ">
              <div className="stat place-items-center">
                <div className="stat-title">Customers</div>
                <div className="stat-value text-primary font-bold">5K+</div>
                <div className="stat-desc">Happy buyers</div>
              </div>
              
              <div className="stat place-items-center">
                <div className="stat-title">Products</div>
                <div className="stat-value text-secondary font-bold">100+</div>
                <div className="stat-desc">Top brands</div>
              </div>
              <div className="stat place-items-center">
                <div className="stat-title">Rating</div>
                <div className="stat-value font-bold">4.9</div>
                <div className="stat-desc">On TrustPilot</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Why Choose Us */}
      <div className="bg-neutral text-neutral-content py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose TechZone?</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center bg-violet-600 text-white py-2 rounded font-bold">
            
            <div className="flex flex-col items-center gap-4 ">
              <div className="p-4 bg-primary rounded-full text-white text-3xl">
                <FaAward />
              </div>
              <h3 className="text-xl font-bold text-black">Authentic Products</h3>
              <p className="text-gray-300">100% original products sourced directly from brands.</p>
            </div>

            <div className="flex flex-col items-center gap-4">
              <div className="p-4 bg-secondary rounded-full text-white text-3xl">
                <FaUsers />
              </div>
              <h3 className="text-xl font-bold text-black">Expert Support</h3>
              <p className="text-gray-300">Our team is available 24/7 to help you with any queries.</p>
            </div>

            <div className="flex flex-col items-center gap-4">
              <div className="p-4 bg-accent rounded-full text-white text-3xl">
                <FaSmile />
              </div>
              <h3 className="text-xl font-bold text-black">Satisfaction Guarantee</h3>
              <p className="text-gray-300">30-day money-back guarantee if you are not satisfied.</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}