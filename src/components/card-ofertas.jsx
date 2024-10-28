import React from 'react'
import { Link } from 'react-router-dom';

export const CardOfertas = ({Oferta}) => {
  const enlacePostular = `/ofertas/${Oferta.id}`;
  
  return (
    <article className='card-ofertas'>
      <div>
        <h2>{Oferta.puesto}</h2>
        <h3>{Oferta.empresa}</h3>
      </div>
      
      <div>
      {Oferta.tipo.length == 1? <p  className='ubicacion'>{Oferta.tipo[0]}</p> : <p  className='ubicacion'>{Oferta.tipo[0]} - {Oferta.tipo[1]}</p>}
        <p>{Oferta.ubicacion}</p>
        <p className='modalidad'>{Oferta.modalidad}</p>
        <Link to={enlacePostular} className='card-ofertas__link'>
          Postular
        </Link>
      </div>
    </article>
  )
}

export default CardOfertas