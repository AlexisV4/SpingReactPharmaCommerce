package com.example.pharmacommerce.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.pharmacommerce.modelo.Proveedor;
import com.example.pharmacommerce.repositories.ProveedorRepository;

@Service
public class ProveedorServicio {

    @Autowired
    private ProveedorRepository proveedorRepository;

        public List<Proveedor> getAllProveedores(){
        return proveedorRepository.findAll();
    }

    public Proveedor getProveedorById(int id){
        return proveedorRepository.findById(id).orElse(null);
    }

    public Proveedor saveProveedor (Proveedor proveedor){
        return proveedorRepository.save(proveedor);
    }

    public void deleteProveedor(int id){
        proveedorRepository.deleteById(id);
    }

}
