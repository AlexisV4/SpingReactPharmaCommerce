package com.example.pharmacommerce.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.pharmacommerce.modelo.Rol;
import com.example.pharmacommerce.services.RolService;

@RestController
@RequestMapping("/api/roles")
public class RolController {
    @Autowired
    private RolService rolService;

    @GetMapping
    public ResponseEntity<List<Rol>> getAllRoles(){
        try {
            List<Rol> roles = rolService.getAllRoles();
            return new ResponseEntity<>(roles, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    

}
