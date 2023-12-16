import { Navigate, Route, Routes } from "react-router-dom"
import { FrutappHome } from "../pages/FrutappHome"

export const FrutappRoutes = () => {
  return (
    <Routes>
        <Route path="/home" element={ <FrutappHome /> } />
        
        <Route path="/*" element={ <Navigate to="/" /> } />
    </Routes>
  )
}
