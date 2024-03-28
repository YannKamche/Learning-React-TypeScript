import React from 'react'
type ButtonProps = {
    handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void
}
const Button = ({ handleClick }: ButtonProps) => {
  return (
      <button onClick={ (event) => handleClick(event, 1)}>I was clicked</button>
  )
}

export default Button
