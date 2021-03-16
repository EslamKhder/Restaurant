package com.spring.restaurant.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;

// Id
// name
@Data
@NoArgsConstructor
@AllArgsConstructor
public class CategoryOrder extends BaseEntity{
    @Column(name = "name")
    private String name;
}
