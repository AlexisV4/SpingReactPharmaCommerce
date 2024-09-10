package com.example.pharmacommerce.modelo;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="ciudades")
public class Ciudad {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_ciudades")
    private int id_ciudades;

    private String nombre_ciudad;
    private String codigo_postal;

    public Ciudad() {
    }

    public Ciudad(int id_ciudades, String nombre_ciudad, String codigo_postal) {
        this.id_ciudades = id_ciudades;
        this.nombre_ciudad = nombre_ciudad;
        this.codigo_postal = codigo_postal;
    }

    public int getId_ciudades() {
        return this.id_ciudades;
    }

    public void setId_ciudades(int id_ciudades) {
        this.id_ciudades = id_ciudades;
    }

    public String getNombre_ciudad() {
        return this.nombre_ciudad;
    }

    public void setNombre_ciudad(String nombre_ciudad) {
        this.nombre_ciudad = nombre_ciudad;
    }

    public String getCodigo_postal() {
        return this.codigo_postal;
    }

    public void setCodigo_postal(String codigo_postal) {
        this.codigo_postal = codigo_postal;
    }


}
