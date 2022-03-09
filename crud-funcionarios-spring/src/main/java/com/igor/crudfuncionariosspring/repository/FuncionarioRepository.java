package com.igor.crudfuncionariosspring.repository;

import com.igor.crudfuncionariosspring.model.Funcionario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FuncionarioRepository extends JpaRepository<Funcionario, Long> {

}
