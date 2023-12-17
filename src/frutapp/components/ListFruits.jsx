import ImageList from '@mui/material/ImageList';
import { CardFruit } from './CardFruit';
import { Container } from '@mui/system';
import { Link } from 'react-router-dom';

import itemData from '../../dummy_data';

export const ListFruits = () => {
  return (
    <Container>
      <ImageList 
        gap={12} sx={{
        mb: 8,
        gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr)) !important' 
        }}
      >
        {itemData.map((item) => (
          <Link 
            key={item.id} 
            to={`/home/detail/${ item.id }`} 
            style={{ textDecoration: 'none', color: 'inherit' }} 
          >
            <CardFruit item={ item } custom={{ height: '170px' }} />
          </Link>
        ))}
      </ImageList>
    </Container>
  );
}

