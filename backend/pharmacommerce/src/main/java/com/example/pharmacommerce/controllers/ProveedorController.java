package com.example.pharmacommerce.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
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

    @GetMapping("/activos")
    public ResponseEntity<List<Proveedor>> findActiveProveedores(){
        try {
            List <Proveedor> proveedores = proveedorServicio.findActiveProveedores();
            return new ResponseEntity<>(proveedores, HttpStatus.OK);  
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping
    public ResponseEntity<Proveedor> createProveedor(@RequestBody Proveedor proveedor){
        try {
            Proveedor nuevoProveedor = proveedorServicio.saveProveedor(proveedor);
            return new ResponseEntity<>(nuevoProveedor, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Proveedor> updateProveedor(@PathVariable int id, @RequestBody Proveedor proveedor){
        Proveedor proveedorExistente = proveedorServicio.getProveedorById(id);
        if(proveedorExistente != null){
            proveedorExistente.setNit_proveedor(proveedor.getNit_proveedor());
            proveedorExistente.setNombre_completo(proveedor.getNombre_completo());
            proveedorExistente.setTelefono(proveedor.getTelefono());
            proveedorExistente.setCorreo(proveedor.getCorreo());
            proveedorExistente.setDireccion(proveedor.getDireccion());
            proveedorExistente.setId_ciudad(proveedor.getId_ciudad());
            proveedorExistente.setFecha_inicio_relacion_comercial(proveedor.getFecha_inicio_relacion_comercial());

            Proveedor proveedorActualizado = proveedorServicio.saveProveedor(proveedorExistente);
            return new ResponseEntity<>(proveedorActualizado, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);

        }

    }

    @PutMapping("/{id}/inactivar")
    public ResponseEntity<Void>inactivarProveedor(@PathVariable int id){
        try {
            proveedorServicio.inactivarProveedor(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
            
        }
    }

}
