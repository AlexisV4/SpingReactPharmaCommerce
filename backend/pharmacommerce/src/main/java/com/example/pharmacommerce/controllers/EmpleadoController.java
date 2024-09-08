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

import com.example.pharmacommerce.modelo.Empleado;
import com.example.pharmacommerce.services.EmpleadoServicio;

@RestController
@RequestMapping("/api/empleados")
public class EmpleadoController {
    @Autowired
    private EmpleadoServicio empleadoServicio;

    @GetMapping
    public ResponseEntity<List<Empleado>> getAllEmpleados(){
        try {
            List<Empleado> empleados = empleadoServicio.getAllEmpleados();
            return new ResponseEntity<>(empleados, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping
    public ResponseEntity<Empleado> createEmpleado (@RequestBody Empleado empleado){
        try {
            Empleado nuevoEmpleado = empleadoServicio.saveEmpleado(empleado);
            return new ResponseEntity<>(nuevoEmpleado, HttpStatus.CREATED);
        } catch (Exception e) { 
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Empleado> updateEmpleado(@PathVariable int id, @RequestBody Empleado empleado){
        Empleado empleadoExistente = empleadoServicio.getEmpleadoById(id);

        if(empleadoExistente != null){
            empleadoExistente.setId_empleado(empleado.getId_empleado());
            empleadoExistente.setNombre_completo(empleado.getNombre_completo());
            empleadoExistente.setId_rol(empleado.getId_rol());
            empleadoExistente.setTelefono(empleado.getTelefono());
            empleadoExistente.setCorreo(empleado.getCorreo());
            empleadoExistente.setFecha_ingreso(empleado.getFecha_ingreso());
            empleadoExistente.setFecha_retiro(empleado.getFecha_retiro());
            empleadoExistente.setEstado_de_empleado(empleado.getEstado_de_empleado());
            empleadoExistente.setId_usuario(empleado.getId_usuario());

            Empleado empleadoActualizado = empleadoServicio.saveEmpleado(empleadoExistente);
            return new ResponseEntity<>(empleadoActualizado, HttpStatus.OK);
        } else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/{id}/inactivar")
    public ResponseEntity<Void>inactivarEmpleado(@PathVariable int id){
        try {
            empleadoServicio.inactivarEmpleado(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
            
        }
    }


}
