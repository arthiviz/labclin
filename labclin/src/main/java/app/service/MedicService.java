package app.service;

import app.entity.Medic;
import app.repository.MedicRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MedicService {

    @Autowired
    private MedicRepository medicRepository;

    public String save(Medic medic){
        medic.setId(null);
        this.medicRepository.save(medic);
        return "Médico Adicionado com Sucesso";
    }

    public String delete(Long id){
        this.medicRepository.deleteById(id);
        return "Médico Deletado com Sucesso!";
    }

    public String update(Medic medic,Long id){
        medic.setId(id);
        this.medicRepository.save(medic);
        return "Médico Adicionado com Sucesso!";
    }
    public List<Medic> findAll(){
        return this.medicRepository.findAll();
    }
    public Optional<Medic> findById(Long id){
        return this.medicRepository.findById(id);
    }
}
