package app.service;

import app.entity.Client;
import app.entity.Exam;
import app.repository.ClientRepository;
import app.repository.ExamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ClientService {
    @Autowired
    ClientRepository clientRepository;

    public String save(Client client){
        client.setId(null);
        this.clientRepository.save(client);
        return "Cliente Adicionado Com Sucesso!";
    }
    public String update(Client client, Long id){
        client.setId(id);
        this.clientRepository.save(client);
        return "Cliente Atualizado com Sucesso!";
    }
    public String delete(Long id){
        this.clientRepository.deleteById(id);
        return "Cliente Deletado Com Sucesso!";
    }
    public List<Client> listAll(){
        return this.clientRepository.findAll();
    }
    public Client findById(Long id){
        Optional<Client> client = this.clientRepository.findById(id);
        return client.get();
    }
}
