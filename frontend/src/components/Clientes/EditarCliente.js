import React, { useState, useEffect } from 'react'
import { fetchCiudades, fetchGeneros } from '../../services/apiServices'

export const EditarCliente = ({clienteActual, onSave, onCancel}) => {
    const[ciudades, setCiudades] = useState([]);
    const[generos, setGeneros] = useState([]);
    const [formData, setFormData] = useState({
        id_cliente : clienteActual.id_cliente,
        nombre_completo : clienteActual.nombre_completo,
        telefono : clienteActual.telefono,
        correo : clienteActual.correo,
        direccion : clienteActual.direccion,
        id_ciudad : clienteActual.id_ciudad,  // Aquí está el cambio
        id_genero : clienteActual.id_genero,
        activo : 1
    });

    useEffect(() => {
        fetchCiudades(setCiudades);
        fetchGeneros(setGeneros);
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
                <label htmlFor="id_cliente" className="form-label">ID Cliente</label>
                <input type="number" className="form-control" id="id_cliente" name='id_cliente' value={formData.id_cliente} onChange={handleChange} required />
            </div>
            
            <div className="col-md-6">
                <label htmlFor="nombre_completo" className="form-label">Nombre Completo</label>
                <input type="text" className="form-control" id="nombre_completo" name='nombre_completo' value={formData.nombre_completo} onChange={handleChange} required />
            </div>

            <div className="col-md-6">
                <label htmlFor="telefono" className="form-label">Teléfono</label>
                <input type="text" className="form-control" id="telefono" name='telefono' value={formData.telefono} onChange={handleChange} required />
            </div>

            <div className="col-12">
                <label htmlFor="correo" className="form-label">Correo</label>
                <input type="text" className="form-control" id="correo" name='correo' value={formData.correo} onChange={handleChange}required />
            </div>

            <div className="col-12">
                <label htmlFor="direccion" className="form-label">Dirección</label>
                <input type="text" className="form-control" id="direccion" name='direccion' value={formData.direccion} onChange={handleChange} required />
            </div>

            <div className="col-md-4">
                <label htmlFor="id_ciudades" className="form-label">ID Ciudad</label>
                <select id="id_ciudades" name='id_ciudades' className="form-select" value={formData.id_ciudades} onChange={handleChange} required>
                    <option value="" disabled>Seleccionar...</option>
                    {ciudades.map((ciudad) => (
                        <option key={ciudad.id_ciudades} value={ciudad.id_ciudades}>
                            {ciudad.id_ciudades} - {ciudad.nombre_ciudad}
                        </option>
                    ))}
                </select>
            </div>

            <div className="col-md-2">
                <label htmlFor="id_genero" className="form-label">ID Género</label>
                <select id="id_genero" name='id_genero' className="form-select" value={formData.id_genero} onChange={handleChange} required>
                    <option value="" disabled>Seleccionar...</option>
                    {generos.map((genero) => (
                        <option key={genero.id_genero} value={genero.id_genero}>
                            {genero.id_genero} - {genero.genero}
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
  )
}
