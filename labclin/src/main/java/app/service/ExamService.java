package app.service;

import app.entity.Exam;
import app.repository.ExamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ExamService {

    @Autowired
    ExamRepository examRepository;

    public String save(Exam exam){
        this.verification(exam);
        exam.setId(null);
        this.examRepository.save(exam);
        return "Exame Adicionado Com Sucesso!";
    }
    public String update(Exam exam, Long id){
        exam.setId(id);
        this.examRepository.save(exam);
        return "Exame Atualizado com Sucesso!";
    }
    public String delete(Long id){
        this.examRepository.deleteById(id);
        return "Exame Deletado Com Sucesso!";
    }
    public List<Exam> listAll(){
        return this.examRepository.findAll();
    }
    public Exam findById(Long id){
        Optional<Exam> exam = this.examRepository.findById(id);
        return exam.get();
    }

    public void verification(Exam exam){
        if(exam.getName() == null || exam.getName().equals("")){
            throw new RuntimeException("Insira o Nome do Exame");
        }
        else if(exam.getType().equals("null") || exam.getType() == null){
            throw new RuntimeException("Insira o Tipo do Exame");
        }
        else if(exam.getPreco() == null){
            throw new RuntimeException("Insira o Preço do Exame");
        }
    }

}
