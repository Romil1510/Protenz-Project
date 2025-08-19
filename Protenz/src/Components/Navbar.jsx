import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  // const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <nav className="bg-gradient-to-br from-blue-100 to-indigo-100 shadow-xl px-6 py-3">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">

      
      <h1 className="text-xl font-bold text-gray-900 md:text-left justify-center items-center flex">Potenz Intern Task</h1>
      <div className="flex flex-col md:flex-row items-center gap-3 md:gap-10">
        <Link to="/profile" className="text-gray-800 font-semibold text-[16px] hover:text-indigo-600">Profile</Link>
        <Link to="/products" className="text-gray-800 font-semibold text-[16px] hover:text-indigo-600">Products</Link>
        <button
          onClick={handleLogout}
          className="bg-red-500 px-5 py-2 rounded-xl shadow-xl hover:bg-red-600 text-white"
        >
          Logout
        </button>
      </div>
      </div>
    </nav>
  );
}
