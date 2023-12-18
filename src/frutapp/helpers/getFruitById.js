import fruits from '../data/fruits'

export const getFruitById = (id) => fruits.find(fruit => fruit.id == id)