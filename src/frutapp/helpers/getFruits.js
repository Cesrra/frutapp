import fruits from '../data/fruits'

const formatPrice = (price) => {
    const priceFormat = new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(price);
    return priceFormat
}


export const getFruits = () => {
    const newFruits = fruits?.map(fruit => ({
        ...fruit,
        price: formatPrice(fruit.price)
    }))
    return newFruits
}