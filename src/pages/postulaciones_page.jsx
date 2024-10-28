import React, {useState} from 'react'

export const PostulacionesPage = () => {
  const [postulacion, setPostulacion] = useState(true)

  return (
    <main className='postulaciones-page'>
      <h1>Mis Postulaciones</h1>
      <p>Aquí encontrarás información sobre tus postulaciones.</p>

      <div>
        <section className='postulaciones-page__grid'>
          <h2>Empresa</h2>
          <h2>Fecha de Postulación</h2>
          <h2>Estado</h2>
          <h2></h2>

          <p>Tech Innovators</p>
          <p>22/12/2022</p>
          {postulacion && <p>Postulación enviada</p>}
          {!postulacion && <p>Cancelada</p>}

          {postulacion && <p className='postulaciones-page--solicitud' onClick={() => setPostulacion(false)}>Cancelar postulación</p>}
          {!postulacion && <p></p>}

          <p>BioTech Solutions</p>
          <p>13/11/2022</p>
          <p className='postulaciones-page--aceptada'>Aceptada</p>
          <p></p>

          <p>CyberSecurity Ltd.</p>
          <p>05/10/2022</p>
          <p className='postulaciones-page--rev'>Rechazada</p>
          <p></p>

          <p>IoT Solutions</p>
          <p>30/09/2022</p>
          <p className='postulaciones-page--rechazada'>Rechazada</p>
          <p></p>


          <p>Gaming Innovators</p>
          <p>15/09/2022</p>
          <p className='postulaciones-page--rechazada'>Rechazada</p>
          <p></p>
        </section>
      </div>


    </main>
  )
}

export default PostulacionesPage