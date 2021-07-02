package com.spring.restaurant.controller;

import com.google.api.client.googleapis.auth.oauth2.GoogleIdToken;
import com.google.api.client.googleapis.auth.oauth2.GoogleIdTokenVerifier;
import com.google.api.client.http.javanet.NetHttpTransport;
import com.google.api.client.json.jackson2.JacksonFactory;
import com.spring.restaurant.dto.JwtLogin;
import com.spring.restaurant.dto.LoginResponse;
import com.spring.restaurant.dto.TokenDto;
import com.spring.restaurant.model.Authorities;
import com.spring.restaurant.service.AuthoritiesService;
import com.spring.restaurant.service.TokenService;
import com.spring.restaurant.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.social.facebook.api.Facebook;
import org.springframework.social.facebook.api.User;
import org.springframework.social.facebook.api.impl.FacebookTemplate;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.util.Collections;
import java.util.List;

// http://localhost:8080
@RestController
@RequestMapping("/social")
// http://localhost:8080/social
public class SocialController {

    @Value("google.id")
    private String idClient;

    private UserService userService;
    private AuthoritiesService authoritiesService;
    private TokenService tokenService;
    private PasswordEncoder passwordEncoder;

    @Autowired
    public SocialController(UserService userService, AuthoritiesService authoritiesService, TokenService tokenService, PasswordEncoder passwordEncoder) {
        this.userService = userService;
        this.authoritiesService = authoritiesService;
        this.tokenService = tokenService;
        this.passwordEncoder = passwordEncoder;
    }

    //http://localhost:8080/social/google
    @PostMapping("/google")
    public LoginResponse loginWithGoogle(@RequestBody TokenDto tokenDto) throws IOException {
        NetHttpTransport transport = new NetHttpTransport();
        JacksonFactory factory = JacksonFactory.getDefaultInstance();
        GoogleIdTokenVerifier.Builder ver =
                new GoogleIdTokenVerifier.Builder(transport,factory)
                        .setAudience(Collections.singleton(idClient));
        GoogleIdToken googleIdToken = GoogleIdToken.parse(ver.getJsonFactory(),tokenDto.getToken());
        GoogleIdToken.Payload payload = googleIdToken.getPayload();
        boolean result = userService.ifEmailExist(payload.getEmail()); // t   // f
        LoginResponse loginResponse = new LoginResponse();
        if(!result){
            com.spring.restaurant.model.User user = new com.spring.restaurant.model.User();
            user.setEmail(payload.getEmail());
            user.setPassword(passwordEncoder.encode("kasdjhfkadhsY776ggTyUU65khaskdjfhYuHAwjñlji"));
            user.setActive(1);
            List<Authorities> authorities = authoritiesService.getAuthorities();
            user.getAuthorities().add(authorities.get(0));
            userService.addUser(user);
        }
        JwtLogin jwtLogin = new JwtLogin();
        jwtLogin.setEmail(payload.getEmail());
        jwtLogin.setPassword("kasdjhfkadhsY776ggTyUU65khaskdjfhYuHAwjñlji");
        loginResponse = tokenService.login(jwtLogin);
        return loginResponse;
    }
    //http://localhost:8080/social/facebook
    @PostMapping("/facebook")
    public ResponseEntity<?> loginWithFacebook(@RequestBody TokenDto tokenDto){
        Facebook facebook = new FacebookTemplate(tokenDto.getToken());
        String [] data = {"email","name","picture"};
        User user = facebook.fetchObject("me",User.class,data);
        return new ResponseEntity<>(user,HttpStatus.OK);
    }
}
