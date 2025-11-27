import Link from "next/link";
// আইকনগুলো ইম্পোর্ট করা হচ্ছে
import { FiMapPin, FiMail, FiPhone } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaYoutube, FaPinterestP, FaXTwitter, FaCcVisa, FaCcMastercard, FaCcAmex, FaCcPaypal, FaCcDiscover } from "react-icons/fa6";

const Footer = () => {
  return (
    // মূল ফুটার কন্টেইনার - ডার্ক ব্যাকগ্রাউন্ড
    <footer className="bg-[#1a1a1a] text-gray-300 pt-16 pb-8">
      
      {/* উপরের সেকশন - ৫ কলামের গ্রিড */}
      <div className="container mx-auto px-6 lg:px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        
        {/* কলাম ১: Contact Us */}
        <div className="space-y-6">
          <h6 className="footer-title text-white text-lg normal-case opacity-100">Contact Us</h6>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <FiMapPin className="text-green-500 text-xl mt-1 shrink-0" />
              <span>TechZone- Electronic Store <br /> 507-Union Trade Ipsum Doler Centre France</span>
            </li>
            <li className="flex items-center gap-3">
              <FiMail className="text-green-500 text-xl shrink-0" />
              <a href="mailto:demo@example.com" className="hover:text-green-500 transition">demo@example.com</a>
            </li>
            <li className="flex items-center gap-3">
              <FiPhone className="text-green-500 text-xl shrink-0" />
              <a href="tel:+919876543210" className="hover:text-green-500 transition">(+91) 9876-543-210</a>
            </li>
          </ul>
        </div>

        {/* কলাম ২: Quick Links */}
        <nav className="flex flex-col space-y-4">
          <h6 className="footer-title text-white text-lg normal-case opacity-100">Quick Links</h6>
          <Link href="#" className="link link-hover hover:text-green-500 transition">Privacy Policy</Link>
          <Link href="#" className="link link-hover hover:text-green-500 transition">Refund Policy</Link>
          <Link href="#" className="link link-hover hover:text-green-500 transition">Shipping Policy</Link>
          <Link href="#" className="link link-hover hover:text-green-500 transition">Terms of Service</Link>
          <Link href="#" className="link link-hover hover:text-green-500 transition">Policy for Buyers</Link>
          <Link href="#" className="link link-hover hover:text-green-500 transition">Policy for Sellers</Link>
        </nav>

        {/* কলাম ৩: Information */}
        <nav className="flex flex-col space-y-4">
          <h6 className="footer-title text-white text-lg normal-case opacity-100">Information</h6>
          <Link href="#" className="link link-hover hover:text-green-500 transition">Size Chart</Link>
          <Link href="#" className="link link-hover hover:text-green-500 transition">Contact</Link>
          <Link href="#" className="link link-hover hover:text-green-500 transition">About Us</Link>
          <Link href="#" className="link link-hover hover:text-green-500 transition">FAQs</Link>
          <Link href="#" className="link link-hover hover:text-green-500 transition">Shipping & Refund</Link>
          <Link href="#" className="link link-hover hover:text-green-500 transition">Sitemap</Link>
        </nav>

        {/* কলাম ৪: Your Account */}
        <nav className="flex flex-col space-y-4">
          <h6 className="footer-title text-white text-lg normal-case opacity-100">Your Account</h6>
          <Link href="#" className="link link-hover hover:text-green-500 transition">Search</Link>
          <Link href="#" className="link link-hover hover:text-green-500 transition">About Us</Link>
          <Link href="#" className="link link-hover hover:text-green-500 transition">Delivery Information</Link>
          <Link href="#" className="link link-hover hover:text-green-500 transition">Contact</Link>
          <Link href="#" className="link link-hover hover:text-green-500 transition">FAQs</Link>
          <Link href="#" className="link link-hover hover:text-green-500 transition">Shipping</Link>
        </nav>

        {/* কলাম ৫: Newsletter */}
        {/* <div className="lg:col-span-1 md:col-span-2">
          <h6 className="footer-title text-white text-lg normal-case opacity-100">Our Newsletter</h6>
          <p className="mb-6 text-sm leading-relaxed">Subscribe to our latest newsletter to get news about special discounts.</p>
          <div className="flex flex-col gap-3">
            <input 
              type="email" 
              placeholder="Email" 
              className="input w-full rounded-full bg-white text-black px-6 focus:outline-none" 
            />
            <button className="btn border-none bg-[#4CAF50] hover:bg-green-600 text-white rounded-full w-full lg:w-auto px-8 font-bold">
              SUBSCRIBE
            </button>
          </div>
        </div> */}
      </div>

      {/* নিচের সেকশন - বর্ডার এবং কপিরাইট */}
      <div className="container mx-auto px-6 lg:px-10 mt-10 pt-8 border-t border-gray-800 flex flex-col lg:flex-row justify-between items-center gap-6">
        
        {/* সোশ্যাল মিডিয়া আইকন */}
        <div className="flex gap-3 order-2 lg:order-1">
          <SocialIcon icon={<FaFacebookF />} />
          <SocialIcon icon={<FaInstagram />} />
          <SocialIcon icon={<FaYoutube />} />
          <SocialIcon icon={<FaXTwitter />} />
          <SocialIcon icon={<FaPinterestP />} />
        </div>

        {/* কপিরাইট টেক্সট */}
        <p className="text-sm text-center order-3 lg:order-2">
          © 2025, TechZone - Electronics Store (Password: demo) Powered by Shopify
        </p>
        
        {/* পেমেন্ট আইকন */}
        <div className="flex gap-2 text-2xl text-white order-1 lg:order-3">
           <FaCcVisa />
           <FaCcMastercard />
           <FaCcAmex />
           <FaCcPaypal />
           <FaCcDiscover />
        </div>
      </div>
    </footer>
  );
};

// সোশ্যাল আইকনের জন্য ছোট হেল্পার কম্পোনেন্ট
const SocialIcon = ({ icon }) => (
  <Link href="#" className="bg-[#2d2d2d] p-3 rounded-full hover:bg-green-500 hover:text-white transition duration-300 text-gray-400">
    {icon}
  </Link>
);

export default Footer;