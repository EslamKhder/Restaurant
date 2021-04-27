package com.spring.restaurant.dto;

import com.spring.restaurant.model.Address;
import com.spring.restaurant.model.Client;
import com.spring.restaurant.model.Item;
import com.spring.restaurant.model.RequestOrder;
import lombok.Data;

import java.util.HashSet;
import java.util.Set;

@Data
public class PurchaseRequest {

    private Client client;
    private RequestOrder requestOrder;
    private Set<Item> items = new HashSet<>();
    private Address fromAddress;
    private Address toAddress;

}