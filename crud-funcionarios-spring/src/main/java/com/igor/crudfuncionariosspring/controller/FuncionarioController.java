package com.igor.crudfuncionariosspring.controller;


import com.igor.crudfuncionariosspring.model.Funcionario;
import com.igor.crudfuncionariosspring.repository.FuncionarioRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping({"/api/funcionarios"})
public class FuncionarioController {

    private FuncionarioRepository repository;

    FuncionarioController(FuncionarioRepository funcionarioRepository) {
        this.repository = funcionarioRepository;
    }

    @GetMapping
    public List findAll() {
        return repository.findAll();
    }


    @GetMapping(path = {"/{id}"})
    public ResponseEntity findById(@PathVariable long id) {
        return repository.findById(id)
                .map(record -> ResponseEntity.ok().body(record))
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Funcionario create(@RequestBody Funcionario funcionario) {
        return repository.save(funcionario);
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity update(@PathVariable("id") long id,
                                 @RequestBody Funcionario funcionario) {
        return repository.findById(id)
                .map(record -> {
                    record.setName(funcionario.getName());
                    record.setCpf(funcionario.getCpf());
                    record.setTelefone(funcionario.getTelefone());
                    record.setCargo(funcionario.getCargo());
                    record.setSalario(funcionario.getSalario());
                    record.setDtaFuncionario(funcionario.getDtaFuncionario());
                    Funcionario updated = repository.save(record);
                    return ResponseEntity.ok().body(updated);
                }).orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping(path = {"/{id}"})
    public ResponseEntity<?>delete(@PathVariable long id) {
        return repository.findById(id)
                .map(record -> {
                    repository.deleteById(id);
                    return ResponseEntity.ok().build();
                }).orElse(ResponseEntity.notFound().build());
    }
}
