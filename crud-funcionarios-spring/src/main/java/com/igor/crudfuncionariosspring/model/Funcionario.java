package com.igor.crudfuncionariosspring.model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.sql.Date;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
public class Funcionario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 50, nullable = false)
    private String name;

    @Column(length = 50, nullable = false)
    private String cpf;

    @Column(length = 50, nullable = false)
    private String telefone;

    @Column(length = 50, nullable = false)
    private String salario;

    @Column(length = 50, nullable = false)
    private Date dtaFuncionario;

    @ManyToOne
    @JoinColumn(nullable = false)
    private Cargo cargo;
}
