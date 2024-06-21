package com.reactnative.todolistAPI.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.reactnative.todolistAPI.model.Usuario;
import com.reactnative.todolistAPI.repository.UsuarioRepository;
import com.reactnative.todolistAPI.service.UsuarioService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/login")
public class UsuarioController {

	@Autowired
	private UsuarioService usuarioService;

	@Autowired
	private UsuarioRepository usuarioRepository;

	@PostMapping
	public ResponseEntity<String> login(@RequestBody Usuario usuario) {
		String valid = usuarioService.verifyLogin(usuario);
		if (valid != null) {
			return ResponseEntity.ok(valid);
		} else {
			System.out.println("Cadastro não encontrado: " + usuario.getUsername());
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Email ou senha invalidos!");
		}
	}

	@PostMapping("/cadastrar")
	public ResponseEntity<String> cadastrar(@Valid @RequestBody Usuario usuario) {
		Optional<Usuario> loginBd = usuarioRepository.findByUsername(usuario.getUsername());
		if (loginBd.isPresent()) {
			return ResponseEntity.badRequest().body("Email já cadastrado!");
		}

		usuarioService.insert(usuario);
		return ResponseEntity.ok("Cadastrado com sucesso!");
	}
}
