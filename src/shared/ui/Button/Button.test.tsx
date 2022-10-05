import { render, screen } from '@testing-library/react'
import { Button, ThemeButton } from 'shared/ui/Button/Button'

describe('classnames', () => {
  test('with 1st patam', () => {
    render(<Button>test</Button>)
    expect(screen.getByText('test')).toBeInTheDocument()
  })

  test('with 1st patam', () => {
    render(<Button theme={ThemeButton.CLEAR}>test</Button>)
    expect(screen.getByText('test')).toHaveClass('clear')
    screen.debug()
  })
})
