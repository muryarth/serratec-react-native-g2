package com.reactnative.todolistAPI.model;

import java.time.LocalDate;
import java.util.Objects;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

@Entity
@Table(name = "login")
public class Login {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Email
	@NotBlank(message = "Preencha o email!")
	@Column(nullable = false)
	@Schema(description = "Email do usuario")
	private String username;

	@NotBlank(message = "Preencha a senha!")
	@Column(nullable = false)
	@Schema(description = "Senha do usuario")
	private String password;

	@Column(name = "data_criacao")
	@Schema(description = "Data de criação do cadastro")
	@Temporal(TemporalType.DATE)
	private LocalDate dataCriacao;

	public Login() {

	}

	public Login(Long id, String username, String password, LocalDate dataCriacao) {
		super();
		this.id = id;
		this.username = username;
		this.password = password;
		this.dataCriacao = dataCriacao;
	}

	public Long getId() {
		return id;
	}

	public String getUsername() {
		return username;
	}

	public String getPassword() {
		return password;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public LocalDate getDataCriacao() {
		return dataCriacao;
	}

	public void setDataCriacao(LocalDate dataCriacao) {
		this.dataCriacao = dataCriacao;
	}

	@Override
	public int hashCode() {
		return Objects.hash(id, username);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Login other = (Login) obj;
		return Objects.equals(id, other.id) && Objects.equals(username, other.username);
	}
}
