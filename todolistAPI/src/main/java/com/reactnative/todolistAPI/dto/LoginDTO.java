package com.reactnative.todolistAPI.dto;

public class LoginDTO {

	private Long usuarioId;
	
	private String mensagem;

	public LoginDTO(Long usuarioId, String mensagem) {
		this.usuarioId = usuarioId;
		this.mensagem = mensagem;
	}

	public Long getUsuarioId() {
		return usuarioId;
	}

	public String getMensagem() {
		return mensagem;
	}

	public void setUsuarioId(Long usuarioId) {
		this.usuarioId = usuarioId;
	}

	public void setMensagem(String mensagem) {
		this.mensagem = mensagem;
	}
}
