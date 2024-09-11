import React, { useEffect, useState } from 'react';
import Paginacion from '../Pagination/Pagination';
import { fetchClientes } from '../../services/apiServices';
import { toast } from 'react-toastify';
import { EditarCliente } from './EditarCliente';
import Swal from 'sweetalert2';

export const Clientes = () => {
    const[clientes, setClientes] = useState([]);
    const[searchTerm, setSearchTerm] = useState("");
    const[currentPage, setCurrentPage] = useState(1);
    const[clienteEdit, setClienteEdit] = useState(null);
    const itemsPerPage = 10;

    useEffect(() => {
        fetchClientes(setClientes);
      }, []);

  // Filtrado de las compras basado en el término de búsqueda
  const filteredClientes = Array.isArray(clientes)
    ? clientes.filter((cliente) =>
      cliente.nombre_completo.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  const totalPages = Math.ceil(filteredClientes.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentClientes = filteredClientes.slice(startIndex, startIndex + itemsPerPage);

  // Función para manejar el cambio de página
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleEditClick = (cliente) => {
    setClienteEdit(cliente);
    
  }

  const handleCancel = () => {
    setClienteEdit(null);
  };

  const handleSave = async (formData) => {
    try {
      const response = await fetch(`http://localhost:8080/api/clientes/${formData.id_cliente}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        toast.success('Cliente actualizada correctamente');
        setClienteEdit(null);
        fetchClientes(setClientes);
      } else {
        toast.error('Error al actualizar cliente');
      }
    } catch (error) {
      console.error('Error al actualizar cliente:', error);
    }
  };

  return (
    <div>
      <div className="titulo">
        <h2>GESTIÓN DE CLIENTES</h2>
      </div>

      <div className="button-container d-flex align-items-center mb-3">
        <button type="button" className="btn btn-primary mr-3">
          Añadir Cliente
        </button>
        <input
          type="text"
          className="form-control"
          placeholder="Buscar cliente..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ maxWidth: '300px', marginLeft: '20px', marginBottom: '10px' }}
        />
      </div>

      {clienteEdit ? (
        <EditarCliente clienteActual={clienteEdit} onSave={handleSave} onCancel={handleCancel} />
      ) : (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nombre</th>
            <th scope="col">Teléfono</th>
            <th scope="col">Correo</th>
            <th scope="col">Dirección</th>
            <th scope="col">ID Ciudad</th>
            <th scope="col">ID Género</th>
            <th scope="col">Acción</th>
          </tr>
        </thead>
        <tbody>
        {currentClientes.map((cliente) => (
              <tr key={cliente.id_cliente}>
                <th scope="row">{cliente.id_cliente}</th>
                <td>{cliente.nombre_completo}</td>
                <td>{cliente.telefono}</td>
                <td>{cliente.correo}</td>
                <td>{cliente.direccion}</td>
                <td>{cliente.id_ciudad}</td> 
                <td>{cliente.id_genero}</td>
                <td>
                  <button type="button" className="btn btn-primary" onClick={() => handleEditClick(cliente)}>Editar</button>
                  <button type="button" className="btn btn-danger">Eliminar</button>
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
};
