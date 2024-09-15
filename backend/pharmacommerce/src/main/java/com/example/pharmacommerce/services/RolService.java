package com.example.pharmacommerce.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.pharmacommerce.modelo.Rol;
import com.example.pharmacommerce.repositories.RolRepository;

@Service
public class RolService {
    @Autowired
    private RolRepository rolRepository;

    public List<Rol> getAllRoles(){
        return rolRepository.findAll();
    }

}
