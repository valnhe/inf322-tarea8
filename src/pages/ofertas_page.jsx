import React, { useState, useEffect } from 'react';
import Ofertas from "../mockup.json";
import Card from "../components/card-ofertas";

export const OfertasPage = () => {

  // Temas de responsive design

  const [ofertasPorPagina, setofertasPorPagina] = useState(4);

  const calculateItemsPerPage = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth >= 1300) {
      setofertasPorPagina(12); 
    } else if (screenWidth >= 900) {
      setofertasPorPagina(6); 
    } else if (screenWidth >= 600) {
      ssetofertasPorPagina(6); 
    } else {
      setofertasPorPagina(4);
    }
  };

  useEffect(() => {
    calculateItemsPerPage();
    window.addEventListener('resize', calculateItemsPerPage);
    return () => window.removeEventListener('resize', calculateItemsPerPage);
  }, []);

  // Paginación de Ofertas

  const [currentPage, setCurrentPage] = useState(1);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const [searchTerm, setSearchTerm] = useState("");
  const [tipo, setTipo] = useState([]);
  const [modalidad, setModalidad] = useState([]);

  useEffect(() => {
    setCurrentPage(1);
  }, [modalidad, tipo, searchTerm]);

  // Filtrado de Ofertas

  const handleModalidad = (mod) => {
    if (!modalidad.includes(mod)) {
      setModalidad([...modalidad, mod]);
    } else {
      setModalidad(modalidad.filter((m) => m !== mod));
    }
  };

  const handleTipo = (tip) => {
    if (!tipo.includes(tip)) {
      setTipo([...tipo, tip]);
    } else {
      setTipo(tipo.filter((t) => t !== tip));
    }
  };

  const filteredOfertas = Ofertas.filter((oferta) => {
    const matchesSearchTerm = searchTerm
        ? (oferta.puesto && oferta.puesto.toLowerCase().includes(searchTerm.trim().toLowerCase())) ||
          (oferta.empresa && oferta.empresa.toLowerCase().includes(searchTerm.trim().toLowerCase())) ||
          (oferta.ubicacion && oferta.ubicacion.toLowerCase().includes(searchTerm.trim().toLowerCase())) ||
          (oferta.modalidad && oferta.modalidad.toLowerCase().includes(searchTerm.trim().toLowerCase()))
        : true;

    const tip = oferta.tipo;
    const matchesModalidad = modalidad.length ? modalidad.includes(oferta.modalidad) : true;
    const matchesTipo = tipo.length ? (tipo.includes(tip[0]) || tipo.includes(tip[1])): true;

    return matchesSearchTerm && matchesModalidad && matchesTipo;
  });

  const indexOfLastOferta = currentPage * ofertasPorPagina;
  const indexOfFirstOferta = indexOfLastOferta - ofertasPorPagina;
  const currentOfertas = filteredOfertas.slice(indexOfFirstOferta, indexOfLastOferta);

  const totalPages = Math.ceil(filteredOfertas.length / ofertasPorPagina);

  return (
    <main className='ofertas-page'>
      <h1>Ofertas de Prácticas</h1>
      <p>En esta página se mostrarán las ofertas de prácticas disponibles para postular.</p>

      <input
          type="text"
          placeholder="Buscar ofertas..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="ofertas-page__search" 
      />
      
      <section className='ofertas-page__filters'>
        <aside>
          <h2>Filtros</h2>
            <div>
              <h3>Tipo de práctica</h3>
              <label>
                <input type="checkbox" id="cbox1" value="first_checkbox" onChange={() => handleTipo('Industrial')}/> Industrial
              </label>
              <label>
                <input type="checkbox" id="cbox2" value="first_checkbox" onChange={() => handleTipo('Profesional')}/> Profesional
              </label>
            </div>

          <div>
            <h3>Modalidad</h3>
            <label>
              <input type="checkbox" id="cbox3" value="first_checkbox" onChange={() => handleModalidad('Presencial')} /> Presencial
            </label>
            <label>
              <input type="checkbox" id="cbox4" value="first_checkbox" onChange={() => handleModalidad('Híbrido')} /> Híbrido
            </label>
            <label>
              <input type="checkbox" id="cbox5" value="first_checkbox" onChange={() => handleModalidad('Remoto')} /> Remoto
            </label>
          </div>
        </aside>

        <section className='ofertas-page__section'>
          {currentOfertas.map((oferta) => (
            <Card key={oferta.id} Oferta={oferta} />
          ))}
        </section>
      </section>

      <div className="ofertas-page__pagination">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Anterior
        </button>
        <span>Página {currentPage} de {totalPages}</span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Siguiente
        </button>
      </div>
    </main>
  );
};

export default OfertasPage;