import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";

const Product=()=> {
  const [products, setProducts] = useState([]);
  const [skip, setSkip] = useState(0);

  useEffect(() => {
    fetchProducts(skip);
  }, [skip]);

  const fetchProducts = async (skipValue) => {
    const res = await axios.get(`https://dummyjson.com/products?limit=10&skip=${skipValue}`);
    setProducts(res.data.products);
  };

  return (
    
    <div className=" bg-gray-100">
        <Navbar/>
        <div className="mb-18 pt-10">
<h1 className="text-3xl p-5 sm:w-[400px] lg:w-[400px] w-[300px] rounded-4xl shadow-xl m-auto flex justify-center items-center font-bold mb-4 bg-gradient-to-br from-blue-200 to-indigo-100">All Products</h1>
        </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3  gap-8 ">
        {products.map((product) => (
    <Link key={product.id} to={`/products/${product.id}`} className="bg-white  shadow-md p-4 rounded-xl hover:shadow-xl">
         <img src={product.thumbnail} alt={product.title} className="w-full h-40 object-cover rounded-xl mb-2" />
         <div className="p-2 mt-7">
            <h2 className="bg-gradient-to-br 
      from-blue-100 
      to-indigo-100 text-indigo-500 font-medium py-1 px-4
      rounded-full border
      border-indigo-100 hover:from-blue-200 hover:to-indigo-200 transition-all
 duration-300 text-lg f">{product.title}</h2>
            <p className="text-gray-950 bg-gradient-to-br m-auto w-[150px] flex justify-center items-center p-2 mt-3 rounded-2xl from-blue-200 to-indigo-500">${product.price}</p>

        </div>
            
          </Link>
        ))}
      </div>

      <div className="flex justify-center mt-6 py-10">
        <button
          disabled={skip === 0}
          onClick={() => setSkip(skip - 10)}
          className="px-4 py-2 bg-gray-300 rounded-md disabled:opacity-50"
        >
          Prev
</button>
        <button
          onClick={() => setSkip(skip + 10)}
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Next
        </button>
      </div>
    </div>
  );
}
export default Product