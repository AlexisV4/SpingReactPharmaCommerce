import React from 'react';

export const Paginacion = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {/* Botón para retroceder de página */}
        <li className="page-item">
          <a
            className="page-link"
            href="#"
            aria-label="Previous"
            onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
          >
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>

        {/* Números de página */}
        {[...Array(totalPages)].map((_, index) => (
          <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
            <a
              className="page-link"
              href="#"
              onClick={() => onPageChange(index + 1)}
            >
              {index + 1}
            </a>
          </li>
        ))}

        {/* Botón para avanzar de página */}
        <li className="page-item">
          <a
            className="page-link"
            href="#"
            aria-label="Next"
            onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
          >
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Paginacion;
