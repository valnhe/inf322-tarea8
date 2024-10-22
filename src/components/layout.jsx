import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from '../pages/home_page'
import OfertasPage from '../pages/ofertas_page'
import PostulacionesPage from '../pages/postulaciones_page'

import NavBar from '../components/nav_bar'
import Logo from '../assets/logo'


const Layout = () => {

  const [active, setActive] = useState(false);


  const [show, setShow] = useState(false);


  return (
    <BrowserRouter>
      <div className='layout'>

        <aside className={`${active === true ? 'layout__aside--active' : 'layout__aside'}`}>
          <header className='layout__logo-container'>
            <div>
              <Logo />
              {!active && <h3>Sistemas de Prácticas</h3>}
            </div>
              {!active && <h4>Departamento de Informática USM</h4>}
              {active && <h4>DI USM</h4>}
          </header>
          <nav>
            <svg xmlns="http://www.w3.org/2000/svg" width="1.8em" height="1.8em" viewBox="0 0 24 24" className='arrow' onClick={() => setActive(!active)}><path fill="white" d="M11.05 12L7.175 6.575q-.35-.5-.087-1.037T7.975 5q.25 0 .475.113t.35.312L13.5 12l-4.7 6.575q-.125.2-.35.313T7.975 19q-.6 0-.875-.537t.075-1.038zM17 12l-3.875-5.425q-.35-.5-.088-1.037T13.926 5q.25 0 .475.113t.35.312L19.45 12l-4.7 6.575q-.125.2-.35.313t-.475.112q-.6 0-.875-.537t.075-1.038z"></path></svg>
            <NavBar showOnlySvg={active}/>
          </nav>
        </aside>
    
        <div className='layout__page'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/ofertas' element={<OfertasPage />} />
            <Route path='/postulaciones' element={<PostulacionesPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default Layout
