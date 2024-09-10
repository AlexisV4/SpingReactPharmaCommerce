package com.example.pharmacommerce.modelo;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="clientes")
public class Cliente {
    @Id
    private int id_cliente;
    private String nombre_completo;
    private String telefono;
    private String correo;
    private String direccion;
    private int id_ciudad;
    private int id_genero;
    private Boolean activo;

    public Cliente() {
    }

    public Cliente(int id_cliente, String nombre_completo, String telefono, String correo, String direccion, int id_ciudad, int id_genero, Boolean activo) {
        this.id_cliente = id_cliente;
        this.nombre_completo = nombre_completo;
        this.telefono = telefono;
        this.correo = correo;
        this.direccion = direccion;
        this.id_ciudad = id_ciudad;
        this.id_genero = id_genero;
        this.activo = activo;
    }

    public int getId_cliente() {
        return this.id_cliente;
    }

    public void setId_cliente(int id_cliente) {
        this.id_cliente = id_cliente;
    }

    public String getNombre_completo() {
        return this.nombre_completo;
    }

    public void setNombre_completo(String nombre_completo) {
        this.nombre_completo = nombre_completo;
    }

    public String getTelefono() {
        return this.telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    public String getCorreo() {
        return this.correo;
    }

    public void setCorreo(String correo) {
        this.correo = correo;
    }

    public String getDireccion() {
        return this.direccion;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }

    public int getId_ciudad() {
        return this.id_ciudad;
    }

    public void setId_ciudad(int id_ciudad) {
        this.id_ciudad = id_ciudad;
    }

    public int getId_genero() {
        return this.id_genero;
    }

    public void setId_genero(int id_genero) {
        this.id_genero = id_genero;
    }

    public Boolean isActivo() {
        return this.activo;
    }

    public Boolean getActivo() {
        return this.activo;
    }

    public void setActivo(Boolean activo) {
        this.activo = activo;
    }

}
