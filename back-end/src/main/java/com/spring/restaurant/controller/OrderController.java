package com.spring.restaurant.controller;

import com.spring.restaurant.model.Order;
import com.spring.restaurant.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

// http://localhost:8080/api/

@RestController
@CrossOrigin("http://localhost:4200")
@RequestMapping("/api/")
public class OrderController {
    private OrderService orderService;

    @Autowired
    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }


    // http://localhost:8080/api/allOrders
    @GetMapping("allOrders")
    public List<Order> allOrders(){
        return orderService.getAllOrders();
    }

    // http://localhost:8080/api/category?id={value}
    @GetMapping("category")
    public List<Order> getAllOrderByCategoryId(@RequestParam Long id){
        return orderService.getOrdersByIdCategories(id);
    }

    // http://localhost:8080/api/orderkey?word=key
    @GetMapping("orderkey")
    public List<Order> getOrdersByKey(@RequestParam String word){
        return orderService.getOrdersByKey(word);
    }

    // http://localhost:8080/api/category/id
    /*@GetMapping("/api/category/{id}")
    public List<Order> getAllOrderByCategoryId(@PathVariable Long id){
        return orderService.getOrdersByIdCategories(id);
    }*/
}
