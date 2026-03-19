package app.repository;

import app.entity.Medic;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MedicRepository extends JpaRepository<Medic,Long> {
}
