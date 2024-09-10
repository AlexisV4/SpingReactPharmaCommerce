package com.example.pharmacommerce.services;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.pharmacommerce.repositories.ProductoRepository;
import com.example.pharmacommerce.modelo.Producto;

@Service
public class ProductoServicio {

    //Autowired para inyectar la dependencia Repository en esa variable producto
    @Autowired
    private ProductoRepository productoRepository;

    //Metodo que devolverá una lista de productos encontrados.
    public List<Producto> getAllProducts(){
        return productoRepository.findActiveProducts();
    }

    public Producto getProductById(int id){
        return productoRepository.findById(id).orElse(null);
    }

    public Producto saveProduct (Producto producto){
        return productoRepository.save(producto);
    }

    public Producto updateProduct(Producto producto) {
        return productoRepository.save(producto);  // save() funcionará para tanto crear como actualizar
    }

    public void inactivarProducto(int id){
        Producto producto = productoRepository.findById(id).orElse(null);
        if(producto != null){
            producto.setActivo(false);
            productoRepository.save(producto);
        }
    }
    


    

}
