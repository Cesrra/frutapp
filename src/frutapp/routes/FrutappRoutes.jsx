import { Navigate, Route, Routes } from "react-router-dom"
import { FrutappHome, FrutappDetail } from "../pages"
// import { FrutappCart } from "../pages/FrutappCart"

export const FrutappRoutes = () => {
  return (
    <Routes>
        <Route path="/home" element={ <FrutappHome /> } />
        <Route path="/detail/:id" element={ <FrutappDetail /> } />
        {/* <Route path="/cart" element={ <FrutappCart /> } /> */}
        
        <Route path="/*" element={ <Navigate to="/home" /> } />
    </Routes>
  )
}
