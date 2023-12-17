import { useParams } from "react-router"
import { FrutappLayouth } from "../layout/FrutappLayouth"

import itemData from '../../dummy_data';
import { DescriptionFruit } from "../components/DescriptionFruit";
import { Container } from "@mui/system";
import { ActionSection } from "../components/ActionSection";
import { Grid } from "@mui/material";

export const FrutappDetail = () => {

    const { id } = useParams()
    const item = itemData.find(item => item.id == id)

    return (
        <FrutappLayouth>
            <Grid container spacing={3} alignItems="center" >                
                <Grid item lg={4} md={4} sm={4} xs={12} order={{ md: 1, sm: 1, xs: 2 }} >
                    <img 
                        src={ item.imgUrl }
                        alt={ item.name }
                        style={{ width: '100%', height: 'auto', borderRadius: '10px' }}
                    />
                </Grid>
                <Grid item lg={4} md={4} sm={4} xs={12} order={{ md: 2, sm: 2, xs: 1 }} >
                    <DescriptionFruit
                        name={ item.name}
                        price={ item.price}
                        calories={ item.calories}
                        description={ item.description}
                        style={{ width: '100%' }}
                    />
                </Grid>
                <Grid item lg={4} md={4} sm={4} xs={12} order={{ md: 3, sm: 3, xs: 3 }} >
                    <ActionSection style={{ width: '100%' }} />
                </Grid>
            </Grid>
        </FrutappLayouth>
    )
}
