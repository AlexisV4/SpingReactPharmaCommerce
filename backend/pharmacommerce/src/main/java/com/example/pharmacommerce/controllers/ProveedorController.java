package com.example.pharmacommerce.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.pharmacommerce.modelo.Proveedor;
import com.example.pharmacommerce.services.ProveedorServicio;

@RestController
@RequestMapping("/api/proveedores")
public class ProveedorController {
    
    @Autowired
    private ProveedorServicio proveedorServicio;

    @GetMapping
    public List<Proveedor> getAllProveedores(){
        return proveedorServicio.getAllProveedores();
    }

}
