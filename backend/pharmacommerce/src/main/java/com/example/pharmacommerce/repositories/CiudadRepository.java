package com.example.pharmacommerce.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.pharmacommerce.modelo.Ciudad;

public interface CiudadRepository extends JpaRepository <Ciudad, Integer> {

}
