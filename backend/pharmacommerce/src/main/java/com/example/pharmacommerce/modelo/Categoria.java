package com.example.pharmacommerce.modelo;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "categorias")
public class Categoria {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_categoria")

    private int id_categoria;
    private String nombre;
    private String descripcion_categoria;


    public Categoria() {
    }

    public Categoria(int id_categoria, String nombre, String descripcion_categoria) {
        this.id_categoria = id_categoria;
        this.nombre = nombre;
        this.descripcion_categoria = descripcion_categoria;
    }

    public int getId_categoria() {
        return this.id_categoria;
    }

    public void setId_categoria(int id_categoria) {
        this.id_categoria = id_categoria;
    }

    public String getNombre() {
        return this.nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getDescripcion_categoria() {
        return this.descripcion_categoria;
    }

    public void setDescripcion_categoria(String descripcion_categoria) {
        this.descripcion_categoria = descripcion_categoria;
    }




}
