import {fireEvent, screen} from '@testing-library/react'
import { render } from '@testing-library/react'
import Counter from '.'


describe('counter', () => {
   
    beforeEach(() => render( <Counter/>))

    test('it loades with counter at 0', () => {
        const counter = screen.getByRole('figure')
        expect(counter.textContent).toBe("count: 0")
    })

   
    test('clicking the button increases the counter by 1', () => {
        const counter = screen.getByRole('figure')
        const button = screen.getByRole('button')
        fireEvent.click(button)
        fireEvent.click(button)
        expect(counter.textContent).toBe("count: 2")
    })
})

