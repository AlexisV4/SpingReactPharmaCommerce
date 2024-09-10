package com.example.pharmacommerce.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.pharmacommerce.modelo.Compra;

public interface CompraRepository extends JpaRepository <Compra, Integer> {

    @Query("SELECT c FROM Compra c WHERE c.activo = true ")
    List<Compra> findActiveCompras();

}
