
import { AuthProvider } from "./auth"
import { AppRouter } from "./router/AppRouter"
import { AppTheme } from "./theme/AppTheme"


function Frutapp() {
  return (
    <AuthProvider>
      <AppTheme>
        <AppRouter />
      </AppTheme>
    </AuthProvider>
  )
}

export default Frutapp
