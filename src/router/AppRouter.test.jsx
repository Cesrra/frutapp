import { render, screen } from "@testing-library/react"
import { AuthContext } from "../auth/context/AuthContext"
import { MemoryRouter } from "react-router-dom"
import { AppRouter } from "./AppRouter"

describe("Pruebas en <AppRouter />", () => {
    test('Debe mostrar el login si no está autenticado el usuario', () => {
        const contextValue = {
            logged: false,
        }

        render(
            <MemoryRouter initialEntries={['/home']}>
                <AuthContext.Provider value={contextValue}>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        )

        expect( screen.getByText('Iniciar Sesión')).toBeTruthy()
    })

    test('Debe mostrar el nombre del usuario en el Navbar cuando cuando el usuario está logeado', () => {
        const contextValue = {
            logged: true,
            user: {
                id: 'test_2',
                name: 'Test Navbar'
            }
        }

        render(
            <MemoryRouter initialEntries={['/home']}>
                <AuthContext.Provider value={contextValue}>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        )

        expect( screen.getByText('Test Navbar')).toBeTruthy()
    })
})