package media.kapital.librarybackend.services.impl;

import media.kapital.librarybackend.model.Token;
import media.kapital.librarybackend.services.TokenService;
import org.springframework.stereotype.Service;

@Service
public class TokenServiceImpl implements TokenService
{
    @Override
    public Token getToken()
    {
        Token token = new Token("Hello token");
        return token;
    }
}
