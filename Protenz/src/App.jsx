import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import Login from '../src/Components/Login';
import './App.css';
import RouteProtect from "./Components/RouteProtect";
import Product from "./Pages/Product";
import ProductDetails from "./Pages/ProductDetails";
import Profile from "./Pages/Profile";

function App() {
  

  return (
    <Router>
      <Routes>
 <Route path="/login" element={<Login />} />
 <Route path="*" element={<Navigate to="/login" />} />
 <Route path="/profile" element={<RouteProtect> <Profile/></RouteProtect>}/>
  <Route
          path="/products"
          element={
            <RouteProtect>
              <Product />
            </RouteProtect>
          }
        />

        <Route
          path="/products/:id"
          element={
            <RouteProtect>
              <ProductDetails />
            </RouteProtect>
          }
        />

      </Routes>
    <ToastContainer />
    </Router>
    
  )
}

export default App
