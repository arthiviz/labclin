package app.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
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
    @JoinColumn(name = "client_id",nullable = false)
    private Client client;
    @ManyToMany
    @JoinTable(
            name = "coleta_exam",
            joinColumns = @JoinColumn(name = "coleta_id"),
            inverseJoinColumns = @JoinColumn(name = "exam_id")
    )
    @NotNull
    private List<Exam> exams;
    @NotNull
    private LocalDate date;
    private String Observations;
    @NotNull
    private Double total;
    @NotNull
    private String payment_type;
    @NotNull()
    private Double total_pay;
    @NotNull
    private String Status;

}
