import { Navigate, Route, Routes } from "react-router-dom"
import { FrutappPage } from "../pages/FrutappPage"

export const FrutappRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={ <FrutappPage /> } />
        
        <Route path="/*" element={ <Navigate to="/" /> } />
    </Routes>
  )
}
