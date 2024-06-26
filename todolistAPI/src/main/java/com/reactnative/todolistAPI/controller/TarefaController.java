package com.reactnative.todolistAPI.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.reactnative.todolistAPI.model.Tarefa;
import com.reactnative.todolistAPI.model.Usuario;
import com.reactnative.todolistAPI.repository.TarefaRepository;
import com.reactnative.todolistAPI.service.TarefaService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/tarefa")
public class TarefaController {

	@Autowired
	private TarefaRepository tarefaRepository;
	
	@Autowired
	private TarefaService tarefaService;
	
	@GetMapping
	public ResponseEntity<List<Tarefa>> listar(){
		return ResponseEntity.ok(tarefaService.findAll());
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Tarefa> buscar(@PathVariable Long id) {
		Optional<Tarefa> tarefaOpt = tarefaRepository.findById(id);
		if(tarefaOpt.isEmpty()) {
			return ResponseEntity.notFound().build();
		}
		return ResponseEntity.ok(tarefaOpt.get());
	}
	
    @GetMapping("/{userId}/tarefas")
    public List<Tarefa> buscarPorAutor(@PathVariable Long userId) {
        return tarefaService.getTarefasByAutorId(userId);
    }
	
	@PostMapping("/{userId}")
	@ResponseStatus(HttpStatus.CREATED)
	public ResponseEntity<Tarefa> inserir(@RequestBody Tarefa tarefa, @PathVariable Long userId) {
		Usuario usuarioObj = new Usuario();
		usuarioObj.setId(userId);
		tarefa.setAutor(usuarioObj);
		tarefaService.insert(tarefa);
		return ResponseEntity.ok(tarefa);
	}

	@PutMapping("/{id}")
	public ResponseEntity<Tarefa> alterar(@PathVariable Long id, @Valid @RequestBody Tarefa tarefaAlterar) {
		if (!tarefaRepository.existsById(id)) {
			return ResponseEntity.notFound().build();
		}
		Tarefa tarefaTemp = tarefaService.findById(id);
		tarefaAlterar.setId(id);
		Tarefa tarefa = tarefaService.change(tarefaAlterar, tarefaTemp);
		return ResponseEntity.ok(tarefa);
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Void> deletar(@PathVariable Long id) {
		if (!tarefaRepository.existsById(id)) {
			return ResponseEntity.notFound().build();
		}
		tarefaRepository.deleteById(id);
		return ResponseEntity.noContent().build();
	}
	
}
