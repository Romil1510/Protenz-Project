import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${id}`).then((res) => setProduct(res.data));
  }, [id]);

  if (!product) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="flex justify-center items-center flex-col">
      <h1 className="text-4xl font-bold mt-10 bg-gray-500 text-white p-4 rounded-3xl">Product Details</h1>
      <img src={product.thumbnail} alt={product.title} className="w-64 h-64 object-cover rounded-md mb-4" />
      <h1 className="text-3xl font-bold mb-2 shadow-2xl bg-gradient-to-br from-blue-100 to-indigo-300 p-4 rounded-4xl">{product.title}</h1>
      <p className="text-gray-700 mb-2 mt-5">{product.description}</p>
      <p className="text-xl rounded-3xl p-4 shadow-2xl bg-black text-white font-semibold">${product.price}</p>
    </div>
  );
}
