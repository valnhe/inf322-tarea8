import React, { useState } from 'react'
import { Routes, Route, Link, NavLink } from 'react-router-dom'


import '../components/wrapper'
import Wrapper from '../components/wrapper'
import Button from '../components/button'
import Info from './practicas-pages/info'
import Logs from './practicas-pages/logs'

export const PracticasPage = () => {

  const [route, setRoute] = useState('info')
  const active = route === 'info' ? true : false

  return (
    <main className='practicas-page'>
      <h1>Mis Prácticas</h1>
      <p>En esta sección encontrarás información de tus prácticas.</p>

      <Wrapper titulo="Práctica Industrial" estado="En proceso"> 
        <section className='practicas-page__industrial'>
          <nav className='practicas-page__nav'>
            <Button text="Información General" onClick={() => setRoute('info')} estado={active}/>
            <Button text="Bitácoras" onClick={() => alert("Funcionalidad fuera del alcance de nuestro campo de trabajo.")}/>
            <Button text="Informe" onClick={() => alert("Funcionalidad fuera del alcance de nuestro campo de trabajo.")}/>
            <Button text="Evaluación" onClick={() => alert("Funcionalidad fuera del alcance de nuestro campo de trabajo.")}/>
            <Button text="Logs" onClick={() => setRoute('logs')} estado={!active}/>
          </nav>

          {route === 'info' && <Info />}
          {route === 'logs' && <Logs />}
          
        </section>
        
      </Wrapper>

      <Wrapper titulo="Práctica Profesional" estado="No iniciada"> 
        <p className='practicas-page__message'>Felicidades, has terminado exitosamente tu <strong>Práctica Industrial</strong>, el próximo paso es la del tipo <strong>Profesional</strong>.</p>
        <div className='practicas-page__buttons'>
          <Button text="Inscribir práctica" estado={true} onClick={() => alert("Funcionalidad fuera del alcance de nuestro campo de trabajo. fuera del alcance de nuestro campo de trabajo.")}/>
          <div>
            <Link to="/ofertas" className='button--disabled'>
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
