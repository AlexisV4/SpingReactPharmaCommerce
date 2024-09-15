package com.example.pharmacommerce.modelo;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="roles")
public class Rol {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_rol")
    private int id_rol;

    private String nombre_rol;

    public Rol() {
    }

    public Rol(int id_rol, String nombre_rol) {
        this.id_rol = id_rol;
        this.nombre_rol = nombre_rol;
    }


    public int getId_rol() {
        return this.id_rol;
    }

    public void setId_rol(int id_rol) {
        this.id_rol = id_rol;
    }

    public String getNombre_rol() {
        return this.nombre_rol;
    }

    public void setNombre_rol(String nombre_rol) {
        this.nombre_rol = nombre_rol;
    }


}
