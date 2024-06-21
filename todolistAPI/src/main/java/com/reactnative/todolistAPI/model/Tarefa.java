package com.reactnative.todolistAPI.model;

import java.time.LocalDate;

public class Tarefa {
	
	private Long id;

	private String titulo;
	
	private String descricao;
	
	private LocalDate dataCricao;
	
	private LocalDate dataModificacao;
	
	private Usuario autor;
	
}
