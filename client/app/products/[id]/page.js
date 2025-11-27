"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import axios from "axios";
import toast from "react-hot-toast"; // 1. Toast ইম্পোর্ট করা হয়েছে

export default function ProductDetail() {
  const { id } = useParams();
  const router = useRouter();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/products/${id}`)
      .then(res => setProduct(res.data))
      .catch(err => console.error(err));
  }, [id]);

  // 2. Add to Cart হ্যান্ডলার ফাংশন
  const handleAddToCart = () => {
    toast.success("Added to Cart Successfully!");
  };

  if (!product) return <div className="text-center mt-20"><span className="loading loading-spinner loading-lg"></span></div>;

  return (
    <div className="container mx-auto px-4 py-10">
      
      <button onClick={() => router.back()} className="btn btn-ghost mb-6">
        ← Back to List
      </button>

      {/* ট্যাবলেটের জন্য layout responsive করা হয়েছে */}
      <div className="card lg:card-side bg-base-100 shadow-xl overflow-hidden border md:flex gap-8">
        
        {/* IMAGE PART FIX */}
        <figure className="relative w-full h-80 md:h-[400px] lg:w-1/2 bg-white p-6">
          <Image
            src={product.image}
            alt={product.title}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
            
          />
        </figure>

        <div className="card-body lg:w-1/2">
          <div className="flex justify-between items-center pt-4">
             <h2 className="card-title text-3xl md:text-4xl font-bold">{product.title}</h2>
             <div className="badge badge-secondary p-3 whitespace-nowrap">High Priority</div>
          </div>
          
          <p className="text-2xl font-bold text-primary mt-2">${product.price}</p>
          <div className="divider my-2"></div>
          
          <h3 className="font-bold text-lg">Description:</h3>
          <p className="text-gray-600 leading-relaxed">{product.fullDesc}</p>
          
          <div className="mt-6 space-y-2 text-sm bg-base-200 p-4 rounded-lg">
             <p><span className="font-semibold">Category:</span> {product.category}</p>
             <p><span className="font-semibold">Product ID:</span> {product.id}</p>
             <p><span className="font-semibold">Availability:</span> In Stock</p>
          </div>

          <div className="card-actions justify-end mt-8">
            {/* 3. onClick ইভেন্ট যোগ করা হয়েছে */}
            <button 
              onClick={handleAddToCart}
              className="rounded-2xl bg-violet-800 hover:bg-violet-400 text-white px-6 py-2 text-lg transition-colors"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}