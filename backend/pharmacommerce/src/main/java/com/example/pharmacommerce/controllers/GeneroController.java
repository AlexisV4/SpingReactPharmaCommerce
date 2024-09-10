package com.example.pharmacommerce.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.pharmacommerce.modelo.Genero;
import com.example.pharmacommerce.services.GeneroServicio;


@RestController
@RequestMapping("/api/generos")
public class GeneroController {

    @Autowired
    private GeneroServicio generoServicio;

    @GetMapping
    public ResponseEntity<List<Genero>> findAllGeneros(){
        try {
            List <Genero> generos = generoServicio.findAllGeneros();
            return new ResponseEntity<>(generos, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
