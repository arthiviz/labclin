package app.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;
import java.util.List;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Coleta {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne
    @JoinColumn(name = "client_id")
    private Client client;
    @ManyToMany
    @JoinTable(
            name = "coleta_exam",
            joinColumns = @JoinColumn(name = "coleta_id"),
            inverseJoinColumns = @JoinColumn(name = "exam_id")
    )
    private List<Exam> exams;
    private Date date;
    private String Observations;
    private Double total;
    private Double payment_type;
    private Double total_pay;
    private String Status;

    public Double sum_total_exams(List<Exam> exams){
        Double total = 0.0;
        for (Exam exam: exams){
            total += exam.getPreco();
        }
        return total;
    }
}
