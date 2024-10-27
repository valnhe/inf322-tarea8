import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavBar = ({ showOnlySvg }) => {
  const navLinkClass = ({ isActive }) => {
    const classes = ['nav-bar__link']
    if (isActive) classes.push('nav-bar__link--active')
    return classes.join(' ')
  }
  return (
    <nav className='nav-bar'>
      <NavLink
        className={navLinkClass}
        to='/'
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" viewBox="0 0 24 24"><path fill="currentColor" d="M6 22q-.825 0-1.412-.587T4 20V4q0-.825.588-1.412T6 2h12q.825 0 1.413.588T20 4v16q0 .825-.587 1.413T18 22zm5-11l2.5-1.5L16 11V4h-5z"></path></svg>
        {!showOnlySvg && 'Prácticas'}
      </NavLink>
      <NavLink
        className='nav-bar__nolink'
        to='#'
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 12q-1.65 0-2.825-1.175T8 8t1.175-2.825T12 4t2.825 1.175T16 8t-1.175 2.825T12 12m-8 8v-2.8q0-.85.438-1.562T5.6 14.55q1.55-.775 3.15-1.162T12 13t3.25.388t3.15 1.162q.725.375 1.163 1.088T20 17.2V20z"></path></svg>
        {!showOnlySvg && 'Mi Perfil'}
      </NavLink>
      <NavLink
        className={navLinkClass}
        to='/ofertas'
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" viewBox="0 0 24 24"><path fill="currentColor" d="M19 13h-2q-.425 0-.712-.288T16 12t.288-.712T17 11h2q.425 0 .713.288T20 12t-.288.713T19 13m-4.4 3.8q.25-.35.65-.4t.75.2l1.6 1.2q.35.25.4.65t-.2.75t-.65.4t-.75-.2l-1.6-1.2q-.35-.25-.4-.65t.2-.75m3-10.6L16 7.4q-.35.25-.75.2t-.65-.4t-.2-.75t.4-.65l1.6-1.2q.35-.25.75-.2t.65.4t.2.75t-.4.65M7 15H4q-.425 0-.712-.288T3 14v-4q0-.425.288-.712T4 9h3l3.3-3.3q.475-.475 1.088-.213t.612.938v11.15q0 .675-.612.938T10.3 18.3z"></path></svg>
        {!showOnlySvg && 'Ofertas'}
      </NavLink>
      <NavLink
        className={navLinkClass}
        to='/postulaciones'
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" viewBox="0 0 24 24"><path fill="currentColor" d="M4 17q-.825 0-1.412-.587T2 15V7.15q0-.375.213-.737T2.8 5.85L10.5 2l7.55 3.85q.3.15.513.475T18.85 7h-2.925L10.5 4.25L4 7.475zm3 4q-.825 0-1.412-.587T5 19v-9q0-.825.588-1.412T7 8h13q.825 0 1.413.588T22 10v9q0 .825-.587 1.413T20 21zm6.5-5.65L20 12v-2l-6.5 3.35L7 10v2z"></path></svg>
        {!showOnlySvg && 'Postulaciones'}
      </NavLink>
      <NavLink
        className='nav-bar__nolink'
        to='#'
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" viewBox="0 0 24 24"><path fill="currentColor" d="M3 19V9q0-.825.588-1.412T5 7h4V5.825q0-.4.15-.763t.425-.637l1-1Q11.15 2.85 12 2.85t1.425.575l1 1q.275.275.425.638t.15.762V11h4q.825 0 1.413.588T21 13v6q0 .825-.587 1.413T19 21H5q-.825 0-1.412-.587T3 19m2 0h2v-2H5zm0-4h2v-2H5zm0-4h2V9H5zm6 8h2v-2h-2zm0-4h2v-2h-2zm0-4h2V9h-2zm0-4h2V5h-2zm6 12h2v-2h-2zm0-4h2v-2h-2z"></path></svg>
        {!showOnlySvg && 'Empresas'}
      </NavLink>
      <NavLink
        className='nav-bar__nolink'
        to='#'
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" viewBox="0 0 24 24"><path fill="currentColor" d="M16 20v-7h4v7zm-6 0V4h4v16zm-6 0V9h4v11z"></path></svg>
        {!showOnlySvg && 'Estadísticas'}
      </NavLink>
      <NavLink
        className='nav-bar__nolink'
        to='#'
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 17q.425 0 .713-.288T13 16t-.288-.712T12 15t-.712.288T11 16t.288.713T12 17m-1-4h2V7h-2zm-2.75 8L3 15.75v-7.5L8.25 3h7.5L21 8.25v7.5L15.75 21zm.85-2h5.8l4.1-4.1V9.1L14.9 5H9.1L5 9.1v5.8zm2.9-7"></path></svg>
        {!showOnlySvg && 'Informaciones'}
      </NavLink>
    </nav>
  )
}
 
export default NavBar
