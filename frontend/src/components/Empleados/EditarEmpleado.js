import React, { useState, useEffect } from 'react'
import { fetchRoles, fetchEstadosEmpleado, fetchUsuarios } from '../../services/apiServices';

export const EditarEmpleado = ({empleadoActual, onSave, onCancel}) => {
    const [roles, setRoles] = useState([]);
    const [estado_de_empleado, setEstadosEmpleado] = useState([]);
    const [usuarios, setUsuarios] = useState([]);
    const [formData, setFormData] = useState({
        id_empleado : empleadoActual.id_empleado,
        nombre_completo : empleadoActual.nombre_completo,
        id_rol : empleadoActual.id_rol,
        telefono : empleadoActual.telefono,
        correo : empleadoActual.correo,
        fecha_ingreso : empleadoActual.fecha_ingreso,
        fecha_retiro: empleadoActual.fecha_retiro,
        estado_de_empleado : empleadoActual.estado_de_empleado,
        id_usuario : empleadoActual.id_usuario,
        activo : 1

    });

    useEffect(() => {
        fetchRoles(setRoles);
        fetchEstadosEmpleado(setEstadosEmpleado);
        fetchUsuarios(setUsuarios)
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
        ...formData,
        [name]: name === 'activo' ? (value === 'true') : value
        });
    };

    const handleSave = async () => {
        const dataToSend = { ...formData };
        // Si fecha_retiro está vacía, lo establecemos a null
        if (dataToSend.fecha_retiro === "") {
            dataToSend.fecha_retiro = null;
        }
        onSave(dataToSend); // Enviamos los datos actualizados
    };


return (
    <div className="container" style={{ maxHeight: '80vh', overflowY: 'auto' }}>
        <form className="row g-3">
            <div className="col-md-6">
                <label htmlFor="id_empleado" className="form-label">ID Empleado</label>
                <input type="number" className="form-control" id="id_empleado" name='id_empleado' value={formData.id_empleado} onChange={handleChange} required />
            </div>

            <div className="col-md-6">
                <label htmlFor="nombre_completo" className="form-label">Nombre Completo</label>
                <input type="text" className="form-control" id="nombre_completo" name='nombre_completo' value={formData.nombre_completo} onChange={handleChange} required />
            </div>
            
            <div className="col-md-4">
                <label htmlFor="id_rol" className="form-label">Rol</label>
                <select id="id_rol" name='id_rol' className="form-select" value={formData.id_rol} onChange={handleChange} required>
                    <option value="" disabled>Seleccionar...</option>
                    {roles.map((rol) => (
                        <option key={rol.id_rol} value={rol.id_rol}>
                            {rol.id_rol} - {rol.nombre_rol}
                        </option>
                    ))}
                </select>
            </div>

            <div className="col-md-8">
                <label htmlFor="telefono" className="form-label">Teléfono</label>
                <input type="text" className="form-control" id="telefono" name='telefono' value={formData.telefono} onChange={handleChange} placeholder="Cantidad disponible" required />
            </div>

            <div className="col-12">
                <label htmlFor="correo" className="form-label">Correo</label>
                <input type="text" className="form-control" id="correo" name='correo' value={formData.correo} onChange={handleChange} placeholder="Cantidad disponible" required />
            </div>

            <div className="col-12">
                <label htmlFor="fecha_ingreso" className="form-label">Fecha Ingreso</label>
                <input type="date" className="form-control" id="fecha_ingreso" name='fecha_ingreso' value={formData.fecha_ingreso} onChange={handleChange} required />
            </div>

            <div className="col-12">
                <label htmlFor="fecha_retiro" className="form-label">Fecha Retiro</label>
                <input type="date" className="form-control" id="fecha_retiro" name='fecha_retiro' value={formData.fecha_retiro} onChange={handleChange} />
            </div>

            <div className="col-md-4">
                <label htmlFor="estado_de_empleado" className="form-label">Estado</label>
                <select id="estado_de_empleado" name='estado_de_empleado' className="form-select" value={formData.estado_de_empleado} onChange={handleChange} required>
                    <option value="" disabled>Seleccionar...</option>
                    {estado_de_empleado.map((estado_de_empleado) => (
                        <option key={estado_de_empleado.id_estado} value={estado_de_empleado.id_estado}>
                            {estado_de_empleado.id_estado} - {estado_de_empleado.nombre}
                        </option>
                    ))}
                </select>
            </div>

            <div className="col-md-2">
                <label htmlFor="id_usuario" className="form-label">Usuario</label>
                <select id="id_usuario" name='id_usuario' className="form-select" value={formData.id_usuario} onChange={handleChange} required>
                    <option value="" disabled>Seleccionar...</option>
                    {usuarios.map((usuario) => (
                        <option key={usuario.id_usuario} value={usuario.id_usuario}>
                            {usuario.id_usuario} - {usuario.usuario}
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