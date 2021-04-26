package com.spring.restaurant.model;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Data
@NoArgsConstructor
@Entity
@Table(name = "category")
public class Client extends PublicData{

    @Column(name = "email")
    private String email;

    @Column(name = "phone_number")
    private String phoneNumber;


}
