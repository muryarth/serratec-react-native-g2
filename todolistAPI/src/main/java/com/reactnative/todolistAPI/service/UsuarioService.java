package com.reactnative.todolistAPI.service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister.NotFoundException;
import org.springframework.stereotype.Service;

import com.reactnative.todolistAPI.dto.LoginDTO;
import com.reactnative.todolistAPI.model.Usuario;
import com.reactnative.todolistAPI.repository.UsuarioRepository;

import jakarta.transaction.Transactional;

@Service
public class UsuarioService {

	@Autowired
	private UsuarioRepository usuarioRepository;

	public List<Usuario> findAll() {
		List<Usuario> logins = usuarioRepository.findAll();

		return logins;
	}

	public Usuario findById(long id) throws NotFoundException {
		Optional<Usuario> loginOpt = usuarioRepository.findById(id);
		if (loginOpt.isEmpty()) {
			throw new NotFoundException();
		}
		return loginOpt.get();
	}

	public Usuario findByEmail(String username) throws NotFoundException {
		Optional<Usuario> loginOpt = usuarioRepository.findByUsername(username);
		if (loginOpt.isEmpty()) {
			throw new NotFoundException();
		}
		return loginOpt.get();
	}

	public LoginDTO verifyLogin(Usuario usuario) {
		Optional<Usuario> loginOpt = usuarioRepository.findByUsername(usuario.getUsername());
		if (loginOpt.isPresent() && ((usuario.getPassword()).equals(loginOpt.get().getPassword()))) {
			System.out.println("Login Realizado: " + usuario.getUsername());
			return new LoginDTO(loginOpt.get().getId(), "Login com sucesso!");
		}
		return null;
	}

	@Transactional
	public void insert(Usuario usuario) {
		usuario.setDataCriacao(LocalDate.now());
		usuarioRepository.save(usuario);
		System.out.println("Cadastro Realizado: " + usuario.getUsername());
	}
}