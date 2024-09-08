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

import com.example.pharmacommerce.modelo.MetodoPago;
import com.example.pharmacommerce.services.MetodoPagoServicio;

@RestController
@RequestMapping("/api/metodos_pago")
public class MetodoPagoController {
    @Autowired
    private MetodoPagoServicio metodoPagoServicio;

    @GetMapping
    public ResponseEntity<List<MetodoPago>> getAllMetodos(){
        try {
            List<MetodoPago> metodoPagos = metodoPagoServicio.getAllMetodos();
            return new ResponseEntity<>(metodoPagos, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping
    public ResponseEntity<MetodoPago> createMetodoPago(@RequestBody MetodoPago metodoPago){
        try {
            MetodoPago nuevMetodoPago = metodoPagoServicio.saveMetodoPago(metodoPago);
            return new ResponseEntity<>(nuevMetodoPago, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<MetodoPago> updateMetodoPago (@PathVariable int id, @RequestBody MetodoPago metodoPago){
        MetodoPago metodoPagoExistente = metodoPagoServicio.getMetodoById(id);
        if(metodoPagoExistente != null){
            metodoPagoExistente.setId_metodo(metodoPago.getId_metodo());
            metodoPagoExistente.setNombre(metodoPago.getNombre());
            
            MetodoPago metodoPagoActualizado = metodoPagoServicio.saveMetodoPago(metodoPagoExistente);
            return new ResponseEntity<>(metodoPagoActualizado, HttpStatus.OK);
        } else{
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

}
