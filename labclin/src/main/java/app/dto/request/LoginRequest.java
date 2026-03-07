package app.dto.request;

import jakarta.validation.constraints.NotEmpty;

public record LoginRequest(@NotEmpty(message = "username obrigatório") String username, @NotEmpty(message = "password obrigatória") String password) {
}
