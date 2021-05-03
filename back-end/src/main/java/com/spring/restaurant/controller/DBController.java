package com.spring.restaurant.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

//localhost:8080
@RestController
@RequestMapping("/me")
//localhost:8080/me
public class DBController {

    //localhost:8080/me/data
    @GetMapping("/data")
    public String getData(){
        return "My Data";
    }
}
