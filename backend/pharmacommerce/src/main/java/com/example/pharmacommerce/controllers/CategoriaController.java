package com.example.pharmacommerce.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.pharmacommerce.modelo.Categoria;
import com.example.pharmacommerce.services.CategoriaServicio;

@RestController
@RequestMapping("/api/categorias")
public class CategoriaController {

    @Autowired
    private CategoriaServicio categoriaServicio;

    @GetMapping
    public List<Categoria> getAllCategorias(){
        return categoriaServicio.getAllCategorias();
    }




}
