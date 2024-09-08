package com.example.pharmacommerce.modelo;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="metodos_de_pago")
public class MetodoPago {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_metodo")
    private int id_metodo;

    private String nombre;

    public MetodoPago() {
    }

    public MetodoPago(int id_metodo, String nombre) {
        this.id_metodo = id_metodo;
        this.nombre = nombre;
    }


    public int getId_metodo() {
        return this.id_metodo;
    }

    public void setId_metodo(int id_metodo) {
        this.id_metodo = id_metodo;
    }

    public String getNombre() {
        return this.nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    


}
