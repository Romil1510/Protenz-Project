import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from '../src/Components/Login';
import './App.css';

function App() {
  

  return (
    <Router>
      <Routes>
 <Route path="/login" element={<Login />} />
 <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    
    </Router>
  )
}

export default App
