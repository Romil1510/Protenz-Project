import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <nav className="bg-gradient-to-br from-blue-100 to-indigo-00 shadow-xl text-white px-10 py-3 flex justify-between items-center ">
      <h1 className="text-xl font-bold text-gray-900">Potenz Intern Task</h1>
      <div className="space-x-14">
        <Link to="/profile" className="text-gray-800 font-semibold text-[16px] hover:text-indigo-600">Profile</Link>
        <Link to="/products" className="text-gray-800 font-semibold text-[16px] hover:text-indigo-600">Products</Link>
        <button
          onClick={handleLogout}
          className="bg-red-500 px-5 py-2 rounded-xl shadow-xl hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
