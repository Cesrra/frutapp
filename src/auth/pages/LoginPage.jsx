import { Button, Grid, TextField } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout"
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"

export const LoginPage = () => {

  const { login } = useContext(AuthContext)
  const navigate = useNavigate()

  const onLogin = () => {
    login('Cesar R')

    navigate('/', {
      replace: true
    })
  }

  return (
    <AuthLayout title="Iniciar Sesión">
      <form>
        <Grid container >
          <Grid item xs={12} sx={{ mt: 2 }} >
            <TextField 
              label="Usuario"
              type="ematextil"
              placeholder="Nombre de Usuario"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 3 }} >
            <TextField 
              label="Contraceña"
              type="password"
              fullWidth
            />
          </Grid>

          <Grid container spacing={ 2 } sx={{ mt: 1 }}>
            <Grid item xs={ 12 } sm={ 12 }>
              <Button variant='contained' fullWidth onClick={onLogin}>
                Iniciar
              </Button>
            </Grid>
          </Grid>

        </Grid>
      </form>
    </AuthLayout>
  )
}
