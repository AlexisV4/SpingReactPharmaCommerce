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

import com.example.pharmacommerce.modelo.Cliente;
import com.example.pharmacommerce.services.ClienteServicio;

@RestController
@RequestMapping("/api/clientes")
public class ClienteController {

    @Autowired
    private ClienteServicio clienteServicio;

    @GetMapping("/activos")
    public ResponseEntity<List<Cliente>> findActiveClientes(){
        try {
            List<Cliente> clientes = clienteServicio.findActiveClientes();
            return new ResponseEntity<>(clientes, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping
    public ResponseEntity<Cliente> createCliente(@RequestBody Cliente cliente){
        try {
            Cliente nuevoCliente = clienteServicio.saveCliente(cliente);
            return new ResponseEntity<>(nuevoCliente, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Cliente> updateCliente(@PathVariable int id, @RequestBody Cliente cliente){
        Cliente clienteExistente = clienteServicio.getClienteById(id);
        if(clienteExistente != null){
            clienteExistente.setId_cliente(cliente.getId_cliente());
            clienteExistente.setNombre_completo(cliente.getNombre_completo());
            clienteExistente.setTelefono(cliente.getTelefono());
            clienteExistente.setCorreo(cliente.getCorreo());
            clienteExistente.setDireccion(cliente.getDireccion());
            clienteExistente.setId_ciudad(cliente.getId_ciudad());
            clienteExistente.setId_genero(cliente.getId_genero());
            
            Cliente clienteActualizado = clienteServicio.updateCliente(clienteExistente);
            return new ResponseEntity<>(clienteActualizado, HttpStatus.OK);

        }else{
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

    @PutMapping("/{id}/inactivar")
    public ResponseEntity<Void> inactivarCliente(@PathVariable int id){
        try {
            clienteServicio.inactivarCliente(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }




}
