import { Button, Grid, TextField } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout"

export const LoginPage = () => {
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
              <Button variant='contained' fullWidth>
                Iniciar
              </Button>
            </Grid>
          </Grid>

        </Grid>
      </form>
    </AuthLayout>
  )
}
