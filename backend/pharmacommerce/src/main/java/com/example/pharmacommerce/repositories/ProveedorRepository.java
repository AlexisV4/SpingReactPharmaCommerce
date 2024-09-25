package com.example.pharmacommerce.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.pharmacommerce.modelo.Proveedor;

public interface ProveedorRepository extends JpaRepository <Proveedor, Integer> {

    @Query("SELECT p FROM Proveedor p WHERE p.activo = true")
    List<Proveedor>findActiveProveedores();




}
