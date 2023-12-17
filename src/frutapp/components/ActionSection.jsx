import { useState } from "react";
import { Autocomplete, Button, Card, CardContent, Grid, IconButton, TextField, Typography } from "@mui/material"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const options = [1, 2,3,4,5,6,7,8,9,10];

export const ActionSection = () => {

    const [value, setValue] = useState(options[0]);
    const [inputValue, setInputValue] = useState('');

  return (
    <Typography gutterBottom component="div">
        <Card>
        <CardContent>
            <Grid container justifyContent='space-evenly' alignItems='center' spacing={3} >
                <Grid item>
                    <Typography gutterBottom component="p">
                        Sin cargos de importación ni gastos de envío. $50.000 cop. Envío a Colombia. <br />
                        Envío GRATIS martes 2 de enero a Colombia en pedidos elegibles de más de $150.000 cop. Realice su pedido en 23 h 20 min
                    </Typography> 
                </Grid>
                <Grid item sm={12}>
                    <Autocomplete
                        value={value}
                        onChange={(event, newValue) => {
                        setValue(newValue);
                        }}
                        inputValue={inputValue}
                        onInputChange={(event, newInputValue) => {
                        setInputValue(newInputValue);
                        }}
                        id="controllable-states-demo"
                        options={options}
                        sx={{ width: 80, height: 'auto' }}
                        renderInput={(params) => <TextField {...params} label="Cantidad" />}
                    />
                </Grid>         
                <Grid item>
                    <IconButton color="primary" aria-label="Agregar Favori">
                        <FavoriteBorderIcon />
                    </IconButton>
                </Grid>
                <Grid item>
                    <IconButton color="primary" aria-label="Agregar al carrito">
                        <AddShoppingCartIcon />
                    </IconButton>
                </Grid>
                <Grid item>
                <IconButton color="primary" aria-label="Comprar">
                        <CurrencyExchangeIcon />
                    </IconButton>
                </Grid>
            </Grid>
        </CardContent>
        </Card>
    </Typography>
  )
}
