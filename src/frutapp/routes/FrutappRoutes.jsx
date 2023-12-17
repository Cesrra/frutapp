import { Navigate, Route, Routes } from "react-router-dom"
import { FrutappHome, FrutappDetail } from "../pages"

export const FrutappRoutes = () => {
  return (
    <Routes>
        <Route path="/home" element={ <FrutappHome /> } />
        <Route path="/home/detail/:id" element={ <FrutappDetail /> } />
        
        <Route path="/*" element={ <Navigate to="/home" /> } />
    </Routes>
  )
}
