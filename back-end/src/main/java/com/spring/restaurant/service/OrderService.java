package com.spring.restaurant.service;

import com.spring.restaurant.deo.OrderRepository;
import com.spring.restaurant.model.Order;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderService {

    private OrderRepository orderRepository;

    @Autowired
    public OrderService(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    public List<Order> getAllOrders(int page,int size){
        Pageable pageable = PageRequest.of(page,size);
        return orderRepository.findAll(pageable).getContent();
    }

    public List<Order> getOrdersByIdCategories(Long id,int page,int size){
        Pageable pageable = PageRequest.of(page,size);
        return orderRepository.findByCategoryId(id,pageable).getContent();
    }

    public List<Order> getOrdersByKey(String key,int page,int size){
        Pageable pageable = PageRequest.of(page,size);
        return orderRepository.findByNameContaining(key,pageable).getContent();
    }

    public Order getOrder(Long id){
        return orderRepository.findById(id).get();
    }

    public long getAllOrdersSize(){
        return orderRepository.count();
    }

    public long getOrdersByCategoryIdLength(Long id){
        return orderRepository.getOrderLengthByCategoryId(id);
    }
}
