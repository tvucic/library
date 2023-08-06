package media.kapital.librarybackend.controllers;

import media.kapital.librarybackend.model.Token;
import media.kapital.librarybackend.services.TokenService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginController
{

    private final TokenService tokenService;

    public LoginController(TokenService tokenService)
    {
        this.tokenService = tokenService;
    }

    @GetMapping("/login")
    public ResponseEntity<Object> getToken()
    {
        try
        {
            Token token = tokenService.getToken();

            return new ResponseEntity<>(token, HttpStatus.OK);
        }
        catch (Exception e)
        {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }
}
