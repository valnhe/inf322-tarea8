import React from 'react'
import { Link } from 'react-router-dom'


import '../components/wrapper'
import Wrapper from '../components/wrapper'
import Button from '../components/button'

export const PracticasPage = () => {
  return (
    <main className='practicas-page'>
      <h1>Mis Prácticas</h1>
      <p>En esta sección encontrarás información de tus prácticas.</p>

      <Wrapper titulo="Práctica Industrial" estado="En proceso"> 
        <p>jajjajaja</p>
        <p>jajjajaja</p>
        <p>jajjajaja</p>
      </Wrapper>

      <Wrapper titulo="Práctica Profesional" estado="No iniciada"> 
        <p className='practicas-page__message'>Felicidades, has terminado exitosamente tu <strong>Práctica Industrial</strong>, el próximo paso es la del tipo <strong>Profesional</strong>.</p>
        <div className='practicas-page__buttons'>
          <Button text="Inscribir práctica" estado={true} onClick={() => alert("Funcionalidad que se sale de nuestro conocimiento de trabajo")}/>
          <div>
            <Link to="/ofertas" className='practicas-page__link'>
              Buscar práctica
            </Link>
            <p>¿Todavía no encuentras práctica?</p>
          </div>
        </div>
      </Wrapper>
    </main>
  )
}

export default PracticasPage
