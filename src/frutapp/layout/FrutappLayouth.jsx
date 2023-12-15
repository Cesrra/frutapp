import { Box } from "@mui/material"
import { NavBar } from "../../ui"

const drawerWidth = 240

// eslint-disable-next-line react/prop-types, no-unused-vars
export const FrutappLayouth = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', }}>
        <NavBar />
        <Box
            component='main'
            sx={{ flexGrow: 1, p: 3, mt: 6 }}
        >
            { children }
        </Box>
    </Box>
  )
}
