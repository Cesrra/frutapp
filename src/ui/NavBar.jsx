import { LogoutOutlined, MenuOutlined } from "@mui/icons-material"
import { AppBar, Divider, Grid, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from "@mui/material"
import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../auth/context/AuthContext"

// eslint-disable-next-line react/prop-types
export const NavBar = ({ drawerWidth = 0 }) => {

    const { user, logout } = useContext(AuthContext)
    const navigate = useNavigate()

    const onLogout = () => {
        logout()    
        navigate('/login', {
          replace: true
        })
      }

  return (
    <AppBar
        position="fixed"
        sx={{
            width: { sm: `calc(100% - ${ drawerWidth }px)` },
            ml: { sm: `${ drawerWidth }px`}
        }}    
    >
        <Toolbar>
            <IconButton
                color="inherit"
                edge="start"
                sx={{ mr: 2, display: { sm: 'none' },  }}
            >
                <MenuOutlined />
            </IconButton>
            <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
            >
                <Grid item >
                    <Typography variant="h6" noWrap component="div" >
                        <Link to="/home" style={{ textDecoration: 'none', color: 'inherit' }} >
                            Frutapp
                        </Link>
                    </Typography>
                </Grid>
                <Grid item >
                    <Typography variant="h7" noWrap component="div" style={{fontWeight: "bold"}} >
                        {user?.name}
                    </Typography>
                </Grid>
                <Grid item  >
                    <Link to="/home" style={{ textDecoration: 'none', color: 'inherit', padding: 6 }} >
                        Home
                    </Link>
                    <Link to="/cart" style={{ textDecoration: 'none', color: 'inherit', padding: 6 }} >
                        Carrito
                    </Link>                    
                    <IconButton color="error" onClick={ onLogout } >                        
                        <LogoutOutlined />
                    </IconButton>
                </Grid>
            </Grid>
        </Toolbar>
    </AppBar>
  )
}
