package com.spring.restaurant.controller;

import com.spring.restaurant.model.Order;
import com.spring.restaurant.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class OrderController {
    private OrderService orderService;

    @Autowired
    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }


    // http://localhost:8080/api/allOrders
    @GetMapping("/api/allOrders")
    public List<Order> allOrders(){
        return orderService.getAllOrders();
    }
}
