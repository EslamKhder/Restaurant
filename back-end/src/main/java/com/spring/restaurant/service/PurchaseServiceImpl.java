package com.spring.restaurant.service;

import com.spring.restaurant.deo.ClientRepository;
import com.spring.restaurant.dto.PurchaseRequest;
import com.spring.restaurant.dto.PurchaseResponse;
import com.spring.restaurant.model.Item;
import com.spring.restaurant.model.RequestOrder;
import com.spring.restaurant.util.Code;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.UUID;

@Service
public class PurchaseServiceImpl implements PurchaseService{

    private ClientRepository clientRepository;
    private Code code;

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
        String myCode = code.getCode();
        requestOrder.setCode(myCode);

        /* #3 */
        List<Item> items = purchases.getItems();
        items.forEach(item -> requestOrder.addItem(item));

        /* #4 */
        requestOrder.setFromAddress(purchases.getFromAddress());
        requestOrder.setToAddress(purchases.getToAddress());

        /* #5 */
        purchases.getClient().addRequestOrder(requestOrder);

        clientRepository.save(purchases.getClient());

        return new PurchaseResponse(purchases.getClient().getName(),myCode);
    }


}
