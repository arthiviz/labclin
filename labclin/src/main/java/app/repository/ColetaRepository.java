package app.repository;

import app.entity.Coleta;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ColetaRepository extends JpaRepository<Coleta, Long> {

    List<Coleta> findAllByOrderByIdDesc();
}
