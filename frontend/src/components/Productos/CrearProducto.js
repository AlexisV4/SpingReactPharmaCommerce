import React, { useEffect, useState } from 'react';
import { Navbar } from '../Navbar';
import { fetchCategorias, fetchProveedores } from '../../services/apiServices';
import { toast } from 'react-toastify';

export const CrearProducto = ({ setSection }) => {
    const [categorias, setCategorias] = useState([]);
    const [proveedores, setProveedores] = useState([]);
    const [formData, setFormData] = useState({
        nombre: '',
        descripcion: '',
        precio_venta: '',
        stock: '',
        fecha_vencimiento: '',
        id_categoria: '',
        id_proveedor: '',
        activo: 1 // Campo agregado y valor predeterminado
    });

    useEffect(() => {
        fetchCategorias(setCategorias);
        fetchProveedores(setProveedores);
    }, []);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:8080/api/productos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                toast.success('Producto registrado exitosamente');
                setFormData({
                    nombre: '',
                    descripcion: '',
                    precio_venta: '',
                    stock: '',
                    fecha_vencimiento: '',
                    id_categoria: '',
                    id_proveedor: '',
                    activo: 1 // Restablecer el campo activo
                });
            } else {
                toast.error('Error al registrar el producto');
            }
        } catch (error) {
            console.error('Error al registrar el producto:', error);
            toast.error('Error de red');
        }
    };

    return (
        <div>
            <Navbar setSection={setSection} />
            <form className="row g-3" onSubmit={handleSubmit}>
                {/* Form fields */}
                <div className="col-md-6">
                    <label htmlFor="nombre" className="form-label">Nombre Producto</label>
                    <input type="text" className="form-control" id="nombre" name='nombre' value={formData.nombre} onChange={handleChange} required />
                </div>
                <div className="col-md-6">
                    <label htmlFor="descripcion" className="form-label">Descripción</label>
                    <input type="text" className="form-control" id="descripcion" name='descripcion' value={formData.descripcion} onChange={handleChange} required />
                </div>
                <div className="col-12">
                    <label htmlFor="precio_venta" className="form-label">Precio Venta</label>
                    <input type="number" className="form-control" id="precio_venta" name='precio_venta' value={formData.precio_venta} onChange={handleChange} placeholder="$00.000" required />
                </div>
                <div className="col-12">
                    <label htmlFor="stock" className="form-label">Stock</label>
                    <input type="number" className="form-control" id="stock" name='stock' value={formData.stock} onChange={handleChange} placeholder="Cantidad disponible" required />
                </div>
                <div className="col-md-6">
                    <label htmlFor="fecha_vencimiento" className="form-label">Fecha Vencimiento</label>
                    <input type="date" className="form-control" id="fecha_vencimiento" name='fecha_vencimiento' value={formData.fecha_vencimiento} onChange={handleChange} required />
                </div>
                <div className="col-md-4">
                    <label htmlFor="id_categoria" className="form-label">ID Categoría</label>
                    <select id="id_categoria" name='id_categoria' className="form-select" value={formData.id_categoria} onChange={handleChange} required>
                        <option value="" disabled>Seleccionar...</option>
                        {categorias.map((categoria) => (
                            <option key={categoria.id_categoria} value={categoria.id_categoria}>
                                {categoria.id_categoria} - {categoria.nombre}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="col-md-2">
                    <label htmlFor="id_proveedor" className="form-label">ID Proveedor</label>
                    <select id="id_proveedor" name='id_proveedor' className="form-select" value={formData.id_proveedor} onChange={handleChange} required>
                        <option value="" disabled>Seleccionar...</option>
                        {proveedores.map((proveedor) => (
                            <option key={proveedor.id_proveedor} value={proveedor.id_proveedor}>
                                {proveedor.id_proveedor} - {proveedor.nombre_completo}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Registrar</button>
                    <button type="button" className="btn btn-danger" onClick={() => setSection('Producto')}>Cancelar</button>
                </div>
            </form>
        </div>
    );
};
