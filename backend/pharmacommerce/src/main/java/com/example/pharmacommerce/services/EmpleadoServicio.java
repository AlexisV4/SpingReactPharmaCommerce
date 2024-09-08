package com.example.pharmacommerce.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.pharmacommerce.modelo.Empleado;
import com.example.pharmacommerce.repositories.EmpleadoRepository;

@Service
public class EmpleadoServicio {
    @Autowired
    private EmpleadoRepository empleadoRepository;

    public List<Empleado> getAllEmpleados(){
        return empleadoRepository.findAll();
    }

    public Empleado getEmpleadoById(int id){
        return empleadoRepository.findById(id).orElse(null);
    }

    public Empleado saveEmpleado(Empleado empleado){
        return empleadoRepository.save(empleado);
    }

    public Empleado updateEmpleado(Empleado empleado){
        return empleadoRepository.save(empleado);
    }

    public void inactivarEmpleado(int id){
        Empleado empleado = empleadoRepository.findById(id).orElse(null);
        if(empleado != null){
            empleado.setActivo(false);
            empleadoRepository.save(empleado);
        }
    }
}
