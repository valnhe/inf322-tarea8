import React from 'react'
import { Link , useParams} from 'react-router-dom';

import Ofertas from "../mockup.json";
import Button from '../components/button'


export const OfertasDetailsPage = () => {

  const { id } = useParams();
  const oferta = Ofertas?.find((oferta) => oferta.id === Number(id));

  const mostrarAlerta = () => {
    alert("¡La postulación ha sido enviada con éxito!");
    window.location.reload();
};
  
  return (
    <main className='ofertas-details-page'>
      <h1>Ofertas de Prácticas</h1>
      <div className='ofertas-details-page__link'>
        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="m7.85 13l2.85 2.85q.3.3.288.7t-.288.7q-.3.3-.712.313t-.713-.288L4.7 12.7q-.3-.3-.3-.7t.3-.7l4.575-4.575q.3-.3.713-.287t.712.312q.275.3.288.7t-.288.7L7.85 11H19q.425 0 .713.288T20 12t-.288.713T19 13z"></path></svg>
        <Link to='/ofertas'>
          Volver a ver más ofertas
        </Link>
      </div>
      
      <section className='ofertas-details-page__section'>
        <h3>{oferta.empresa}</h3>
        <h2>{oferta.puesto}</h2>
        <ul>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 12q.825 0 1.413-.587T14 10t-.587-1.412T12 8t-1.412.588T10 10t.588 1.413T12 12m0 10q-4.025-3.425-6.012-6.362T4 10.2q0-3.75 2.413-5.975T12 2t5.588 2.225T20 10.2q0 2.5-1.987 5.438T12 22"></path></svg>
            <p><span>Ubicación: </span>{oferta.ubicacion}</p>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" ><path fill="currentColor" d="M11.025 21v-2.15q-1.325-.3-2.287-1.15t-1.413-2.4l1.85-.75q.375 1.2 1.113 1.825t1.937.625q1.025 0 1.738-.462t.712-1.438q0-.875-.55-1.387t-2.55-1.163q-2.15-.675-2.95-1.612t-.8-2.288q0-1.625 1.05-2.525t2.15-1.025V3h2v2.1q1.25.2 2.063.913t1.187 1.737l-1.85.8q-.3-.8-.85-1.2t-1.5-.4q-1.1 0-1.675.488T9.825 8.65q0 .825.75 1.3t2.6 1q1.725.5 2.613 1.588t.887 2.512q0 1.775-1.05 2.7t-2.6 1.15V21z"></path></svg>
            <p><span>Sueldo aproximado: </span>{oferta.sueldo}</p>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M5 22q-.825 0-1.412-.587T3 20V6q0-.825.588-1.412T5 4h1V2h2v2h8V2h2v2h1q.825 0 1.413.588T21 6v4.675q0 .425-.288.713t-.712.287t-.712-.288t-.288-.712V10H5v10h5.8q.425 0 .713.288T11.8 21t-.288.713T10.8 22zm13 1q-2.075 0-3.537-1.463T13 18t1.463-3.537T18 13t3.538 1.463T23 18t-1.463 3.538T18 23m1.675-2.625l.7-.7L18.5 17.8V15h-1v3.2z"></path></svg>
            <p><span>Horario: </span>{oferta.horario}</p>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M4 21q-.825 0-1.412-.587T2 19V8q0-.825.588-1.412T4 6h4V4q0-.825.588-1.412T10 2h4q.825 0 1.413.588T16 4v2h4q.825 0 1.413.588T22 8v11q0 .825-.587 1.413T20 21zm6-15h4V4h-4z"></path></svg>
            <p><span>Modalidad: </span>{oferta.modalidad}</p>
          </li>
        </ul>
        <h4>Detalles</h4>
        <p className='ofertas-details-page__details'>{oferta.detalles}</p>
        {oferta.preguntas?.map((pregunta, index) => (
          <div key={index} className='ofertas-details-page__question'>
            <p>{pregunta}</p>
            <textarea name={`Pregunta ${index}`} id={index} placeholder='Escribe tu respuesta aquí...'></textarea>
          </div>
        ))}
        <div className='button-section'>
          <Button text='Postular' onClick={mostrarAlerta} estado={true}/>
        </div>
      </section>
    </main>
  )
}

export default OfertasDetailsPage