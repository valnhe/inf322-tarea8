import React, { useState } from 'react'

export const Info = () => {
    const [active, setActive] = useState(false);

  return (
    <>
        <div className='practicas-page__industrial__title'>
            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 17q.425 0 .713-.288T13 16v-4q0-.425-.288-.712T12 11t-.712.288T11 12v4q0 .425.288.713T12 17m0-8q.425 0 .713-.288T13 8t-.288-.712T12 7t-.712.288T11 8t.288.713T12 9m0 13q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"></path></svg>
            <h3>Progreso de la Práctica</h3>
        </div>

        <section className='practicas-page__progress'>
            <div>.</div>
            <p><strong>43%</strong> (175Hrs)</p>
        </section>

        <div className='practicas-page__industrial__title'>
            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M5 16.175q.25-.075.488-.125T6 16h1V4H6q-.425 0-.712.288T5 5zM6 22q-1.25 0-2.125-.875T3 19V5q0-1.25.875-2.125T6 2h6q.425 0 .713.288T13 3t-.288.713T12 4H9v12h6v-2q0-.425.288-.712T16 13t.713.288T17 14v4H6q-.425 0-.712.288T5 19t.288.713T6 20h13v-7q0-.425.288-.712T20 12t.713.288T21 13v7q0 .825-.587 1.413T19 22zm-1-5.825V4zM17.5 12q0-2.3 1.6-3.9T23 6.5q-2.3 0-3.9-1.6T17.5 1q0 2.3-1.6 3.9T12 6.5q2.3 0 3.9 1.6t1.6 3.9"></path></svg>
            <h3>Bitácoras</h3>
        </div>

        <section className='practicas-page__bitacoras'>
            <div className='practicas-page__bitacoras__left'>
                <div>
                    <h4>Total días ingresados:</h4>
                    <p>21 días</p>
                </div>
                <div>
                    <h4>Total días sin bitácora:</h4>
                    <p>3 días</p>
                </div>
            </div>
            <div className='practicas-page__bitacoras__right'>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="m13 12.175l2.25 2.25q.275.275.275.688t-.275.712q-.3.3-.712.3t-.713-.3L11.3 13.3q-.15-.15-.225-.337T11 12.575V9q0-.425.288-.712T12 8t.713.288T13 9zM12 6q-.425 0-.712-.288T11 5V4h2v1q0 .425-.288.713T12 6m6 6q0-.425.288-.712T19 11h1v2h-1q-.425 0-.712-.288T18 12m-6 6q.425 0 .713.288T13 19v1h-2v-1q0-.425.288-.712T12 18m-6-6q0 .425-.288.713T5 13H4v-2h1q.425 0 .713.288T6 12m6 10q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m8-10q0-3.35-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20t5.675-2.325T20 12m-8 0"></path></svg>
                    <h4>Última bitácora</h4>
                </div>
                <p className='practicas-page__bitacoras__right__date'>15 de febrero de 2023</p>
                <p className='practicas-page__bitacoras__right__hour'>08:00 a 17:00</p>
                <h5>Actividad desarrollada:</h5>
                <p>Se revisaron endpoints en la plataforma Postman: getPersonas, updatePersonas. Se arreglaron los defectos que se encontraron.</p>
            </div>
        </section>
            
        <div className='practicas-page__industrial__title'>
            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M7 21q-.425 0-.712-.288T6 20t.288-.712T7 19h4v-3H4q-.825 0-1.412-.587T2 14V5q0-.825.588-1.412T4 3h16q.825 0 1.413.588T22 5v9q0 .825-.587 1.413T20 16h-7v3h4q.425 0 .713.288T18 20t-.288.713T17 21zm-3-7h16V5H4zm0 0V5z"></path></svg>          
            <h3>Sobre la Práctica</h3>
        </div>

        <article className='practicas-page__about'>
            <section>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M3 19V9q0-.825.588-1.412T5 7h4V5.825q0-.4.15-.763t.425-.637l1-1Q11.15 2.85 12 2.85t1.425.575l1 1q.275.275.425.638t.15.762V11h4q.825 0 1.413.588T21 13v6q0 .825-.587 1.413T19 21H5q-.825 0-1.412-.587T3 19m2 0h2v-2H5zm0-4h2v-2H5zm0-4h2V9H5zm6 8h2v-2h-2zm0-4h2v-2h-2zm0-4h2V9h-2zm0-4h2V5h-2zm6 12h2v-2h-2zm0-4h2v-2h-2z"></path></svg>
                    <h4>Empresa</h4>
                </div>
                <h5>Nombre:</h5>
                <p>Data Insights Corp</p>
                <h5>Dirección:</h5>
                <p>San Martín 999</p>
                <h5>RUT:</h5>
                <p>81.668.700-4</p>
            </section>

            <section>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 12q-1.65 0-2.825-1.175T8 8t1.175-2.825T12 4t2.825 1.175T16 8t-1.175 2.825T12 12m-8 8v-2.8q0-.85.438-1.562T5.6 14.55q1.55-.775 3.15-1.162T12 13t3.25.388t3.15 1.162q.725.375 1.163 1.088T20 17.2V20z"></path></svg>
                    <h4>Supervisor</h4>
                </div>
                <h5>Nombre:</h5>
                <p>Felipe Aros</p>
                <h5>Email:</h5>
                <p>felipearos@correo.cl</p>
                <h5>Teléfono:</h5>
                <p>+56 9 8374 9293</p>
            </section>

            <section>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 17q.425 0 .713-.288T13 16t-.288-.712T12 15t-.712.288T11 16t.288.713T12 17m-1-4h2V7h-2zm-2.75 8L3 15.75v-7.5L8.25 3h7.5L21 8.25v7.5L15.75 21zm.85-2h5.8l4.1-4.1V9.1L14.9 5H9.1L5 9.1v5.8zm2.9-7"></path></svg>
                    <h4>Práctica</h4>
                </div>
                <h5>Modo:</h5>
                <p>2 Meses</p>
                <h5>Fecha de inicio:</h5>
                <p>18 de enero, 2023</p>
                <h5>Fecha de término:</h5>
                <p>18 de febrero, 2023</p>
            </section>
        </article>
    </>
  )
}

export default Info