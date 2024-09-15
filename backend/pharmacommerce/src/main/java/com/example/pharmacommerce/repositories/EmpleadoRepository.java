package com.example.pharmacommerce.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.pharmacommerce.modelo.Empleado;

public interface EmpleadoRepository extends JpaRepository <Empleado, Integer> {

    @Query("SELECT e FROM Empleado e WHERE e.activo =  true")
    List<Empleado> findActiveEmpleados();

}
