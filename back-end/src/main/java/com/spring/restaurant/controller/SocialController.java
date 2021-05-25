package com.spring.restaurant.controller;

import com.google.api.client.googleapis.auth.oauth2.GoogleIdToken;
import com.google.api.client.googleapis.auth.oauth2.GoogleIdTokenVerifier;
import com.google.api.client.http.javanet.NetHttpTransport;
import com.google.api.client.json.jackson2.JacksonFactory;
import com.spring.restaurant.dto.TokenDto;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.social.facebook.api.Facebook;
import org.springframework.social.facebook.api.User;
import org.springframework.social.facebook.api.impl.FacebookTemplate;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.util.Collections;

// http://localhost:8080
@RestController
@RequestMapping("/social")
// http://localhost:8080/social
public class SocialController {

    @Value("google.id")
    private String idClient;

    //http://localhost:8080/social/google
    @PostMapping("/google")
    public ResponseEntity<?> loginWithGoogle(@RequestBody TokenDto tokenDto) throws IOException {
        NetHttpTransport transport = new NetHttpTransport();
        JacksonFactory factory = JacksonFactory.getDefaultInstance();
        GoogleIdTokenVerifier.Builder ver =
                new GoogleIdTokenVerifier.Builder(transport,factory)
                        .setAudience(Collections.singleton(idClient));
        GoogleIdToken googleIdToken = GoogleIdToken.parse(ver.getJsonFactory(),tokenDto.getToken());
        GoogleIdToken.Payload payload = googleIdToken.getPayload();
        return new ResponseEntity<>(payload, HttpStatus.OK);
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
