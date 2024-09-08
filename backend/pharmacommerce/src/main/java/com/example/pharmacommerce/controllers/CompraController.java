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

import com.example.pharmacommerce.modelo.Compra;
import com.example.pharmacommerce.services.CompraServicio;

@RestController
@RequestMapping("/api/compras")
public class CompraController {
    @Autowired
    private CompraServicio compraServicio;

    @GetMapping
    public ResponseEntity<List<Compra>> getAllCompras(){
        try {
            List<Compra> compras = compraServicio.getAllCompras();
            return new ResponseEntity<>(compras, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping
    public ResponseEntity<Compra> createCompra(@RequestBody Compra compra){
        try {
            Compra nuevaCompra = compraServicio.saveCompra(compra);
            return new ResponseEntity<>(nuevaCompra, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Compra> updateCompra(@PathVariable int id,@RequestBody Compra compra){
        Compra compraExistente = compraServicio.getCompraById(id);
        if(compraExistente != null){
            compraExistente.setInformacion_producto(compra.getInformacion_producto());
            compraExistente.setCantidad(compra.getCantidad());
            compraExistente.setTotal_pagar(compra.getTotal_pagar());
            compraExistente.setFecha_compra(compra.getFecha_compra());
            compraExistente.setId_empleado(compra.getId_empleado());
            compraExistente.setId_metodo_pago(compra.getId_metodo_pago());
            compraExistente.setId_proveedor(compra.getId_proveedor());
            compraExistente.setActivo(compra.getActivo());

            Compra compraActualizada = compraServicio.saveCompra(compraExistente);
            return new ResponseEntity<>(compraActualizada, HttpStatus.OK);
        } else{ 
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/{id}/inactivar")
    public ResponseEntity<Void> inactivarCompra(@PathVariable int id){
        try {
            compraServicio.inactivarCompra(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
