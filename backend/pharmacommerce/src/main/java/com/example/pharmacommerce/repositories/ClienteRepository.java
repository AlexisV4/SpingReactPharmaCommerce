package com.example.pharmacommerce.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.pharmacommerce.modelo.Cliente;

public interface ClienteRepository extends JpaRepository <Cliente, Integer> {

    @Query("SELECT c FROM Cliente c WHERE c.activo = true")
    List<Cliente> findActiveClientes();

}
