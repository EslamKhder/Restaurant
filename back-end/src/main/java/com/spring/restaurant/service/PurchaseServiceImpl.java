package com.spring.restaurant.service;

import com.spring.restaurant.deo.ClientRepository;
import com.spring.restaurant.dto.PurchaseRequest;
import com.spring.restaurant.dto.PurchaseResponse;
import com.spring.restaurant.model.RequestOrder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashSet;
import java.util.Set;
import java.util.UUID;

@Service
public class PurchaseServiceImpl implements PurchaseService{

    private ClientRepository clientRepository;

    @Autowired
    public PurchaseServiceImpl(ClientRepository clientRepository) {
        this.clientRepository = clientRepository;
    }

    @Override
    @Transactional
    public PurchaseResponse addRequestOrder(PurchaseRequest purchases) {
        /* #1 */
        RequestOrder requestOrder = purchases.getRequestOrder();
        /* #2 */
        String myCode = getCode();
        requestOrder.setCode(myCode);

        /* #3 */
        requestOrder.setItems(purchases.getItems());
        purchases.getItems().forEach(item -> item.setRequestOrder(requestOrder));

        /* #4 */
        requestOrder.setFromAddress(purchases.getFromAddress());
        requestOrder.setToAddress(purchases.getToAddress());

        /* #5 */
        Set<RequestOrder> requestOrders = new HashSet<>();
        requestOrders.add(requestOrder);
        purchases.getClient().setRequestOrders(requestOrders);
        requestOrder.setClient(purchases.getClient());

        clientRepository.save(purchases.getClient());

        return new PurchaseResponse(purchases.getClient().getName(),myCode);
    }

    private String getCode() {
        return UUID.randomUUID().toString();
    }
}
