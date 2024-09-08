import React, { useState, useEffect } from 'react';
import '../App.css';
import { fetchCompras } from '../../services/apiServices';
import { toast } from 'react-toastify';
import { EditarCompra } from './EditarCompra';
import Paginacion from '../Pagination/Pagination';
import Swal from 'sweetalert2';

//1. setSection se usa aquí para cambiar el componente que se debe mostrar en la App.js
export const Compras = ({setSection}) => {
  
  // Estados para manejar compras, términos de búsqueda y paginación
  const [compras, setCompras] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [compraEdit, setCompraEdit] = useState(null);
  const itemsPerPage = 10;

  // Estado que ejecuta el FETCH COMPRAS para buscar en la API
  useEffect(() => {
    fetchCompras(setCompras);
  }, []);

  // Filtrado de las compras basado en el término de búsqueda
  const filteredCompras = Array.isArray(compras)
    ? compras.filter((compra) =>
        compra.informacion_producto.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  // Lógica de paginación
  const totalPages = Math.ceil(filteredCompras.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentCompras = filteredCompras.slice(startIndex, startIndex + itemsPerPage);

  // Función para manejar el cambio de página
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleEditClick = (compra) =>{
    setCompraEdit(compra);
  };

  const handleSave = async (formData) => {
    try {
      const response = await fetch(`http://localhost:8080/api/compras/${formData.id_compra}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        toast.success('Compra actualizada correctamente');
        setCompraEdit(null);
        fetchCompras(setCompras);
      } else {
        toast.error('Error al actualizar la compra');
      }
    } catch (error) {
      console.error('Error al actualizar la compra:', error);
    }
  };

  const handleCancel = () => {
    setCompraEdit(null);
  };

  const handleEliminarClick = (compra) => {
    Swal.fire({
      title: 'Confirmar Eliminación',
      text: '¿Estás seguro de que quieres inactivar esta compra?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, inactivar',
      cancelButtonText: 'Cancelar'
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await fetch(`http://localhost:8080/api/compras/${compra.id_compra}/inactivar`, {
            method: 'PUT',
          });
          if (response.ok) {
            setCompras(prevCompras =>
              prevCompras.filter(p => p.id_compra !== compra.id_compra)
            );
            Swal.fire('Inactivado!', 'la compra ha sido inactivada.', 'success');
          } else {
            Swal.fire('Error!', 'No se pudo inactivar la compra.', 'error');
          }
        } catch (error) {
          console.error('Error al inactivar la compra:', error);
        }
      }
    });
  };

  // Interfaz de usuario
  return (
    <div>
        {/* Título de la sección */}
        <div className='titulo'>
          <h2>GESTIÓN DE COMPRAS</h2>
        </div>
        
        {/* Botón para añadir compra y campo de búsqueda */}
        <div className="button-container d-flex align-items-center mb-3">
            <button type="submit" className="btn btn-primary" onClick={() => setSection('CrearCompra')}>Añadir Compra</button>
            <input
              type="text"
              className="form-control"
              placeholder="Buscar producto..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ maxWidth: '300px', marginLeft: '20px', marginBottom: '10px' }}
            />
        </div>

      {compraEdit ? (
        <EditarCompra compraActual={compraEdit} onSave={handleSave} onCancel={handleCancel} />
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Nombre</th>
              <th scope="col">Cantidad</th>
              <th scope="col">Total</th>
              <th scope="col">Fecha Compra</th>
              <th scope="col">ID Empleado</th>
              <th scope="col">ID Método Pago</th>
              <th scope="col">ID Proveedor</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {currentCompras.map((compra) => (
              <tr key={compra.id_compra}>
                <th scope="row">{compra.id_compra}</th>
                <td>{compra.informacion_producto}</td>
                <td>{compra.cantidad}</td>
                <td>{compra.total_pagar}</td>
                <td>{compra.fecha_compra}</td>
                <td>{compra.id_empleado}</td> 
                <td>{compra.id_metodo_pago}</td>
                <td>{compra.id_proveedor}</td>
                <td>
                  <button type="button" className="btn btn-primary" onClick={() => handleEditClick(compra)}>Editar</button>
                  <button type="button" className="btn btn-danger" onClick={() => handleEliminarClick(compra)}>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <Paginacion
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default Compras;
