import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';

export const CardFruit = ({ item, custom }) => {
  
    const priceFormat = new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(item.price);
  
    return (
    <Card key={item.id}>
      <CardActionArea>
        <CardMedia
          component="img"
          style={{ objectFit: 'cover', width: '100%', height: custom.height }}
          src={ item.imgUrl }
          alt={ item.name }
        />
        <CardContent>
            <Grid container justifyContent="space-between" alignItems="center">
                <Grid item>
                    <Typography gutterBottom variant="h6" component="div">
                        { item.name }
                    </Typography>
                </Grid> 
                <Grid item>
                    <Typography gutterBottom variant="h7" component="div">
                        {`${priceFormat} cop/kg`} 
                    </Typography>
                </Grid>
          </Grid>
          <Typography variant="body2" color="text.secondary">
            <strong>{ `Alrededor de ${item.calories}` }</strong> 
            <hr />
            { item.description }
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
