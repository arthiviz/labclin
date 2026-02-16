package app.service;

import app.entity.Coleta;
import app.entity.Exam;
import app.repository.ColetaRepository;
import app.repository.ExamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ColetaService {

    @Autowired
    ColetaRepository coletaRepository;

    public String save(Coleta coleta){
        coleta.setId(null);
        this.coletaRepository.save(coleta);
        return "Coleta Adicionado Com Sucesso!";
    }
    public String update(Coleta coleta, Long id){
        coleta.setId(id);
        this.coletaRepository.save(coleta);
        return "Coleta Atualizado com Sucesso!";
    }
    public String delete(Long id){
        this.coletaRepository.deleteById(id);
        return "Coleta Deletado Com Sucesso!";
    }
    public List<Coleta> listAll(){
        return this.coletaRepository.findAll();
    }
    public Coleta findById(Long id){
        Optional<Coleta> exam = this.coletaRepository.findById(id);
        return exam.get();
    }
}
