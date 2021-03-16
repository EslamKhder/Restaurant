package com.spring.restaurant.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

// Id
// name
@Data
@NoArgsConstructor
@AllArgsConstructor
public class CategoryOrder extends BaseEntity{
    private String name;
}
