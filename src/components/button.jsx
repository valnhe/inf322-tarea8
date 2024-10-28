import React from 'react'

export const Button = ({text, onClick = () => {}, estado}) => {

  const clase = estado ? 'button' : 'button--disabled';

  return (
    <button className={clase} onClick={onClick}>
        {text}
    </button>
  )
}

export default Button