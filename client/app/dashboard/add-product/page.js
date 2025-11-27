"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function AddProduct() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ 
    title: "", shortDesc: "", fullDesc: "", price: "", category: "Electronics", image: "" 
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
axios.post(`${process.env.NEXT_PUBLIC_API_URL}/products`, formData)      
toast.success("Product added successfully!");
      router.push("/dashboard/manage-products");
    } catch (error) {
      toast.error("Failed to add product");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => setFormData({...formData, [e.target.name]: e.target.value});

  return (
    <div className="max-w-2xl mx-auto p-8 my-8 shadow-xl rounded-xl bg-amber-300">
      <h1 className="text-3xl font-bold mb-6 text-center">Add New Product</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        
        <div className="form-control space-x-3">
            <label className="label">Title</label>
            <input name="title" required placeholder="Product Name" className="input rounded bg-white text-gray-600 px-2 py-1  input-bordered" onChange={handleChange} />
        </div>

        <div className="grid grid-cols-2 gap-4">
            <div className="form-control space-x-3">
                <label className="label">Price</label>
                <input name="price" required type="number" placeholder="0.00" className="input rounded bg-white text-gray-600 px-2 py-1 input-bordered" onChange={handleChange} />
            </div>
            <div className="form-control space-x-3">
                <label className="label">Category</label>
                <select name="category" className="select select-bordered rounded bg-white text-gray-600 px-2 py-1" onChange={handleChange}>
                    <option>Electronics</option>
                    <option>Clothing</option>
                    <option>Accessories</option>
                    <option>Home</option>
                </select>
            </div>
        </div>

        <div className="form-control space-x-3">
            <label className="label">Short Description</label>
            <input name="shortDesc" required placeholder="Brief summary" className="input rounded bg-white text-gray-600 px-2 py-1 input-bordered" onChange={handleChange} />
        </div>

        <div className="form-control space-x-3 flex flex-col">
            <label className="label">Full Description</label> 
            <textarea name="fullDesc" required placeholder="Detailed details" className="textarea rounded bg-white text-gray-600 px-2 py-1 textarea-bordered h-24 w-2/3" onChange={handleChange} />
        </div>

        <div className="form-control space-x-3">
            <label className="label">Image URL</label>
            <input name="image" placeholder="https://..." className="input rounded bg-white text-gray-600 px-2 py-1 input-bordered" onChange={handleChange} />
        </div>

        <button disabled={loading} className="rounded bg-violet-800 text-white  mt-6 text-lg">
            {loading ? "Saving..." : "Submit Product"}
        </button>
      </form>
    </div>
  );
}