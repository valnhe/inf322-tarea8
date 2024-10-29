import React from 'react'

export const Logs = () => {


  return (
    <main className='practicas-page__logs'>
        <section>
            <p className='practicas-page__logs__desc'>La practica fue ingresada correctamente | (Estado: Esperando confirmación del supervisor)</p>
            <p className='practicas-page__logs__date'>20 de enero, 2023 - 12:43</p>
        </section>
        <section>
            <p className='practicas-page__logs__desc'>La practica fue confirmada por tu Supervisor | (Estado: En proceso)</p>
            <p className='practicas-page__logs__date'>20 de enero, 2023 - 13:17</p>
        </section>
    </main>
  )
}

export default Logs