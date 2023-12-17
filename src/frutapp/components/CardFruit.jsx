import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { DescriptionFruit } from './DescriptionFruit';

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
          <DescriptionFruit
            name={ item.name}
            price={ item.price}
            calories={ item.calories}
            description={ item.description}
          />
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
