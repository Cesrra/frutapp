import { Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { FrutappRoutes } from "../frutapp/routes/FrutappRoutes"
import { PrivateRoute } from "./PrivateRoute"
import { PublicRoute } from "./PublicRoute"

export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/login/*" element={ 
          <PublicRoute>
            <AuthRoutes />
          </PublicRoute>
         } />

        <Route path="/*" element={
          <PrivateRoute>
            <FrutappRoutes />
          </PrivateRoute>
        } />
    </Routes>
  )
}
