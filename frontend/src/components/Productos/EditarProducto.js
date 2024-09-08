import React, { useState, useEffect, act } from 'react';
import { fetchCategorias, fetchProveedores } from '../../services/apiServices';

const EditarProducto = ({ productoActual, onSave, onCancel }) => {
  const [categorias, setCategorias] = useState([]);
  const [proveedores, setProveedores] = useState([]);
  const [formData, setFormData] = useState({
    id_producto: productoActual.id_producto,
    nombre: productoActual.nombre,
    descripcion: productoActual.descripcion,
    precio_venta: productoActual.precio_venta,
    stock: productoActual.stock,
    fecha_vencimiento: productoActual.fecha_vencimiento,
    id_categoria: productoActual.id_categoria,
    id_proveedor: productoActual.id_proveedor,
    activo: productoActual.activo
  });

  useEffect(() => {
    fetchCategorias(setCategorias);
    fetchProveedores(setProveedores);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'activo' ? (value === 'true') : value
    });
  };

  const handleSave = async () => {
    onSave(formData);
  };

  return (
    <div className="container" style={{ maxHeight: '80vh', overflowY: 'auto' }}>
      <form className="row g-3">
        <div className="col-md-6">
          <label htmlFor="nombre" className="form-label">Nombre Producto</label>
          <input type="text" className="form-control" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} required />
        </div>

        <div className="col-md-6">
          <label htmlFor="descripcion" className="form-label">Descripción</label>
          <input type="text" className="form-control" id="descripcion" name="descripcion" value={formData.descripcion} onChange={handleChange} required />
        </div>

        <div className="col-md-4">
          <label htmlFor="precio_venta" className="form-label">Precio de Venta</label>
          <input type="number" className="form-control" id="precio_venta" name="precio_venta" value={formData.precio_venta} onChange={handleChange} placeholder="$00.000" required />
        </div>

        <div className="col-md-4">
          <label htmlFor="stock" className="form-label">Stock</label>
          <input type="number" className="form-control" id="stock" name="stock" value={formData.stock} onChange={handleChange} placeholder="Cantidad disponible" required />
        </div>

        <div className="col-md-4">
          <label htmlFor="fecha_vencimiento" className="form-label">Fecha de Vencimiento</label>
          <input type="date" className="form-control" id="fecha_vencimiento" name="fecha_vencimiento" value={formData.fecha_vencimiento} onChange={handleChange} required />
        </div>

        <div className="col-md-6">
          <label htmlFor="id_categoria" className="form-label">Categoría</label>
          <select id="id_categoria" name="id_categoria" className="form-select" value={formData.id_categoria} onChange={handleChange} required>
            <option value="" disabled>Seleccionar...</option>
            {categorias.map((categoria) => (
              <option key={categoria.id_categoria} value={categoria.id_categoria}>
                {categoria.nombre}
              </option>
            ))}
          </select>
        </div>

        <div className="col-md-6">
          <label htmlFor="id_proveedor" className="form-label">Proveedor</label>
          <select id="id_proveedor" name="id_proveedor" className="form-select" value={formData.id_proveedor} onChange={handleChange} required>
            <option value="" disabled>Seleccionar...</option>
            {proveedores.map((proveedor) => (
              <option key={proveedor.id_proveedor} value={proveedor.id_proveedor}>
                {proveedor.nombre_completo}
              </option>
            ))}
          </select>
        </div>

        <div className="col-12 d-flex justify-content-between">
          <button type="button" onClick={handleSave} className="btn btn-success">Guardar cambios</button>
          <button type="button" onClick={onCancel} className="btn btn-danger">Cancelar</button>
        </div>
      </form>
    </div>
  );
};

export default EditarProducto;
