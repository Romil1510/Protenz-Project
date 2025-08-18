import { useState } from "react"

const Login = () => {

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    const handLogin=async (e)=>{
        e.preventDefault()
        if (!email || !password) {
      alert("please required information")
      return;
    }
    try {
        
    } catch (error) {
        
    }
    }

  return (
    <div className="h-screen flex justify-center items-center bg-gradient-to-br from-blue-100 to-indigo-300">
      
        <div className="from-blue-100 to-indigo-150 bg-white w-[440px] p-20 rounded-3xl shadow-md bg-gradient-to-br  border border-blue-200">
        <h1 className="font-bold text-center mb-10 text-3xl text-gray-800 ">Login</h1>
            <form onSubmit={handLogin}>
                <div className="mb-5 ">
                    <label className="block text-[16px] font-medium text-gray-700 mb-2">UserName:</label>
                <input className="p-3 rounded-lg w-full border border-gray-300 outline-none focus:border-blue-500 transition-all duration-400" 
                onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter UserName" value={email}></input>

                </div>
            
                <div>
                <label className="block text-[16px] font-medium text-gray-800 mb-2">Password:</label>
                <input className="p-3 rounded-lg w-full border border-gray-300 outline-none focus:border-blue-500 transition-all duration-400"  type="password" placeholder="Enter Password" value={password}
                onChange={(e)=>setPassword(e.target.value)}></input>

                </div>
                <div className="mt-8">
<button 
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-4 rounded-lg font-medium hover:blue-600 shadow-md"
          >
            Login
          </button>
                </div>
                
            </form>
        </div>
      </div>

  )
}

export default Login
