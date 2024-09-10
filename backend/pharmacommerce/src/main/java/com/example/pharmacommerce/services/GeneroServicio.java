package com.example.pharmacommerce.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.pharmacommerce.modelo.Genero;
import com.example.pharmacommerce.repositories.GeneroRepository;

@Service
public class GeneroServicio {

    @Autowired
    private GeneroRepository generoRepository;

    public List<Genero> findAllGeneros(){
        return generoRepository.findAll();
    }

}
