package com.reactnative.todolistAPI.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister.NotFoundException;
import org.springframework.stereotype.Service;

import com.reactnative.todolistAPI.model.Login;
import com.reactnative.todolistAPI.repository.LoginRepository;

import jakarta.transaction.Transactional;

@Service
public class LoginService {

	@Autowired
	private LoginRepository loginRepository;

	public List<Login> findAll() {
		List<Login> logins = loginRepository.findAll();

		return logins;
	}

	public Login findById(long id) throws NotFoundException {
		Optional<Login> loginOpt = loginRepository.findById(id);
		if (loginOpt.isEmpty()) {
			throw new NotFoundException();
		}
		return loginOpt.get();
	}

	public Login findByEmail(String username) throws NotFoundException {
		Optional<Login> loginOpt = loginRepository.findByUsername(username);
		if (loginOpt.isEmpty()) {
			throw new NotFoundException();
		}
		return loginOpt.get();
	}

	public String verifyLogin(Login login) {
		Optional<Login> loginOpt = loginRepository.findByUsername(login.getUsername());
		if (loginOpt.isPresent() && ((login.getPassword()).equals(loginOpt.get().getPassword()))) {
			System.out.println("Login Realizado: " + login.getUsername());
			return "Login com sucesso!";
		}
		return null;
	}

	@Transactional
	public void insert(Login login) {
		loginRepository.save(login);
		System.out.println("Cadastro Realizado: " + login.getUsername());
	}
}