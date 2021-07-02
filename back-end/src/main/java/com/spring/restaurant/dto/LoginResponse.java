package com.spring.restaurant.dto;

import lombok.Data;

@Data
public class LoginResponse {

    private String email;
    private String token;
}
