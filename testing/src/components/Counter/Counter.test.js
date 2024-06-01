import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Counter from './index'

describe("Counter Tests", () => {
    

    beforeEach(() => {})
    afterEach(() => {})
    beforeAll(() => {})
    afterAll(() => {})

    test("increase button", async() => {
        
        render(<Counter />)
        const count = screen.getByText("0")
        const increaseButton = screen.getByText("Increase")
    
        await userEvent.click(increaseButton)
    
        expect(count).toHaveTextContent("1")
    
    })
    
    test("decrease button", async() => {
    
        render(<Counter />)
        const count = screen.getByText("0")

        const decreaseButton = screen.getByText("Decrease")
    
        await userEvent.click(decreaseButton)
    
        expect(count).toHaveTextContent("-1")
    
    })
})

