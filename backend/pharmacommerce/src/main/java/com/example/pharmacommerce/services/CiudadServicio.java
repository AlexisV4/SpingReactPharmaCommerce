package com.example.pharmacommerce.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.pharmacommerce.modelo.Ciudad;
import com.example.pharmacommerce.repositories.CiudadRepository;

@Service
public class CiudadServicio {
    @Autowired
    private CiudadRepository ciudadRepository;

    public List<Ciudad> findAllCiudades(){
        return ciudadRepository.findAll();
    }

}
