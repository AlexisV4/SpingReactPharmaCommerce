package com.example.pharmacommerce.modelo;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "empleados")
public class Empleado {
    @Id
    private int id_empleado;
    private String nombre_completo;
    private int id_rol;
    private String telefono;
    private String correo;
    private LocalDate fecha_ingreso;
    private LocalDate fecha_retiro;
    private int estado_de_empleado;
    private int id_usuario;
    private Boolean activo;

    public Empleado() {
    }
    
    public Empleado(int id_empleado, String nombre_completo, int id_rol, String telefono, String correo, LocalDate fecha_ingreso, LocalDate fecha_retiro, int estado_de_empleado, int id_usuario, Boolean activo) {
        this.id_empleado = id_empleado;
        this.nombre_completo = nombre_completo;
        this.id_rol = id_rol;
        this.telefono = telefono;
        this.correo = correo;
        this.fecha_ingreso = fecha_ingreso;
        this.fecha_retiro = fecha_retiro;
        this.estado_de_empleado = estado_de_empleado;
        this.id_usuario = id_usuario;
        this.activo = activo;
    }


    public int getId_empleado() {
        return this.id_empleado;
    }

    public void setId_empleado(int id_empleado) {
        this.id_empleado = id_empleado;
    }

    public String getNombre_completo() {
        return this.nombre_completo;
    }

    public void setNombre_completo(String nombre_completo) {
        this.nombre_completo = nombre_completo;
    }

    public int getId_rol() {
        return this.id_rol;
    }

    public void setId_rol(int id_rol) {
        this.id_rol = id_rol;
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

    public LocalDate getFecha_ingreso() {
        return this.fecha_ingreso;
    }

    public void setFecha_ingreso(LocalDate fecha_ingreso) {
        this.fecha_ingreso = fecha_ingreso;
    }

    public LocalDate getFecha_retiro() {
        return this.fecha_retiro;
    }

    public void setFecha_retiro(LocalDate fecha_retiro) {
        this.fecha_retiro = fecha_retiro;
    }

    public int getEstado_de_empleado() {
        return this.estado_de_empleado;
    }

    public void setEstado_de_empleado(int estado_de_empleado) {
        this.estado_de_empleado = estado_de_empleado;
    }

    public int getId_usuario() {
        return this.id_usuario;
    }

    public void setId_usuario(int id_usuario) {
        this.id_usuario = id_usuario;
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
