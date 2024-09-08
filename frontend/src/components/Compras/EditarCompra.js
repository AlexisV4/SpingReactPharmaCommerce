import React, { useState, useEffect } from 'react'
import { fetchEmpleados, fetchMetodoPago, fetchProveedores } from '../../services/apiServices';

export const EditarCompra = ({compraActual, onSave, onCancel}) => {
    const [empleados, setEmpleados] = useState([]);
    const [metodospago, setMetodosPago] = useState([]);
    const [proveedores, setProveedores] = useState([]);
    const [formData, setFormData] = useState({
        id_compra : compraActual.id_compra,
        informacion_producto : compraActual.informacion_producto,
        cantidad: compraActual.cantidad,
        total_pagar : compraActual.total_pagar,
        fecha_compra : compraActual.fecha_compra,
        id_empleado : compraActual.id_empleado,
        id_metodo_pago : compraActual.id_metodo_pago,
        id_proveedor : compraActual.id_proveedor,
        activo : 1
    });

    useEffect(() => {
        fetchEmpleados(setEmpleados);
        fetchMetodoPago(setMetodosPago);
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

            <div className="col-12 d-flex justify-content-between">
                <button type="button" onClick={handleSave} className="btn btn-success">Guardar cambios</button>
                <button type="button" onClick={onCancel} className="btn btn-danger">Cancelar</button>
            </div>
        </form>
    </div>
    );
};
