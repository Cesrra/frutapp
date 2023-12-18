import { useParams } from "react-router"
import { FrutappLayouth } from "../layout/FrutappLayouth"

import { DescriptionFruit } from "../components/DescriptionFruit";
import { ActionSection } from "../components/ActionSection";
import { Grid } from "@mui/material";
import { getFruitById } from "../helpers";
import { useEffect, useState } from "react";

export const FrutappDetail = () => {
    const {id} = useParams()
    const [fruit, setFruit] = useState({})
    
    useEffect(() => {
        setFruit(getFruitById(id))
    }, [])

    return (
        <FrutappLayouth>
            <Grid container spacing={3} alignItems="center" >                
                <Grid item lg={4} md={4} sm={4} xs={12} order={{ md: 1, sm: 1, xs: 2 }} >
                    <img 
                        src={ fruit.imgUrl }
                        alt={ fruit.name }
                        style={{ width: '100%', height: 'auto', borderRadius: '10px' }}
                    />
                </Grid>
                <Grid item lg={4} md={4} sm={4} xs={12} order={{ md: 2, sm: 2, xs: 1 }} >
                    <DescriptionFruit
                        name={ fruit.name}
                        price={ fruit.price}
                        calories={ fruit.calories}
                        description={ fruit.description}
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
