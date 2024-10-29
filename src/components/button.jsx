import React from 'react'

export const Button = ({text, onClick = () => {}, estado = 'no'}) => {

  const clase = estado ? 'button' : (!estado ? 'button--disabled' : 'button--nolink') ;

  if (estado === 'no') {
    return (
      <button className='button--nolink' onClick={onClick}>
          {text}
      </button>
    )
  } else {
    return (
      <button className={clase} onClick={onClick}>
          {text}
      </button>
    )
  }
}

export default Button