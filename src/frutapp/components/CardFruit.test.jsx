import { render } from "@testing-library/react"
import { CardFruit } from "./CardFruit"


const fruit = {
    id: 1,
    calories: '60 kcal por 100g',
    imgUrl: 'https://okdiario.com/img/vida-sana/2017/01/26/mango_verde_maduro.jpg',
    name: 'Mango',
    description: 'Mango tropical: joya dorada de dulzura veraniega. Pulpa jugosa y vibrante color en cada bocado, una experiencia exquisita. 🥭🌞',
    price: 2000,
}

describe("Pruebas en el componente <CardFruit />", () => {
    test('El componente de CardFruit debe hacer Match con el Snapshot', () => {
        const { container } = render(<CardFruit item={fruit} custom={{ height: '170px' }} />)
        expect(container).toMatchSnapshot()
    })
})