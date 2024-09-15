package com.example.pharmacommerce.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.pharmacommerce.modelo.EstadoEmpleado;
import com.example.pharmacommerce.services.EstadoEmpleadoService;

@RestController
@RequestMapping("/api/estados_empleado")
public class EstadoEmpleadoController {
    @Autowired
    private EstadoEmpleadoService estadoEmpleadoService;

    @GetMapping
    public ResponseEntity<List<EstadoEmpleado>> getAllEstadosEmpleado(){
        try {
            List<EstadoEmpleado> estadoEmpleados = estadoEmpleadoService.getAllEstadosEmpleado();
            return new ResponseEntity<>(estadoEmpleados, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
