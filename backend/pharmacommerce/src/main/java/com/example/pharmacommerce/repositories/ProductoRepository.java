package com.example.pharmacommerce.repositories;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.pharmacommerce.modelo.Producto;

public interface ProductoRepository extends JpaRepository<Producto, Integer> {

    @Query("SELECT p from Producto p where p.activo = true")
    List<Producto> findActiveProducts();

}
