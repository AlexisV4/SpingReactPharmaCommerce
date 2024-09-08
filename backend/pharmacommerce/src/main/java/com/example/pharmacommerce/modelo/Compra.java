package com.example.pharmacommerce.modelo;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="compras")
public class Compra {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_compra")
    private int id_compra;

    private String informacion_producto;
    private int cantidad;
    private int total_pagar;
    private LocalDate fecha_compra;
    private int id_empleado;
    private int id_metodo_pago;
    private int id_proveedor;
    private Boolean activo;

    public Compra() {
    }

    public Compra(int id_compra, String informacion_producto, int cantidad, int total_pagar, LocalDate fecha_compra, int id_empleado, int id_metodo_pago, int id_proveedor, Boolean activo) {
        this.id_compra = id_compra;
        this.informacion_producto = informacion_producto;
        this.cantidad = cantidad;
        this.total_pagar = total_pagar;
        this.fecha_compra = fecha_compra;
        this.id_empleado = id_empleado;
        this.id_metodo_pago = id_metodo_pago;
        this.id_proveedor = id_proveedor;
        this.activo = activo;
    }

    public int getId_compra() {
        return this.id_compra;
    }

    public void setId_compra(int id_compra) {
        this.id_compra = id_compra;
    }

    public String getInformacion_producto() {
        return this.informacion_producto;
    }

    public void setInformacion_producto(String informacion_producto) {
        this.informacion_producto = informacion_producto;
    }

    public int getCantidad() {
        return this.cantidad;
    }

    public void setCantidad(int cantidad) {
        this.cantidad = cantidad;
    }

    public int getTotal_pagar() {
        return this.total_pagar;
    }

    public void setTotal_pagar(int total_pagar) {
        this.total_pagar = total_pagar;
    }

    public LocalDate getFecha_compra() {
        return this.fecha_compra;
    }

    public void setFecha_compra(LocalDate fecha_compra) {
        this.fecha_compra = fecha_compra;
    }

    public int getId_empleado() {
        return this.id_empleado;
    }

    public void setId_empleado(int id_empleado) {
        this.id_empleado = id_empleado;
    }

    public int getId_metodo_pago() {
        return this.id_metodo_pago;
    }

    public void setId_metodo_pago(int id_metodo_pago) {
        this.id_metodo_pago = id_metodo_pago;
    }

    public int getId_proveedor() {
        return this.id_proveedor;
    }

    public void setId_proveedor(int id_proveedor) {
        this.id_proveedor = id_proveedor;
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
