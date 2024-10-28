import React, { useState } from 'react'

export const Wrapper = ({titulo, estado, children}) => {
    const [active, setActive] = useState(false);

  return (
    <section className='wrapper'>
        <header onClick={() => setActive(!active)}>
            <div>
                <h2>{titulo}</h2>
                <p className={`${estado === 'Aprobada' ? 'wrapper__estado--aprobada' : (estado === 'En proceso' ? 'wrapper__estado--enproceso' : 'wrapper__estado--noiniciada' )}`}>{estado}</p>
            </div>
            <svg className={`${active === true ? 'wrapper__arrow--active' : 'wrapper__arrow'}`} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M16 22L6 12L16 2l1.775 1.775L9.55 12l8.225 8.225z"></path></svg>
        </header>
        {active && children}
    </section>
  )
}

export default Wrapper