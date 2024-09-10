package com.example.pharmacommerce.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.pharmacommerce.modelo.Ciudad;
import com.example.pharmacommerce.services.CiudadServicio;

@RestController
@RequestMapping("/api/ciudades")
public class CiudadController {
    @Autowired
    private CiudadServicio ciudadServicio;

    @GetMapping
    public ResponseEntity <List<Ciudad>> findAllCiudades(){
        try {
            List<Ciudad> ciudades = ciudadServicio.findAllCiudades();
            return new ResponseEntity<>(ciudades, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
