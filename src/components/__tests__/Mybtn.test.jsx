import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Mybtn from '../Mybtn'

describe('Mybtn', () => {
  it('renders button with correct className', () => {
    const className = 'my-button'
    const { getByRole } = render(<Mybtn className={className} />)
    const button = getByRole('button')
    expect(button).toHaveClass(className)
  })

  it('renders button with correct children', () => {
    const children = 'Click me'
    const { getByText } = render(<Mybtn>{children}</Mybtn>)
    const button = getByText(children)
    expect(button).toBeInTheDocument()
  })

  it('calls onClick handler when button is clicked', () => {
    const onClick = jest.fn()
    const { getByRole } = render(<Mybtn onClick={onClick} />)
    const button = getByRole('button')
    fireEvent.click(button)
    expect(onClick).toHaveBeenCalled()
  })

  it('renders button with correct style', () => {
    const style = { backgroundColor: 'red' }
    const { getByRole } = render(<Mybtn style={style} />)
    const button = getByRole('button')
    expect(button).toHaveStyle(style)
  })

  it('renders button with correct type', () => {
    const type = 'submit'
    const { getByRole } = render(<Mybtn type={type} />)
    const button = getByRole('button')
    expect(button).toHaveAttribute('type', type)
  })
}

)