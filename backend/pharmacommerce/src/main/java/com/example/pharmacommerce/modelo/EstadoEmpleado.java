package com.example.pharmacommerce.modelo;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "estados_de_empleado")
public class EstadoEmpleado {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_estado")
    private int id_estado;

    private String nombre;

    public EstadoEmpleado() {
    }

    public EstadoEmpleado(int id_estado, String nombre) {
        this.id_estado = id_estado;
        this.nombre = nombre;
    }


    public int getId_estado() {
        return this.id_estado;
    }

    public void setId_estado(int id_estado) {
        this.id_estado = id_estado;
    }

    public String getNombre() {
        return this.nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    

}
