import React, { useState, useEffect } from 'react';
import Ofertas from "../mockup.json";
import Card from "../components/card-ofertas";

export const OfertasPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const ofertasPorPagina = 12;

  const filteredOfertas = searchTerm ? Ofertas.filter((oferta) => 
    (oferta.puesto && oferta.puesto.toLowerCase().includes(searchTerm.trim().toLowerCase())) ||
    (oferta.empresa && oferta.empresa.toLowerCase().includes(searchTerm.trim().toLowerCase())) ||
    (oferta.ubicacion && oferta.ubicacion.toLowerCase().includes(searchTerm.trim().toLowerCase())) ||
    (oferta.modalidad && oferta.modalidad.toLowerCase().includes(searchTerm.trim().toLowerCase()))
  ) 
  
  : Ofertas;

  const indexOfLastOferta = currentPage * ofertasPorPagina;
  const indexOfFirstOferta = indexOfLastOferta - ofertasPorPagina;
  const currentOfertas = filteredOfertas.slice(indexOfFirstOferta, indexOfLastOferta);

  const totalPages = Math.ceil(filteredOfertas.length / ofertasPorPagina);

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

      <section className='ofertas-page__section'>
        {currentOfertas.map((oferta) => (
          <Card key={oferta.id} Oferta={oferta} />
        ))}
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