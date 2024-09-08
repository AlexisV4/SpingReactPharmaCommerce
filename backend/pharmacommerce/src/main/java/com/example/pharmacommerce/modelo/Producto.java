package com.example.pharmacommerce.modelo;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "productos")
public class Producto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_producto")
    private int id_producto;
    
    private String nombre;
    private String descripcion;
    private double precio_venta;
    private int stock;
    private LocalDate fecha_vencimiento;
    private int id_categoria;
    private int id_proveedor;
    private Boolean activo;

    public Producto() {
    }

    public Producto(int id_producto, String nombre, String descripcion, double precio_venta, int stock, LocalDate fecha_vencimiento, int id_categoria, int id_proveedor, Boolean activo) {
        this.id_producto = id_producto;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio_venta = precio_venta;
        this.stock = stock;
        this.fecha_vencimiento = fecha_vencimiento;
        this.id_categoria = id_categoria;
        this.id_proveedor = id_proveedor;
        this.activo = activo;
    }


    public int getId_producto() {
        return this.id_producto;
    }

    public void setId_producto(int id_producto) {
        this.id_producto = id_producto;
    }

    public String getNombre() {
        return this.nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getDescripcion() {
        return this.descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public double getPrecio_venta() {
        return this.precio_venta;
    }

    public void setPrecio_venta(double precio_venta) {
        this.precio_venta = precio_venta;
    }

    public int getStock() {
        return this.stock;
    }

    public void setStock(int stock) {
        this.stock = stock;
    }

    public LocalDate getFecha_vencimiento() {
        return this.fecha_vencimiento;
    }

    public void setFecha_vencimiento(LocalDate fecha_vencimiento) {
        this.fecha_vencimiento = fecha_vencimiento;
    }

    public int getId_categoria() {
        return this.id_categoria;
    }

    public void setId_categoria(int id_categoria) {
        this.id_categoria = id_categoria;
    }

    public int getId_proveedor() {
        return this.id_proveedor;
    }

    public void setId_proveedor(int id_proveedor) {
        this.id_proveedor = id_proveedor;
    }

    public boolean isActivo() {
        return this.activo;
    }

    public Boolean getActivo() { // Cambiado a Boolean
        return this.activo;
    }

    public void setActivo(Boolean activo) { // Cambiado a Boolean
        this.activo = activo;
    }  



    

}
