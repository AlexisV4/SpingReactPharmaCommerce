package com.example.pharmacommerce.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.pharmacommerce.modelo.Producto;
import com.example.pharmacommerce.services.ProductoServicio;

@RestController
@RequestMapping("/api/productos")
public class ProductoController {

    @Autowired
    private ProductoServicio productoServicio;

    @GetMapping
    public ResponseEntity<List<Producto>> getAllProducts() {
        try {
            List<Producto> productos = productoServicio.getAllProducts();
            return new ResponseEntity<>(productos, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping
    public ResponseEntity<Producto> createProducto(@RequestBody Producto producto) {
        try {
            Producto nuevoProducto = productoServicio.saveProduct(producto);
            return new ResponseEntity<>(nuevoProducto, HttpStatus.CREATED);
        } catch (Exception e) {
            // Manejo de excepciones
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Producto> updateProducto(@PathVariable int id, @RequestBody Producto producto) {
        Producto productoExistente = productoServicio.getProductById(id);
        if (productoExistente != null) {
            // Actualizamos los valores del producto existente
            productoExistente.setNombre(producto.getNombre());
            productoExistente.setDescripcion(producto.getDescripcion());
            productoExistente.setPrecio_venta(producto.getPrecio_venta());
            productoExistente.setStock(producto.getStock());
            productoExistente.setFecha_vencimiento(producto.getFecha_vencimiento());
            productoExistente.setId_categoria(producto.getId_categoria());
            productoExistente.setId_proveedor(producto.getId_proveedor());

            Producto productoActualizado = productoServicio.saveProduct(productoExistente);
            return new ResponseEntity<>(productoActualizado, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/{id}/inactivar")
    public ResponseEntity<Void>inactivarProducto(@PathVariable int id){
        try {
            productoServicio.inactivarProducto(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
            
        }
    }
    

}
