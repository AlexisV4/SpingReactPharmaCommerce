import React, { useState, useEffect } from 'react'
import { fetchProveedores } from '../../services/apiServices'

export const Proveedores = () => {
    const[proveedores, setProveedores] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;


    useEffect(() => {
        fetchProveedores(setProveedores);
      }, []);



  return (
    <div>Proveedores</div>
  )
}
