import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";

const Profile = () => {


    const [user,setUser]=useState('')
    const navigate=useNavigate()

    useEffect(()=>{
        const storeUser=localStorage.getItem("user");
        if(storeUser){
            setUser(JSON.parse(storeUser))
        }

    },[])

    if(!user) {
        <p>Loading...</p>
    }
  return (
    <div>
<Navbar/>
    
    <div className="flex  justify-center h-screen items-center p-4 bg-gradient-to-br from-blue-100 to-indigo-300">
       
            <div className="w-full  h-[280px] max-w-sm bg-white rounded-lg shadow-sm p-6 space-y-6 bg-gradient-to-br from-blue-100 to-indigo-150">
                <div className="text-center">
                    <div className="mx-auto h-20 w-40 mb-10 rounded-full bg-gray-400  flex justify-center items-center text-xl font-medium">
    {user.firstName}{user.lastName}</div>
                    <h1 className="text-xl font-semibold">{user.firstName} {user.lastName}</h1>
                    <p className="text-gray-800">@{user.username}</p>
                </div>

                <div className="text-[16px]">
                    <div className="flex gap-2 mt-8">
                        <span className="text-gray-400 w-20">Email</span>
                        <span>{user.email}</span>
                    </div>
                   
                </div>
            </div>
        </div>
        </div>
  )
}

export default Profile
