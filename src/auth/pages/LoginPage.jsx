import { Button, Grid, TextField } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout"
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { useForm } from "../../hooks/useForm"

const formValidations = {
  name: [(value) => value.length >= 3 , 'El name debe tener almenos 3 caracteres'],
  password: [(value) => value.length >= 8 , 'La contraceña debe tener mínimo 8 caracteres'],
}

const initialForm = {
  name: 'César Rincón',
  password: '12345678'
}

export const LoginPage = () => {
  const { name, nameValid, password, passwordValid, onInputChange } = useForm( initialForm, formValidations)
  const { login } = useContext(AuthContext)
  const navigate = useNavigate()

  const onLogin = () => {
    if(name.trim().length < 3) return
    if(password.trim().length < 8) return
    login(name)
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
              name="name"
              value={ name }
              onChange={ onInputChange }
              error={ !!nameValid }
              helperText={ nameValid }
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 3 }} >
            <TextField 
              label="Contraceña"
              type="password"
              fullWidth
              name="password"
              value={ password }
              onChange={ onInputChange }
              error={ !!passwordValid }
              helperText={ passwordValid }
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
