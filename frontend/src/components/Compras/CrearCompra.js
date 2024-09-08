import React, { useState, useEffect } from 'react';
import { Navbar } from '../Navbar';
import { toast } from 'react-toastify';
import { fetchEmpleados, fetchProveedores, fetchMetodoPago } from '../../services/apiServices';

export const CrearCompra = ({setSection}) => {
    const [empleados, setEmpleados] = useState([]);
    const [metodospago, setMetodosPago] = useState([]);
    const [proveedores, setProveedores] = useState([]);
    const [formData, setFormData] = useState({
        informacion_producto : '',
        cantidad: '',
        total_pagar : '',
        fecha_compra : '',
        id_empleado : '',
        id_metodo_pago : '',
        id_proveedor : '',
        activo : 1
    });

    useEffect(() => {
        fetchEmpleados(setEmpleados);
        fetchProveedores(setProveedores);
        fetchMetodoPago(setMetodosPago)
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
            const response = await fetch('http://localhost:8080/api/compras', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                toast.success('Compra registrada exitosamente');
                setFormData({
                    informacion_producto : '',
                    cantidad: '',
                    total_pagar : '',
                    fecha_compra : '',
                    id_empleado : '',
                    id_metodo_pago : '',
                    id_proveedor : '',
                    activo : 1
                });
            } else {
                toast.error('Error al registrar compra');
            }
        } catch (error) {
            console.error('Error al registrar compra:', error);
            toast.error('Error de red');
        }
    };


  return (
    <div>
        <Navbar setSection={setSection} />
        <form className="row g-3" onSubmit={handleSubmit}>
            {/* Form fields */}
            <div className="col-md-6">
                <label htmlFor="nombre" className="form-label">Información Producto</label>
                <input type="text" className="form-control" id="informacion_producto" name='informacion_producto' value={formData.informacion_producto} onChange={handleChange} required />
            </div>
            <div className="col-md-6">
                <label htmlFor="descripcion" className="form-label">Cantidad</label>
                <input type="number" className="form-control" id="cantidad" name='cantidad' value={formData.cantidad} onChange={handleChange} required />
            </div>
            <div className="col-12">
                <label htmlFor="precio_venta" className="form-label">Total Pagar</label>
                <input type="number" className="form-control" id="total_pagar" name='total_pagar' value={formData.total_pagar} onChange={handleChange} placeholder="$00.000" required />
            </div>
            <div className="col-12">
                <label htmlFor="stock" className="form-label">Fecha Compra</label>
                <input type="date" className="form-control" id="fecha_compra" name='fecha_compra' value={formData.fecha_compra} onChange={handleChange} placeholder="Cantidad disponible" required />
            </div>
            <div className="col-md-4">
                <label htmlFor="id_empleado" className="form-label">Empleado</label>
                <select id="id_empleado" name='id_empleado' className="form-select" value={formData.id_empleado} onChange={handleChange} required>
                    <option value="" disabled>Seleccionar...</option>
                    {empleados.map((empleado) => (
                        <option key={empleado.id_empleado} value={empleado.id_empleado}>
                            {empleado.id_empleado} - {empleado.nombre_completo}
                        </option>
                    ))}
                </select>
            </div>
            <div className="col-md-2">
                <label htmlFor="id_metodo_pago" className="form-label">Metodo Pago</label>
                <select id="id_metodo_pago" name='id_metodo_pago' className="form-select" value={formData.id_metodo_pago} onChange={handleChange} required>
                    <option value="" disabled>Seleccionar...</option>
                    {metodospago.map((metodopago) => (
                        <option key={metodopago.id_metodo} value={metodopago.id_metodo}>
                            {metodopago.id_metodo} - {metodopago.nombre}
                        </option>
                    ))}
                </select>
            </div>
            <div className="col-md-2">
                <label htmlFor="id_proveedor" className="form-label">Proveedor</label>
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
                <button type="button" className="btn btn-danger" onClick={() => setSection('Compras')}>Cancelar</button>
            </div>
        </form>
    </div>
    
  )
};
