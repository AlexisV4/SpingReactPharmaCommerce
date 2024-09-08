import React, { useEffect, useState } from 'react';
import '../App.css';
import EditarProducto from './EditarProducto';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import { fetchProductos } from '../../services/apiServices';
import Paginacion from '../Pagination/Pagination';

//1. setSection se usa aqui para cambiar el componente que se debe mostrar en la App.js
//2. Variables o estados para almacenar productos y otros valores para manipularlos luego.
export const Productos = ({ setSection }) => {
  const [productos, setProductos] = useState([]);
  const [productoEdit, setProductoEdit] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  //Hook encargado de ejecutar el fetchProductos que consulta la API y guarda los resultados
  //En la lista productos mediante el setProductos para poderlos manipular
  useEffect(() => {
    fetchProductos(setProductos);
  }, []);

  const handleEditClick = (producto) => {
    setProductoEdit(producto);
  };

  const handleSave = async (formData) => {
    try {
      const response = await fetch(`http://localhost:8080/api/productos/${formData.id_producto}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        toast.success('Producto actualizado correctamente');
        setProductoEdit(null);
        fetchProductos(setProductos);
      } else {
        toast.error('Error al actualizar el producto');
      }
    } catch (error) {
      console.error('Error al actualizar el producto:', error);
    }
  };

  const handleCancel = () => {
    setProductoEdit(null);
  };

  const handleEliminarClick = (producto) => {
    Swal.fire({
      title: 'Confirmar Eliminación',
      text: '¿Estás seguro de que quieres inactivar este producto?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, inactivar',
      cancelButtonText: 'Cancelar'
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await fetch(`http://localhost:8080/api/productos/${producto.id_producto}/inactivar`, {
            method: 'PUT',
          });
          if (response.ok) {
            setProductos(prevProductos =>
              prevProductos.filter(p => p.id_producto !== producto.id_producto)
            );
            Swal.fire('Inactivado!', 'El producto ha sido inactivado.', 'success');
          } else {
            Swal.fire('Error!', 'No se pudo inactivar el producto.', 'error');
          }
        } catch (error) {
          console.error('Error al inactivar el producto:', error);
        }
      }
    });
  };


  const filteredProductos = Array.isArray(productos)
    ? productos.filter((producto) =>
        producto.nombre.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  // Lógica de paginación
  const totalPages = Math.ceil(filteredProductos.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProductos = filteredProductos.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div className="titulo">
        <h2>GESTIÓN DE PRODUCTOS</h2>
      </div>

      <div className="button-container d-flex align-items-center mb-3">
        <button type="button" className="btn btn-primary mr-3" onClick={() => setSection('CrearProducto')}>
          Añadir Producto
        </button>
        <input
          type="text"
          className="form-control"
          placeholder="Buscar producto..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ maxWidth: '300px', marginLeft: '20px', marginBottom: '10px' }}
        />
      </div>

      {productoEdit ? (
        <EditarProducto productoActual={productoEdit} onSave={handleSave} onCancel={handleCancel} />
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Nombre</th>
              <th scope="col">Descripción</th>
              <th scope="col">Precio</th>
              <th scope="col">Stock</th>
              <th scope="col">Fecha vencimiento</th>
              <th scope="col">ID Categoría</th>
              <th scope="col">ID Proveedor</th>
              <th scope="col">Acción</th>
            </tr>
          </thead>
          <tbody>
            {currentProductos.map((producto) => (
              <tr key={producto.id_producto}>
                <th scope="row">{producto.id_producto}</th>
                <td>{producto.nombre}</td>
                <td>{producto.descripcion}</td>
                <td>{producto.precio_venta}</td>
                <td>{producto.stock}</td>
                <td>{producto.fecha_vencimiento}</td>
                <td>{producto.id_categoria}</td>
                <td>{producto.id_proveedor}</td>
                <td>
                  <button type="button" className="btn btn-primary" onClick={() => handleEditClick(producto)}>
                    Editar
                  </button>
                  <button type="button" className="btn btn-danger" onClick={() => handleEliminarClick(producto)}>
                    Eliminar
                  </button>
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

export default Productos;
