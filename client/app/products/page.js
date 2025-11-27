"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    if (apiUrl) {
      axios.get(`${apiUrl}/products`)
        .then(res => {
          setProducts(res.data);
          setLoading(false);
        })
        .catch(err => {
          console.error("Error fetching products:", err);
          setLoading(false);
        });
    }
  }, [apiUrl]);

  const filteredProducts = products.filter(p => 
    p.title.toLowerCase().includes(search.toLowerCase()) || 
    p.category?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8">

      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4 bg-base-200 p-6 rounded-lg">
        <div>
          <h1 className="text-3xl font-bold">Our Catalog</h1>
          <p className="text-sm opacity-70">Find the best gear for your needs</p>
        </div>

        <input 
          type="text" 
          placeholder="Search by name or category..." 
          className="input input-bordered w-full md:max-w-xs rounded bg-white p-2"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {loading ? (
        <div className="text-center mt-20">
          <span className="loading loading-spinner loading-lg text-primary"></span>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 ease-in-out bg-base-100"
            >

              <figure className="relative h-52 w-full bg-white overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-contain p-4 hover:scale-110 transition-transform duration-500"
                />
              </figure>

              <div className="card-body bg-gray-100 p-5">
                <div className="badge badge-outline text-xs mb-2">
                  {product.category || "General"}
                </div>
                <h2 className="card-title text-lg">{product.title}</h2>
                <p className="text-sm text-gray-500 truncate h-6">
                  {product.shortDesc}
                </p>

                <div className="flex items-center justify-between mt-4">
                  <span className="text-xl font-bold text-primary">
                    ${product.price}
                  </span>
                  <Link
                    href={`/products/${product.id}`}
                    className="rounded-2xl px-4 py-2 bg-violet-800 hover:bg-violet-400 text-white text-sm font-medium transition"
                  >
                    Details
                  </Link>
                </div>
              </div>

            </div>
          ))}

        </div>
      )}

      {!loading && filteredProducts.length === 0 && (
        <p className="text-center text-xl mt-10">No products found or check your connection.</p>
      )}

    </div>
  );
}
