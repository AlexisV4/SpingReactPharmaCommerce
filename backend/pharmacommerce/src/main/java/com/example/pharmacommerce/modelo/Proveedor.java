package com.example.pharmacommerce.modelo;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="proveedores")
public class Proveedor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_proveedor")
    private int id_proveedor;

    private String nit_proveedor;
    private String nombre_completo;
    private String telefono;
    private String correo;
    private String direccion;
    private int id_ciudad;
    private LocalDate fecha_inicio_relacion_comercial;
    private Boolean activo;

    public Proveedor() {
    }

    public Proveedor(int id_proveedor, String nit_proveedor, String nombre_completo, String telefono, String correo, String direccion, int id_ciudad, LocalDate fecha_inicio_relacion_comercial, Boolean activo) {
        this.id_proveedor = id_proveedor;
        this.nit_proveedor = nit_proveedor;
        this.nombre_completo = nombre_completo;
        this.telefono = telefono;
        this.correo = correo;
        this.direccion = direccion;
        this.id_ciudad = id_ciudad;
        this.fecha_inicio_relacion_comercial = fecha_inicio_relacion_comercial;
        this.activo = activo;
    }



    public int getId_proveedor() {
        return this.id_proveedor;
    }

    public void setId_proveedor(int id_proveedor) {
        this.id_proveedor = id_proveedor;
    }

    public String getNit_proveedor() {
        return this.nit_proveedor;
    }

    public void setNit_proveedor(String nit_proveedor) {
        this.nit_proveedor = nit_proveedor;
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

    public LocalDate getFecha_inicio_relacion_comercial() {
        return this.fecha_inicio_relacion_comercial;
    }

    public void setFecha_inicio_relacion_comercial(LocalDate fecha_inicio_relacion_comercial) {
        this.fecha_inicio_relacion_comercial = fecha_inicio_relacion_comercial;
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
