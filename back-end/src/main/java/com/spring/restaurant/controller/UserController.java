package com.spring.restaurant.controller;

import com.spring.restaurant.config.springsecurty.jwt.JwtAuthenticationFilter;
import com.spring.restaurant.dto.JwtLogin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
// http://localhost:8080
@RestController
@RequestMapping
// http://localhost:8080/
public class UserController {

    private JwtAuthenticationFilter jwtAuthenticationFilter;

    @Autowired
    public UserController(JwtAuthenticationFilter jwtAuthenticationFilter) {
        this.jwtAuthenticationFilter = jwtAuthenticationFilter;
    }

    // http://localhost:8080/login
    @PostMapping("/signin")
    public String logIn(@RequestBody JwtLogin jwtLogin){
        return jwtAuthenticationFilter.login(jwtLogin);
    }
}
