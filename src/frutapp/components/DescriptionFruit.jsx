import { Grid, Typography } from '@mui/material';

export const DescriptionFruit = ({ name, price, calories, description }) => {
  return (
    <>
        <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
              <Typography gutterBottom variant="h6" component="div">
                { name }
              </Typography>
            </Grid> 
            <Grid item>
              <Typography gutterBottom variant="h7" component="div">
                {`${price} cop/kg`} 
              </Typography>
            </Grid>
          </Grid>
          <Typography variant="body2" color="text.secondary">
            <strong>{ `Alrededor de ${calories}` }</strong>
          </Typography>
          <hr />
          <Typography variant="body2" color="text.secondary">
            { description }
          </Typography>
    </>
  )
}
