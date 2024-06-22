package com.reactnative.todolistAPI.dto;

import java.time.LocalDate;

import com.reactnative.todolistAPI.model.Usuario;

public class UsuarioDTO {

	private Long id;
	
	private String username;
	
	private LocalDate dataCriacao;

	public UsuarioDTO() {
	}

	public UsuarioDTO(Long id, String username, LocalDate dataCricao) {
		super();
		this.id = id;
		this.username = username;
		this.dataCriacao = dataCricao;
	}
	
	public UsuarioDTO(Usuario usuario) {
		this.id = usuario.getId();
		this.username = usuario.getUsername();
		this.dataCriacao = usuario.getDataCriacao();
	}

	public Long getId() {
		return id;
	}

	public String getUsername() {
		return username;
	}

	public LocalDate getDataCriacao() {
		return dataCriacao;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public void setDataCriacao(LocalDate dataCriacao) {
		this.dataCriacao = dataCriacao;
	}
}
