package com.example.pharmacommerce.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.pharmacommerce.modelo.Compra;
import com.example.pharmacommerce.repositories.CompraRepository;

@Service
public class CompraServicio {
    @Autowired
    private CompraRepository compraRepository;

    public List<Compra> getAllCompras(){
        return compraRepository.findAll();
    }
    
    public Compra getCompraById(int id){
        return compraRepository.findById(id).orElse(null);
    }

    public Compra saveCompra(Compra compra){
        return compraRepository.save(compra);
    }

    public Compra updateCompra(Compra compra){
        return compraRepository.save(compra);
    }

    public void inactivarCompra(int id){
        Compra compra = compraRepository.findById(id).orElse(null);
        if(compra != null){
            compra.setActivo(false);
            compraRepository.save(compra);
        }

    }
}
