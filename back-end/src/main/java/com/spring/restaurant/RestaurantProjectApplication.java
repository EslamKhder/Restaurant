package com.spring.restaurant;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableAsync;

@SpringBootApplication
@EnableAsync
public class RestaurantProjectApplication {

    public static void main(String[] args) {
        SpringApplication.run(RestaurantProjectApplication.class, args);
    }

}