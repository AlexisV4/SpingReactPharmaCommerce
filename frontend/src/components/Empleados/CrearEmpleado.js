import React, { useState, useEffect } from 'react'
import { Navbar } from '../Navbar'
import { toast } from 'react-toastify';
import { fetchRoles, fetchEstadosEmpleado, fetchUsuarios } from '../../services/apiServices';

export const CrearEmpleado = ({setSection}) => {
    const [roles, setRoles] = useState([]);
    const [estadosEmpleado, setEstadosEmpleado] = useState([]);
    const [usuarios, setUsuarios] = useState([]);
    const [formData, setFormData] = useState({
        id_empleado : "",
        nombre_completo : "",
        id_rol : "",
        telefono : "",
        correo : "",
        fecha_ingreso : "",
        fecha_retiro : "",
        estados_de_empleado : "",
        id_usuario : "",
        activo : 1

    });

    useEffect(() => {
        fetchRoles(setRoles);
        fetchEstadosEmpleado(setEstadosEmpleado);
        fetchUsuarios(setUsuarios)
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
            const response = await fetch('http://localhost:8080/api/empleados', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                toast.success('Empleado registrado exitosamente');
                setFormData({
                    id_empleado : "",
                    nombre_completo : "",
                    id_rol : "",
                    telefono : "",
                    correo : "",
                    fecha_ingreso : "",
                    fecha_retiro : "",
                    estados_de_empleado : "",
                    id_usuario : "",
                    activo : 1
                });
            } else {
                toast.error('Error al registrar empleado');
            }
        } catch (error) {
            console.error('Error al registrar empleado:', error);
            toast.error('Error de red');
        }
    };


return (
    <div>
        <Navbar setSection={setSection} />
        <form className="row g-3" onSubmit={handleSubmit}>
            {/* Form fields */}
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
            <div className="col-12">
                <label htmlFor="telefono" className="form-label">Teléfono</label>
                <input type="text" className="form-control" id="telefono" name='telefono' value={formData.telefono} onChange={handleChange} placeholder="Cantidad disponible" required />
            </div>
            <div className="col-12">
                <label htmlFor="correo" className="form-label">Correo</label>
                <input type="text" className="form-control" id="correo" name='correo' value={formData.correo} onChange={handleChange} placeholder="Cantidad disponible" required />
            </div>
            <div className="col-12">
                <label htmlFor="fecha_ingreso" className="form-label">Fecha Ingreso</label>
                <input type="date" className="form-control" id="fecha_ingreso" name='fecha_ingreso' value={formData.fecha_ingreso} onChange={handleChange} placeholder="Cantidad disponible" required />
            </div>
            <div className="col-12">
                <label htmlFor="fecha_retiro" className="form-label">Fecha Retiro</label>
                <input type="date" className="form-control" id="fecha_retiro" name='fecha_retiro' value={formData.fecha_retiro} onChange={handleChange} placeholder="Cantidad disponible" />
            </div>
            <div className="col-md-4">
                <label htmlFor="estado_de_empleado" className="form-label">Estado</label>
                <select id="estado_de_empleado" name='estado_de_empleado' className="form-select" value={formData.estado_de_empleado} onChange={handleChange} required>
                    <option value="" disabled>Seleccionar...</option>
                    {estadosEmpleado.map((estado_de_empleado) => (
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
            <div className="col-12">
                <button type="submit" className="btn btn-primary">Registrar</button>
                <button type="button" className="btn btn-danger" onClick={() => setSection('Empleados')}>Cancelar</button>
            </div>
        </form>
    </div>
    
    )
};