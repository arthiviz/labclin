package app.service;

import app.entity.Coleta;
import app.entity.Exam;
import app.repository.ColetaRepository;
import app.repository.ExamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class ColetaService {

    @Autowired
    ColetaRepository coletaRepository;

    public String save(Coleta coleta){
        this.verification(coleta);
        this.verificationStatus(coleta);

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

    public void verification(Coleta coleta){
        if(coleta.getClient() == null){
            throw new RuntimeException("Selecione o Cliente Da Coleta");
        }

        else if(coleta.getExams() == null || coleta.getExams().isEmpty()){
            throw  new RuntimeException("A Coleta Deve ter Pelo menos um exame");
        }

        else if(coleta.getDate() == null){
            throw new RuntimeException(("Selecione a Data Da Coleta"));
        }

        else if (coleta.getPayment_type().equals("null") || coleta.getPayment_type() == null) {
            throw new RuntimeException("Selecione o Tipo de Pagamento");
        }

        else if (coleta.getTotal() == null) {
            throw new RuntimeException(("Defina O Valor Total Da Coleta"));
        }

        else if(coleta.getTotal_pay() == null){
            throw new RuntimeException("Defina o Valor Que Já Foi Pago");
        }
    }

    public void verificationStatus(Coleta coleta){
        if(coleta.getStatus() == null){
            if(coleta.getDate().isBefore(LocalDate.now())){
                coleta.setStatus("concluido");
            }else if(coleta.getDate().isAfter(LocalDate.now())){
                coleta.setStatus("agendado");
            }
            else{
                coleta.setStatus("pendente");
            }
        }

    }
}
