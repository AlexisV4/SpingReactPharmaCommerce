package com.example.pharmacommerce.modelo;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="usuarios")
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_usuario")
    private int id_usuario;

    private String usuario;
    private String contrasena;

    public Usuario() {
    }

    public Usuario(int id_usuario, String usuario, String contrasena) {
        this.id_usuario = id_usuario;
        this.usuario = usuario;
        this.contrasena = contrasena;
    }




    public int getId_usuario() {
        return this.id_usuario;
    }

    public void setId_usuario(int id_usuario) {
        this.id_usuario = id_usuario;
    }

    public String getUsuario() {
        return this.usuario;
    }

    public void setUsuario(String usuario) {
        this.usuario = usuario;
    }

    public String getContrasena() {
        return this.contrasena;
    }

    public void setContrasena(String contrasena) {
        this.contrasena = contrasena;
    }

}
