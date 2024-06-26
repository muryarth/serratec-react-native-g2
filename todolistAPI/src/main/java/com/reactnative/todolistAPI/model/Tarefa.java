package com.reactnative.todolistAPI.model;

import java.time.LocalDate;
import java.util.Objects;

import com.fasterxml.jackson.annotation.JsonBackReference;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

@Entity
@Table(name = "tarefas")
public class Tarefa {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_tarefa")
	@Schema(description = "Identificador unico da tarefa")
	private Long id;

	@NotBlank(message = "Preencha o titulo da tarefa")
	@Size(max = 100, message = "Tamanho máximo de {max} caracteres")
	@Column(nullable = false, length = 100)
	@Schema(description = "Titulo da tarefa")
	private String titulo;

	@NotBlank(message = "Preencha a descrição da tarefa")
	@Size(max = 300, message = "Tamanho máximo de {max} caracteres")
	@Column(nullable = false, length = 300)
	@Schema(description = "Descrição da tarefa")
	private String descricao;

	@Column(name = "data_criacao")
	@Temporal(TemporalType.DATE)
	@Schema(description = "Data de criacao da tarefa")
	private LocalDate dataCriacao;

	@Column(name = "data_modificacao")
	@Temporal(TemporalType.DATE)
	@Schema(description = "Data de modificacao da tarefa")
	private LocalDate dataModificacao;

	@NotNull(message = "Autor não pode ser vazio!")
	@ManyToOne
	@JsonBackReference
	@JoinColumn(name = "id_autor")
	@Schema(description = "Autor da tarefa")
	private Usuario autor;

	public Tarefa() {
	}

	public Tarefa(Long id, String titulo, String descricao, LocalDate dataCriacao, LocalDate dataModificacao,
			Usuario autor) {
		super();
		this.id = id;
		this.titulo = titulo;
		this.descricao = descricao;
		this.dataCriacao = dataCriacao;
		this.dataModificacao = dataModificacao;
		this.autor = autor;
	}

	public Long getId() {
		return id;
	}

	public String getTitulo() {
		return titulo;
	}

	public String getDescricao() {
		return descricao;
	}

	public LocalDate getDataCriacao() {
		return dataCriacao;
	}

	public LocalDate getDataModificacao() {
		return dataModificacao;
	}

	public Usuario getAutor() {
		return autor;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public void setDataCriacao(LocalDate dataCriacao) {
		this.dataCriacao = dataCriacao;
	}

	public void setDataModificacao(LocalDate dataModificacao) {
		this.dataModificacao = dataModificacao;
	}

	public void setAutor(Usuario autor) {
		this.autor = autor;
	}

	@Override
	public int hashCode() {
		return Objects.hash(id);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Tarefa other = (Tarefa) obj;
		return Objects.equals(id, other.id);
	}
}
