package app.entity;


import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.util.Date;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Client {

    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false)
    private String name;
    @Column(length = 11, unique = true)
    private String CPF;
    @Column(unique = true)
    private String email;
    @Column(length = 12)
    private String telephone;
    private String address;
    @Column(nullable = false)
    private LocalDate birthDate;

}
