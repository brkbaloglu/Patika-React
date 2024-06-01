import { render, screen } from "@testing-library/react"
import userEvent from '@testing-library/user-event'

import Todo from './index'

describe('Todo tests', () => {
    test("Add item in the list", () => {
        
        render(<Todo/>)
    
        const button = screen.getByText("Add")
        const input = screen.getByTitle("text")
        
    })

    test("3 item renderlanmalı", () => {
        render(<Todo/>)

        const items = screen.getAllByText(/Item/i)
        expect(items.length).toEqual(3)
    })

    test("Input ve button dökümanda bulunmalı", () => {
        render(<Todo/>)
        const button = screen.getByText("Add")
        const input = screen.getByTitle("text")

        expect(button).toBeInTheDocument()
        expect(input).toBeInTheDocument()
    })

    test("Inputa string girilip buttona basılınca listeye eklenmeli", async() => {
        render(<Todo/>)

        const name = "Item4"
        const input = screen.getByTitle("text")
        const button = screen.getByText("Add")
        userEvent.type(input, name)
        await userEvent.click(button)
        expect(screen.getByText(name)).toBeInTheDocument()

    })  
})