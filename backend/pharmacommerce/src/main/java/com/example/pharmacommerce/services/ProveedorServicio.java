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

    public List<Proveedor> findActiveProveedores(){
        return proveedorRepository.findActiveProveedores();
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

    public void inactivarProveedor(int id){
        Proveedor proveedor = proveedorRepository.findById(id).orElse(null);
        if(proveedor != null){
            proveedor.setActivo(false);
            proveedorRepository.save(proveedor);
        }
    }

}
