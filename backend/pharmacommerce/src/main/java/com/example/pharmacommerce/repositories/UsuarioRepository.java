package com.example.pharmacommerce.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.pharmacommerce.modelo.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Integer> {

}
