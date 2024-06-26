package com.reactnative.todolistAPI.service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.reactnative.todolistAPI.exception.NotFoundException;
import com.reactnative.todolistAPI.model.Tarefa;
import com.reactnative.todolistAPI.model.Usuario;
import com.reactnative.todolistAPI.repository.TarefaRepository;
import com.reactnative.todolistAPI.repository.UsuarioRepository;

import jakarta.transaction.Transactional;

@Service
public class TarefaService {

	@Autowired
	private TarefaRepository tarefaRepository;

	@Autowired
	private UsuarioRepository usuarioRepository;

	public List<Tarefa> findAll() {
		List<Tarefa> tarefas = tarefaRepository.findAll();
		return tarefas;
	}

	public Tarefa findById(Long id) throws NotFoundException {
		Optional<Tarefa> tarefaOpt = tarefaRepository.findById(id);
		if (tarefaOpt.isEmpty()) {
			throw new NotFoundException();
		}
		return tarefaOpt.get();
	}

	public List<Tarefa> getTarefasByAutorId(Long id) {
		return tarefaRepository.findByAutorId(id);
	}

	@Transactional
	public Tarefa insert(Tarefa tarefa) throws NotFoundException {
		Optional<Usuario> UsuarioOpt = usuarioRepository.findById(tarefa.getAutor().getId());
		if (UsuarioOpt.isEmpty()) {
			throw new NotFoundException();
		}
		tarefaRepository.save(tarefa);
		return tarefa;
	}

	@Transactional
	public Tarefa change(Tarefa tarefaAlterar, Tarefa tarefaTemp) {
		Tarefa tarefaObj = new Tarefa();

		tarefaObj.setId(tarefaAlterar.getId());
		tarefaObj.setDataModificacao(LocalDate.now());
		tarefaObj.setDataCriacao(tarefaTemp.getDataCriacao());
		tarefaObj.setAutor(tarefaTemp.getAutor());
		tarefaObj.setTitulo(tarefaAlterar.getTitulo());
		tarefaObj.setDescricao(tarefaAlterar.getDescricao());

		tarefaRepository.save(tarefaObj);

		return tarefaObj;
	}
}
