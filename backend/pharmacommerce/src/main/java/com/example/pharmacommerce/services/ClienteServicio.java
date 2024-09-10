package com.example.pharmacommerce.services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.pharmacommerce.modelo.Cliente;
import com.example.pharmacommerce.repositories.ClienteRepository;

@Service
public class ClienteServicio {
    @Autowired
    private ClienteRepository clienteRepository;

    public List<Cliente> findActiveClientes(){
        return clienteRepository.findActiveClientes();
    }

    public Cliente getClienteById(int id){
        return clienteRepository.findById(id).orElse(null);
    }

    public Cliente saveCliente(Cliente cliente){
        return clienteRepository.save(cliente);
    }

    public Cliente updateCliente(Cliente cliente){
        return clienteRepository.save(cliente);
    }

    public void inactivarCliente(int id){
        Cliente cliente = clienteRepository.findById(id).orElse(null);
        if(cliente != null){
            cliente.setActivo(false);
            clienteRepository.save(cliente);
        }
    }


}
