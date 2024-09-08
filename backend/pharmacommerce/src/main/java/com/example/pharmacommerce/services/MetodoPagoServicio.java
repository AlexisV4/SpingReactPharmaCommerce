package com.example.pharmacommerce.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.pharmacommerce.modelo.MetodoPago;
import com.example.pharmacommerce.repositories.MetodoPagoRepository;

@Service
public class MetodoPagoServicio {
    @Autowired
    private MetodoPagoRepository metodoPagoRepository;

    public List<MetodoPago> getAllMetodos(){
        return metodoPagoRepository.findAll();
    }

    public MetodoPago getMetodoById(int id){
        return metodoPagoRepository.findById(id).orElse(null);
    }

    public MetodoPago saveMetodoPago(MetodoPago metodoPago){
        return metodoPagoRepository.save(metodoPago);
    }

    public MetodoPago updateMetodoPago(MetodoPago metodoPago){
        return metodoPagoRepository.save(metodoPago);
    }

}
