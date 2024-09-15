import { useState, useEffect } from 'react';
import { Navbar } from '../Navbar';
import React from 'react'
import { toast } from 'react-toastify';
import { fetchCiudades, fetchGeneros } from '../../services/apiServices';

export const CrearCliente = ({setSection}) => {
    const[ciudades, setCiudades] = useState([]);
    const[generos, setGeneros] = useState([]);
    const [formData, setFormData] = useState({
        id_cliente : '',
        nombre_completo : '',
        telefono : '',
        correo : '',
        direccion : '',
        id_ciudad : '',  // Aquí está el cambio
        id_genero : '',
        activo : 1
    });

    useEffect(() => {
        fetchCiudades(setCiudades);
        fetchGeneros(setGeneros)
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
            const response = await fetch('http://localhost:8080/api/clientes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                toast.success('Cliente registrado exitosamente');
                setFormData({
                    id_cliente : '',
                    nombre_completo: '',
                    telefono : '',
                    correo : '',
                    direccion : '',
                    id_ciudad : '',
                    id_genero : '',
                    activo : 1
                });
            } else {
                toast.error('Error al registrar cliente');
            }
        } catch (error) {
            console.error('Error al registrar cliente:', error);
            toast.error('Error de red');
        }
    };

    
  return (
    <div>
        <Navbar setSection={setSection} />
        <form className="row g-3"  onSubmit={handleSubmit}>
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
                <label htmlFor="id_ciudad" className="form-label">ID Ciudad</label>
                <select id="id_ciudad" name='id_ciudad' className="form-select" value={formData.id_ciudad} onChange={handleChange} required>
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
                <button type="submit" className="btn btn-primary">Registrar</button>
                <button type="button" className="btn btn-danger" onClick={() => setSection('Clientes')}>Cancelar</button>
            </div>
        </form>
    </div>
  )
}
