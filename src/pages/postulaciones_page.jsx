import React from 'react'

export const PostulacionesPage = () => {
  return (
    <main className='postulaciones-page'>
      <h1>Mis Postulaciones</h1>
      <p>Aquí encontrarás información sobre tus postulaciones.</p>

      <div>
        <section className='postulaciones-page__grid'>
          <h2>Empresa</h2>
          <h2>Fecha de Postulación</h2>
          <h2>Estado</h2>

          <p>Tech Innovators</p>
          <p>22/12/2022</p>
          <p className='postulaciones-page--rev'>En revisión</p>

          <p>BioTech Solutions</p>
          <p>13/11/2022</p>
          <p className='postulaciones-page--aceptada'>Aceptada</p>

          <p>CyberSecurity Ltd.</p>
          <p>05/10/2022</p>
          <p className='postulaciones-page--rechazada'>Rechazada</p>

          <p>IoT Solutions</p>
          <p>30/09/2022</p>
          <p className='postulaciones-page--rechazada'>Rechazada</p>


          <p>Gaming Innovators</p>
          <p>15/09/2022</p>
          <p className='postulaciones-page--rechazada'>Rechazada</p>
        </section>
      </div>


    </main>
  )
}

export default PostulacionesPage