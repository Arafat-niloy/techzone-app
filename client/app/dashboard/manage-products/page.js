"use client";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaTrash, FaEye } from "react-icons/fa";

export default function ManageProducts() {
  const [products, setProducts] = useState([]);

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const fetchProducts = () => {
    axios
      .get(`${apiUrl}/products`)
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Error fetching products:", err));
  };

  useEffect(() => {
    if (apiUrl) {
      fetchProducts();
    }
  }, [apiUrl]);

  const handleDelete = async (id) => {
    if (confirm("Are you sure you want to delete this product?")) {
      try {
        await axios.delete(`${apiUrl}/products/${id}`);
        toast.success("Product deleted");
        fetchProducts();
      } catch (err) {
        toast.error("Failed to delete");
        console.error(err);
      }
    }
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Manage Inventory</h1>
        <Link
          href="/dashboard/add-product"
          className="rounded-2xl bg-violet-800 hover:bg-violet-400 text-white px-4 py-2 font-bold transition"
        >
          Add New
        </Link>
      </div>

      <div className="overflow-x-auto bg-base-100 shadow-xl rounded-lg border">
        <table className="table w-full">
          <thead className="bg-base-200">
            <tr className="text-base text-gray-700">
              <th className="w-1/2 text-left pl-6">Product Info</th>
              <th className="w-1/6 text-left">Category</th>
              <th className="w-1/6 text-left">Price</th>
              <th className="w-1/6 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="hover:bg-base-200/50 transition-colors">
                <td className="pl-6">
                  <div className="flex items-center gap-4">
                    <div className="avatar">
                      <div className="mask mask-squircle w-16 h-16 bg-white relative border">
                        <Image
                          src={product.image}
                          alt={product.title}
                          fill
                          className="object-cover"
                          sizes="64px"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold text-lg">{product.title}</div>
                      <div className="text-sm opacity-60">ID: {product.id}</div>
                    </div>
                  </div>
                </td>

                <td className="text-left align-middle">
                  <span className="badge badge-ghost badge-lg">{product.category}</span>
                </td>

                <td className="text-left align-middle font-bold text-lg">
                  ${product.price}
                </td>

                <td className="text-center align-middle">
                  <div className="flex justify-center gap-3">
                    <Link
                      href={`/products/${product.id}`}
                      className="btn btn-sm btn-circle btn-ghost tooltip"
                      data-tip="View"
                    >
                      <FaEye className="text-blue-600 text-lg" />
                    </Link>
                    <button
                      onClick={() => handleDelete(product.id)}
                      className="btn btn-sm btn-circle btn-ghost tooltip"
                      data-tip="Delete"
                    >
                      <FaTrash className="text-red-600 text-lg" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {products.length === 0 && (
          <p className="text-center p-8 text-lg">No products found or loading...</p>
        )}
      </div>
    </div>
  );
}
