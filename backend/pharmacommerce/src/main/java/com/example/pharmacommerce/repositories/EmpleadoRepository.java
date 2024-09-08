package com.example.pharmacommerce.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.pharmacommerce.modelo.Empleado;

public interface EmpleadoRepository extends JpaRepository <Empleado, Integer> {

}
