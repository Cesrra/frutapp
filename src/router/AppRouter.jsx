import { Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { FrutappRoutes } from "../frutapp/routes/FrutappRoutes"

export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/auth/*" element={ <AuthRoutes /> } />

        <Route path="/*" element={ <FrutappRoutes /> } />
    </Routes>
  )
}
