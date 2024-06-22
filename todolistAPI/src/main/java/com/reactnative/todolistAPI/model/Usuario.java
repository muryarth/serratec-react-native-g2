package com.reactnative.todolistAPI.model;

import java.time.LocalDate;
import java.util.List;
import java.util.Objects;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

@Entity
@Table(name = "usuarios")
public class Usuario {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_usuario")
	@Schema(description = "Identificador unico de usuario")
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

	@OneToMany(mappedBy = "autor", cascade = CascadeType.ALL)
	@JsonManagedReference
	@Schema(description = "Tarefas relacionadas")
	private List<Tarefa> tarefas;

	public Usuario() {
	}

	public Usuario(Long id, String username, String password, LocalDate dataCriacao, List<Tarefa> tarefas) {
		super();
		this.id = id;
		this.username = username;
		this.password = password;
		this.dataCriacao = dataCriacao;
		this.tarefas = tarefas;
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

	public LocalDate getDataCriacao() {
		return dataCriacao;
	}

	public List<Tarefa> getTarefas() {
		return tarefas;
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

	public void setDataCriacao(LocalDate dataCriacao) {
		this.dataCriacao = dataCriacao;
	}

	public void setTarefas(List<Tarefa> tarefas) {
		this.tarefas = tarefas;
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
		Usuario other = (Usuario) obj;
		return Objects.equals(id, other.id) && Objects.equals(username, other.username);
	}
}
