package com.example.pharmacommerce.repositories;
import org.springframework.data.jpa.repository.JpaRepository;
import com.example.pharmacommerce.modelo.Producto;

public interface ProductoRepository extends JpaRepository<Producto, Integer> {

}
