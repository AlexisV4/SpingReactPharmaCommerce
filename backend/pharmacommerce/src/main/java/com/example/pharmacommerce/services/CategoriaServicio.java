package com.example.pharmacommerce.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.pharmacommerce.modelo.Categoria;
import com.example.pharmacommerce.repositories.CategoriaRepository;

@Service
public class CategoriaServicio {
    @Autowired
    private CategoriaRepository categoriaRepository;

    public List <Categoria> getAllCategorias(){
        return categoriaRepository.findAll();
    }
    
    public Categoria getCategoriaById(int id){
        return categoriaRepository.findById(id).orElse(null);
    }

    public Categoria saveCategoria(Categoria categoria){
        return categoriaRepository.save(categoria);

    }

    public void deleteCategoria(int id){
        categoriaRepository.deleteById(id);
    }


}
