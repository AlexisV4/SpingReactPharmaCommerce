package com.example.pharmacommerce.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.pharmacommerce.modelo.Compra;

public interface CompraRepository extends JpaRepository <Compra, Integer> {

}
