package com.reactnative.todolistAPI.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.reactnative.todolistAPI.model.Login;
import com.reactnative.todolistAPI.repository.LoginRepository;
import com.reactnative.todolistAPI.service.LoginService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/login")
public class LoginController {

	@Autowired
	private LoginService loginService;

	@Autowired
	private LoginRepository loginRepository;

	@PostMapping
	public ResponseEntity<String> login(@RequestBody Login login) {
		String valid = loginService.verifyLogin(login);
		if (valid != null) {
			return ResponseEntity.ok(valid);
		} else {
			System.out.println("Cadastro não encontrado: " + login.getUsername());
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Email ou senha invalidos!");
		}
	}

	@PostMapping("/cadastrar")
	public ResponseEntity<String> cadastrar(@Valid @RequestBody Login login) {
		Optional<Login> loginBd = loginRepository.findByUsername(login.getUsername());
		if (loginBd.isPresent()) {
			return ResponseEntity.badRequest().body("Email já cadastrado!");
		}

		loginService.insert(login);
		return ResponseEntity.ok("Cadastrado com sucesso!");
	}
}
