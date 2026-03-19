package app.controller;

import app.config.TokenConfig;
import app.dto.request.LoginRequest;
import app.dto.request.RegisterUserRequest;
import app.dto.response.LoginResponse;
import app.dto.response.RegisterUserResponse;
import app.entity.User;
import app.repository.UserRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@CrossOrigin("*")
public class AuthController {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private TokenConfig tokenConfig;

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(@Valid @RequestBody LoginRequest request){

        UsernamePasswordAuthenticationToken userAndPassword = new UsernamePasswordAuthenticationToken(request.username(),request.password());
        Authentication authentication = authenticationManager.authenticate(userAndPassword);

        User user = (User) authentication.getPrincipal();
        String token = this.tokenConfig.generateToken(user);
        return ResponseEntity.ok(new LoginResponse(token));

    }
    @PostMapping("/register")
    public ResponseEntity<RegisterUserResponse> register (@Valid @RequestBody RegisterUserRequest request){
        User user = new User();
        user.setUsername(request.username());
        user.setPassword(passwordEncoder.encode(request.password()));

        this.userRepository.save(user);

        return new ResponseEntity<RegisterUserResponse>(new RegisterUserResponse(user.getUsername()),HttpStatus.OK);
    }
}
