package com.igor.crudfuncionariosspring.repository;

import com.igor.crudfuncionariosspring.model.Cargo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CargoRepository extends JpaRepository<Cargo, Long> {
}
