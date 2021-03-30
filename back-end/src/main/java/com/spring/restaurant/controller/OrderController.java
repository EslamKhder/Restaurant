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


    // http://localhost:8080/api/allOrders?page={value}&size={value}
    @GetMapping("allOrders")
    public List<Order> allOrders(@RequestParam int page,@RequestParam int size){
        return orderService.getAllOrders(page,size);
    }

    // http://localhost:8080/api/category?id={value}&page={value}&size={value}
    @GetMapping("category")
    public List<Order> getAllOrderByCategoryId(@RequestParam Long id,@RequestParam int page,@RequestParam int size){
        return orderService.getOrdersByIdCategories(id,page,size);
    }

    // http://localhost:8080/api/orderkey?word=key&page={value}&size={value}
    @GetMapping("orderkey")
    public List<Order> getOrdersByKey(@RequestParam String word,@RequestParam int page,@RequestParam int size){
        return orderService.getOrdersByKey(word,page,size);
    }

    // http://localhost:8080/api/order?id={value}
    @GetMapping("order")
    public Order getOrderById(@RequestParam Long id){
        return orderService.getOrder(id);
    }

    // http://localhost:8080/api/orderSize
    @GetMapping("orderSize")
    public long orderSize(){
        return orderService.getAllOrdersSize();
    }
    // http://localhost:8080/api/ctegoryidsize?id={value}
    @GetMapping("ctegoryidsize")
    public long getOrdersByIdCategorySize(@RequestParam Long id){
        return orderService.getOrdersByCategoryIdLength(id);
    }

    // http://localhost:8080/api/keysize?key={value}
    @GetMapping("keysize")
    public long sizeOfOrderByKey(@RequestParam String key){
        return orderService.getOrderSizeByKey(key);
    }

    // http://localhost:8080/api/category/id
    /*@GetMapping("/api/category/{id}")
    public List<Order> getAllOrderByCategoryId(@PathVariable Long id){
        return orderService.getOrdersByIdCategories(id);
    }*/
}
