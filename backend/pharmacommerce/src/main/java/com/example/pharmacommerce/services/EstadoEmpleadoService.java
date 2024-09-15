package com.example.pharmacommerce.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.pharmacommerce.modelo.EstadoEmpleado;
import com.example.pharmacommerce.repositories.EstadoEmpleadoRepository;

@Service
public class EstadoEmpleadoService {
    @Autowired
    private EstadoEmpleadoRepository estadoEmpleadoRepository;

    public List<EstadoEmpleado> getAllEstadosEmpleado(){
        return estadoEmpleadoRepository.findAll();
    }

}
