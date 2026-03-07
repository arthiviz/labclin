package app.dto.request;

import jakarta.validation.constraints.NotEmpty;

public record RegisterUserRequest(@NotEmpty(message = "username obrigatorio") String username, @NotEmpty(message = "senha obrigatoria") String password) {
}
