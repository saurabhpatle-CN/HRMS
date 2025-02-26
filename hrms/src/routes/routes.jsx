import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard/dashboard";
import LoginPage from "../pages/login-page/login";
function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="dashboard" element={<Dashboard />} />
         
      </Routes>
    </Router>
  )
}
 
export default AppRoutes