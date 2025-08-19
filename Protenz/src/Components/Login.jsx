import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"


const Login = () => {

    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const navigate = useNavigate();

   const handLogin = async (e) => {
        e.preventDefault()
        
        if (!username || !password) {
            alert("Please enter information")
            return;
        }

         try {
        const response = await axios.post("https://dummyjson.com/auth/login", {
            username: username,
            password: password,
        });

        const data = response.data;

        toast.success("Login Successful");
        localStorage.setItem("token", data.token); 
        localStorage.setItem("user", JSON.stringify(data));
        navigate("/profile");

    } catch (error) {
    
        if (error.response && error.response.data) {
            toast.error(error.response.data.message);
        } else {
            toast.error("Something went wrong");
        }
        console.error("Login Error:", error);
    }
};

  return (
    <div className="h-screen flex justify-center items-center bg-gradient-to-br from-blue-100 to-indigo-300">
      
        <div className="from-blue-100 to-indigo-150 bg-white w-[440px] p-20 rounded-3xl shadow-md bg-gradient-to-br  border border-blue-200">
             <h1 className="text-center text-3xl font-bold text-indigo-600 mb-2">
          Potenz Technology
        </h1>
        <h1 className="font-bold text-center mb-10 text-3xl text-gray-800 ">Login</h1>
            <form onSubmit={handLogin}>
                <div className="mb-5 ">
                    <label className="block text-[16px] font-medium text-gray-700 mb-2">UserName:</label>
                <input className="p-3 rounded-lg w-full border border-gray-300 outline-none focus:border-blue-500 transition-all duration-400" 
                onChange={(e)=>setUsername(e.target.value)} type="text" placeholder="Enter UserName" value={username}></input>

                </div>
            
                <div>
                <label className="block text-[16px] font-medium text-gray-800 mb-2">Password:</label>
                <input className="p-3 rounded-lg w-full border border-gray-300 outline-none focus:border-blue-500 transition-all duration-400"  type="password" placeholder="Enter Password" value={password}
                onChange={(e)=>setPassword(e.target.value)}></input>

                </div>
                <div className="mt-8">
<button 
            type="submit"
            className="hover:bg-blue-600 text-xl transition-all w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-4 rounded-lg font-medium shadow-lg"
          >
            🚀Login
          </button>
                </div>
                
            </form>
            <p className="text-center text-gray-400 text-xs mt-8">
          © 2025 Potenz Technology | Internship Portal
        </p>
        <div className="bg-white rounded-3xl shadow-lg mt-2 p-5">
<p className=" font-semibold text-gray-600 text-[16px]">
           Use Dummy acoount: 
        </p>
        <p className=" text-gray-400">
            Username-emilys

        </p>
        <p className=" text-gray-400">password-emilyspass</p>
        </div>
        
        </div>
      </div>

  )
}

export default Login
