package com.spring.restaurant.model;

import lombok.*;

import javax.persistence.Column;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class BaseEntity {
    @Column(name = "id")
    private Long id;

}
