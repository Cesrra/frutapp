import ImageList from '@mui/material/ImageList';
import { CardFruit } from './CardFruit';
import { Container } from '@mui/system';

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
          <CardFruit key={item.id} item={ item } custom={{ height: '170px' }} />
        ))}
      </ImageList>
    </Container>
  );
}

const itemData = [
  {
    id: 1,
    calories: '60 kcal por 100g',
    imgUrl: 'https://okdiario.com/img/vida-sana/2017/01/26/mango_verde_maduro.jpg',
    name: 'Mango',
    description: 'Mango tropical: joya dorada de dulzura veraniega. Pulpa jugosa y vibrante color en cada bocado, una experiencia exquisita. 🥭🌞',
    price: 2000,
  },
  {
    id: 2,
    calories: '52 kcal por 100g',
    imgUrl: 'https://gastronomiaycia.republica.com/wp-content/uploads/2012/05/papple.jpg',
    name: 'Manzana',
    description: 'Manzana fresca: crujiente deleite primaveral. Textura jugosa y dulzura equilibrada, una explosión refrescante en cada bocado. 🍏✨',
    price: 4500,
  },
  {
    id: 3,
    calories: '60 kcal por 100g',
    imgUrl: 'https://www.gob.mx/cms/uploads/article/main_image/71887/Peras.jpg',
    name: 'Pera',
    description: 'Deléitate con la frescura suculenta de la pera jugosa. 🍐✨ Cada mordisco es un placer frutal que despierta tus sentidos',
    price: 2500,
  },
  {
    id: 4,
    calories: '70 kcal por 100g',
    imgUrl: 'https://www.shutterstock.com/image-photo/bunch-white-grapes-between-grape-600nw-2302634261.jpg',
    name: 'Uva',
    description: 'Sumérgete en el éxtasis de las uvas dulces, una explosión de sabor celestial en cada racimo. 🍇🌈',
    price: 6000,
  },
  {
    id: 5,
    calories: ' 50 kcal por 100g',
    imgUrl: 'https://www.lacocinadelila.com/wp-content/uploads/2021/07/como-madurar-una-pina-600x450.jpg',
    name: 'Piña',
    description: 'Explora la mezcla tropical de dulzura y frescura en cada bocado de piña. 🍍🌴 Un viaje al paraíso de los sabores únicos con cada mordisco',
    price: 3000,
  },
  {
    id: 6,
    calories: '40 kcal por 100g',
    imgUrl: 'https://3.bp.blogspot.com/-VVW66qQrpsU/VQVcU0BePzI/AAAAAAAAAqg/lpzBpvdaaC4x4RTjGhAt57g9J2PMg5X3wCPcB/s1600/Mamones1.jpg',
    name: 'Mamones',
    description: 'Descubre la exquisitez de los mamones tiernos, pequeñas joyas jugosas que despiertan tus sentidos. 😋🍈',
    price: 4000,
  },
  {
    id: 7,
    calories: '40 kcal por 100g',
    imgUrl: 'https://www.gob.mx/cms/uploads/image/file/479734/durazno1.jpg',
    name: 'Durazno',
    description: 'Sumérgete en la dulzura y la jugosidad del durazno suave. 🍑💛 Cada bocado es un abrazo refrescante de la naturaleza',
    price: 4500,
  },
  {
    id: 8,
    calories: '30 kcal por 100g',
    imgUrl: 'https://img.europapress.es/fotoweb/fotonoticia_20230513083148_640.jpg',
    name: 'Sandia',
    description: 'Experimenta la explosión de hidratación con la sandía refrescante. 🍉💦 Cada bocado es una ola de frescura',
    price: 1800,
  },
  {
    id: 9,
    calories: '30 kcal por 100g',
    imgUrl: 'https://www.frutalia.com.co/wp-content/uploads/2022/06/istockphoto-987976840-612x612-1.jpg',
    name: 'Lulo',
    description: 'Déjate cautivar por el sabor único y refrescante del lulo exótico. 🌿🌟 Una experiencia tropical en cada sorbo',
    price: 3200,
  },
  {
    id: 10,
    calories: '50 kcal por 100g',
    imgUrl: 'https://wikifarmer.com/wp-content/uploads/2019/07/Cosecha-de-Naranjos-y-Rendimiento.jpg',
    name: 'Naranja',
    description: 'Disfruta de la naranja jugosa, cada gajo es una explosión de vitamina C y energía. 🍊🌞',
    price: 2000,
  },
  {
    id: 11,
    calories: '40 kcal por 100g',
    imgUrl: 'https://www.frutamare.com/wp-content/uploads/2021/04/Mandarino.jpg',
    name: 'Mandarina',
    description: 'Vive la explosión de frescura con la mandarina fácil de pelar. 🍊🌿 Cada bocado es un zing de vitalidad',
    price: 2500,
  },
  {
    id: 12,
    calories: '30 kcal por 100g',
    imgUrl: 'https://merkaplace.ca/2628-large_default/granadilla-unidad.jpg',
    name: 'Granadilla',
    description: 'Sumérgete en la granadilla aromática, una pequeña joya tropical de sabores exquisitos. 🌺😋',
    price: 4500,
  },
  {
    id: 13,
    calories: '90 kcal por 100g',
    imgUrl: 'https://static.vendaenlinea.co/productos/medium/nordika-store-colombia_semilla-colino-banano-manzano_5651.jpg',
    name: 'Banano',
    description: 'Siente la cremosidad y la energía en cada bocado del banano. 🍌💪 Una fuente de felicidad y vitalidad',
    price: 1500,
  },
  {
    id: 14,
    calories: '',
    imgUrl: 'https://www.viverosbrokaw.com/wp-content/uploads/2018/06/guayaba-limon.jpg',
    name: 'Guayaba',
    description: 'Explora la guayaba tropical, una mezcla de dulce y ácido que te transporta al paraíso frutal. 🌴🍬',
    price: 3500,
  },
  {
    id: 15,
    calories: '30 kcal por 100g',
    imgUrl: 'https://www.shutterstock.com/image-photo/delicious-ripe-tamarinds-on-black-600nw-1953546295.jpg',
    name: 'Tamarindo',
    description: 'Déjate envolver por el sabor agridulce del tamarindo, una experiencia exótica en cada vaina. 🌳😋',
    price: 4000,
  },
  {
    id: 16,
    calories: '10 kcal por 100g',
    imgUrl: 'https://i.blogs.es/0686d7/fresas2/450_1000.jpeg',
    name: 'Fresa',
    description: 'Descubre los pequeños tesoros de dulzura en cada fresa roja. 🍓❤️ Explosión de placer que endulza tu día con su sabor inigualable y frescura',
    price: 5000,
  },
];
