import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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
    <div className="flex justify-center h-screen items-center p-4 bg-gradient-to-br from-blue-100 to-indigo-300">
            <div className="w-full h-[250px] max-w-sm bg-white rounded-lg shadow-sm p-6 space-y-6 bg-gradient-to-br from-blue-100 to-indigo-150">
                <div className="text-center">
                    <div className="mx-auto h-20 w-20 rounded-full bg-gray-400 mb-3 flex justify-center items-center text-xl font-medium">
    {user.firstName.charAt(0)}{user.lastName.charAt(0)}</div>
                    <h1 className="text-xl font-semibold">{user.firstName} {user.lastName}</h1>
                    <p className="text-gray-800">@{user.username}</p>
                </div>

                <div className="text-[16px]">
                    <div className="flex gap-2">
                        <span className="text-gray-400 w-20">Email</span>
                        <span>{user.email}</span>
                    </div>
                   
                </div>
            </div>
        </div>
  )
}

export default Profile
