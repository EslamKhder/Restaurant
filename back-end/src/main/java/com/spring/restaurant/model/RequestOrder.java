package com.spring.restaurant.model;


import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Lob;
import javax.persistence.Table;

@Data
@NoArgsConstructor
@Entity
@Table(name = "request_order")
public class RequestOrder extends CategoryOrder{

    @Column(name = "code")
    private String code;

    @Column(name = "note")
    @Lob
    private String note;

    @Column(name = "total_price")
    private int totalPrice;

    @Column(name = "total_quantity")
    private int totalQuantity;

}
