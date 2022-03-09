package com.igor.crudfuncionariosspring.controller;


import com.igor.crudfuncionariosspring.model.Cargo;
import com.igor.crudfuncionariosspring.repository.CargoRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping({"api/cargos"})
public class CargoController {

    private CargoRepository repository;

    CargoController(CargoRepository cargoRepository) {
        this.repository = cargoRepository;
    }

    @GetMapping
    public List findAll() {
        return repository.findAll();
    }

    @GetMapping(path = {"/{id}"})
    public ResponseEntity findByID(@PathVariable long id) {
        return repository.findById(id)
                .map(record -> ResponseEntity.ok().body(record))
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Cargo create(@RequestBody Cargo cargo) {return repository.save(cargo);}

    @PutMapping(value = "/{id}")
    public ResponseEntity update(@PathVariable("id") long id,
                                 @RequestBody Cargo cargo) {
        return repository.findById(id)
                .map(record -> {
                    record.setNomeCargo(cargo.getNomeCargo());
                    record.setSetor(cargo.getSetor());
                    record.setPerm(cargo.getPerm());
                    record.setDtaCargo(cargo.getDtaCargo());
                    Cargo updated = repository.save(record);
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
