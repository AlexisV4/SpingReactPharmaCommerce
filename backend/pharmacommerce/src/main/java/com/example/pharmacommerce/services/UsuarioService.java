package com.example.pharmacommerce.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.pharmacommerce.modelo.Usuario;
import com.example.pharmacommerce.repositories.UsuarioRepository;

@Service
public class UsuarioService {
    @Autowired
    private UsuarioRepository usuarioRepository;
    
    public List<Usuario> getAllUsuario(){
        return usuarioRepository.findAll();
    }

}
