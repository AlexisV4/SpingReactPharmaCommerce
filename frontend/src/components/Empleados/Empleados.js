import React, { useState, useEffect } from 'react'
import { fetchEmpleados } from '../../services/apiServices';
import Paginacion from '../Pagination/Pagination';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

export const Empleados = ({setSection}) => {
    const [empleados, setEmpleados] = useState([]);
    const [empleadosEdit, setEmpleadosEdit] = useState(null);
    const [searchTerm, setSearchTerm] =  useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    useEffect(() => {
      fetchEmpleados(setEmpleados);
    }, []);

    const handleEditClick = (empleado) => {
        setEmpleadosEdit(empleado);
      };

    const handleSave = async (formData) => {
    try {
        const response = await fetch(`http://localhost:8080/api/empleados/${formData.id_empleado}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        });
        if (response.ok) {
        toast.success('Empleado actualizado correctamente');
        setEmpleadosEdit(null);
        fetchEmpleados(setEmpleados);
        } else {
        toast.error('Error al actualizar el empleado');
        }
    } catch (error) {
        console.error('Error al actualizar el empleado:', error);
    }
    };

    const handleCancel = () => {
        setEmpleadosEdit(null);  
    }

    const handleEliminarClick = (empleado) => {
        Swal.fire({
            title: 'Confirmar Eliminación',
            text: '¿Estás seguro de que quieres inactivar este empleado?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, inactivar',
            cancelButtonText: 'Cancelar'
        }).then(async (result) => {
            if (result.isConfirmed) {
            try {
                const response = await fetch(`http://localhost:8080/api/empleados/${empleado.id_empleado}/inactivar`, {
                method: 'PUT',
                });
                if (response.ok) {
                setEmpleados(prevEmpleados =>
                    prevEmpleados.filter(p => p.id_empleado !== empleado.id_empleado)
                );
                Swal.fire('Inactivado!', 'El empleado ha sido inactivado.', 'success');
                } else {
                Swal.fire('Error!', 'No se pudo inactivar el empleado.', 'error');
                }
            } catch (error) {
                console.error('Error al inactivar el empleado:', error);
            }
            }
        });
    };

    const filteredEmpleados = Array.isArray(empleados)
    ? empleados.filter((empleado) =>
        empleado.nombre_completo.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

    // Lógica de paginación
    const totalPages = Math.ceil(filteredEmpleados.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentEmpleados = filteredEmpleados.slice(startIndex, startIndex + itemsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
        
    return (
        <div>
            <div className="titulo">
            <h2>GESTIÓN DE EMPLEADOS</h2>
            </div>

            <div className="button-container d-flex align-items-center mb-3">
            <button type="button" className="btn btn-primary mr-3" onClick={() => setSection("")}>
                Añadir Empleado
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

            <table className="table">
                <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">ID Rol</th>
                    <th scope="col">Teléfono</th>
                    <th scope="col">Correo</th>
                    <th scope="col">Fecha ingreso</th>
                    <th scope="col">Fecha retiro</th>
                    <th scope="col">Estado</th>
                    <th scope="col">ID Usuario</th>
                    <th scope="col">Acción</th>
                </tr>
                </thead>
                <tbody>
                {currentEmpleados.map((empleado) => (
                    <tr key={empleado.id_empleado}>
                    <th scope="row">{empleado.id_empleado}</th>
                    <td>{empleado.nombre_completo}</td>
                    <td>{empleado.id_rol}</td>
                    <td>{empleado.telefono}</td>
                    <td>{empleado.correo}</td>
                    <td>{empleado.fecha_ingreso}</td>
                    <td>{empleado.fecha_ingreso}</td>
                    <td>{empleado.estado_de_empleado}</td>
                    <td>{empleado.id_usuario}</td>
                    <td>
                        <button type="button" className="btn btn-primary" onClick={() => handleEditClick(empleado)}>
                        Editar
                        </button>
                        <button type="button" className="btn btn-danger" onClick={() => handleEliminarClick(empleado)}>
                        Eliminar
                        </button>
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>
            

            <Paginacion
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            />
        </div>
        );
    };

    export default Empleados;