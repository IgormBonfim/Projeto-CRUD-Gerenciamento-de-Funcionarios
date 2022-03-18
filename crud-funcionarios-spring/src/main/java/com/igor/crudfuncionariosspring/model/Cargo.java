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
public class Cargo {

    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 50, nullable = false)
    private String nomeCargo;
    @Column(length = 50, nullable = false)
    private String setor;
    @Column(length = 50, nullable = false)
    private String perm;
    @Column(length = 50, nullable = false)
    private Date dtaCargo;
}
