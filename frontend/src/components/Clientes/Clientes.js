import React, { useEffect, useState } from 'react';
import Paginacion from '../Pagination/Pagination';
import { fetchClientes } from '../../services/apiServices';

export const Clientes = () => {
    const[clientes, setClientes] = useState([]);

    useEffect(() => {
        fetchClientes(setClientes);
      }, []);


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
          style={{ maxWidth: '300px', marginLeft: '20px', marginBottom: '10px' }}
        />
      </div>

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
            <td></td>
            <button type="button" className="btn btn-primary" onClick={""}>Editar</button>
                  <button type="button" className="btn btn-danger" onClick={""}>Eliminar</button>
        </tbody>
      </table>

      <Paginacion

      />
    </div>
    
  );
};
