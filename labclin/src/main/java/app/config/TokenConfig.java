package app.config;

import app.entity.User;
import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTVerificationException;
import com.auth0.jwt.interfaces.DecodedJWT;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.time.Instant;
import java.util.Optional;

@Component
public class TokenConfig {

    @Value("${api.security.token.secret}")
    private String secret = "token";

    public String generateToken(User user){

        Algorithm algorithm = Algorithm.HMAC256(secret);
        return JWT.create()
                .withClaim("userID",user.getId())
                .withSubject(user.getUsername())
                .withExpiresAt(Instant.now().plusSeconds(14400))
                .withIssuedAt(Instant.now())
                .sign(algorithm);
    }
    public Optional<JWTUserData> validateToken(String token){
        try {

            Algorithm algorithm = Algorithm.HMAC256(secret);
            DecodedJWT decodedJWT = JWT.require(algorithm)
                    .build().verify(token);

            return Optional.of(JWTUserData.builder()
                    .userId(decodedJWT.getClaim("userId").asLong())
                    .username(decodedJWT.getSubject())
                    .build());
        }catch (JWTVerificationException e){
            return Optional.empty();
        }
    }
}
